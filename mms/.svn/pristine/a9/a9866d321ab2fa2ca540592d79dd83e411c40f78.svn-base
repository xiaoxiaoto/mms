package com.aoto.business.purchasems.applysdetails.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.purchasems.applysdetails.repository.dao.IApplysDetailIbaitsDao;
import com.aoto.business.purchasems.applysdetails.repository.dao.IApplysDetailJpaDao;
import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.applysdetails.service.IApplysDetailService;
import com.aoto.business.purchasems.applysdetails.service.bo.ApplysDetailBo;
import com.aoto.business.purchasems.purchaseapplys.repository.pojo.PurchaseApply;
import com.aoto.business.purchasems.purchaseapplys.service.IPurchaseApplyService;


/**  
* @ClassName: ApplysDetailServiceImpl  
* @Description:  采购申请明细管理
* @date 2017年3月25日  
*    
**/ 
@Service
public class ApplysDetailServiceImpl implements IApplysDetailService {
	@Autowired
	private IApplysDetailIbaitsDao applysDetailIbaitsDao;
	@Autowired
	private IApplysDetailJpaDao applysDetailJpaDao;
	@Autowired
	private IPurchaseApplyService purchaseApplyService;
	@Autowired
	private IEquipmentService equipmentService;
	
	/**  
	* @Title: queryAllApplysDetails  
	* @Description: 查询所有采购申请明细 
	* @return  List<PurchaseApplysDetailBo>
	* @throws  
	*/ 
	@Override
	@Cacheable(value="cache:purchasems", key="'cache:purchasems:queryAllApplysDetails'", unless="#result==null")//创建缓存
	public List<ApplysDetailBo> queryAllApplysDetails() {
		List<ApplysDetailBo> result= new ArrayList<>();
		List<PurchaseApply> purchaseApplys = purchaseApplyService.queryAllPurchaseApplys();
		List<ApplysDetail> applysDetails = applysDetailJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		if(applysDetails!=null&&applysDetails.size()>0){
			for(ApplysDetail applysDetail:applysDetails){
				result.add(convert(applysDetail, purchaseApplys,equipments));
			}
		}
		return result;
	}

	/**  
	* @Title: queryApplysDetailByPk  
	* @Description: 根据主键查询采购申请明细 
	* @param id
	* @return  ApplysDetail
	* @throws  
	*/ 
	@Override
	public ApplysDetail queryApplysDetailByPk(Serializable id) {
		if(id!=null){
			return applysDetailJpaDao.findOne(id);
		}
		return null;
	}

	/**  
	* @Title: queryApplysDetailsByAid  
	* @Description: 根据申请编号查询采购申请明细 
	* @param aid
	* @return  List<ApplysDetail>
	* @throws  
	*/ 
	@Override
	public List<ApplysDetail> queryApplysDetailsByAid(int aid) {
		if(aid!=0){
			return applysDetailIbaitsDao.queryApplysDetailsByAid(aid);
		}
		return null;
	}

	/**  
	 * @Title: queryApplyDetailsByAid  
	 * @Description: 根据申请编号查询申请明细 (前端数据渲染)
	 * @param aid
	 * @return  Map<String, List<ApplyDetailBo>>
	 * @throws  
	 */
	@Override
	public Map<String, List<ApplysDetailBo>> queryApplyDetailsByAidForTable(int aid) {
		Map<String, List<ApplysDetailBo>> result=new HashMap<>();
		if(aid!=0){
			 List<ApplysDetailBo> bos=new  ArrayList<>();
			 List<PurchaseApply> purchaseApplys = purchaseApplyService.queryAllPurchaseApplys();
			 List<ApplysDetail> applyDetails = applysDetailIbaitsDao.queryApplysDetailsByAid(aid);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
				if (applyDetails != null && applyDetails.size() > 0) {
					for (ApplysDetail applysDetail : applyDetails) {
						bos.add(convert(applysDetail,purchaseApplys,equipments));
					}
				}
				result.put("data", bos);
			return result;
		}
		return null;
	}
	
	
	/**  
	* @Title: saveApplysDetail  
	* @Description: 保存采购申请明细 
	* @param applysDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllApplysDetails'")//设置缓存过期
	public Map<String, Object> saveApplysDetail(ApplysDetail applysDetail) {
		Map<String, Object> result=new HashMap<>();
		if(applysDetail!=null){
			ApplysDetail save = applysDetailJpaDao.save(applysDetail);
			if(save!=null){
				result.put("result", 1);
				result.put("data", save);
			}else{
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: deleteApplysDetail  
	* @Description: 删除采购申请明细 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllApplysDetails'")//设置缓存过期
	public Map<String, Object> deleteApplysDetail(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			ApplysDetail one = applysDetailJpaDao.findOne(id);
			if(one!=null){
				try{
					applysDetailJpaDao.delete(id);
					result.put("result", 1);
					result.put("data", one);
				}catch (Exception e) {
					result.put("result", -1);
				}
			}else{
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: modifyApplysDetail  
	* @Description: 修改采购申请明细
	* @param applysDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllApplysDetails'")//设置缓存过期
	public Map<String, Object> modifyApplysDetail(ApplysDetail applysDetail) {
		Map<String, Object> result=new HashMap<>();
		if(applysDetail!=null){
			ApplysDetail save = applysDetailJpaDao.save(applysDetail);
			if(save!=null){
				result.put("result", 1);
				result.put("data", save);
			}else{
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: convert  
	* @Description:实体转Bo 
	* @param applysDetail
	* @param purchaseApplys
	* @return  ApplysDetailBo
	* @throws  
	*/ 
	private ApplysDetailBo convert(ApplysDetail applysDetail,List<PurchaseApply> purchaseApplys,List<Equipment> equipments) {
		ApplysDetailBo applysDetailBo=new ApplysDetailBo();
		if(applysDetail!=null){
			int aid = applysDetail.getAid();
			int createUser = applysDetail.getCreateUser();
			int eid = applysDetail.getEid();
			
			applysDetailBo.setAid(aid);
			applysDetailBo.setCreateDate(applysDetail.getCreateDate());
			applysDetailBo.setCreateUser(createUser);
			applysDetailBo.setEid(eid);
			applysDetailBo.setFlag(applysDetail.getFlag());
			applysDetailBo.setId(applysDetail.getId());
			applysDetailBo.setQuantity(applysDetail.getQuantity());
			
			if(purchaseApplys!=null&&purchaseApplys.size()>0){
				if(aid!=0){
					for (PurchaseApply purchaseApply : purchaseApplys) {
						int aidr = purchaseApply.getId();
						if(aidr==aid){
							applysDetailBo.setApplicant(purchaseApply.getApplicant());
							applysDetailBo.setApplyDate(purchaseApply.getApplyDate());
							applysDetailBo.setCirculation(purchaseApply.getCirculation());
							applysDetailBo.setAcreateDate(purchaseApply.getCreateDate());
							applysDetailBo.setAcreateUser(purchaseApply.getCreateUser());
							applysDetailBo.setEquipments(purchaseApply.getEquipments());
							applysDetailBo.setAflag(purchaseApply.getFlag());
							applysDetailBo.setReason(purchaseApply.getReason());
							applysDetailBo.setArrivalDate(purchaseApply.getArrivalDate());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid!=0){
					for (Equipment equipment : equipments) {
						int eidr = equipment.getId();
						if(eidr==eid){
							applysDetailBo.setEname(equipment.getEname());
						}
					}
				} 
			}
		}
		return applysDetailBo;
	}
}
