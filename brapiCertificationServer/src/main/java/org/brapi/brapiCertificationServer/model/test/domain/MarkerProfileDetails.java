package org.brapi.brapiCertificationServer.model.test.domain;

import java.util.Map;

public class MarkerProfileDetails {
	private String markerProfileDbId;
	private String germplasmDbId;
	private String uniqueDisplayName;
	// TODO why is this missing private String sampleDbId;
	private String extractDbId;
	private String analysisMethod;
	private Map<String, String> data;
	public String getMarkerProfileDbId() {
		return markerProfileDbId;
	}
	public void setMarkerProfileDbId(String markerProfileDbId) {
		this.markerProfileDbId = markerProfileDbId;
	}
	public String getGermplasmDbId() {
		return germplasmDbId;
	}
	public void setGermplasmDbId(String germplasmDbId) {
		this.germplasmDbId = germplasmDbId;
	}
	public String getUniqueDisplayName() {
		return uniqueDisplayName;
	}
	public void setUniqueDisplayName(String uniqueDisplayName) {
		this.uniqueDisplayName = uniqueDisplayName;
	}
	public String getExtractDbId() {
		return extractDbId;
	}
	public void setExtractDbId(String extractDbId) {
		this.extractDbId = extractDbId;
	}
	public String getAnalysisMethod() {
		return analysisMethod;
	}
	public void setAnalysisMethod(String analysisMethod) {
		this.analysisMethod = analysisMethod;
	}
	public Map<String, String> getData() {
		return data;
	}
	public void setData(Map<String, String> data) {
		this.data = data;
	}
}
