package org.brapi.brapiCertificationServer.model.test.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TaxonID implements BaseRestModel{
	//TODO This class doesnt make sense to me, might be a product of loose typing
	private String ncbiTaxon;
	private String ciradTaxon;
	public String getNcbiTaxon() {
		return ncbiTaxon;
	}
	public void setNcbiTaxon(String ncbiTaxon) {
		this.ncbiTaxon = ncbiTaxon;
	}
	public String getCiradTaxon() {
		return ciradTaxon;
	}
	public void setCiradTaxon(String ciradTaxon) {
		this.ciradTaxon = ciradTaxon;
	}
}
