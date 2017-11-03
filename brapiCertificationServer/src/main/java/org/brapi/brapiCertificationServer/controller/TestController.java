package org.brapi.brapiCertificationServer.controller;

import java.util.List;
import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.CertificationTestRequest;
import org.brapi.brapiCertificationServer.model.test.CertificationTestResult;
import org.brapi.brapiCertificationServer.service.CertificationTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {

	private CertificationTestService service;

	@Autowired
	public TestController(CertificationTestService service) {
		this.service = service;
	}

	@RequestMapping(method=RequestMethod.POST, value="test")
	@ResponseBody
	public String test(@RequestBody CertificationTestRequest request) throws Exception {
		String batchID = UUID.randomUUID().toString();
    	service.runTests(request, batchID);
    	return batchID;
		
	}

	@RequestMapping(method=RequestMethod.POST, value="addtest")
	public void addTest(HttpEntity<String> testRawJSON) {
		service.addTest(testRawJSON.getBody());
	}

	@RequestMapping(method=RequestMethod.GET, value="testresults")
	public List<CertificationTestResult> testResults(@RequestParam String batchID){
		return service.getResults(batchID);
	}

}
