package org.brapi.brapiCertificationServer.model.test.domain.metadata;

import java.util.List;

import org.brapi.brapiCertificationServer.model.test.domain.Call;

public class SearchResultsCalls implements SearchResultsInterface{
	private MetaData metadata;
	private SearchResultsList<Call> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public SearchResultsList<Call> getResults() {
		return results;
	}
	public void setResults(SearchResultsList<Call> results) {
		this.results = results;
	}
	public boolean equalsCollectDiff(SearchResultsInterface actual, List<String> diffList) {
				
		if(actual == null) {
			diffList.add("Null Value: \nExpecting not null \nActual is null");
		}
		if(! (actual instanceof SearchResultsCalls)) {
			diffList.add("Type Mis-match: \nExpecting " +this.getClass().getName() + "\nActual " + actual.getClass().getName());
			return false;
		}
		
		return true;
	}
}
