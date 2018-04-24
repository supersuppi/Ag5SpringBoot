package com.ssk.demo.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Product {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Long id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="ACTIVE")
	private int active = 1;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PACKAGE_ID")
	@JsonBackReference // to avoid infinite recursion by json convert error when sending this as response
    private SPackage productPackage;
}
