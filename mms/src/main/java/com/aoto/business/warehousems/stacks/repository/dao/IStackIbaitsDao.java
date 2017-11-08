package com.aoto.business.warehousems.stacks.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
@Mapper
public interface IStackIbaitsDao{
	
	
	
	/**  
	* @Title: queryStacksByScode  
	* @Description: 根据垛位编号查询垛位信息
	* @param code
	* @return  List<Stack>
	* @throws  
	*/ 
	//@Select("select *  from mms_stacks where scode=#{code}")
	public List<Stack> queryStacksByScode(@Param("code") String code);
	
	/**  
	* @Title: queryStacksByWid  
	* @Description:根据仓库编号查询垛位信息
	* @param wid
	* @return  List<Stack>
	* @throws  
	*/ 
	public List<Stack> queryStacksByWid(@Param("wid") int wid);
	
	/**  
	* @Title: deleteStacksByWid  
	* @Description: 根据仓库编号删除垛位信息
	* @param wid
	* @return  void
	* @throws  
	*/ 
	public int deleteStacksByWid(@Param("wid") int wid);
}
