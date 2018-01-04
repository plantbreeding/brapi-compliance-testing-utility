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
import org.brapi.brapiCertificationServer.model.test.UseCaseResult;
import org.brapi.brapiCertificationServer.model.test.UseCaseResultList;
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
public class TestResultsService {
	private MongoTemplate mongoTemplate;

	@Autowired
	public TestResultsService(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public UseCaseResultList getResults(String batchID) {
		return mongoTemplate.findOne(Query.query(Criteria.where("batchID").is(batchID)), UseCaseResultList.class, MongoUtility.TEST_RESULTS_COLLECTION);
	}

	public void storeResult(UseCaseResultList result) {
		mongoTemplate.save(result, MongoUtility.TEST_RESULTS_COLLECTION);

	}

}
