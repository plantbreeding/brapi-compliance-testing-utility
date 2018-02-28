package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class RunUseCasesRequest {
	private List<String> testCaseIds;
	private List<String> baseURLs;

	public List<String> getTestCaseIds() {
		return testCaseIds;
	}
	public void setTestCaseIds(List<String> testCaseIds) {
		this.testCaseIds = testCaseIds;
	}
	public List<String> getBaseURLs() {
		return baseURLs;
	}
	public void setBaseURLs(List<String> baseURLs) {
		this.baseURLs = baseURLs;
	}
	
	
}
