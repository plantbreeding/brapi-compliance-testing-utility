package org.brapi.brapiCertificationServer.model.test.metadata;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GenericResultsDataList<T> {
	private List<T> data;

	@JsonCreator
	public GenericResultsDataList(@JsonProperty("data") List<T> data) {
		this.data = data;
	}
	
	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
}
