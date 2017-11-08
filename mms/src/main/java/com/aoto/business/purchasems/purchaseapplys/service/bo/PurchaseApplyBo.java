package com.aoto.business.purchasems.purchaseapplys.service.bo;

import java.io.Serializable;
import java.util.List;

import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;



public class PurchaseApplyBo implements Serializable {
	private static final long serialVersionUID = 1L;
	private int id;
	private String equipments;
	private String reason;
	private String circulation;
	private String circulationValue;
	private int applicant;
	private String applyDate;
	private String arrivalDate;
	private int createUser;
	private String createDate;
	private String flag;
	private List<ApplysDetail> applyDetails;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEquipments() {
		return equipments;
	}
	public void setEquipments(String equipments) {
		this.equipments = equipments;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getCirculation() {
		return circulation;
	}
	public void setCirculation(String circulation) {
		this.circulation = circulation;
	}
	public String getCirculationValue() {
		return circulationValue;
	}
	public void setCirculationValue(String circulationValue) {
		this.circulationValue = circulationValue;
	}
	public int getApplicant() {
		return applicant;
	}
	public void setApplicant(int applicant) {
		this.applicant = applicant;
	}
	public String getApplyDate() {
		return applyDate;
	}
	public void setApplyDate(String applyDate) {
		this.applyDate = applyDate;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
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
	public List<ApplysDetail> getApplyDetails() {
		return applyDetails;
	}
	public void setApplyDetails(List<ApplysDetail> applyDetails) {
		this.applyDetails = applyDetails;
	}
}
