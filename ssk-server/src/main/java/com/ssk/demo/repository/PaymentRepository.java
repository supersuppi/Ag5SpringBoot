package com.ssk.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssk.demo.entity.PaymentInfo;
import com.ssk.demo.entity.User;

public interface PaymentRepository extends JpaRepository<PaymentInfo, Long> {
	
}
