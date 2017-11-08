package com.aoto.business.purchasems.applysdetails.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.applysdetails.service.bo.ApplysDetailBo;


/**  
* @ClassName: IPurchaseApplysDetailService  
* @Description: 采购申请明细管理  
* @date 2017年3月29日  
*    
**/ 
public interface IApplysDetailService {
	
	/**  
	* @Title: queryAllApplysDetails  
	* @Description: 查询所有采购申请明细 
	* @return  List<ApplysDetailBo>
	* @throws  
	*/ 
	public List<ApplysDetailBo> queryAllApplysDetails();
	
	/**  
	* @Title: queryApplysDetailByPk  
	* @Description: 根据主键查询采购申请明细 
	* @param id
	* @return  ApplysDetail
	* @throws  
	*/ 
	public ApplysDetail queryApplysDetailByPk(Serializable id);
	
	/**  
	* @Title: queryApplysDetailsByAid  
	* @Description: 根据申请编号查询采购申请明细 
	* @param aid
	* @return  List<ApplysDetail>
	* @throws  
	*/ 
	public List<ApplysDetail>queryApplysDetailsByAid(int aid);
	
	/**  
	* @Title: queryApplyDetailsByAidForTable  
	* @Description: 根据申请编号查询申请明细(前端数据渲染)
	* @param aid
	* @return  List<ApplyDetailBo>
	* @throws  
	*/ 
	public Map<String, List<ApplysDetailBo>> queryApplyDetailsByAidForTable(int aid) ;
	
	
	/**  
	* @Title: saveApplysDetail  
	* @Description: 保存采购申请明细 
	* @param applysDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveApplysDetail(ApplysDetail applysDetail);
	
	/**  
	* @Title: deleteApplysDetail  
	* @Description: 删除采购申请明细 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteApplysDetail(Serializable id);
	
	/**  
	* @Title: modifyApplysDetail  
	* @Description: 修改采购申请明细
	* @param applysDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyApplysDetail(ApplysDetail applysDetail);
}
