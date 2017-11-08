package com.aoto.business.allocationms.applysdetails.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
@Mapper
public interface IApplyDetailIbaitsDao{
	/**  
	* @Title: queryApplyDetailsByAid  
	* @Description: 根据申请编号查询申请明细 
	* @param aid
	* @return  List<ApplyDetail>
	* @throws  
	*/ 
	public List<ApplyDetail>  queryApplyDetailsByAid(@Param("aid") int aid);

	/**  
	* @Title: deleteByAid  
	* @Description: 根据调拨编号删除调拨申请明细 
	* @param aid  void
	* @throws  
	*/ 
	public int deleteByAid(@Param("aid")int aid);
}
