package org.brapi.brapiCertificationServer.service;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.TestCall;
import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.RecordTestRequest;
import org.brapi.brapiCertificationServer.model.test.RunUseCasesRequest;
import org.brapi.brapiCertificationServer.model.test.TestResult;
import org.brapi.brapiCertificationServer.model.test.metadata.GenricResultsInterface;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.dao.DataAccessException;
import org.springframework.data.mongodb.core.DocumentCallbackHandler;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.MongoException;

@Service
@EnableAutoConfiguration
public class TestCreationService {
	private MongoTemplate mongoTemplate;

	@Autowired
	public TestCreationService(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public String recordNewTest(RecordTestRequest recordRequest) {
		String testID = UUID.randomUUID().toString();
		TestCall newTest = new TestCall();
		newTest.setExpectedResultType(recordRequest.getExpectedResultType());
		newTest.setId(testID);
		newTest.setCallPath(recordRequest.getTestCall());
		newTest.setUseCaseIndexNumber(recordRequest.getChainIndexNumber());

//		newTest.setExpectedResult(getActual(newTest, recordRequest.getBaseURL()));

		mongoTemplate.save(newTest, MongoUtility.USE_CASE_COLLECTION);

		return testID;
	}
	

	public void dropUseCases() {
		mongoTemplate.dropCollection(MongoUtility.USE_CASE_COLLECTION);
	}
	
	public void addTest(UseCase useCase) {
		mongoTemplate.save(useCase, MongoUtility.USE_CASE_COLLECTION);
	}

}
