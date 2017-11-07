package org.brapi.brapiCertificationServer.model.test;

import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.springframework.data.annotation.Id;

public class CertificationTest {
	@Id
	private String id;
	private String testGroup;
	private String testCall;
	private String apiVersion;
	private GenricResultsInterface expectedResult;
	private String expectedResultType;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTestGroup() {
		return testGroup;
	}
	public void setTestGroup(String testGroup) {
		this.testGroup = testGroup;
	}
	public String getTestCall() {
		return testCall;
	}
	public void setTestCall(String testCall) {
		this.testCall = testCall;
	}
	public String getApiVersion() {
		return apiVersion;
	}
	public void setApiVersion(String apiVersion) {
		this.apiVersion = apiVersion;
	}
	public GenricResultsInterface getExpectedResult() {
		return expectedResult;
	}
	public void setExpectedResult(GenricResultsInterface expectedResult) {
		this.expectedResult = expectedResult;
	}
	public String getExpectedResultType() {
		return expectedResultType;
	}
	public void setExpectedResultType(String expectedResultType) {
		this.expectedResultType = expectedResultType;
	}
	
	
}
