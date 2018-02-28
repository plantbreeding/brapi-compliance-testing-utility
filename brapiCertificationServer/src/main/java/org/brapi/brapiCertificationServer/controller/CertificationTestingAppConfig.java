package org.brapi.brapiCertificationServer.controller;

import java.util.concurrent.Executor;

import org.brapi.brapiCertificationServer.service.TestRunnerService;
import org.brapi.brapiCertificationServer.service.CallDefinitionService;
import org.brapi.brapiCertificationServer.service.DiffAssessmentService;
import org.brapi.brapiCertificationServer.service.TestResultsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import com.mongodb.MongoClient;

@Configuration
@EnableAsync
public class CertificationTestingAppConfig implements AsyncConfigurer {

	@Bean
	public TestRunnerService certificationTestService() {
		return new TestRunnerService(mongoTemplate(), diffAssessmentService(), testResultsService(),
				callDefinitionService());
	}

	@Bean
	public DiffAssessmentService diffAssessmentService() {
		return new DiffAssessmentService();
	}

	@Bean
	public TestResultsService testResultsService() {
		return new TestResultsService(mongoTemplate());
	}

	@Bean
	public CallDefinitionService callDefinitionService() {
		return new CallDefinitionService(mongoTemplate());
	}

	public MongoClient mongoClient() {
		return new MongoClient("mongo");
//		return new MongoClient("localhost");
	}

	public MongoTemplate mongoTemplate() {
		return new MongoTemplate(mongoClient(), "test");
	}

	public Executor getAsyncExecutor() {
		ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
		executor.setCorePoolSize(5);
		executor.setMaxPoolSize(10);
		executor.setQueueCapacity(20);
		executor.setThreadNamePrefix("TestExecutor-");
		executor.initialize();
		return executor;
	}
}
