package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.domain.GenomeMapDetail;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetMapsMapDbId implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<GenomeMapDetail> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<GenomeMapDetail> getResults() {
		return results;
	}
	public void setResults(GenericResultList<GenomeMapDetail> results) {
		this.results = results;
	}
}
