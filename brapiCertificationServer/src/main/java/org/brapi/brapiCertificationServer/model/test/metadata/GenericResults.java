package org.brapi.brapiCertificationServer.model.test.metadata;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GenericResults<ReturnType> {
	private MetaData metadata;
	private ReturnType results;
	
	@JsonCreator
	public GenericResults(@JsonProperty("results") ReturnType results) {
		this.results = results;
	}
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public ReturnType getResults() {
		return results;
	}
	public void setResults(ReturnType results) {
		this.results = results;
	}

}
