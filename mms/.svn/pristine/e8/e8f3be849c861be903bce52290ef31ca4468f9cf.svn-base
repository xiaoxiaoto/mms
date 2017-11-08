package com.aoto.business.inventoryms.supplyedlist.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.allocationms.allocationlist.repository.dao.IAllocationListIbaitsDao;
import com.aoto.business.allocationms.allocationlist.repository.dao.IAllocationListJpaDao;
import com.aoto.business.allocationms.allocationlist.repository.pojo.AllocationList;
import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListIbaitsDao;
import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListJpaDao;
import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
import com.aoto.business.inventoryms.inventorylist.service.bo.InventoryListBo;
import com.aoto.business.inventoryms.supplyedlist.repository.dao.ISupplyedListIbaitsDao;
import com.aoto.business.inventoryms.supplyedlist.repository.dao.ISupplyedListJpaDao;
import com.aoto.business.inventoryms.supplyedlist.repository.pojo.SupplyedList;
import com.aoto.business.inventoryms.supplyedlist.service.ISupplyedListService;
import com.aoto.business.inventoryms.supplyedlist.service.bo.SupplyedListBo;
import com.aoto.business.purchasems.purchasereceiptlist.repository.pojo.PurchaseReceiptList;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: SupplyedListServiceImpl  
* @Description: 出库清单管理  
* @date 2017年3月28日  
*    
**/ 
@Service
public class SupplyedListServiceImpl implements ISupplyedListService {
	@Autowired
	private ISupplyedListIbaitsDao supplyedListIbaitsDao;
	@Autowired
	private ISupplyedListJpaDao  supplyedListJpaDao;
	@Autowired
	private IInventoryListIbaitsDao  inventoryListIbaitsDao;
	@Autowired
	private IInventoryListJpaDao  inventoryListJpaDao;
	@Autowired
	private IAllocationListIbaitsDao allocationListIbaitsDao;
	@Autowired
	private IAllocationListJpaDao allocationListJpaDao;
	@Autowired
	private IDomainService domainService;
	@Autowired
	private IWarehouseService warehouseService;
	@Autowired
	private IStackService stackService;
	@Autowired
	private IEquipmentService equipmentService;
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
	* @Title: queryAllSupplyedLists  
	* @Description: 查询所有出库清单 
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:inventoryms", key="'cache:inventoryms:queryAllSupplyedLists'", unless="#result==null")//创建缓存
	public List<SupplyedList> queryAllSupplyedLists() {
		return  supplyedListJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllSupplyedListsForTable  
	* @Description: 查询所有出库清单信息(前台数据展示)
	* @return  Map<String,List<SupplyedListBo>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<SupplyedListBo>> queryAllSupplyedListsForTable() {
		Map<String, List<SupplyedListBo>> result=new HashMap<>();
		 List<SupplyedListBo> bos=new  ArrayList<>();
		 List<SupplyedList> supplyedLists = supplyedListJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
		 List<Domain> domains = this.queryBusinessDomains();
			if (supplyedLists != null && supplyedLists.size() > 0) {
				for (SupplyedList supplyedList : supplyedLists) {
					bos.add(convert(supplyedList, domains,equipments,warehouses,stacks));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: querySupplyedListByPk  
	* @Description: 根据主键查询出库清单 
	* @param id
	* @return  SupplyedListBo
	* @throws  
	*/ 
	@Override
	public SupplyedListBo querySupplyedListByPk(Serializable id) {
		if(id!=null){
			SupplyedList supplyedList = supplyedListJpaDao.findOne(id);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
			 List<StackBo> stacks = stackService.queryAllStacks();
			 List<Domain> domains = this.queryBusinessDomains();
			return  convert(supplyedList, domains,equipments,warehouses,stacks);
		}
		return null;
	}

	/**  
	* @Title: querySupplyedListsByEid  
	* @Description: 根据设备编号查询出库清单 
	* @param eid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	@Override
	public List<SupplyedList> querySupplyedListsByEid(int eid) {
		if(eid!=0){
			return  supplyedListIbaitsDao.querySupplyedListsByEid(eid);
		}
		return null;
	}

	/**  
	* @Title: querySupplyedListsByWid  
	* @Description: 根据仓库编号查询出库清单 
	* @param wid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	@Override
	public List<SupplyedList> querySupplyedListsByWid(int wid) {
		if(wid!=0){
			return  supplyedListIbaitsDao.querySupplyedListsByWid(wid);
		}
		return null;
	}

	/**  
	* @Title: querySupplyedListsBySid  
	* @Description: 根据垛位编号查询出库清单 
	* @param sid
	* @return  List<SupplyedList>
	* @throws  
	*/ 
	@Override
	public List<SupplyedList> querySupplyedListsBySid(int sid) {
		if(sid!=0){
			return  supplyedListIbaitsDao.querySupplyedListsBySid(sid);
		}
		return null;
	}

	/**  
	* @Title: saveSupplyedList  
	* @Description: 保存出库清单 
	* @param supplyedList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllSupplyedLists'")//设置缓存过期
	public Map<String, Object> saveSupplyedList(SupplyedList supplyedList) {
		supplyedList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		supplyedList.setCreateUser(1);
		supplyedList.setFlag("1");
		supplyedList.setSupplyedDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(supplyedList!=null){
			List<InventoryList> inventoryLists = inventoryListIbaitsDao.queryInventoryListsByWSid(supplyedList.getWid(), supplyedList.getSid());
			Map<String, Object> hasInventorys = this.hasInventory(supplyedList.getEid(), inventoryLists);
			int hasInventory = Integer.valueOf(hasInventorys.get("hasInventory").toString());
			
			InventoryList inventoryList=null;
			if(hasInventory==1){
				inventoryList=(InventoryList) hasInventorys.get("data");
				int quantity=inventoryList.getQuantity();
				quantity-=supplyedList.getQuantity();
				inventoryList.setQuantity(quantity);
				
				InventoryList inventoryListr = inventoryListJpaDao.save(inventoryList);
				if(inventoryListr!=null){
					SupplyedList save =  supplyedListJpaDao.save(supplyedList);
					if(save!=null){
						AllocationList allocationList = allocationListJpaDao.findOne(supplyedList.getAid());
						if(allocationList!=null){
							int outquantity=allocationList.getOutquantity();
							outquantity+=supplyedList.getQuantity();
							allocationList.setOutquantity(outquantity);
							allocationList.setState(supplyedList.getState());
							AllocationList save2 = allocationListJpaDao.save(allocationList);
							if(save2!=null){
								flag=1;
								result.put("data", save);
							}
						}
					}
				}
			}
		}
		result.put("result",flag);
		return result;
	}
	
	
	public Map<String,Object> hasInventory(int eid,List<InventoryList> inventoryLists){
		Map<String,Object> result=new HashMap<>();
		int hasInventory=-1;
		if(inventoryLists!=null&&inventoryLists.size()>0){
			for(InventoryList inventoryList:inventoryLists){
				int eidr = inventoryList.getEid();
				if(eidr==0){//空垛位
					hasInventory=0;
					result.put("data", inventoryList);
					break;
				}else	if(eidr==eid){//垛位存在同样货物
					if(inventoryList.getQuantity()>0){
						hasInventory=1;
					}else{
						hasInventory=2;
					}
					result.put("data", inventoryList);
					break;
				}
			}
		}
		result.put("hasInventory", hasInventory);
		return result;
	}

	/**  
	* @Title: deleteSupplyedList  
	* @Description: 删除出库清单  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllSupplyedLists'")//设置缓存过期
	public Map<String, Object> deleteSupplyedList(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			SupplyedList one =  supplyedListJpaDao.findOne(id);
			if(one!=null){
				try{
					 supplyedListJpaDao.delete(id);
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
	* @Title: modifySupplyedList  
	* @Description: 修改出库清单  
	* @param supplyedList
	* @return  Map<String,Object>
	* @throws  
	*/
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllSupplyedLists'")//设置缓存过期
	public Map<String, Object> modifySupplyedList(SupplyedList supplyedList) {
		Map<String, Object> result=new HashMap<>();
		if(supplyedList!=null){
			SupplyedList save =  supplyedListJpaDao.save(supplyedList);
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
	* @param inventoryList
	* @param domains
	* @param equipments
	* @param warehouses
	* @param stacks
	* @return  InventoryListBo
	* @throws  
	*/ 
	private SupplyedListBo convert(SupplyedList supplyedList,List<Domain> domains,List<Equipment> equipments,List<Warehouse> warehouses, List<StackBo> stacks) {
		SupplyedListBo supplyedListBo=new SupplyedListBo();
		if(supplyedList!=null){
			String state = supplyedList.getState();
			int createUser = supplyedList.getCreateUser();
			int wid = supplyedList.getWid();
			int sid = supplyedList.getSid();
			int eid = supplyedList.getEid();
			
			supplyedListBo.setAid(supplyedList.getAid());
			supplyedListBo.setApplicant(supplyedList.getApplicant());
			supplyedListBo.setCreateDate(supplyedList.getCreateDate());
			supplyedListBo.setCreateUser(createUser);
			supplyedListBo.setEid(eid);
			supplyedListBo.setFlag(supplyedList.getFlag());
			supplyedListBo.setId(supplyedList.getId());
			supplyedListBo.setOperator(supplyedList.getOperator());
			supplyedListBo.setQuantity(supplyedList.getQuantity());
			supplyedListBo.setSid(sid);
			supplyedListBo.setState(state);
			supplyedListBo.setSupplyedDate(supplyedList.getSupplyedDate());
			supplyedListBo.setWid(wid);
			
			if(domains!=null&&domains.size()>0){
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("SupplyedListState")&&domainKey.equals(state)){
							supplyedListBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							supplyedListBo.setEname(equipment.getEname());
						}
					}
				} 
			}
			if(warehouses!=null&&warehouses.size()>0){
				if(wid>0){
					for (Warehouse warehouse : warehouses) {
						int id = warehouse.getId();
						if(id==wid){
							supplyedListBo.setWcode(warehouse.getWcode());
							supplyedListBo.setWname(warehouse.getWname());
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
							supplyedListBo.setScode(stack.getScode());
							supplyedListBo.setPosition(stack.getPosition());
						}
					}
				} 
			}
		}
		return supplyedListBo;
	}
}
