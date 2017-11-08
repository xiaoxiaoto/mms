package com.aoto.business.allocationms.allocationlist.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.allocationms.allocationapplys.service.IAllocationApplyService;
import com.aoto.business.allocationms.allocationlist.repository.dao.IAllocationListIbaitsDao;
import com.aoto.business.allocationms.allocationlist.repository.dao.IAllocationListJpaDao;
import com.aoto.business.allocationms.allocationlist.repository.pojo.AllocationList;
import com.aoto.business.allocationms.allocationlist.service.IAllocationListService;
import com.aoto.business.allocationms.allocationlist.service.bo.AllocationListBo;
import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.allocationms.applysdetails.service.IApplyDetailService;
import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;

/**  
* @ClassName: AllocationListServiceImpl  
* @Description: 调拨单
* @date 2017年3月25日  
*    
**/ 
@Service
public class AllocationListServiceImpl implements IAllocationListService {
	@Autowired
	private IAllocationListIbaitsDao allocationListIbaitsDao;
	@Autowired
	private IAllocationListJpaDao allocationListJpaDao;
	@Autowired
	private IAllocationApplyService allocationApplyService;
	@Autowired
	private IApplyDetailService  applyDetailService;
	@Autowired
	private IWarehouseService warehouseService;
	@Autowired
	private IStackService stackService;
	@Autowired
	private IEquipmentService equipmentService;
	@Autowired
	private IDomainService domainService;
	
	@Value("${sequence.prefix}")
	private String sequencePrefix;
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @param businessTypes
	* @return  List<Domain>
	* @throws  
	*/ 
	@Override
	public List<Domain> queryBusinessDomains(){
		String[] businessTypes=new String[]{"SupplyedListState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllAllocationLists  
	* @Description: 查询所有调拨单
	* @return  List<AllocationList>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationLists'", unless="#result==null")//创建缓存
	public List<AllocationList> queryAllAllocationLists() {
		return allocationListJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllAllocationListsForTable  
	* @Description:查询所有调拨单(前端数据渲染)
	* @return  Map<String,List<AllocationListBo>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<AllocationListBo>> queryAllAllocationListsForTable() {
		Map<String, List<AllocationListBo>> result=new HashMap<>();
		 List<AllocationListBo> bos=new  ArrayList<>();
		 List<Domain> domains = this.queryBusinessDomains();
		 List<AllocationList> allocationLists = allocationListJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
			if (allocationLists != null && allocationLists.size() > 0) {
				for (AllocationList allocationList : allocationLists) {
					bos.add(convert(allocationList,domains,equipments,warehouses,stacks));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryAllocationListByPk  
	* @Description: 通过主键查询调拨单
	* @param id
	* @return  AllocationList
	* @throws  
	*/ 
	@Override
	public AllocationListBo queryAllocationListByPk(Serializable id) {
		if(id!=null){
			 List<Domain> domains = this.queryBusinessDomains();
			 AllocationList allocationList = allocationListJpaDao.findOne(id);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
			 List<StackBo> stacks = stackService.queryAllStacks();
			return convert(allocationList,domains,equipments,warehouses,stacks);
		}
		return null;
	}

	/**  
	* @Title: queryAllocationListByAID  
	* @Description: 根据调拨申请ID查询调拨明细
	* @param id
	* @return  List<AllocationList>
	* @throws  
	*/
	@Override
	public List<AllocationList> queryAllocationListsByAid(int aid) {
		if(aid!=0){
			return allocationListIbaitsDao.queryAllocationListByAid(aid);
		}
		return null;
	}
	/**  
	* @Title: saveAllocationList  
	* @Description: 保存调拨单
	* @param allocationList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationLists'")//设置缓存过期
	public Map<String, Object> saveAllocationList(AllocationList allocationList) {
		Map<String, Object> result=new HashMap<>();
		if(allocationList!=null){
			AllocationList save = allocationListJpaDao.save(allocationList);
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
	* @Title: saveAllocationListByAid  
	* @Description: 根据调拨申请生成调拨单 
	* @param aid
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	public Map<String, Object> saveAllocationListByAid(int aid) {
		Map<String, Object> result=new HashMap<>();
		int flag=1;
		if(aid>0){
			List<AllocationList> allocationLists = allocationListIbaitsDao.queryAllocationListByAid(aid);
			if(allocationLists!=null&&allocationLists.size()>0){
				flag=0;
			}else{
				List<ApplyDetail> applyDetails= applyDetailService.queryApplyDetailsByAid(aid);
				if(applyDetails!=null&&applyDetails.size()>0){
					String sn = this.generateSequenceNumber();
					for(ApplyDetail applyDetail:applyDetails){
						AllocationList allocationList = this.generateAllocationList(sn,applyDetail);
						AllocationList save = allocationListJpaDao.save(allocationList);
						if(save==null){
							flag=-1;
						}
					}
				}else{
					flag=-1;
				}
			}
			
		}else{
			flag=-1;
		}
		result.put("result", flag);
		return result;
	}

	/**  
	* @Title: deleteAllocationList  
	* @Description: 删除调拨单 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationLists'")//设置缓存过期
	public Map<String, Object> deleteAllocationList(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			AllocationList one = allocationListJpaDao.findOne(id);
			if(one!=null){
				try{
					allocationListJpaDao.delete(id);
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
	* @Title: modifyAllocationList  
	* @Description: 修改调拨单
	* @param allocationList
	* @return  Map<String,Object>
	* @throws  
	*/
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationLists'")//设置缓存过期
	public Map<String, Object> modifyAllocationList(AllocationList allocationList) {
		Map<String, Object> result=new HashMap<>();
		if(allocationList!=null){
			AllocationList save = allocationListJpaDao.save(allocationList);
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
	* @Title: generateAllocationList  
	* @Description: 根据调拨申请明细生成调拨单
	* @param applyDetail
	* @return  AllocationList
	* @throws  
	*/ 
	public AllocationList generateAllocationList(String sequenceNumber,ApplyDetail applyDetail){
		AllocationList allocationList=new AllocationList();
		allocationList.setSequenceNumber(sequenceNumber);
		allocationList.setAid(applyDetail.getAid());
		allocationList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd"));
		allocationList.setCreateUser(1);
		allocationList.setEid(applyDetail.getEid());
		allocationList.setFlag("id");
		allocationList.setQuantity(applyDetail.getQuantity());
		allocationList.setOutquantity(0);
		allocationList.setSid(applyDetail.getSid());
		allocationList.setState("1");
		allocationList.setWid(applyDetail.getWid());
		return allocationList;
	}
	
	/**  
	* @Title: generateSequenceNumber  
	* @Description: 生成流水单号
	* @return  String
	* @throws  
	*/ 
	public String generateSequenceNumber(){
		if(this.sequencePrefix==null||this.sequencePrefix.equals("")){
			this.sequencePrefix="mms-allocationlist";
		}
		String sequenceNumber=this.sequencePrefix+DateUtil.getCurrentDate("yyyyMMddHHmmss")+(int)(Math.random()*(9999-1000+1))+1000;
		return sequenceNumber;
	}
	
	/**  
	* @Title: convert  
	* @Description: 实体转Bo  
	* @param applyDetail
	* @param allocationApplys
	* @return  ApplyDetailBo
	* @throws  
	*/ 
	private AllocationListBo convert(AllocationList allocationList,List<Domain> domains,List<Equipment> equipments,List<Warehouse> warehouses, List<StackBo> stacks) {
		AllocationListBo allocationListBo=new AllocationListBo();
		if(allocationList!=null){
			int aid = allocationList.getAid();
			int sid = allocationList.getSid();
			int wid = allocationList.getWid();
			int createUser = allocationList.getCreateUser();
			int eid = allocationList.getEid();
			String state = allocationList.getState();
			
			allocationListBo.setSequenceNumber(allocationList.getSequenceNumber());
			allocationListBo.setWid(wid);
			allocationListBo.setSid(sid);
			allocationListBo.setAid(aid);
			allocationListBo.setCreateDate(allocationList.getCreateDate());
			allocationListBo.setCreateUser(createUser);
			allocationListBo.setEid(eid);
			allocationListBo.setFlag(allocationList.getFlag());
			allocationListBo.setId(allocationList.getId());
			allocationListBo.setQuantity( allocationList.getQuantity());
			allocationListBo.setOutquantity( allocationList.getOutquantity());
			allocationListBo.setState(state);
			
			if(domains!=null&&domains.size()>0){
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("SupplyedListState")&&domainKey.equals(state)){
							allocationListBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							allocationListBo.setEname(equipment.getEname());
						}
					}
				} 
			}
			if(warehouses!=null&&warehouses.size()>0){
				if(wid>0){
					for (Warehouse warehouse : warehouses) {
						int id = warehouse.getId();
						if(id==wid){
							allocationListBo.setWcode(warehouse.getWcode());
							allocationListBo.setWname(warehouse.getWname());
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
							allocationListBo.setScode(stack.getScode());
							allocationListBo.setPosition(stack.getPosition());
						}
					}
				} 
			}
		}
		return allocationListBo;
	}
	
}
