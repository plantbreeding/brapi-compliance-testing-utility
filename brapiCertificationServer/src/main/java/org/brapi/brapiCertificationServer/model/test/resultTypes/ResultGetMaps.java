package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.domain.GenomeMapSummary;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetMaps implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<GenomeMapSummary> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<GenomeMapSummary> getResults() {
		return results;
	}
	public void setResults(GenericResultList<GenomeMapSummary> results) {
		this.results = results;
	}
}
