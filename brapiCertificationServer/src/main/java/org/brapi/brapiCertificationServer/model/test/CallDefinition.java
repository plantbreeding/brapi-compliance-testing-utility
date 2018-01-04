package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

import org.springframework.data.annotation.Id;

public class CallDefinition {
	@Id
	private String id;
	private String method;
	private String call;
	private String name;
	private String expectedReturnType;
	private boolean expectedReturnTypeHasList;
	private List<String> availibleParams;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}
	public String getCall() {
		return call;
	}
	public void setCall(String call) {
		this.call = call;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getAvailibleParams() {
		return availibleParams;
	}
	public void setAvailibleParams(List<String> availibleParams) {
		this.availibleParams = availibleParams;
	}
	public String getExpectedReturnType() {
		return expectedReturnType;
	}
	public void setExpectedReturnType(String expectedReturnType) {
		this.expectedReturnType = expectedReturnType;
	}
	public boolean isExpectedReturnTypeHasList() {
		return expectedReturnTypeHasList;
	}
	public void setExpectedReturnTypeHasList(boolean expectedReturnTypeHasList) {
		this.expectedReturnTypeHasList = expectedReturnTypeHasList;
	}
}
