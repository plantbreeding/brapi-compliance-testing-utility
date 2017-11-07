package org.brapi.brapiCertificationServer.model.test.metadata;

import java.util.List;

public class GenericResultList<T>{
	private List<T> data;

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}
}
