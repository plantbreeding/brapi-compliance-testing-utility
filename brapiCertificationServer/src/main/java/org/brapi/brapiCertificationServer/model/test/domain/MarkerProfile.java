package org.brapi.brapiCertificationServer.model.test.domain;

import java.util.List;

public class MarkerProfile {
	private String germplasmDbId;
	private List<String> markerProfilesDbIds;
	
	public String getGermplasmDbId() {
		return germplasmDbId;
	}
	public void setGermplasmDbId(String germplasmDbId) {
		this.germplasmDbId = germplasmDbId;
	}
	public List<String> getMarkerProfilesDbIds() {
		return markerProfilesDbIds;
	}
	public void setMarkerProfilesDbIds(List<String> markerProfilesDbIds) {
		this.markerProfilesDbIds = markerProfilesDbIds;
	}
}
