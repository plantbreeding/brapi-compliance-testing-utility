package org.brapi.brapiCertificationServer.model.test.resultTypes;

import org.brapi.brapiCertificationServer.model.test.domain.Call;
import org.brapi.brapiCertificationServer.model.test.metadata.GenericResultList;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.brapi.brapiCertificationServer.model.test.metadata.MetaData;

public class ResultGetCalls implements GenricResultsInterface{
	private MetaData metadata;
	private GenericResultList<Call> results;
	
	public MetaData getMetadata() {
		return metadata;
	}
	public void setMetadata(MetaData metadata) {
		this.metadata = metadata;
	}
	public GenericResultList<Call> getResults() {
		return results;
	}
	public void setResults(GenericResultList<Call> results) {
		this.results = results;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((metadata == null) ? 0 : metadata.hashCode());
		result = prime * result + ((results == null) ? 0 : results.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ResultGetCalls other = (ResultGetCalls) obj;
		if (metadata == null) {
			if (other.metadata != null)
				return false;
		} else if (!metadata.equals(other.metadata))
			return false;
		if (results == null) {
			if (other.results != null)
				return false;
		} else if (!results.equals(other.results))
			return false;
		return true;
	}
}
