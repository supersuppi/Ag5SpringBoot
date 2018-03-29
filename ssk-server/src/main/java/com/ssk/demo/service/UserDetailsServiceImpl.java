package com.ssk.demo.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.User;

import com.ssk.demo.entity.ApplicationUser;
import com.ssk.demo.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	private UserRepository userRepository;

	public UserDetailsServiceImpl(UserRepository applicationUserRepository) {
		this.userRepository = applicationUserRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		ApplicationUser applicationUser = userRepository.findByUserEmail(email);
		if (applicationUser == null) {
			throw new UsernameNotFoundException(email);
		}
		return new User(applicationUser.getEmail(), applicationUser.getPassword(), new ArrayList<>());
	}
}