package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.domain.GenomeMapData;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetMapsMapDbIdPositions implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<GenomeMapData> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<GenomeMapData> getResults() {
		return results;
	}
	public void setResults(GenericResultList<GenomeMapData> results) {
		this.results = results;
	}
}
