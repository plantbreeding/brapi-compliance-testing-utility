package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class CertificationTestResult {
	private String testID;
	private String batchID;
	private boolean pass;
	private String errorMsg;
	private List<String> diffList;
	public String getTestID() {
		return testID;
	}
	public void setTestID(String testID) {
		this.testID = testID;
	}
	public boolean isPass() {
		return pass;
	}
	public void setPass(boolean pass) {
		this.pass = pass;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	public List<String> getDiffList() {
		return diffList;
	}
	public void setDiffList(List<String> diffList) {
		this.diffList = diffList;
	}
	public String getBatchID() {
		return batchID;
	}
	public void setBatchID(String batchID) {
		this.batchID = batchID;
	}
	
}
