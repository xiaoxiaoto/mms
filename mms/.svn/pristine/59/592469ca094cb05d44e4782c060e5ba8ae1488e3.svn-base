package com.aoto.business.inventoryms.inventorylist.service.impl;

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
import com.aoto.business.inventoryms.inventorylist.service.IInventoryListService;
import com.aoto.business.inventoryms.inventorylist.service.bo.InventoryListBo;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: InventoryListServiceImpl  
* @Description: 库存清单  
* @date 2017年3月28日  
*    
**/ 
@Service
public class InventoryListServiceImpl implements IInventoryListService {
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
		String[] businessTypes=new String[]{"InventoryListState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllInventoryLists  
	* @Description:查询所有库存清单信息
	* @return  List<InventoryList>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:inventoryms", key="'cache:inventoryms:queryAllInventoryLists'", unless="#result==null")//创建缓存
	public List<InventoryList> queryAllInventoryLists() {
		return  inventoryListJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllInventoryListsForTable  
	* @Description: 查询所有库存清单信息(前端数据展示)
	* @return  Map<String,List<InventoryList>>
	* @throws  
	*/
	@Override
	public Map<String, List<InventoryListBo>> queryAllInventoryListsForTable() {
		Map<String, List<InventoryListBo>> result=new HashMap<>();
		 List<InventoryListBo> bos=new  ArrayList<>();
		 List<InventoryList> inventoryLists = inventoryListJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
		 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
		 List<StackBo> stacks = stackService.queryAllStacks();
		 List<Domain> domains = this.queryBusinessDomains();
			if (inventoryLists != null && inventoryLists.size() > 0) {
				for (InventoryList inventoryList : inventoryLists) {
					bos.add(convert(inventoryList, domains,equipments,warehouses,stacks));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryInventoryListByPk  
	* @Description: 根据主键查询库存清单信息
	* @param id
	* @return  InventoryList
	* @throws  
	*/ 
	@Override
	public InventoryListBo queryInventoryListByPk(Serializable id) {
		if(id!=null){
			 InventoryList inventoryList = inventoryListJpaDao.findOne(id);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			 List<Warehouse> warehouses = warehouseService.queryAllWarehouses();
			 List<StackBo> stacks = stackService.queryAllStacks();
			 List<Domain> domains = this.queryBusinessDomains();
			return  convert(inventoryList, domains,equipments,warehouses,stacks);
		}
		return null;
	}

	/**  
	* @Title: queryInventoryListsByEid  
	* @Description: 根据设备编号查询库存清单信息 
	* @param eid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	@Override
	public List<InventoryList> queryInventoryListsByEid(int eid) {
		if(eid!=0){
			return  inventoryListIbaitsDao.queryInventoryListsByEid(eid);
		}
		return null;
	}

	/**  
	* @Title: queryInventoryListsByWid  
	* @Description: 根据仓库编号查询库存清单信息 
	* @param wid
	* @return  List<InventoryList>
	* @throws  
	*/ 
	@Override
	public List<InventoryList> queryInventoryListsByWid(int wid) {
		if(wid!=0){
			return  inventoryListIbaitsDao.queryInventoryListsByWid(wid);
		}
		return null;
	}
	
	/**  
	* @Title: queryInventoryListsBySid  
	* @Description: 根据垛位编号查询库存清单信息
	* @param Sid
	* @return  List<InventoryList>
	* @throws  
	*/
	@Override
	public List<InventoryList> queryInventoryListsBySid(int sid) {
		if(sid!=0){
			return  inventoryListIbaitsDao.queryInventoryListsBySid(sid);
		}
		return null;
	}

	/**  
	* @Title: saveInventoryList  
	* @Description: 保存库存清单信息 
	* @param inventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllInventoryLists'")//设置缓存过期
	public Map<String, Object> saveInventoryList(InventoryList inventoryList) {
		Map<String, Object> result=new HashMap<>();
		if(inventoryList!=null){
			InventoryList save =  inventoryListJpaDao.save(inventoryList);
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
	* @Title: deleteInventoryList  
	* @Description: 删除库存清单信息  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllInventoryLists'")//设置缓存过期
	public Map<String, Object> deleteInventoryList(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			InventoryList one =  inventoryListJpaDao.findOne(id);
			if(one!=null){
				try{
					 inventoryListJpaDao.delete(id);
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
	* @Title: modifyInventoryList  
	* @Description: 修改库存清单信息 
	* @param inventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllInventoryLists'")//设置缓存过期
	public Map<String, Object> modifyInventoryList(	InventoryList inventoryList) {
		Map<String, Object> result=new HashMap<>();
		if(inventoryList!=null){
			InventoryList save =  inventoryListJpaDao.save(inventoryList);
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
	private InventoryListBo convert(InventoryList inventoryList,List<Domain> domains,List<Equipment> equipments,List<Warehouse> warehouses, List<StackBo> stacks) {
		InventoryListBo inventoryListBo=new InventoryListBo();
		if(inventoryList!=null){
			String state = inventoryList.getState();
			int createUser = inventoryList.getCreateUser();
			int wid = inventoryList.getWid();
			int sid = inventoryList.getSid();
			int eid = inventoryList.getEid();
			
			inventoryListBo.setCreateDate(inventoryList.getCreateDate());
			inventoryListBo.setCreateUser(createUser);
			inventoryListBo.setEid(eid);
			inventoryListBo.setFlag(inventoryList.getFlag());
			inventoryListBo.setId(inventoryList.getId());
			inventoryListBo.setQuantity(inventoryList.getQuantity());
			inventoryListBo.setSid(sid);
			inventoryListBo.setState(state);
			inventoryListBo.setWid(wid);
			
			if(domains!=null&&domains.size()>0){
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("InventoryListState")&&domainKey.equals(state)){
							inventoryListBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							inventoryListBo.setEname(equipment.getEname());
						}
					}
				} 
			}
			if(warehouses!=null&&warehouses.size()>0){
				if(wid>0){
					for (Warehouse warehouse : warehouses) {
						int id = warehouse.getId();
						if(id==wid){
							inventoryListBo.setWcode(warehouse.getWcode());
							inventoryListBo.setWname(warehouse.getWname());
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
							inventoryListBo.setScode(stack.getScode());
							inventoryListBo.setPosition(stack.getPosition());
						}
					}
				} 
			}
		}
		return inventoryListBo;
	}
}
