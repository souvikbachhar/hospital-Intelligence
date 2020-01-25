package com.healthcareIntelligence.myapp.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.healthcareIntelligence.myapp.service.UserService;

@RestController
public class LoginController {
	
	@Autowired
	UserService userService;

	 @RequestMapping(value = "/validateCredentials", method = RequestMethod.POST)
	    public Map<String,Object> validateCredentials(@RequestBody Map<String,Object> requestMap){
	        return userService.validateCredentials(requestMap);
	    }
}
