package org.brapi.brapiCertificationServer.service;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import org.brapi.brapiCertificationServer.model.test.TestCall;
import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.UseCaseResult;
import org.brapi.brapiCertificationServer.model.test.RunUseCasesRequest;
import org.brapi.brapiCertificationServer.model.test.TestResult;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@EnableAutoConfiguration
public class TestRunnerService {
	private MongoTemplate mongoTemplate;
	private DiffAssessmentService diffAssessmentService;
	private TestResultsService testResultsService;

	@Autowired
	public TestRunnerService(MongoTemplate mongoTemplate, DiffAssessmentService diffAssessmentService,
			TestResultsService testResultsService) {
		this.mongoTemplate = mongoTemplate;
		this.diffAssessmentService = diffAssessmentService;
		this.testResultsService = testResultsService;
	}

	@Async
	public void runTests(RunUseCasesRequest request, String batchID) {
		for (String id : request.getTestCaseIds()) {
			UseCase useCase = getTest(id);
			UseCaseResult useCaseResult = new UseCaseResult();
			useCaseResult.setBatchID(batchID);
			useCaseResult.setPass(true);
			useCaseResult.setUseCase(useCase);
			useCaseResult.setResults(new ArrayList<>());
			
			for (TestCall test : useCase.getTests()) {
				TestResult result = runTest(test, request.getBaseURL());
				useCaseResult.setPass(useCaseResult.isPass() && result.isPass());
				useCaseResult.getResults().add(result);
			}

			this.testResultsService.storeResult(useCaseResult);
		}
	}

	private TestResult runTest(TestCall test, String baseURL) {

		GenricResultsInterface expected = getExpected(test);
		GenricResultsInterface actual = getActual(test, baseURL);

		TestResult result = compare(expected, actual);

		return result;
	}

	private TestResult compare(GenricResultsInterface expected, GenricResultsInterface actual) {
		TestResult result = new TestResult();

		List<String> diffList = diffAssessmentService.compareObjects(actual, expected);

		if (diffList.isEmpty()) {
			result.setPass(true);
			result.setErrorMsg("PASS");
		} else {
			result.setPass(false);
			result.setDiffList(diffList);
			result.setErrorMsg("ERROR: Returned values don't match.");
		}
		return result;
	}

	private GenricResultsInterface getExpected(TestCall test) {
		GenricResultsInterface expected = null;
		try {
			ObjectMapper mapper = new ObjectMapper();

			Class<GenricResultsInterface> returnType = (Class<GenricResultsInterface>) Class
					.forName(test.getExpectedResultType());

			expected = mapper.readValue(test.getExpectedResultRaw(), returnType);

		} catch (IOException | ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return expected;
	}

	private GenricResultsInterface getActual(TestCall test, String baseURL) {
		GenricResultsInterface actual = null;
		try {
			Class<GenricResultsInterface> returnType = (Class<GenricResultsInterface>) Class
					.forName(test.getExpectedResultType());

			RestTemplate restTemplate = new RestTemplate();
			URI url = buildURL(baseURL, test.getCallPath());
			ResponseEntity<GenricResultsInterface> actualEntity = restTemplate.getForEntity(url, returnType);

			System.out.println(actualEntity.getStatusCodeValue());

			actual = actualEntity.getBody();

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}

		return actual;
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
