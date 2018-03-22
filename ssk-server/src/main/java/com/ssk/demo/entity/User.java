package com.ssk.demo.entity;

import lombok.Data;

@Data
public class User {
	private String firstName;
	private String lastName;
	private Number phone;
	private String email;
	private String password;
	private String city;
	private String country;
	private PaymentInfo payment;
}
