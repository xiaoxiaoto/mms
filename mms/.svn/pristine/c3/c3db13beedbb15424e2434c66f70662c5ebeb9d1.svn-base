package com.aoto.business.allocationms.applysdetails.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.allocationms.applysdetails.service.bo.ApplyDetailBo;

/**  
* @ClassName: IApplyDetailService  
* @Description: 调拨申请明细 
* @date 2017年3月25日  
*    
**/ 
public interface IApplyDetailService {
	
	/**  
	* @Title: queryAllApplyDetails  
	* @Description: 查询所有调拨申请明细 
	* @return  List<ApplyDetail>
	* @throws  
	*/ 
	public List<ApplyDetailBo> queryAllApplyDetails();
	
	/**  
	* @Title: queryAllApplyDetailsForTable  
	* @Description: 查询所有调拨申请明细 (前端数据渲染)
	* @return  List<ApplyDetailBo>
	* @throws  
	*/ 
	public Map<String, List<ApplyDetailBo>> queryAllApplyDetailsForTable();
	
	/**  
	* @Title: queryApplyDetailByPk  
	* @Description: 根据主键查询调拨申请明细 
	* @param id
	* @return  ApplyDetail
	* @throws  
	*/ 
	public ApplyDetail queryApplyDetailByPk(Serializable id);
	
	/**  
	* @Title: queryApplyDetailsByAid  
	* @Description:  根据申请编号查询申请明细
	* @param aid
	* @return  List<ApplyDetail>
	* @throws  
	*/ 
	public List<ApplyDetail>queryApplyDetailsByAid(int aid);
	
	/**  
	* @Title: queryApplyDetailsByAidForTable  
	* @Description: 根据申请编号查询申请明细(前端数据渲染)
	* @param aid
	* @return  List<ApplyDetailBo>
	* @throws  
	*/ 
	public Map<String, List<ApplyDetailBo>> queryApplyDetailsByAidForTable(int aid) ;
	
	/**  
	* @Title: saveApplyDetail  
	* @Description:保存调拨申请明细 
	* @param applyDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveApplyDetail(ApplyDetail applyDetail);
	
	/**  
	* @Title: deleteApplyDetail  
	* @Description: 删除调拨申请明细  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteApplyDetail(Serializable id);
	/**  
	 * @Title: deleteApplyDetailByAid  
	 * @Description: 根据调拨编号删除调拨申请明细  
	 * @param id
	 * @return  Map<String,Object>
	 * @throws  
	 */ 
	public Map<String,Object> deleteApplyDetailByAid(int aid);
	
	/**  
	* @Title: modifyApplyDetail  
	* @Description: 修改调拨申请明细  
	* @param applyDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyApplyDetail(ApplyDetail applyDetail);

}
