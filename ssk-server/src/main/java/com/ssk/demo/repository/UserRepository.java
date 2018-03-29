package com.ssk.demo.repository;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ssk.demo.entity.ApplicationUser;

@Repository
public interface UserRepository extends JpaRepository<ApplicationUser, Long>, UserRepositoryCustom {

}
