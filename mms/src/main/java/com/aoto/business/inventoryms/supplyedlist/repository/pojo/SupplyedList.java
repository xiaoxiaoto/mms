package com.aoto.business.inventoryms.supplyedlist.repository.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mms_supplyedlist")
public class SupplyedList implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name="eid")
	private int  eid;
	@Column(name="wid")
	private  int wid;
	@Column(name="sid")
	private int  sid;
	@Column(name="aid")
	private int aid;
	@Column(name="operator")
	private  int operator;
	@Column(name="supplyeddate")
	private  String supplyedDate;
	@Column(name="applicant")
	private int  applicant;
	@Column(name="quantity")
	private int  quantity;
	@Column(name="createuser")
	private int  createUser;
	@Column(name="state")
	private String  state;
	@Column(name="createdate")
	private String  createDate;
	@Column(name="flag")
	private String   flag;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEid() {
		return eid;
	}
	public void setEid(int eid) {
		this.eid = eid;
	}
	public int getWid() {
		return wid;
	}
	public void setWid(int wid) {
		this.wid = wid;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public int getOperator() {
		return operator;
	}
	public void setOperator(int operator) {
		this.operator = operator;
	}
	public String getSupplyedDate() {
		return supplyedDate;
	}
	public void setSupplyedDate(String supplyedDate) {
		this.supplyedDate = supplyedDate;
	}
	public int getApplicant() {
		return applicant;
	}
	public void setApplicant(int applicant) {
		this.applicant = applicant;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getCreateUser() {
		return createUser;
	}
	public void setCreateUser(int createUser) {
		this.createUser = createUser;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
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
