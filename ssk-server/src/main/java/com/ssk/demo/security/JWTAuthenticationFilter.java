package com.ssk.demo.security;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssk.demo.dto.LoginDTO;
import com.ssk.demo.entity.User;
import com.ssk.demo.utils.JWTHelper;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req,
												HttpServletResponse res) throws AuthenticationException {
		try {
			User creds = new ObjectMapper()
                    .readValue(req.getInputStream(), User.class);

			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							creds.getEmail(),
							creds.getPassword(),
							new ArrayList<>())
			);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest req,
											HttpServletResponse res,
											FilterChain chain,
											Authentication auth) throws IOException, ServletException {

		User appUser = (User) auth.getPrincipal();
		
		res.getWriter().write(new ObjectMapper().writeValueAsString((handleSuccess(appUser))));
	}
	
	private LoginDTO handleSuccess(User appUser) {

		String token = JWTHelper.createJWT(appUser.getUsername());

		LoginDTO login = null;
		
		if(appUser.getAdmin() == 1) {
			login = new LoginDTO(appUser.getUsername(), "ADMIN", token);
		} else {
			login = new LoginDTO(appUser.getUsername(), "USER", token);
		}
		
		return login;
	}
}
