package com.ssk.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssk.demo.entity.User;
import com.ssk.demo.service.RegistrationService;

@RestController
@RequestMapping({"/register"})
public class RegisterController extends BaseController {
	
	@Autowired
	RegistrationService regService;
	
	@PostMapping
	public ResponseEntity<?> registerUser(@RequestBody User payload) {
		logger.info("Register User -", payload.getEmail());
		
		User user = regService.register(payload);
		
		if (user == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
}
