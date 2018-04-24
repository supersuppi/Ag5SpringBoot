package com.ssk.demo.security;

public class SecurityConstants {
	public static final String SECRET = "SecretKeyToGenJWTs";
	public static final long EXPIRATION_TIME = 3600000; // 1 hour
	public static final String TOKEN_PREFIX = "Bearer ";
	public static final String HEADER_STRING = "Authorization";
	//security bypass URLS
	public static final String SIGN_UP_URL = "/register";
	public static final String PACKAGE_URL = "/package";
}
