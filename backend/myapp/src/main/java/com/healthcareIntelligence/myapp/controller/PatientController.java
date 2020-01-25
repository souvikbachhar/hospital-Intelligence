package com.healthcareIntelligence.myapp.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.healthcareIntelligence.myapp.service.PatientService;
import com.healthcareIntelligence.myapp.vo.PatientVO;

@RestController
public class PatientController {
	
	@Autowired
	PatientService patientService;

	@RequestMapping(value = "/registerPatient", method = RequestMethod.POST)
    public Map<String,Object> registerPatient(@RequestBody PatientVO patientVO){
        return patientService.registerPatient(patientVO);
    }
}
