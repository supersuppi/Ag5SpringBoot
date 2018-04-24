package com.ssk.demo.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "PACKAGE")
public class SPackage {
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Long id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="VALIDITY")
	private String validity;
	
	@Column(name="PRICE")
	private int price = 0;
	
	@Column(name="ACTIVE")
	private int active = 1;
	
	@OneToMany(cascade = CascadeType.ALL,
            fetch = FetchType.LAZY,
            mappedBy = "productPackage")
	@JsonManagedReference // to avoid infinite recursion by json convert error when sending this as response
    private Set<Product> products;
	
}
