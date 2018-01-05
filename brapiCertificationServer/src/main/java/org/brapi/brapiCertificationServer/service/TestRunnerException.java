package org.brapi.brapiCertificationServer.service;

import com.fasterxml.jackson.core.JsonProcessingException;

public class TestRunnerException extends Exception {
	private static final long serialVersionUID = 205375475369784987L;

	public TestRunnerException(JsonProcessingException e) {
		super(e);
	}

}
