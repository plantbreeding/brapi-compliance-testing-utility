package org.brapi.brapiCertificationServer.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.brapi.brapiCertificationServer.model.test.CallDefinition;
import org.brapi.brapiCertificationServer.model.test.CallDefinitionList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
@EnableAutoConfiguration
public class CallDefinitionService {
	private MongoTemplate mongoTemplate;
	
	@Autowired
	public CallDefinitionService(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}

	public CallDefinition getCallDefinition(String id) {
		return mongoTemplate.findById(id, CallDefinition.class, MongoUtility.CALL_DEFINITIONS);
	}
	
	public List<CallDefinition> getAllCallDefinitions() {
		return mongoTemplate.findAll(CallDefinition.class, MongoUtility.CALL_DEFINITIONS);
	}

	public void reloadCallDefinitions() {
		mongoTemplate.dropCollection(MongoUtility.CALL_DEFINITIONS);
		
		try {
			InputStream is = CallDefinitionService.class.getResourceAsStream("/CallDefinitions.json");
			String jsonRaw = IOUtils.toString(is, Charset.defaultCharset());

			ObjectMapper mapper = new ObjectMapper();
			CallDefinitionList list = mapper.readValue(jsonRaw, CallDefinitionList.class);
			
			for(CallDefinition callDef: list) {
				mongoTemplate.insert(callDef, MongoUtility.CALL_DEFINITIONS);
			}
			
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
