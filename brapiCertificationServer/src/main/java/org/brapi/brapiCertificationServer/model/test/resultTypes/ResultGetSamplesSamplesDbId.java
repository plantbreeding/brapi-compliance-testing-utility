package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetSamplesSamplesDbId implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<?> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<?> getResults() {
		return results;
	}
	public void setResults(GenericResultList<?> results) {
		this.results = results;
	}
}
