package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class TestCall {
	private int useCaseIndexNumber;
	private String callPath;
	private CallDefinition callDefinition;
	private String expectedResultRaw;
	private List<TestCallParam> paramList;
	
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
	public String getExpectedResultRaw() {
		return expectedResultRaw;
	}
	public void setExpectedResultRaw(String expectedResultRaw) {
		this.expectedResultRaw = expectedResultRaw;
	}
	public CallDefinition getCallDefinition() {
		return callDefinition;
	}
	public void setCallDefinition(CallDefinition callDefinition) {
		this.callDefinition = callDefinition;
	}
	public List<TestCallParam> getParamList() {
		return paramList;
	}
	public void setParamList(List<TestCallParam> paramList) {
		this.paramList = paramList;
	}
		
}
