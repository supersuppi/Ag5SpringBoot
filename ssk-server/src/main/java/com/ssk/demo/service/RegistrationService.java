package com.ssk.demo.service;

import java.util.List;

import com.ssk.demo.entity.ApplicationUser;

public interface RegistrationService {
	ApplicationUser register(ApplicationUser user);
	List<ApplicationUser> getAllUser();
}
