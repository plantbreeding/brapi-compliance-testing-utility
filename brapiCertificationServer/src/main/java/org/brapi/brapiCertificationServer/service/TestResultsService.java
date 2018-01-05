package org.brapi.brapiCertificationServer.service;

import org.brapi.brapiCertificationServer.model.test.UseCaseResultList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

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
