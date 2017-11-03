package org.brapi.brapiCertificationServer.model.test.domain;

import java.util.List;

public class Call {
	private String call;
	private List<String> datatypes;
	private List<String> methods;
	
	public String getCall() {
		return call;
	}
	public void setCall(String call) {
		this.call = call;
	}
	public List<String> getDataTypes() {
		return datatypes;
	}
	public void setDataTypes(List<String> dataTypes) {
		this.datatypes = dataTypes;
	}
	public List<String> getMethods() {
		return methods;
	}
	public void setMethods(List<String> methods) {
		this.methods = methods;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((call == null) ? 0 : call.hashCode());
		result = prime * result + ((datatypes == null) ? 0 : datatypes.hashCode());
		result = prime * result + ((methods == null) ? 0 : methods.hashCode());
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
		Call other = (Call) obj;
		if (call == null) {
			if (other.call != null)
				return false;
		} else if (!call.equals(other.call))
			return false;
		if (datatypes == null) {
			if (other.datatypes != null)
				return false;
		} else if (!datatypes.equals(other.datatypes))
			return false;
		if (methods == null) {
			if (other.methods != null)
				return false;
		} else if (!methods.equals(other.methods))
			return false;
		return true;
	}
	
	
}
