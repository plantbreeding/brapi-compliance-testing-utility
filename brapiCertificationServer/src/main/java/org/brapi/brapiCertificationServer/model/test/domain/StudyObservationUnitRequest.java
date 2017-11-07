package org.brapi.brapiCertificationServer.model.test.domain;

import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class StudyObservationUnitRequest {
	//TODO why does a request need metadata
	private MetaData metadata;
	private StudyObservationUnitWrapper results;
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public StudyObservationUnitWrapper getResults() {
		return results;
	}
	public void setResults(StudyObservationUnitWrapper results) {
		this.results = results;
	}
}
