package com.aoto.business.warehousems.warehouses.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
@Mapper
public interface IWarehouseIbaitsDao{
	
	
	
	/**  
	* @Title: queryWarehousesByWname  
	* @Description: 根据仓库名称查询查询仓库信息
	* @param name
	* @return  List<Warehouse>
	* @throws  
	*/ 
	//@Select("select *  from mms_warehouses where wname=#{name}")
	public List<Warehouse> queryWarehousesByWname(@Param("name") String name);
	
	/**  
	* @Title: queryWarehousesByWid  
	* @Description: 根据仓库编码查询仓库信息
	* @param code
	* @return  List<Warehouse>
	* @throws  
	*/ 
	public List<Warehouse> queryWarehousesByWid(@Param("code") String code);
}
