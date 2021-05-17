package com.healthcareIntelligence.myapp;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.healthcareIntelligence.myapp.entity.HospitalMaster;
import com.healthcareIntelligence.myapp.repo.HospitalMasterRepository;
import com.healthcareIntelligence.myapp.service.HospitalService;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class MyappApplicationTests {
	
	@Autowired
	private HospitalService hospitalService;
	
	@Autowired
	private TestRestTemplate restTemplate;
	
	@MockBean
	private HospitalMasterRepository hospitalMasterRepository;
	
	@Test
	void getAllHospitalsTest() {
		
		when(hospitalMasterRepository.findAll()).thenReturn(Stream.of(
				new HospitalMaster(2,"abc")).collect(Collectors.toList()));
		assertEquals(1, hospitalService.getHospitals().size());
	}
	
	@Test
	void MockApi() throws Exception {
		when(hospitalMasterRepository.findAll()).thenReturn(Stream.of(
				new HospitalMaster(2,"abc")).collect(Collectors.toList()));
		ResponseEntity<String> response=restTemplate.getForEntity("/getHospitals", String.class);
		System.out.println(response.getBody());
		assertEquals(response.getStatusCode(), HttpStatus.OK);
	}

}
