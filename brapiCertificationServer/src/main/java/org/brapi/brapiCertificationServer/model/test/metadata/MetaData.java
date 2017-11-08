package org.brapi.brapiCertificationServer.model.test.metadata;

import java.util.List;

public class MetaData {
	private MetaDataPagination pagination;
	private List<MetaDataStatus> status;
	private List<MetaDataDatafiles> datafiles;

	public List<MetaDataStatus> getStatus() {
		return status;
	}

	public void setStatus(List<MetaDataStatus> status) {
		this.status = status;
	}

	public List<MetaDataDatafiles> getDatafiles() {
		return datafiles;
	}

	public void setDatafiles(List<MetaDataDatafiles> datafiles) {
		this.datafiles = datafiles;
	}

	public MetaDataPagination getPagination() {
		return pagination;
	}

	public void setPagination(MetaDataPagination pagination) {
		this.pagination = pagination;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((datafiles == null) ? 0 : datafiles.hashCode());
		result = prime * result + ((pagination == null) ? 0 : pagination.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
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
		MetaData other = (MetaData) obj;
		if (datafiles == null) {
			if (other.datafiles != null)
				return false;
		} else if (!datafiles.equals(other.datafiles))
			return false;
		if (pagination == null) {
			if (other.pagination != null)
				return false;
		} else if (!pagination.equals(other.pagination))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}
	
}
