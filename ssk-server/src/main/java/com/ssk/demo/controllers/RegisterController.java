package com.ssk.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssk.demo.dto.RegistrationDTO;
import com.ssk.demo.entity.User;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/register"})
public class RegisterController extends BaseController {
	
	@PostMapping
	public ResponseEntity<?> registerUser(@RequestBody User payload) {
		 
		//User user = payload.getUser();
		
		System.out.println(payload.getEmail());
		 
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
}
