package org.brapi.brapiCertificationServer.dao;

import java.util.ArrayList;
import java.util.List;

import org.brapi.brapiCertificationServer.model.test.CertificationTest;
import org.brapi.brapiCertificationServer.model.test.CertificationTestResult;
import org.springframework.stereotype.Service;

@Service
public class CertificationTestDAO_Mock {
	public List<CertificationTest> getTests(String version, List<String> groups){
		List<CertificationTest> tests = new ArrayList<CertificationTest>();
		CertificationTest mockTest = new CertificationTest();
		mockTest.setApiVersion("1.1");
		mockTest.setExpectedResultType("org.brapi.brapiCertificationServer.model.test.domain.metadata.SearchResultsCalls");
		mockTest.setId("123");
		mockTest.setTestCall("calls");
		mockTest.setTestGroup("group");
		tests.add(mockTest);
		return tests;
	}

	public void storeResult(CertificationTestResult result) {
		// TODO Auto-generated method stub
		
	}
}
