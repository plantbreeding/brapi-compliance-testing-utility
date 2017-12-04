package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetCrops implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<String> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<String> getResults() {
		return results;
	}
	public void setResults(GenericResultList<String> results) {
		this.results = results;
	}
}
