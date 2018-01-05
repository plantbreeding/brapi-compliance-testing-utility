package org.brapi.brapiCertificationServer.service;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import org.brapi.brapiCertificationServer.model.test.TestCall;
import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.UseCaseResult;
import org.brapi.brapiCertificationServer.model.test.UseCaseResultList;
import org.brapi.brapiCertificationServer.model.test.CallDefinition;
import org.brapi.brapiCertificationServer.model.test.RunUseCasesRequest;
import org.brapi.brapiCertificationServer.model.test.TestResult;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResults;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultsDataList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@EnableAutoConfiguration
public class TestRunnerService {
	private MongoTemplate mongoTemplate;
	private DiffAssessmentService diffAssessmentService;
	private TestResultsService testResultsService;
	private CallDefinitionService callDefinitionService;

	@Autowired
	public TestRunnerService(MongoTemplate mongoTemplate, DiffAssessmentService diffAssessmentService,
			TestResultsService testResultsService, CallDefinitionService callDefinitionService) {
		this.mongoTemplate = mongoTemplate;
		this.diffAssessmentService = diffAssessmentService;
		this.testResultsService = testResultsService;
		this.callDefinitionService = callDefinitionService;
	}

	@Async
	public void runTests(RunUseCasesRequest request, String batchID) {
		initResultsList(request.getTestCaseIds().size(), batchID);

		for (String id : request.getTestCaseIds()) {
			UseCaseResultList results = testResultsService.getResults(batchID);

			UseCase useCase = getTest(id);
			UseCaseResult useCaseResult = new UseCaseResult();
			useCaseResult.setBatchID(batchID);
			useCaseResult.setBaseURL(request.getBaseURL());
			useCaseResult.setPass(true);
			useCaseResult.setUseCase(useCase);
			useCaseResult.setResults(new ArrayList<>());

			try {
				for (TestCall test : useCase.getTests()) {
					TestResult result = new TestResult();
					try {
						result = runTest(test, request.getBaseURL());
					} catch (Exception e) {
						result.setErrorMsg(e.getMessage());
						result.setPass(false);
					} finally {
						useCaseResult.setPass(useCaseResult.isPass() && result.isPass());
						useCaseResult.getResults().add(result);
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				results.getResults().add(useCaseResult);
				results.setComplete(results.getComplete() + 1);
				testResultsService.storeResult(results);
			}
		}
	}

	private void initResultsList(int total, String batchID) {
		UseCaseResultList results = new UseCaseResultList();
		results.setBatchID(batchID);
		results.setComplete(0);
		results.setTotal(total);
		results.setResults(new ArrayList<>());
		testResultsService.storeResult(results);
	}

	private TestResult runTest(TestCall test, String baseURL) throws TestRunnerException {
		CallDefinition callDef = callDefinitionService.getCallDefinition(test.getCallDefinitionID());

		GenericResults<?> expected = getExpected(test, callDef);
		GenericResults<?> actual = getActual(test, callDef, baseURL);

		TestResult result = compare(expected, actual);

		result.setRawExpected(getRawObject(expected));
		result.setRawActual(getRawObject(actual));

		return result;
	}

	private String getRawObject(GenericResults<?> obj) throws TestRunnerException {
		ObjectMapper mapper = new ObjectMapper();
		String ret = null;
		try {
			ret = mapper.writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			throw new TestRunnerException(e);
		}
		return ret;
	}

	private TestResult compare(GenericResults<?> expected, GenericResults<?> actual) {
		TestResult result = new TestResult();

		List<String> diffList = diffAssessmentService.compareObjects(actual, expected);

		if (diffList.isEmpty()) {
			result.setPass(true);
			result.setErrorMsg("PASS");
		} else {
			result.setPass(false);
			result.setDiffList(diffList);
			result.setErrorMsg("FAIL: Diff detected between Expected and Actual");
		}
		return result;
	}

	private GenericResults<?> rawJsonToResults(String json, String type, boolean typeHasList) {
		GenericResults<?> expected = null;
		try {
			ObjectMapper mapper = new ObjectMapper();

			Class<?> returnType = Class.forName(type);

			JavaType javaType = null;
			if (typeHasList) {
				javaType = mapper.getTypeFactory().constructParametricType(GenericResults.class,
						mapper.getTypeFactory().constructParametricType(GenericResultsDataList.class, returnType));
			} else {
				javaType = mapper.getTypeFactory().constructParametricType(GenericResults.class, returnType);
			}

			expected = mapper.readValue(json, javaType);

		} catch (IOException | ClassNotFoundException e) {
			e.printStackTrace();
		}
		return expected;
	}

	private GenericResults<?> getExpected(TestCall test, CallDefinition callDef) {
		return rawJsonToResults(test.getExpectedResultRaw(), callDef.getExpectedReturnType(),
				callDef.isExpectedReturnTypeHasList());
	}

	private GenericResults<?> getActual(TestCall test, CallDefinition callDef, String baseURL) {
		RestTemplate restTemplate = new RestTemplate();
		URI url = buildURL(baseURL, test.getCallPath());
		ResponseEntity<String> actualEntity = restTemplate.getForEntity(url, String.class);

		System.out.println(actualEntity.getStatusCodeValue());

		String actualRaw = actualEntity.getBody();

		return rawJsonToResults(actualRaw, callDef.getExpectedReturnType(), callDef.isExpectedReturnTypeHasList());
	}

	private URI buildURL(String baseURL, String testCall) {
		return URI.create(baseURL + testCall);
	}

	public List<UseCase> getTests() {
		return mongoTemplate.findAll(UseCase.class, MongoUtility.USE_CASE_COLLECTION);
	}

	private UseCase getTest(String id) {
		return mongoTemplate.findById(id, UseCase.class, MongoUtility.USE_CASE_COLLECTION);
	}

}
