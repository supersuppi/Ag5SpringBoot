package com.ssk.demo.dto;

import lombok.Data;

@Data
public class LoginDTO {
	private String username;
	private String role;
	private String token;
	
	public LoginDTO(String username, String role, String token) {
		super();
		this.username = username;
		this.role = role;
		this.token = token;
	}
	
	
}
