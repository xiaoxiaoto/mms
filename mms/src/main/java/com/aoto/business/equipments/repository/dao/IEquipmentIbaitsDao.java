package com.aoto.business.equipments.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.equipments.repository.pojo.Equipment;
@Mapper
public interface IEquipmentIbaitsDao{
	
	
	/**  
	* @Title: queryEquipmentsByEname  
	* @Description: 根据设备名称查询设备信息 
	* @param name
	* @return  List<Warehouse>
	* @throws  
	*/ 
	public List<Equipment> queryEquipmentsByEname(@Param("name") String name);
	
	/**  
	* @Title: queryEquipmentsByEclassify  
	* @Description: 根据设备类型查询设备信息
	* @param classify
	* @return  List<Warehouse>
	* @throws  
	*/ 
	public List<Equipment> queryEquipmentsByEclassify(@Param("classify") String classify);
}
