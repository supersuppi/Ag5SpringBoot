package com.ssk.demo.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Data
@Entity
public class UserLicense {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="ID")
	private Long id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "USER_ID")
	private User userID;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "LICENSE_ID")
	private License lisenseID;
	
	@Temporal(TemporalType.DATE)
    @Column(name = "PURCHASE_DATE")
	private Date purchaseDate;

}
