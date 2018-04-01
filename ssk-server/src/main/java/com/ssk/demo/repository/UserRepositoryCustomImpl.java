package com.ssk.demo.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.ssk.demo.entity.User;

public class UserRepositoryCustomImpl implements UserRepositoryCustom {

	@PersistenceContext
    EntityManager entityManager;
	
	@Transactional(readOnly = true)
	@Override
	public User findByUserEmail(String email) {
		 Query query = entityManager.createNativeQuery("SELECT * FROM USERS WHERE EMAIL = ?", User.class);
	        query.setParameter(1, email);
	        return (User) query.getSingleResult();
	}

}
