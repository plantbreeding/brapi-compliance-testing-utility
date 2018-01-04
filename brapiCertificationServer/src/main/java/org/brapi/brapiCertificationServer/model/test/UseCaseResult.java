package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class UseCaseResult {
	private String batchID;
	private boolean pass;
	private String baseURL;
	private UseCase useCase;
	private List<TestResult> results;
	
	public boolean isPass() {
		return pass;
	}
	public void setPass(boolean pass) {
		this.pass = pass;
	}
	public UseCase getUseCase() {
		return useCase;
	}
	public void setUseCase(UseCase useCase) {
		this.useCase = useCase;
	}
	public List<TestResult> getResults() {
		return results;
	}
	public void setResults(List<TestResult> results) {
		this.results = results;
	}
	public String getBatchID() {
		return batchID;
	}
	public void setBatchID(String batchID) {
		this.batchID = batchID;
	}
	public String getBaseURL() {
		return baseURL;
	}
	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}

	
}
