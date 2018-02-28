package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class TestResult {
	private boolean pass;
	private String errorMsg;
	private String url;
	private List<String> diffList;
	private String rawExpected;
	private String rawActual;
	
	public String getRawExpected() {
		return rawExpected;
	}
	public void setRawExpected(String rawExpected) {
		this.rawExpected = rawExpected;
	}
	public String getRawActual() {
		return rawActual;
	}
	public void setRawActual(String rawActual) {
		this.rawActual = rawActual;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
}
