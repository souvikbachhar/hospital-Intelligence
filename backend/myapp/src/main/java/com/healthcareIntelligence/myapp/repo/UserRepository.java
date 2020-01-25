package com.healthcareIntelligence.myapp.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.healthcareIntelligence.myapp.entity.User;

public interface UserRepository<C> extends CrudRepository<User, Long>{
	
	List<User> findByUserNameIgnoreCaseAndUserPassword(String userName,String userPassword);
	
	List<User> findByUserNameIgnoreCase(String userName);

}
