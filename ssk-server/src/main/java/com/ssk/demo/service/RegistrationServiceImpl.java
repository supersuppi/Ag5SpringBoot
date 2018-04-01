package com.ssk.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssk.demo.entity.User;
import com.ssk.demo.repository.UserRepository;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	UserRepository userRepo;
	
	@Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public User register(User user) {
		//Encode password before save
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUser() {
		return userRepo.findAll();
	}

}
