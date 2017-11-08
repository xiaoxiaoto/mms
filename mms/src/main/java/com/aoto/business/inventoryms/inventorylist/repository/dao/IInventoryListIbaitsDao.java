package com.aoto.business.inventoryms.inventorylist.repository.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
@Mapper
public interface IInventoryListIbaitsDao{
	
	/**  
	* @Title: queryInventoryListsByEid  
	* @Description: 根据设备编号查询库存信息
	* @param eid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsByEid(@Param("eid") int eid);
	
	/**  
	* @Title: queryInventoryListsByWid  
	* @Description: 根据仓库编号查询库存信息
	* @param wid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsByWid(@Param("wid") int wid);
	
	/**  
	* @Title: queryInventoryListsBySid  
	* @Description:根据垛位编号查询库存信息
	* @param sid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsBySid(@Param("sid") int sid);
	
	/**  
	* @Title: queryInventoryListsBySid  
	* @Description:根据仓库编号和垛位编号查询库存信息
	* @param sid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList>  queryInventoryListsByWSid(@Param("wid")int wid,@Param("sid")int sid);
	
	/**  
	* @Title: deleteAllocationListByWSid  
	* @Description: 根据仓库编号和垛位编号删除库存信息
	* @param wid
	* @param sid
	* @return  int
	* @throws  
	*/ 
	public int deleteInventoryListsByWSid(@Param("wid")int wid,@Param("sid")int sid);
}
