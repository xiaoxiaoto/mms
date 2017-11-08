package com.aoto.business.inventoryms.storagelist.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.inventoryms.storagelist.repository.pojo.StorageList;
import com.aoto.business.inventoryms.storagelist.service.bo.StorageListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;



/**  
* @ClassName: IStorageListService  
* @Description: 入库清单管理  
* @date 2017年3月28日  
*    
**/ 
public interface IStorageListService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllStorageLists  
	* @Description:查询所有入库清单
	* @return  List<StorageList>
	* @throws  
	*/ 
	public List<StorageList> queryAllStorageLists();
	
	/**  
	* @Title: queryAllStorageListsForTable  
	* @Description: 查询所有入库清单信息(前台数据展示) 
	* @return  Map<String,List<StorageList>>
	* @throws  
	*/ 
	public Map<String, List<StorageListBo>> queryAllStorageListsForTable();
	
	/**  
	* @Title: queryStorageListByPk  
	* @Description: 根据主键查询入库清单 
	* @param id
	* @return  StorageListBo
	* @throws  
	*/ 
	public StorageListBo queryStorageListByPk(Serializable id);
	
	/**  
	* @Title: queryStorageListsByEid  
	* @Description: 根据设备编号查询入库清单
	* @param eid
	* @return  List<StorageList>
	* @throws  
	*/ 
	public List<StorageList> queryStorageListsByEid(int eid);
	
	/**  
	* @Title: queryStorageListsByWid  
	* @Description: 根据仓库编号查询入库清单 
	* @param wid
	* @return  List<StorageList>
	* @throws  
	*/ 
	public List<StorageList> queryStorageListsByWid(int wid);
	
	/**  
	* @Title: queryStorageListsBySid  
	* @Description: 根据垛位编号查询入库清单 
	* @param Sid
	* @return  List<StorageList>
	* @throws  
	*/ 
	public List<StorageList> queryStorageListsBySid(int sid);
	
	/**  
	* @Title: saveStorageList  
	* @Description: 保存入库清单 
	* @param storageList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveStorageList(StorageList storageList);
	
	/**  
	* @Title: deleteStorageList  
	* @Description: 删除入库清单
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteStorageList(Serializable id);
	
	/**  
	* @Title: modifyStorageList  
	* @Description: 修改入库清单
	* @param storageList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyStorageList(StorageList storageList);
	
}
