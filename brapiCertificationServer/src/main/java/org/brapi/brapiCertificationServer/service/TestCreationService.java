package org.brapi.brapiCertificationServer.service;

import java.util.UUID;

import org.brapi.brapiCertificationServer.model.test.TestCall;
import org.brapi.brapiCertificationServer.model.test.UseCase;
import org.brapi.brapiCertificationServer.model.test.RecordTestRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

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
		newTest.setCallPath(recordRequest.getTestCall());
		newTest.setUseCaseIndexNumber(recordRequest.getChainIndexNumber());

//		newTest.setExpectedResult(getActual(newTest, recordRequest.getBaseURL()));

		mongoTemplate.save(newTest, MongoUtility.USE_CASE_COLLECTION);

		return testID;
	}
	

	public void dropUseCases() {
		mongoTemplate.dropCollection(MongoUtility.USE_CASE_COLLECTION);
	}
	
	public String addTest(UseCase useCase) {
		if(useCase.getId() == null) {
			useCase.setId(UUID.randomUUID().toString());
		}
		mongoTemplate.save(useCase, MongoUtility.USE_CASE_COLLECTION);
		return useCase.getId();
	}

	public UseCase getTest(String testId) {
		UseCase uc = mongoTemplate.findById(testId, UseCase.class, MongoUtility.USE_CASE_COLLECTION);
		return uc;
	}

	public void dropUseCase(String testId) {
		mongoTemplate.remove(getTest(testId), MongoUtility.USE_CASE_COLLECTION);
	}

}
