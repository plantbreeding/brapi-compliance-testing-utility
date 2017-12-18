package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class RunUseCasesRequest {
	private List<String> testCaseIds;
	private String baseURL;

	public List<String> getTestCaseIds() {
		return testCaseIds;
	}
	public void setTestCaseIds(List<String> testCaseIds) {
		this.testCaseIds = testCaseIds;
	}
	public String getBaseURL() {
		return baseURL;
	}
	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}
	
	
}
