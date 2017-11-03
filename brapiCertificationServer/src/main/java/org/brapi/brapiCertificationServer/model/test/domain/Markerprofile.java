package org.brapi.brapiCertificationServer.model.test.domain;

import java.util.List;

public class Markerprofile {
	private String germplasmDbId;
	private List<String> markerprofilesDbIds;
	
	public String getGermplasmDbId() {
		return germplasmDbId;
	}
	public void setGermplasmDbId(String germplasmDbId) {
		this.germplasmDbId = germplasmDbId;
	}
	public List<String> getMarkerprofilesDbIds() {
		return markerprofilesDbIds;
	}
	public void setMarkerprofilesDbIds(List<String> markerprofilesDbIds) {
		this.markerprofilesDbIds = markerprofilesDbIds;
	}
}
