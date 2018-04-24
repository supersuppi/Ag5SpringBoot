package com.ssk.demo;

import java.util.HashSet;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssk.demo.entity.Product;
import com.ssk.demo.repository.PackageRepository;
import com.ssk.demo.repository.ProductRepository;
import com.ssk.demo.utils.JWTHelper;
import com.ssk.demo.entity.SPackage;

@RestController
@SpringBootApplication
public class Ng5demoApplication {

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(Ng5demoApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String  get() {
		return "hello";
	}
}
