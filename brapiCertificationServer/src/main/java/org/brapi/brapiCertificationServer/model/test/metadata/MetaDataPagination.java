package org.brapi.brapiCertificationServer.model.test.metadata;

public class MetaDataPagination {
	private int totalCount;
	private int currentPage;
	private int totalPages;
	private int pageSize;
	
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}
	
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + currentPage;
		result = prime * result + pageSize;
		result = prime * result + totalCount;
		result = prime * result + totalPages;
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
		MetaDataPagination other = (MetaDataPagination) obj;
		if (currentPage != other.currentPage)
			return false;
		if (pageSize != other.pageSize)
			return false;
		if (totalCount != other.totalCount)
			return false;
		if (totalPages != other.totalPages)
			return false;
		return true;
	}
}
