package org.brapi.brapiCertificationServer.model.test;

public class TestCall {
	private String id;
	private int useCaseIndexNumber;
	private String callPath;
	private String expectedResultRaw;
	private String expectedResultType;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getUseCaseIndexNumber() {
		return useCaseIndexNumber;
	}
	public void setUseCaseIndexNumber(int useCaseIndexNumber) {
		this.useCaseIndexNumber = useCaseIndexNumber;
	}
	public String getCallPath() {
		return callPath;
	}
	public void setCallPath(String callPath) {
		this.callPath = callPath;
	}
	public String getExpectedResultType() {
		return expectedResultType;
	}
	public void setExpectedResultType(String expectedResultType) {
		this.expectedResultType = expectedResultType;
	}
	public String getExpectedResultRaw() {
		return expectedResultRaw;
	}
	public void setExpectedResultRaw(String expectedResultRaw) {
		this.expectedResultRaw = expectedResultRaw;
	}
		
}
