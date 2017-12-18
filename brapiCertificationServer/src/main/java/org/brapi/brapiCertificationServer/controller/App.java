package org.brapi.brapiCertificationServer.controller;

import org.brapi.brapiCertificationServer.service.TestRunnerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackageClasses= {TestController.class, TestRunnerService.class})
public class App {

	public static void main(String args[]) {
		SpringApplication.run(App.class, args);
	}
}
