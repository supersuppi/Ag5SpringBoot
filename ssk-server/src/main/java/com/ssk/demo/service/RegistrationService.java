package com.ssk.demo.service;

import java.util.List;

import com.ssk.demo.entity.User;

public interface RegistrationService {
	User register(User user);
	List<User> getAllUser();
}
