package com.aoto.business.allocationms.allocationapplys.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
import com.aoto.business.allocationms.allocationapplys.service.bo.AllocationApplyBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: IAllocationApplyService  
* @Description: 调拨申请管理 
* @date 2017年3月25日  
*    
**/ 
public interface IAllocationApplyService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllAllocationApplys  
	* @Description: 查询所有调拨申请
	* @return  List<AllocationApply>
	* @throws  
	*/ 
	public List<AllocationApply> queryAllAllocationApplys();
	
	/**  
	* @Title: queryAllAllocationApplysForTable  
	* @Description: 查询所有调拨申请(前端数据展示)
	* @return  Map<String, List<AllocationApply>> 
	* @throws  
	*/ 
	public Map<String, List<AllocationApplyBo>>  queryAllAllocationApplysForTable();
	
	/**  
	* @Title: queryAllocationApplyByPk  
	* @Description: 根据主键查询调拨申请 
	* @param id
	* @return  Stack
	* @throws  
	*/ 
	public AllocationApplyBo queryAllocationApplyByPk(Serializable id);
	
	/**  
	* @Title: saveAllocationApply  
	* @Description: 保存调拨申请 
	* @param allocationApplyBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveAllocationApply(AllocationApplyBo allocationApplyBo);
	
	/**  
	* @Title: deleteAllocationApply  
	* @Description: 删除调拨申请 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteAllocationApply(Serializable id);
	
	/**  
	* @Title: modifyAllocationApply  
	* @Description: 修改调拨申请 
	* @param allocationApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyAllocationApply(AllocationApply allocationApply);

	/**  
	* @Title: modifyAllocationApply  
	* @Description: 修改调拨申请 
	* @param allocationApplyBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> modifyAllocationApplyOfDetails(AllocationApplyBo allocationApplyBo);

}
