package com.ssk.demo.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.transaction.annotation.Transactional;

import com.ssk.demo.entity.ApplicationUser;

public class UserRepositoryCustomImpl implements UserRepositoryCustom {

	@PersistenceContext
    EntityManager entityManager;
	
	@Transactional(readOnly = true)
	@Override
	public ApplicationUser findByUserEmail(String email) {
		 Query query = entityManager.createNativeQuery("SELECT * FROM USER WHERE EMAIL = ?", ApplicationUser.class);
	        query.setParameter(1, email);
	        return (ApplicationUser) query.getSingleResult();
	}

}
