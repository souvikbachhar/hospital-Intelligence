package com.healthcareIntelligence.myapp.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.healthcareIntelligence.myapp.constants.AppConstants;
import com.healthcareIntelligence.myapp.entity.User;
import com.healthcareIntelligence.myapp.repo.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public Map<String,Object> validateCredentials(Map<String, Object> requestMap) {
		Map<String,Object> response= new LinkedHashMap<>();
		try{
			/*response.put("authenticationStatus",userRepository.findByUserNameIgnoreCaseAndUserPassword(
					requestMap.get("userName").toString(), requestMap.get("userPassword").toString())
					.size()>0?true:false);*/
			List<User> user=userRepository.findByUserNameIgnoreCase(requestMap.get("userName").toString());
			if(user.size()>0){
				response.put("userNameValid",true);
				response.put("authencticationStatus",
						BCrypt.checkpw(requestMap.get("userPassword").toString(), user.get(0).getUserPassword()));
			}
			else{
				response.put("userNameValid",false);
			}
			response.put(AppConstants.STATUS, AppConstants.SUCCESS);
		}catch (Exception e) {
			response.clear();
			response.put(AppConstants.STATUS, AppConstants.FAILED);
			response.put(AppConstants.ERROR, e.getMessage());
		}
		return response;
	}
}
