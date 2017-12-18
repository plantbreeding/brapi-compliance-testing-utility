package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class TestResult {
	private boolean pass;
	private String errorMsg;
	private List<String> diffList;
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
	
}
