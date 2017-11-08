package org.brapi.brapiCertificationServer.service;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.CertificationTest;
import org.brapi.brapiCertificationServer.model.test.CertificationTestRecordRequest;
import org.brapi.brapiCertificationServer.model.test.CertificationTestRequest;
import org.brapi.brapiCertificationServer.model.test.CertificationTestResult;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.dao.DataAccessException;
import org.springframework.data.mongodb.core.DocumentCallbackHandler;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mongodb.MongoException;

@Service
@EnableAutoConfiguration
public class CertificationTestService {
	private MongoTemplate mongoTemplate;
	private DiffAssessmentService diffAssessmentService;
	
	@Autowired	
	public CertificationTestService(MongoTemplate mongoTemplate, DiffAssessmentService diffAssessmentService) {
		this.mongoTemplate = mongoTemplate;
		this.diffAssessmentService = diffAssessmentService;
	}

	@Async
	public void runTests(CertificationTestRequest request, String batchID) {
		List<CertificationTest> tests = getTests(request.getVersion());
		
		for(CertificationTest test: tests) {
			CertificationTestResult result = runTest(test, request.getBaseURL());
			result.setBatchID(batchID);
			storeResult(result);
		}
	}

	public List<CertificationTestResult> getResults(String batchID){
		return mongoTemplate.find(Query.query(Criteria.where("batchID").is(batchID)), CertificationTestResult.class, "CertificationTestResult");
	}

	public void addTest(String testRawJSON) {
		Document saveObj = Document.parse(testRawJSON);
		//TODO not safe doing it this way, accepting raw user input without validation
		mongoTemplate.save(saveObj, "CertificationTest");
	}
	
	private CertificationTestResult runTest(CertificationTest test, String baseURL) {
		
		GenricResultsInterface actual = getActual(test, baseURL);

		CertificationTestResult result = compare(test.getExpectedResult(), actual);

		return result;
	}
	
	private List<CertificationTest> getTests(String version){
		
		final List<CertificationTest> tests = new ArrayList<CertificationTest>();
		mongoTemplate.executeQuery(Query.query(Criteria.where("apiVersion").is(version)), "CertificationTest", new DocumentCallbackHandler() {
			
			public void processDocument(Document testDoc) throws MongoException, DataAccessException {
				try {
					String expectedTypeStr = testDoc.getString("expectedResultType");
					Class expectedType = Class.forName(expectedTypeStr);
					GenricResultsInterface expectedObj = (GenricResultsInterface) mongoTemplate.getConverter().read(expectedType, testDoc.get("expectedResult", Document.class));
					System.out.println(expectedObj);
					
					CertificationTest test = new CertificationTest();
					test.setApiVersion(testDoc.getString("apiVersion"));
					test.setExpectedResult(expectedObj);
					test.setExpectedResultType(expectedTypeStr);
					test.setId(testDoc.getString("id"));
					test.setTestCall(testDoc.getString("testCall"));
					test.setTestGroup(testDoc.getString("group"));
					
					tests.add(test);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
		
		return tests;
	}

	private void storeResult(CertificationTestResult result) {
		mongoTemplate.save(result, "CertificationTestResult");
		
	}

	private CertificationTestResult compare(GenricResultsInterface expected, GenricResultsInterface actual) {
		CertificationTestResult result = new CertificationTestResult();
		result.setTestID("123");
		
		List<String> diffList = diffAssessmentService.compareObjects(actual, expected);
		
		if(diffList.isEmpty()) {
			result.setPass(true);
			result.setErrorMsg("PASS");
		}else {
			result.setPass(false);
			result.setDiffList(diffList);
			result.setErrorMsg("ERROR: Returned values don't match.");
		}
		return result;
	}

	private GenricResultsInterface getActual(CertificationTest test, String baseURL) {
		GenricResultsInterface actual = null;
		try {
			Class returnType = Class.forName(test.getExpectedResultType());

	        RestTemplate restTemplate = new RestTemplate();
	        URI url = buildURL(baseURL, test.getTestCall());
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

	public String recordNewTest(CertificationTestRecordRequest recordRequest) {
		String testID = UUID.randomUUID().toString();
		CertificationTest newTest = new CertificationTest();
		newTest.setApiVersion(recordRequest.getApiVersion());
		newTest.setExpectedResultType(recordRequest.getExpectedResultType());
		newTest.setId(testID);
		newTest.setTestCall(recordRequest.getTestCall());
		newTest.setTestGroup(recordRequest.getTestGroup());
		
		newTest.setExpectedResult(getActual(newTest, recordRequest.getBaseURL()));
		
		mongoTemplate.save(newTest, "CertificationTest");
		
		return testID;
	}
}
