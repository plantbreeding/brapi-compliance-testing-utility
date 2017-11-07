package org.brapi.brapiCertificationServer.model.test.resultTypes;

import java.util.List;

import org.brapi.brapiCertificationServer.model.test.domain.Call;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetCalls implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<Call> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<Call> getResults() {
		return results;
	}
	public void setResults(GenericResultList<Call> results) {
		this.results = results;
	}
}
