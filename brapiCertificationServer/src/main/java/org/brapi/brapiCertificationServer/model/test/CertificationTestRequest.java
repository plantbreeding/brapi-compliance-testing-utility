package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

public class CertificationTestRequest {
	private String version;
	private List<String> groups;
	private String baseURL;
	
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public List<String> getGroups() {
		return groups;
	}
	public void setGroups(List<String> groups) {
		this.groups = groups;
	}
	public String getBaseURL() {
		return baseURL;
	}
	public void setBaseURL(String baseURL) {
		this.baseURL = baseURL;
	}
	
	
}
