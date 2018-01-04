package org.brapi.brapiCertificationServer.controller;

import org.brapi.brapiCertificationServer.service.TestRunnerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackageClasses= {CertificationTestingRestController.class, TestRunnerService.class})
public class CertificationTestingApp {

	public static void main(String args[]) {
		SpringApplication.run(CertificationTestingApp.class, args);
	}
}
