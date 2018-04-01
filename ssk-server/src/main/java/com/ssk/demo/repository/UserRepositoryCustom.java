package com.ssk.demo.repository;

import com.ssk.demo.entity.User;

public interface UserRepositoryCustom {
	User findByUserEmail(String email);
}
