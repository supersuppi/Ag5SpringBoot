package com.ssk.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssk.demo.dto.PackageDTO;
import com.ssk.demo.entity.SPackage;
import com.ssk.demo.repository.PackageRepository;

@Service
public class PackageServiceImpl implements PackageService {

	@Autowired
	PackageRepository packageRepo;
	
	@Autowired
    private ModelMapper modelMapper;

	@Override
	public List<PackageDTO> getPackages() {
		
		List<SPackage> packages = packageRepo.findAll();
		
		return packages.stream()
        .map(sPackage -> convertToDto(sPackage))
        .collect(Collectors.toList());
	}
	
	private PackageDTO convertToDto(SPackage sPackage) {
		PackageDTO packageDto = modelMapper.map(sPackage, PackageDTO.class);
	    return packageDto;
	}

}
