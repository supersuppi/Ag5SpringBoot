package com.ssk.demo.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PackageDTO {

	private String name;
	private String validity;
	private String price;
	private List<ProductDTO> products;
}
