package org.brapi.brapiCertificationServer.controller;

import java.util.List;
import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.UseCaseResultList;
import org.brapi.brapiCertificationServer.model.test.CallDefinition;
import org.brapi.brapiCertificationServer.model.test.RecordTestRequest;
import org.brapi.brapiCertificationServer.model.test.RunUseCasesRequest;
import org.brapi.brapiCertificationServer.service.CallDefinitionService;
import org.brapi.brapiCertificationServer.service.TestCreationService;
import org.brapi.brapiCertificationServer.service.TestResultsService;
import org.brapi.brapiCertificationServer.service.TestRunnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CertificationTestingRestController {

	private TestRunnerService testRunnerService;
	private TestCreationService testCreationService;
	private TestResultsService testResultsService;
	private CallDefinitionService callDefinitionService;

	@Autowired
	public CertificationTestingRestController(TestRunnerService testRunnerService, TestCreationService testCreationService, TestResultsService testResultsService, CallDefinitionService callDefinitionService) {
		this.testRunnerService = testRunnerService;
		this.testCreationService = testCreationService;
		this.testResultsService = testResultsService;
		this.callDefinitionService = callDefinitionService;
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="tests")
	@PreAuthorize("hasAuthority('USER')")
	public List<UseCase> getTests() throws Exception {
		return testRunnerService.getTests();
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST, value="test")
	@PreAuthorize("hasAuthority('ADMIN')")
	@ResponseBody
	public String postTests(@RequestBody UseCase useCase) {
		String id = testCreationService.addTest(useCase);
		return id;
	}

	@RequestMapping(method=RequestMethod.DELETE, value="tests")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void deleteTests() {
		testCreationService.dropUseCases();
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.DELETE, value="test/{id}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public void deleteTest(@PathVariable("id") String testId) {
		testCreationService.dropUseCase(testId);
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="test/{id}")
	@PreAuthorize("hasAuthority('USER')")
	public UseCase getTestById(@PathVariable("id") String testId) throws Exception {
		return testCreationService.getTest(testId);
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST, value="runtest")
	@PreAuthorize("hasAuthority('USER')")
	@ResponseBody
	public String test(@RequestBody RunUseCasesRequest request, @RequestHeader("Authorization") String authToken) throws Exception {
		String batchID = UUID.randomUUID().toString();
    	testRunnerService.runTests(request, batchID, authToken);
		return batchID ;
		
	}
	
	@RequestMapping(method=RequestMethod.POST, value="recordTest")
	@ResponseBody
	@PreAuthorize("hasAuthority('ADMIN')")
	public String addTest(@RequestBody RecordTestRequest recordRequest) {
		return testCreationService.recordNewTest(recordRequest);
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="testresults/{batchID}")
	@PreAuthorize("hasAuthority('USER')")
	public UseCaseResultList testResults(@PathVariable(name="batchID") String batchID){
		UseCaseResultList results = testResultsService.getResults(batchID);
		return results;
	}

	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET, value="calls")
	@PreAuthorize("hasAuthority('USER')")
	public List<CallDefinition> getCallDefinitions(){
		return callDefinitionService.getAllCallDefinitions();
	}
	
	@RequestMapping(method=RequestMethod.GET, value="reloadcalls")
	@PreAuthorize("hasAuthority('USER')")
	public List<CallDefinition> reloadCallDefinitions(){
		callDefinitionService.reloadCallDefinitions();
		return callDefinitionService.getAllCallDefinitions();
	}
}
