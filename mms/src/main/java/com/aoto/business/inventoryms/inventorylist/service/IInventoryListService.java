package com.aoto.business.inventoryms.inventorylist.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
import com.aoto.business.inventoryms.inventorylist.service.bo.InventoryListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;



/**  
* @ClassName: IInventoryListService  
* @Description: 库存清单管理  
* @date 2017年3月27日  
*    
**/ 
public interface IInventoryListService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllInventoryLists  
	* @Description:查询所有库存清单信息
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryAllInventoryLists();
	
	/**  
	* @Title: queryAllInventoryListsForTable  
	* @Description: 查询所有库存清单信息(前端数据展示)
	* @return  Map<String,List<InventoryList>>
	* @throws  
	*/ 
	public Map<String, List<InventoryListBo>> queryAllInventoryListsForTable();
	/**  
	* @Title: queryInventoryListByPk  
	* @Description: 根据主键查询库存清单信息
	* @param id
	* @return  InventoryList
	* @throws  
	*/ 
	public InventoryListBo queryInventoryListByPk(Serializable id);
	/**  
	* @Title: queryInventoryListsByEid  
	* @Description: 根据设备编号查询库存清单信息 
	* @param eid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsByEid(int eid);
	
	/**  
	* @Title: queryInventoryListsByWid  
	* @Description: 根据仓库编号查询库存清单信息 
	* @param wid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsByWid(int wid);
	
	/**  
	* @Title: queryInventoryListsBySid  
	* @Description: 根据垛位编号查询库存清单信息
	* @param Sid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	public List<InventoryList> queryInventoryListsBySid(int sid);
	
	/**  
	* @Title: saveInventoryList  
	* @Description: 保存库存清单信息 
	* @param inventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveInventoryList(InventoryList inventoryList);
	
	/**  
	* @Title: deleteInventoryList  
	* @Description: 删除库存清单信息  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteInventoryList(Serializable id);
	
	/**  
	* @Title: modifyInventoryList  
	* @Description: 修改库存清单信息 
	* @param inventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyInventoryList(InventoryList inventoryList);
	
}
