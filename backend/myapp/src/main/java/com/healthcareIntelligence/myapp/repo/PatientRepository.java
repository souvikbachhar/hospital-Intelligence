package com.healthcareIntelligence.myapp.repo;

import org.springframework.data.repository.CrudRepository;

import com.healthcareIntelligence.myapp.entity.Patient;

public interface PatientRepository <C> extends CrudRepository<Patient, Long> {

}
