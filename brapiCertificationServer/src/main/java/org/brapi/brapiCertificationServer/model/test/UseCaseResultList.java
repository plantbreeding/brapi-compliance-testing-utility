package org.brapi.brapiCertificationServer.model.test;

import java.util.List;

import org.springframework.data.annotation.Id;

public class UseCaseResultList {
	@Id
	private String batchID;
	private int total;
	private int complete;
	private List<UseCaseResult> results;
	
	public String getBatchID() {
		return batchID;
	}
	public void setBatchID(String batchID) {
		this.batchID = batchID;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getComplete() {
		return complete;
	}
	public void setComplete(int complete) {
		this.complete = complete;
	}
	public List<UseCaseResult> getResults() {
		return results;
	}
	public void setResults(List<UseCaseResult> results) {
		this.results = results;
	}	
}
