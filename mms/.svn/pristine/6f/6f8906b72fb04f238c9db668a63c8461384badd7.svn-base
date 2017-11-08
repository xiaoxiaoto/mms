package com.aoto.business.purchasems.purchaseapplys.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.allocationms.allocationapplys.service.bo.AllocationApplyBo;
import com.aoto.business.purchasems.purchaseapplys.repository.pojo.PurchaseApply;
import com.aoto.business.purchasems.purchaseapplys.service.bo.PurchaseApplyBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: IPurchaseApplyService  
* @Description: 采购申请管理 
* @date 2017年3月25日  
*    
**/ 
public interface IPurchaseApplyService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	
	/**  
	* @Title: queryAllPurchaseApplys  
	* @Description: 查询所有采购申请 
	* @return  List<PurchaseApply>
	* @throws  
	*/ 
	public List<PurchaseApply> queryAllPurchaseApplys();
	
	/**  
	* @Title: queryAllPurchaseApplysForTable  
	* @Description: 查询所有采购申请(前台数据展示)  
	* @return  Map<String,List<PurchaseApplyBo>>
	* @throws  
	*/ 
	public Map<String, List<PurchaseApplyBo>> queryAllPurchaseApplysForTable();
	
	/**  
	* @Title: queryPurchaseApplyByPk  
	* @Description: 根据主键查询采购申请
	* @param id
	* @return  PurchaseApply
	* @throws  
	*/ 
	public PurchaseApplyBo queryPurchaseApplyByPk(Serializable id);
	
	/**  
	* @Title: savePurchaseApply  
	* @Description: 保存采购申请 
	* @param purchaseApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> savePurchaseApply(PurchaseApplyBo purchaseApplyBo);
	
	/**  
	* @Title: deletePurchaseApply  
	* @Description: 删除采购申请 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deletePurchaseApply(Serializable id);
	
	/**  
	* @Title: modifyPurchaseApply  
	* @Description: 修改采购申请
	* @param purchaseApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyPurchaseApply(PurchaseApply purchaseApply);
	
	/**  
	* @Title: modifyPurchaseApplyOfDetails  
	* @Description: 修改采购申请
	* @param purchaseApplyBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> modifyPurchaseApplyOfDetails(PurchaseApplyBo purchaseApplyBo);

}
