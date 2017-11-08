package com.aoto.business.inventoryms.supplyedlist.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.inventoryms.supplyedlist.repository.pojo.SupplyedList;
@Mapper
public interface ISupplyedListIbaitsDao{
	
	public List<SupplyedList> querySupplyedListsByEid(@Param("eid") int eid);
	
	public List<SupplyedList> querySupplyedListsByWid(@Param("wid") int wid);
	
	public List<SupplyedList> querySupplyedListsBySid(@Param("sid") int sid);
}
