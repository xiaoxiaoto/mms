package com.aoto.business.purchasems.purchasereceiptlist.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.purchasems.purchasereceiptlist.repository.pojo.PurchaseReceiptList;
import com.aoto.business.purchasems.purchasereceiptlist.service.bo.PurchaseReceiptListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: IPurchaseReceiptListService  
* @Description: 采购申请回执单管理
* @date 2017年3月29日  
*    
**/ 
public interface IPurchaseReceiptListService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllPurchaseReceiptLists  
	* @Description: 查询所有采购申请回执单 
	* @return  List<PurchaseReceiptList>
	* @throws  
	*/ 
	public List<PurchaseReceiptList> queryAllPurchaseReceiptLists();
	
	/**  
	* @Title: queryAllPurchaseReceiptListsForTable  
	* @Description:查询所有采购申请回执单 (前端数据渲染)
	* @return  Map<String,List<PurchaseReceiptListBo>>
	* @throws  
	*/ 
	public Map<String, List<PurchaseReceiptListBo>> queryAllPurchaseReceiptListsForTable();
	
	/**  
	* @Title: queryPurchaseReceiptListByPk  
	* @Description: 根据主键查询采购申请回执单 
	* @param id
	* @return  PurchaseReceiptList
	* @throws  
	*/ 
	public PurchaseReceiptListBo queryPurchaseReceiptListByPk(Serializable id);
	
	/**  
	* @Title: queryPurchaseReceiptListsByAid  
	* @Description: 根据采购申请编号查询采购申请回执单
	* @param aid
	* @return  List<AllocationList>
	* @throws  
	*/ 
	public List<PurchaseReceiptList> queryPurchaseReceiptListsByAid(int aid);
	
	/**  
	* @Title: savePurchaseReceiptList  
	* @Description: 保存采购申请回执单 
	* @param purchaseReceiptList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> savePurchaseReceiptList(PurchaseReceiptList purchaseReceiptList);
	
	
	
	/**  
	* @Title: savePurchaseReceiptListByAid  
	* @Description: 根据采购申请生成调拨清单
	* @param aid
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> savePurchaseReceiptListByAid(int aid);
	
	/**  
	* @Title: deletePurchaseReceiptList  
	* @Description: 删除采购申请回执单
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deletePurchaseReceiptList(Serializable id);
	
	/**  
	* @Title: modifyPurchaseReceiptList  
	* @Description: 修改采购申请回执单 
	* @param purchaseReceiptList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyPurchaseReceiptList(PurchaseReceiptList purchaseReceiptList);

}
