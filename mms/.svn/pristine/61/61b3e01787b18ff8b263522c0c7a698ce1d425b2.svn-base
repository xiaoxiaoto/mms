package com.aoto.business.inventoryms.storagelist.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListIbaitsDao;
import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListJpaDao;
import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
import com.aoto.business.inventoryms.storagelist.repository.dao.IStorageListIbaitsDao;
import com.aoto.business.inventoryms.storagelist.repository.dao.IStorageListJpaDao;
import com.aoto.business.inventoryms.storagelist.repository.pojo.StorageList;
import com.aoto.business.inventoryms.storagelist.service.IStorageListService;
import com.aoto.business.inventoryms.storagelist.service.bo.StorageListBo;
import com.aoto.business.purchasems.purchasereceiptlist.repository.dao.IPurchaseReceiptListIbaitsDao;
import com.aoto.business.purchasems.purchasereceiptlist.repository.dao.IPurchaseReceiptListJpaDao;
import com.aoto.business.purchasems.purchasereceiptlist.repository.pojo.PurchaseReceiptList;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: StorageListServiceImpl  
* @Description: 入库清单管理  
* @date 2017年3月28日  
*    
**/ 
@Service
public class StorageListServiceImpl implements IStorageListService {
	@Autowired
	private IStorageListIbaitsDao  storageListIbaitsDao;
	@Autowired
	private IStorageListJpaDao  storageListJpaDao;
	@Autowired
	private IPurchaseReceiptListIbaitsDao purchaseReceiptListIbaitsDao;
	@Autowired
	private IPurchaseReceiptListJpaDao purchaseReceiptListJpaDao;
	@Autowired
	private IInventoryListIbaitsDao  inventoryListIbaitsDao;
	@Autowired
	private IInventoryListJpaDao  inventoryListJpaDao;
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
		String[] businessTypes=new String[]{"PurchaseReceiptListState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllStorageLists  
	* @Description:查询所有入库清单
	* @return  List<StorageList>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:inventoryms", key="'cache:inventoryms:queryAllStorageLists'", unless="#result==null")//创建缓存
	public List<StorageList> queryAllStorageLists() {
		return  storageListJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllStorageListsForTable  
	* @Description: 查询所有入库清单信息(前台数据展示) 
	* @return  Map<String,List<StorageList>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<StorageListBo>> queryAllStorageListsForTable() {
		Map<String, List<StorageListBo>> result=new HashMap<>();
		 List<StorageListBo> bos=new  ArrayList<>();
		 List<StorageList> storageLists = storageListJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
		 List<Domain> domains = this.queryBusinessDomains();
			if (storageLists != null && storageLists.size() > 0) {
				for (StorageList storageList : storageLists) {
					bos.add(convert(storageList, domains,equipments,warehouses,stacks));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryStorageListByPk  
	* @Description: 根据主键查询入库清单 
	* @param id
	* @return  StorageListBo
	* @throws  
	*/ 
	@Override
	public StorageListBo queryStorageListByPk(Serializable id) {
		if(id!=null){
			StorageList storageList = storageListJpaDao.findOne(id);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
			 List<StackBo> stacks = stackService.queryAllStacks();
			 List<Domain> domains = this.queryBusinessDomains();
			return  convert(storageList, domains,equipments,warehouses,stacks);
		}
		return null;
	}

	/**  
	* @Title: queryStorageListsByEid  
	* @Description: 根据设备编号查询入库清单
	* @param eid
	* @return  List<StorageList>
	* @throws  
	*/ 
	@Override
	public List<StorageList> queryStorageListsByEid(int eid) {
		if(eid!=0){
			return  storageListIbaitsDao.queryStorageListsByEid(eid);
		}
		return null;
	}

	/**  
	* @Title: queryStorageListsByWid  
	* @Description: 根据仓库编号查询入库清单 
	* @param wid
	* @return  List<StorageList>
	* @throws  
	*/ 
	@Override
	public List<StorageList> queryStorageListsByWid(int wid) {
		if(wid!=0){
			return  storageListIbaitsDao.queryStorageListsByWid(wid);
		}
		return null;
	}

	/**  
	* @Title: queryStorageListsBySid  
	* @Description: 根据垛位编号查询入库清单 
	* @param Sid
	* @return  List<StorageList>
	* @throws  
	*/ 
	@Override
	public List<StorageList> queryStorageListsBySid(int sid) {
		if(sid!=0){
			return  storageListIbaitsDao.queryStorageListsBySid(sid);
		}
		return null;
	}

	/**  
	* @Title: saveStorageList  
	* @Description: 保存入库清单 
	* @param storageList
	* @return  Map<String,Object>
	* @throws  
	*/
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllStorageLists'")//设置缓存过期
	public Map<String, Object> saveStorageList(StorageList storageList) {
		storageList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		storageList.setCreateUser(1);
		storageList.setFlag("1");
		storageList.setStorageDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(storageList!=null){
			List<InventoryList> inventoryLists = inventoryListIbaitsDao.queryInventoryListsByWSid(storageList.getWid(), storageList.getSid());
			Map<String, Object> hasInventorys = this.hasInventory(storageList.getEid(), inventoryLists);
			int hasInventory = Integer.valueOf(hasInventorys.get("hasInventory").toString());
			
			InventoryList inventoryList=null;
			if(hasInventory==0 ){
				inventoryList=(InventoryList) hasInventorys.get("data");
				inventoryList.setEid(storageList.getEid());
				inventoryList.setQuantity(storageList.getQuantity());
			}else if(hasInventory==1){
				inventoryList=(InventoryList) hasInventorys.get("data");
				int quantity=inventoryList.getQuantity();
				quantity+=storageList.getQuantity();
				inventoryList.setQuantity(quantity);
			}else{
				inventoryList=new InventoryList();
				inventoryList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
				inventoryList.setCreateUser(1);
				inventoryList.setEid(storageList.getEid());
				inventoryList.setFlag("1");
				inventoryList.setQuantity(storageList.getQuantity());
				inventoryList.setSid(storageList.getSid());
				inventoryList.setState("1");
				inventoryList.setWid(storageList.getWid());
			}
			InventoryList inventoryListr = inventoryListJpaDao.save(inventoryList);
			if(inventoryListr!=null){
				StorageList save =  storageListJpaDao.save(storageList);
				if(save!=null){
					PurchaseReceiptList receiptList = purchaseReceiptListJpaDao.findOne(storageList.getQid());
					if(receiptList!=null){
						int intoquantity=receiptList.getIntoquantity();
						intoquantity+=storageList.getQuantity();
						receiptList.setIntoquantity(intoquantity);
						receiptList.setState(storageList.getState());
						PurchaseReceiptList save2 = purchaseReceiptListJpaDao.save(receiptList);
						if(save2!=null){
							flag=1;
							result.put("data", save);
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
					hasInventory=1;
					result.put("data", inventoryList);
					break;
				}
			}
		}
		result.put("hasInventory", hasInventory);
		return result;
	}

	/**  
	* @Title: deleteStorageList  
	* @Description: 删除入库清单
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllStorageLists'")//设置缓存过期
	public Map<String, Object> deleteStorageList(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			StorageList one =  storageListJpaDao.findOne(id);
			if(one!=null){
				try{
					 storageListJpaDao.delete(id);
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
	* @Title: modifyStorageList  
	* @Description: 修改入库清单
	* @param storageList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllStorageLists'")//设置缓存过期
	public Map<String, Object> modifyStorageList(StorageList storageList) {
		Map<String, Object> result=new HashMap<>();
		if(storageList!=null){
			StorageList save =  storageListJpaDao.save(storageList);
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
	* @param storageList
	* @param domains
	* @param equipments
	* @param warehouses
	* @param stacks
	* @return  StorageListBo
	* @throws  
	*/ 
	private StorageListBo convert(StorageList storageList,List<Domain> domains,List<Equipment> equipments,List<Warehouse> warehouses, List<StackBo> stacks) {
		StorageListBo storageListBo=new StorageListBo();
		if(storageList!=null){
			String state = storageList.getState();
			int createUser = storageList.getCreateUser();
			int wid = storageList.getWid();
			int sid = storageList.getSid();
			int eid = storageList.getEid();
			
			storageListBo.setCreateDate(storageList.getCreateDate());
			storageListBo.setCreateUser(createUser);
			storageListBo.setEid(eid);
			storageListBo.setFlag(storageList.getFlag());
			storageListBo.setId(storageList.getId());
			storageListBo.setOperator(storageList.getOperator());
			storageListBo.setQid(storageList.getQid());
			storageListBo.setQuantity(storageList.getQuantity());
			storageListBo.setSid(sid);
			storageListBo.setState(state);
			storageListBo.setWid(wid);
			storageListBo.setStorageDate(storageList.getStorageDate());
			
			
			if(domains!=null&&domains.size()>0){
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("PurchaseReceiptListState")&&domainKey.equals(state)){
							storageListBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							storageListBo.setEname(equipment.getEname());
						}
					}
				} 
			}
			if(warehouses!=null&&warehouses.size()>0){
				if(wid>0){
					for (Warehouse warehouse : warehouses) {
						int id = warehouse.getId();
						if(id==wid){
							storageListBo.setWcode(warehouse.getWcode());
							storageListBo.setWname(warehouse.getWname());
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
							storageListBo.setScode(stack.getScode());
							storageListBo.setPosition(stack.getPosition());
						}
					}
				} 
			}
		}
		return storageListBo;
	}
}
