/*
 * Product: OMotor
 * Copyright (C) 2017 OMotor. All Rights Reserved.
 */
package com.test.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Start da aplicação
 * @author esdrastavares
 *
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.test.model.*")
@EntityScan("com.test.model.*")  
@ComponentScan({
	"com.test.api", "com.test.model"
})
@PropertySources({
	@PropertySource("classpath:application.properties"),
	@PropertySource("classpath:db.properties")
})
public class TestMain {

	public static void main(String[] args) {
		SpringApplication.run(TestMain.class, args);
	}

}
