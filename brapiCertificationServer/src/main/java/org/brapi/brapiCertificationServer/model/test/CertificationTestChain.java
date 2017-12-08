package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

import org.springframework.data.annotation.Id;

public class CertificationTestChain {
	private String id;
	private String chainName;
	private List<CertificationTest> tests;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getChainName() {
		return chainName;
	}
	public void setChainName(String chainName) {
		this.chainName = chainName;
	}
	public List<CertificationTest> getTests() {
		return tests;
	}
	public void setTests(List<CertificationTest> tests) {
		this.tests = tests;
	}
	
	
}
