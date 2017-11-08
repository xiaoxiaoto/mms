package com.aoto.business.allocationms.applysdetails.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
import com.aoto.business.allocationms.allocationapplys.service.IAllocationApplyService;
import com.aoto.business.allocationms.applysdetails.repository.dao.IApplyDetailIbaitsDao;
import com.aoto.business.allocationms.applysdetails.repository.dao.IApplyDetailJpaDao;
import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.allocationms.applysdetails.service.IApplyDetailService;
import com.aoto.business.allocationms.applysdetails.service.bo.ApplyDetailBo;
import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;


/**  
* @ClassName: ApplyDetailServiceImpl  
* @Description:  调拨申请明细 
* @date 2017年3月25日  
*    
**/ 
@Service
public class ApplyDetailServiceImpl implements IApplyDetailService {
	@Autowired
	private IApplyDetailIbaitsDao applyDetailIbaitsDao;
	@Autowired
	private IApplyDetailJpaDao applyDetailJpaDao;
	@Autowired
	private IAllocationApplyService allocationApplyService;
	@Autowired
	private IWarehouseService warehouseService;
	@Autowired
	private IStackService stackService;
	@Autowired
	private IEquipmentService equipmentService;
	
	/**  
	* @Title: queryAllApplyDetails  
	* @Description: 查询所有调拨申请明细 
	* @return  List<ApplyDetail>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:allocationms", key="'cache:allocationms:queryAllApplyDetails'", unless="#result==null")//创建缓存
	public List<ApplyDetailBo> queryAllApplyDetails() {
		List<ApplyDetailBo> result= new ArrayList<>();
		 List<AllocationApply> allocationApplys = allocationApplyService.queryAllAllocationApplys();
		 List<ApplyDetail> applyDetails = applyDetailJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
		if(applyDetails!=null&&applyDetails.size()>0){
			for(ApplyDetail applyDetail:applyDetails){
				result.add(convert(applyDetail,allocationApplys,equipments,warehouses,stacks));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllApplyDetailsForTable  
	* @Description: 查询所有调拨申请明细 (前端数据渲染)
	* @return  List<ApplyDetailBo>
	* @throws  
	*/ 
	@Override
	public Map<String, List<ApplyDetailBo>> queryAllApplyDetailsForTable() {
		Map<String, List<ApplyDetailBo>> result=new HashMap<>();
		 List<ApplyDetailBo> bos=new  ArrayList<>();
		 List<AllocationApply> allocationApplys = allocationApplyService.queryAllAllocationApplys();
		 List<ApplyDetail> applyDetails = applyDetailJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
			if (applyDetails != null && applyDetails.size() > 0) {
				for (ApplyDetail applyDetail : applyDetails) {
					bos.add(convert(applyDetail,allocationApplys,equipments,warehouses,stacks));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryApplyDetailByPk  
	* @Description: 根据主键查询调拨申请明细 
	* @param id
	* @return  ApplyDetail
	* @throws  
	*/ 
	@Override
	public ApplyDetail queryApplyDetailByPk(Serializable id) {
		if(id!=null){
			return applyDetailJpaDao.findOne(id);
		}
		return null;
	}
	
	/**  
	* @Title: queryApplyDetailsByAid  
	* @Description: 根据申请编号查询申请明细 
	* @param aid
	* @return  List<ApplyDetail>
	* @throws  
	*/
	@Override
	public List<ApplyDetail> queryApplyDetailsByAid(int aid) {
		if(aid!=0){
			return applyDetailIbaitsDao.queryApplyDetailsByAid(aid);
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
	public Map<String, List<ApplyDetailBo>> queryApplyDetailsByAidForTable(int aid) {
		Map<String, List<ApplyDetailBo>> result=new HashMap<>();
		if(aid!=0){
			 List<ApplyDetailBo> bos=new  ArrayList<>();
			 List<AllocationApply> allocationApplys = allocationApplyService.queryAllAllocationApplys();
			 List<ApplyDetail> applyDetails = applyDetailIbaitsDao.queryApplyDetailsByAid(aid);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
			 List<StackBo> stacks = stackService.queryAllStacks();
				if (applyDetails != null && applyDetails.size() > 0) {
					for (ApplyDetail applyDetail : applyDetails) {
						bos.add(convert(applyDetail,allocationApplys,equipments,warehouses,stacks));
					}
				}
				result.put("data", bos);
			return result;
		}
		return null;
	}

	/**  
	* @Title: saveApplyDetail  
	* @Description:保存调拨申请明细 
	* @param applyDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllApplyDetails'")//设置缓存过期
	public Map<String, Object> saveApplyDetail(ApplyDetail applyDetail) {
		Map<String, Object> result=new HashMap<>();
		if(applyDetail!=null){
			ApplyDetail save = applyDetailJpaDao.save(applyDetail);
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
	* @Title: deleteApplyDetail  
	* @Description: 删除调拨申请明细  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllApplyDetails'")//设置缓存过期
	public Map<String, Object> deleteApplyDetail(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			ApplyDetail one = applyDetailJpaDao.findOne(id);
			if(one!=null){
				try{
					applyDetailJpaDao.delete(id);
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
	 * @Title: deleteApplyDetailByAid  
	 * @Description: 根据调拨编号删除调拨申请明细  
	 * @param id
	 * @return  Map<String,Object>
	 * @throws  
	 */ 
	@Override
	@Transactional
	public Map<String, Object> deleteApplyDetailByAid(int aid) {
		Map<String, Object> result=new HashMap<>();
		if(aid>0){
			try{
				int rows = applyDetailIbaitsDao.deleteByAid(aid);
				if(rows>0){
					result.put("result", 1);
				}else{
					result.put("result", -1);
				}
			}catch (Exception e) {
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: modifyApplyDetail  
	* @Description: 修改调拨申请明细  
	* @param applyDetail
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllApplyDetails'")//设置缓存过期
	public Map<String, Object> modifyApplyDetail(ApplyDetail applyDetail) {
		Map<String, Object> result=new HashMap<>();
		if(applyDetail!=null){
			ApplyDetail save = applyDetailJpaDao.save(applyDetail);
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
	* @Description: 实体转Bo  
	* @param applyDetail
	* @param allocationApplys
	* @return  ApplyDetailBo
	* @throws  
	*/ 
	private ApplyDetailBo convert(ApplyDetail applyDetail,	List<AllocationApply> allocationApplys,List<Equipment> equipments,List<Warehouse> warehouses, List<StackBo> stacks) {
		ApplyDetailBo applyDetailBo=new ApplyDetailBo();
		if(applyDetail!=null){
			int aid = applyDetail.getAid();
			int sid = applyDetail.getSid();
			int wid = applyDetail.getWid();
			int createUser = applyDetail.getCreateUser();
			int eid = applyDetail.getEid();
			
			applyDetailBo.setWid(wid);
			applyDetailBo.setSid(sid);
			applyDetailBo.setAid(aid);
			applyDetailBo.setCreateDate(applyDetail.getCreateDate());
			applyDetailBo.setCreateUser(createUser);
			applyDetailBo.setEid(eid);
			applyDetailBo.setFlag(applyDetail.getFlag());
			applyDetailBo.setId(applyDetail.getId());
			applyDetailBo.setIid(applyDetail.getIid());
			applyDetailBo.setQuantity( applyDetail.getQuantity());
			
			if(allocationApplys!=null&&allocationApplys.size()>0){
				if(aid!=0){
					for (AllocationApply allocationApply : allocationApplys) {
						int aidr = allocationApply.getId();
						if(aidr==aid){
							applyDetailBo.setApplicant(allocationApply.getApplicant());
							applyDetailBo.setApplyDate(allocationApply.getApplyDate());
							applyDetailBo.setCirculation(allocationApply.getCirculation());
							applyDetailBo.setEquipments(allocationApply.getEquipments());
							applyDetailBo.setReason(allocationApply.getReason());
							applyDetailBo.setReturnDate(allocationApply.getReturnDate());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							applyDetailBo.setEname(equipment.getEname());
						}
					}
				} 
			}
			if(warehouses!=null&&warehouses.size()>0){
				if(wid>0){
					for (Warehouse warehouse : warehouses) {
						int id = warehouse.getId();
						if(id==wid){
							applyDetailBo.setWcode(warehouse.getWcode());
							applyDetailBo.setWname(warehouse.getWname());
						}
					}
				} 
			}
			if(stacks!=null&&stacks.size()>0){
				if(wid>0&&sid>0){
					for (StackBo stack : stacks) {
						int id = stack.getId();
						int rwid = stack.getWid();
						if(rwid==wid&&id==sid){
							applyDetailBo.setScode(stack.getScode());
							applyDetailBo.setPosition(stack.getPosition());
						}
					}
				} 
			}
		}
		return applyDetailBo;
	}

}
