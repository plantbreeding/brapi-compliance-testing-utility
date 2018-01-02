package org.brapi.brapiCertificationServer.controller;

import java.net.URI;
import java.util.List;
import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.UseCaseResult;
import org.brapi.brapiCertificationServer.model.test.RecordTestRequest;
import org.brapi.brapiCertificationServer.model.test.RunUseCasesRequest;
import org.brapi.brapiCertificationServer.model.test.TestResult;
import org.brapi.brapiCertificationServer.service.TestCreationService;
import org.brapi.brapiCertificationServer.service.TestResultsService;
import org.brapi.brapiCertificationServer.service.TestRunnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

	private TestRunnerService testRunnerService;
	private TestCreationService testCreationService;
	private TestResultsService testResultsService;

	@Autowired
	public TestController(TestRunnerService testRunnerService, TestCreationService testCreationService, TestResultsService testResultsService) {
		this.testRunnerService = testRunnerService;
		this.testCreationService = testCreationService;
		this.testResultsService = testResultsService;
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="tests")
	public List<UseCase> getTests() throws Exception {
		return testRunnerService.getTests();
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST, value="test")
	@ResponseBody
	public String postTests(@RequestBody UseCase useCase) {
		String id = "\"" + testCreationService.addTest(useCase) + "\"";
		return id;
	}

	@RequestMapping(method=RequestMethod.DELETE, value="tests")
	public void deleteTests() {
		testCreationService.dropUseCases();
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="test/{id}")
	public UseCase getTestById(@PathVariable("id") String testId) throws Exception {
		return testCreationService.getTest(testId);
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST, value="runtest")
	@ResponseBody
	public String test(@RequestBody RunUseCasesRequest request) throws Exception {
		String batchID = UUID.randomUUID().toString();
    	testRunnerService.runTests(request, batchID);
		return "\"" + batchID + "\"";
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value="recordTest")
	@ResponseBody
	public String addTest(@RequestBody RecordTestRequest recordRequest) {
		return testCreationService.recordNewTest(recordRequest);
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="testresults/{batchID}")
	public List<UseCaseResult> testResults(@PathVariable(name="batchID") String batchID){
		List<UseCaseResult> results = testResultsService.getResults(batchID);
		return results;
	}

}
