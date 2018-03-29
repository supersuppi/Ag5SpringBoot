package com.ssk.demo.repository;

import com.ssk.demo.entity.ApplicationUser;

public interface UserRepositoryCustom {
	ApplicationUser findByUserEmail(String email);
}
