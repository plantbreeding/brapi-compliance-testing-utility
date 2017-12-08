package org.brapi.brapiCertificationServer.model.test;

public class CertificationTestRecordRequest {
	private String chainId;
	private int chainIndexNumber;
	private String testCall;
	private String baseURL;
	private String apiVersion;
	private String expectedResultType;
	

	public String getChainId() {
		return chainId;
	}
	public void setChainId(String chainId) {
		this.chainId = chainId;
	}
	public int getChainIndexNumber() {
		return chainIndexNumber;
	}
	public void setChainIndexNumber(int chainIndexNumber) {
		this.chainIndexNumber = chainIndexNumber;
	}
	public String getTestCall() {
		return testCall;
	}
	public void setTestCall(String testCall) {
		this.testCall = testCall;
	}
	public String getBaseURL() {
		return baseURL;
	}
	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}
	public String getApiVersion() {
		return apiVersion;
	}
	public void setApiVersion(String apiVersion) {
		this.apiVersion = apiVersion;
	}
	public String getExpectedResultType() {
		return expectedResultType;
	}
	public void setExpectedResultType(String expectedResultType) {
		this.expectedResultType = expectedResultType;
	}
	
}
