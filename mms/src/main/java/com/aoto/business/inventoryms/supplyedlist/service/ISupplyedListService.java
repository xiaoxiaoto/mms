package com.aoto.business.inventoryms.supplyedlist.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.inventoryms.supplyedlist.repository.pojo.SupplyedList;
import com.aoto.business.inventoryms.supplyedlist.service.bo.SupplyedListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: ISupplyedListService  
* @Description: 出库清单管理  
* @date 2017年3月28日  
*    
**/ 
public interface ISupplyedListService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllSupplyedLists  
	* @Description: 查询所有出库清单 
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	public List<SupplyedList> queryAllSupplyedLists();
	/**  
	* @Title: queryAllSupplyedListsForTable  
	* @Description: 查询所有出库清单信息(前台数据展示)
	* @return  Map<String,List<SupplyedListBo>>
	* @throws  
	*/ 
	public Map<String, List<SupplyedListBo>> queryAllSupplyedListsForTable();
	/**  
	* @Title: querySupplyedListByPk  
	* @Description: 根据主键查询出库清单 
	* @param id
	* @return  SupplyedListBo
	* @throws  
	*/ 
	public SupplyedListBo querySupplyedListByPk(Serializable id);
	
	/**  
	* @Title: querySupplyedListsByEid  
	* @Description: 根据设备编号查询出库清单 
	* @param eid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	public List<SupplyedList> querySupplyedListsByEid(int eid);
	
	/**  
	* @Title: querySupplyedListsByWid  
	* @Description: 根据仓库编号查询出库清单 
	* @param wid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	public List<SupplyedList> querySupplyedListsByWid(int wid);
	
	/**  
	* @Title: querySupplyedListsBySid  
	* @Description: 根据垛位编号查询出库清单 
	* @param sid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	public List<SupplyedList> querySupplyedListsBySid(int sid);
	
	/**  
	* @Title: saveSupplyedList  
	* @Description: 保存出库清单 
	* @param supplyedList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveSupplyedList(SupplyedList supplyedList);
	
	/**  
	* @Title: deleteSupplyedList  
	* @Description: 删除出库清单  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteSupplyedList(Serializable id);
	
	/**  
	* @Title: modifySupplyedList  
	* @Description: 修改出库清单  
	* @param supplyedList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifySupplyedList(SupplyedList supplyedList);
	
}
