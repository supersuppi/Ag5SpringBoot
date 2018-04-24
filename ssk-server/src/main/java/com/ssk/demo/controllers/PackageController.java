package com.ssk.demo.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssk.demo.dto.PackageDTO;
import com.ssk.demo.entity.SPackage;
import com.ssk.demo.entity.User;
import com.ssk.demo.service.PackageService;
import com.ssk.demo.service.RegistrationService;

@RestController
@RequestMapping({"/package"})
public class PackageController extends BaseController {
	
	@Autowired
	PackageService packageService;
	

	@GetMapping
	public ResponseEntity<List<PackageDTO>> getPackages() {
		logger.info("in getPackages Controller");
		
		List<PackageDTO> packages = packageService.getPackages();
		
		if (packages == null || packages.size() == 0) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		
		ResponseEntity<List<PackageDTO>> responseEntity = new ResponseEntity<>(packages,HttpStatus.OK);
		
		return responseEntity;

	}
	
}
