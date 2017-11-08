package com.aoto.business.inventoryms.storagelist.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.inventoryms.storagelist.repository.pojo.StorageList;
@Mapper
public interface IStorageListIbaitsDao{
	
	public List<StorageList> queryStorageListsByEid(@Param("eid") int eid);
	
	public List<StorageList> queryStorageListsByWid(@Param("wid") int wid);
	
	public List<StorageList> queryStorageListsBySid(@Param("sid") int sid);
}
