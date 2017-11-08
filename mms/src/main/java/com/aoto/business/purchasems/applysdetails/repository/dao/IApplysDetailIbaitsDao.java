package com.aoto.business.purchasems.applysdetails.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
@Mapper
public interface IApplysDetailIbaitsDao{
	/**  
	* @Title: queryPurchaseApplysDetailsByAid  
	* @Description: 根据申请编号查询申请明细 
	* @param aid
	* @return  List<PurchaseApplysDetail>
	* @throws  
	*/ 
	public List<ApplysDetail>  queryApplysDetailsByAid(@Param("aid") int aid);
	
	/**  
	* @Title: deleteByAid  
	* @Description: 根据申请编号删除采购申请明细 
	* @param aid  void
	* @throws  
	*/ 
	public int deleteByAid(@Param("aid")int aid);
}
