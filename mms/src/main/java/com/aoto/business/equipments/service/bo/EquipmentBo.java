package com.aoto.business.equipments.service.bo;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class EquipmentBo implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String ename;
	private String  eclassify;
	private String  eclassifyValue;
	private String  manufacturer;
	private  String specifications ;
	private String  serialNumber;
	private String  etype;
	private String  etypeValue;
	private  String integrator;
	private  String pnfru;
	private String state;
	private String stateValue;
	private  String life;
	private  int createUser;
	private  String createDate;
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
	public String getEclassifyValue() {
		return eclassifyValue;
	}
	public void setEclassifyValue(String eclassifyValue) {
		this.eclassifyValue = eclassifyValue;
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
	public String getEtypeValue() {
		return etypeValue;
	}
	public void setEtypeValue(String etypeValue) {
		this.etypeValue = etypeValue;
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
	public String getStateValue() {
		return stateValue;
	}
	public void setStateValue(String stateValue) {
		this.stateValue = stateValue;
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
