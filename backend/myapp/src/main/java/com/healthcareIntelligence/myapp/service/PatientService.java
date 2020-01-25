package com.healthcareIntelligence.myapp.service;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcareIntelligence.myapp.constants.AppConstants;
import com.healthcareIntelligence.myapp.entity.Patient;
import com.healthcareIntelligence.myapp.repo.PatientRepository;
import com.healthcareIntelligence.myapp.vo.PatientVO;

@Service
public class PatientService {

	@Autowired
	PatientRepository patientRepository;
	
	public Map<String, Object> registerPatient(PatientVO patientVO) {
		
		Map<String,Object> response= new LinkedHashMap<>();
		try{
			Patient patient= new Patient();
			patient= generatePatientDetailsData(patient,patientVO);
			patient=(Patient) patientRepository.save(patient);
			response.put("patientID", patient.getPatientID());
			response.put(AppConstants.STATUS, AppConstants.SUCCESS);
		}catch (Exception e) {
			response.clear();
			response.put(AppConstants.STATUS, AppConstants.FAILED);
			response.put(AppConstants.ERROR, e.getMessage());
		}
		return response;
	}

	private Patient generatePatientDetailsData(Patient patient, PatientVO patientVO) {

		patient.setFirstName(patientVO.getFirstName());
		patient.setLastName(patientVO.getLastName());
		patient.setContactNo(patientVO.getContactNo());
		patient.setGender(patientVO.getGender());
		patient.setAddress(patientVO.getAddress());
		patient.setCity(patientVO.getCity());
		patient.setState(patientVO.getState());
		patient.setCountry(patientVO.getCountry());
		patient.setPincode(patientVO.getPincode());
		patient.setCreatedDate(patientVO.getCreatedDate());
		patient.setAppointmentDate(patientVO.getAppointmentDate());
		patient.setAppointmentTime(patientVO.getAppointmentTime());
		patient.setIssue(patientVO.getIssue());
		patient.setRoomID(patientVO.getRoomID());
		patient.setBloodGroupID(patientVO.getBloodGroupID());
		patient.setMedicineID(patientVO.getMedicineID());
		patient.setTestID(patientVO.getTestID());
		return patient;
	}
}
