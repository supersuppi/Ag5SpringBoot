package com.ssk.demo.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class PaymentInfo {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String cardNumber;
	private String cardExpDate;
	
	@OneToOne(mappedBy = "payment")
	private ApplicationUser user;
	
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardExpDate() {
		return cardExpDate;
	}
	public void setCardExpDate(String cardExpDate) {
		this.cardExpDate = cardExpDate;
	}
	public ApplicationUser getUser() {
		return user;
	}
	public void setUser(ApplicationUser user) {
		this.user = user;
	}
	
	
	
	
}
