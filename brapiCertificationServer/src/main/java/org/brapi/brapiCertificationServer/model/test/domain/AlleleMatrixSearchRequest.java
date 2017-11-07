package org.brapi.brapiCertificationServer.model.test.domain;

public class AlleleMatrixSearchRequest {
	private String markerprofileDbId;
	private String markerDbId;
	private boolean expandHomozygotes;
	private String unknownString;
	private String sepPhased;
	private String sepUnphased;
	private String format;
	private int pageSize;
	private int page;
	public String getMarkerprofileDbId() {
		return markerprofileDbId;
	}
	public void setMarkerprofileDbId(String markerprofileDbId) {
		this.markerprofileDbId = markerprofileDbId;
	}
	public String getMarkerDbId() {
		return markerDbId;
	}
	public void setMarkerDbId(String markerDbId) {
		this.markerDbId = markerDbId;
	}
	public boolean isExpandHomozygotes() {
		return expandHomozygotes;
	}
	public void setExpandHomozygotes(boolean expandHomozygotes) {
		this.expandHomozygotes = expandHomozygotes;
	}
	public String getUnknownString() {
		return unknownString;
	}
	public void setUnknownString(String unknownString) {
		this.unknownString = unknownString;
	}
	public String getSepPhased() {
		return sepPhased;
	}
	public void setSepPhased(String sepPhased) {
		this.sepPhased = sepPhased;
	}
	public String getSepUnphased() {
		return sepUnphased;
	}
	public void setSepUnphased(String sepUnphased) {
		this.sepUnphased = sepUnphased;
	}
	public String getFormat() {
		return format;
	}
	public void setFormat(String format) {
		this.format = format;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	
}
