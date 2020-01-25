package com.healthcareIntelligence.myapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})
public class MyappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyappApplication.class, args);
	}

}
/*String  originalPassword = "password";
String generatedSecuredPasswordHash = BCrypt.hashpw(originalPassword, BCrypt.gensalt(12));
System.out.println(generatedSecuredPasswordHash);
 
boolean matched = BCrypt.checkpw(originalPassword, generatedSecuredPasswordHash);
System.out.println(matched);*/