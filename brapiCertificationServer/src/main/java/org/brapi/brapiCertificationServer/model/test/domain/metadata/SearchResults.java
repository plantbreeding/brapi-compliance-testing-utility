package org.brapi.brapiCertificationServer.model.test.domain.metadata;

import java.util.List;

public class SearchResults<ReturnType> implements SearchResultsInterface{
	private MetaData metadata;
	private ReturnType results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public ReturnType getResults() {
		return results;
	}
	public void setResults(ReturnType results) {
		this.results = results;
	}
	public boolean equalsCollectDiff(SearchResultsInterface actual, List<String> diffList) {
		// TODO Auto-generated method stub
		return false;
	}

}
