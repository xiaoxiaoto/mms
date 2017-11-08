package com.aoto.business.allocationms.allocationlist.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.allocationms.allocationlist.repository.pojo.AllocationList;
import com.aoto.business.allocationms.allocationlist.service.bo.AllocationListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: IAllocationListService  
* @Description: 调拨单
* @date 2017年3月25日  
*    
**/ 
public interface IAllocationListService {
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllAllocationLists  
	* @Description: 查询所有调拨单
	* @return  List<AllocationList>
	* @throws  
	*/ 
	public List<AllocationList> queryAllAllocationLists();
	
	/**  
	* @Title: queryAllAllocationListsForTable  
	* @Description:查询所有调拨单(前端数据渲染)
	* @return  Map<String,List<AllocationListBo>>
	* @throws  
	*/ 
	public Map<String, List<AllocationListBo>> queryAllAllocationListsForTable();
	
	/**  
	* @Title: queryAllocationListByPk  
	* @Description: 通过主键查询调拨单
	* @param id
	* @return  AllocationList
	* @throws  
	*/ 
	public AllocationListBo queryAllocationListByPk(Serializable id);
	
	/**  
	* @Title: queryAllocationListByAID  
	* @Description: 根据调拨申请ID查询调拨明细
	* @param id
	* @return  List<AllocationList>
	* @throws  
	*/ 
	public List<AllocationList> queryAllocationListsByAid(int aid);
	
	/**  
	* @Title: saveAllocationList  
	* @Description: 保存调拨单
	* @param allocationList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveAllocationList(AllocationList allocationList);
	
	/**  
	* @Title: saveAllocationListByAid  
	* @Description: 根据调拨申请生成调拨单 
	* @param aid
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> saveAllocationListByAid(int aid);
	
	/**  
	* @Title: deleteAllocationList  
	* @Description: 删除调拨单 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteAllocationList(Serializable id);
	
	/**  
	* @Title: modifyAllocationList  
	* @Description: 修改调拨单
	* @param allocationList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyAllocationList(AllocationList allocationList);

}
