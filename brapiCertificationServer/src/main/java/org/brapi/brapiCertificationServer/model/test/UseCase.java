package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

import org.springframework.data.annotation.Id;

public class UseCase {
	@Id
	private String id;
	private String useCaseName;
	private List<TestCall> tests;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUseCaseName() {
		return useCaseName;
	}
	public void setUseCaseName(String useCaseName) {
		this.useCaseName = useCaseName;
	}
	public List<TestCall> getTests() {
		return tests;
	}
	public void setTests(List<TestCall> tests) {
		this.tests = tests;
	}
	
	
}
