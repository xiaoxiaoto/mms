package com.aoto.business.inventoryms.applicationillustrate.repository.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mms_applicationillustrate")
public class ApplicationIllustrate implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="company")
	private String company;
	@Column(name="department")
	private String  department;
	@Column(name="responsibleperson")
	private int responsiblePerson;
	@Column(name="usedate")
	private String  useDate;
	@Column(name="eid")
	private int   eid;
	@Column(name="instructions")
	private String  instructions;
	@Column(name="state")
	private String  state;
	@Column(name="createuser")
	private int  createUser;
	@Column(name="createdate")
	private String  createDate;
	@Column(name="flag")
	private String  flag;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public int getResponsiblePerson() {
		return responsiblePerson;
	}
	public void setResponsiblePerson(int responsiblePerson) {
		this.responsiblePerson = responsiblePerson;
	}
	public String getUseDate() {
		return useDate;
	}
	public void setUseDate(String useDate) {
		this.useDate = useDate;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public String getInstructions() {
		return instructions;
	}
	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
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
