package com.ssk.demo.utils;

import static com.ssk.demo.security.SecurityConstants.EXPIRATION_TIME;
import static com.ssk.demo.security.SecurityConstants.SECRET;

import java.security.Key;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


public class JWTHelper {

	//Sample method to construct a JWT
	public static String createJWT(String subject) {
	 
		return Jwts.builder()
		.setSubject(subject)
		.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
		.signWith(SignatureAlgorithm.HS512, SECRET.getBytes())
		.compact();
	}
	
	private void parseJWT(String jwt) {
		 
	    //This line will throw an exception if it is not a signed JWS (as expected)
	    Claims claims = Jwts.parser()         
	       .setSigningKey(DatatypeConverter.parseBase64Binary(SECRET))
	       .parseClaimsJws(jwt).getBody();
	    System.out.println("ID: " + claims.getId());
	    System.out.println("Subject: " + claims.getSubject());
	    System.out.println("Issuer: " + claims.getIssuer());
	    System.out.println("Expiration: " + claims.getExpiration());
	}
}
