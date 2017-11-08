package com.aoto.business.equipments.repository.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mms_equipments")
public class Equipment implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="ename")
	private String ename;
	@Column(name="eclassify")
	private String  eclassify;
	@Column(name="manufacturer")
	private String  manufacturer;
	@Column(name="specifications")
	private  String specifications ;
	@Column(name="serialnumber")
	private String  serialNumber;
	@Column(name="etype")
	private String  etype;
	@Column(name="integrator")
	private  String integrator;
	@Column(name="pnfru")
	private  String pnfru;
	@Column(name="state")
	private String state;
	@Column(name="life")
	private  String life;
	@Column(name="createuser")
	private  int createUser;
	@Column(name="createcate")
	private  String createDate;
	@Column(name="flag")
	private  String flag;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public String getEclassify() {
		return eclassify;
	}
	public void setEclassify(String eclassify) {
		this.eclassify = eclassify;
	}
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	public String getSpecifications() {
		return specifications;
	}
	public void setSpecifications(String specifications) {
		this.specifications = specifications;
	}
	public String getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	public String getEtype() {
		return etype;
	}
	public void setEtype(String etype) {
		this.etype = etype;
	}
	public String getIntegrator() {
		return integrator;
	}
	public void setIntegrator(String integrator) {
		this.integrator = integrator;
	}
	public String getPnfru() {
		return pnfru;
	}
	public void setPnfru(String pnfru) {
		this.pnfru = pnfru;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getLife() {
		return life;
	}
	public void setLife(String life) {
		this.life = life;
	}
	public int getCreateUser() {
		return createUser;
	}
	public void setCreateUser(int createUser) {
		this.createUser = createUser;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
}
