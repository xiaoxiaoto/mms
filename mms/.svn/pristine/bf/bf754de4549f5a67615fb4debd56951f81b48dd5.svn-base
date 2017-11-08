package com.aoto.business.warehousems.warehouses.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListIbaitsDao;
import com.aoto.business.inventoryms.inventorylist.repository.dao.IInventoryListJpaDao;
import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
import com.aoto.business.warehousems.stacks.repository.dao.IStackIbaitsDao;
import com.aoto.business.warehousems.stacks.repository.dao.IStackJpaDao;
import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
import com.aoto.business.warehousems.warehouses.repository.dao.IWarehouseIbaitsDao;
import com.aoto.business.warehousems.warehouses.repository.dao.IWarehouseJpaDao;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.business.warehousems.warehouses.service.bo.WarehouseBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: WarehouseServiceImpl  
* @Description: 仓库信息管理  
* @date 2017年3月23日  
*    
**/ 
@Service
public class WarehouseServiceImpl implements IWarehouseService {
	@Autowired
	private IWarehouseIbaitsDao warehouseIbaitsDao;
	@Autowired
	private IWarehouseJpaDao warehouseJpaDao;
	@Autowired
	private IDomainService domainService;
	@Autowired
	private IStackIbaitsDao stackIbaitsDao;
	@Autowired
	private IStackJpaDao stackJpaDao;
	@Autowired
	private IInventoryListIbaitsDao  inventoryListIbaitsDao;
	@Autowired
	private IInventoryListJpaDao  inventoryListJpaDao;
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @param businessTypes
	* @return  List<Domain>
	* @throws  
	*/ 
	@Override
	public List<Domain> queryBusinessDomains(){
		String[] businessTypes=new String[]{"WarehousesClassify","WarehousesState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllWarehouses  
	* @Description: 查询所有仓库信息
	* @return  List<Warehouse>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:warehousems", key="'cache:warehousems:queryAllWarehouses'", unless="#result==null")//创建缓存
	public List<Warehouse> queryAllWarehouses() {
		return warehouseJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllWarehouses  
	* @Description: 查询所有仓库信息(前端表格渲染数据)
	* @return Map<String, List<Warehouse>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<WarehouseBo>> queryAllWarehousesForTable() {
		Map<String, List<WarehouseBo>> result=new HashMap<>();
		 List<WarehouseBo> bos=new  ArrayList<>();
		List<Warehouse> warehouses = warehouseJpaDao.findAll();
		List<Domain> domains = this.queryBusinessDomains();
		if(warehouses!=null&&warehouses.size()>0){
			for(Warehouse warehouse:warehouses){
				bos.add(convert(warehouse, domains));
			}
		}
		result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryWarehouseByPk  
	* @Description: 根据主键查询仓库信息
	* @param id
	* @return  Warehouse
	* @throws  
	*/ 
	@Override
	public WarehouseBo queryWarehouseByPk(Serializable id) {
		if(id!=null){
			Warehouse warehouse = warehouseJpaDao.findOne(id);
			List<Domain> domains = this.queryBusinessDomains();
			return convert(warehouse, domains);
		}
		return null;
	}

	/**  
	* @Title: queryWarehousesByCname  
	* @Description: 根据仓库名称查询仓库信息
	* @param name
	* @return  List<Warehouse>
	* @throws  
	*/ 
	@Override
	public List<Warehouse> queryWarehousesByWname(String name) {
		if(name!=null&&!name.equals("")&&!name.equals("null")){
			return warehouseIbaitsDao.queryWarehousesByWname(name);
		}
		return null;
	}
	
	/**  
	* @Title: queryWarehousesByCname  
	* @Description: 根据仓库名称查询仓库信息
	* @param name
	* @return  List<Warehouse>
	* @throws  
	*/ 
	@Override
	public List<Warehouse> queryWarehousesByWid(String code) {
		if(code!=null&&!code.equals("")&&!code.equals("null")){
			return warehouseIbaitsDao.queryWarehousesByWid(code);
		}
		return null;
	}

	/**  
	* @Title: saveWarehouse  
	* @Description: 保存仓库信息
	* @param warehouse
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllWarehouses'")//设置缓存过期
	public Map<String, Object> saveWarehouse(Warehouse warehouse) {
		Map<String, Object> result=new HashMap<>();
		if(warehouse!=null){
			Warehouse save = warehouseJpaDao.save(warehouse);
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
	* @Title: saveJsonWarehouse  
	* @Description: 保存仓库信息(JSON数据)
	* @param warehouseBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	public Map<String, Object> saveJsonWarehouse(WarehouseBo warehouseBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(warehouseBo!=null){
			Warehouse warehouse = this.convert(warehouseBo);
			warehouse.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			warehouse.setCreateUser(1);
			warehouse.setFlag("1");
			
			Warehouse save = warehouseJpaDao.save(warehouse);
			if(save!=null){
				int id = save.getId();
				List<Stack> stacks = warehouseBo.getStacks();
				if(stacks!=null&&stacks.size()>0){
					for(Stack stack:stacks){
						stack.setWid(id);
						stack.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						stack.setCreateUser(1);
						stack.setFlag("1");
						
						 Stack stackResult = stackJpaDao.save(stack);
						 
						if(stackResult!=null){
							InventoryList inventoryList=new InventoryList();
							inventoryList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
							inventoryList.setCreateUser(1);
							inventoryList.setFlag("1");
							inventoryList.setQuantity(0);
							inventoryList.setSid(stackResult.getId());
							inventoryList.setState("1");
							inventoryList.setWid(stackResult.getWid());
							InventoryList inventoryResult = inventoryListJpaDao.save(inventoryList);
							if(inventoryResult!=null){
								flag=1;
								result.put("data", warehouseBo);
							}
						}
					}
				}
			}
		}
		result.put("result", flag);
		return result;
	}
	
	/**  
	* @Title: deleteWarehouse  
	* @Description: 根据主键查询仓库信息
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllWarehouses'")//设置缓存过期
	public Map<String, Object> deleteWarehouse(Serializable id) {
		
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			Warehouse one = warehouseJpaDao.findOne(id);
			if(one!=null){
				try{
					warehouseJpaDao.delete(id);
					int rows = stackIbaitsDao.deleteStacksByWid((int)id);
					if(rows>=0){
						result.put("result", 1);
						result.put("data", one);
					}else{
						result.put("result", -1);
					}
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
	* @Title: modifyWarehouse  
	* @Description: 修改仓库信息
	* @param warehouse
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllWarehouses'")//设置缓存过期
	public Map<String, Object> modifyWarehouse(WarehouseBo warehouseBo) {
		Map<String, Object> result=new HashMap<>();
		if(warehouseBo!=null){
			Warehouse warehouse = convert(warehouseBo);
			Warehouse save = warehouseJpaDao.save(warehouse);
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
	* @Title: modifyJsonWarehouse  
	* @Description: 修改仓库信息(JSON数据)
	* @param warehouseBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	public Map<String, Object> modifyJsonWarehouse(WarehouseBo warehouseBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(warehouseBo!=null){
			Warehouse warehouse = this.convert(warehouseBo);
			warehouse.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			warehouse.setCreateUser(1);
			warehouse.setFlag("1");
			
			Warehouse save = warehouseJpaDao.save(warehouse);
			if(save!=null){
				int id = save.getId();
				List<Stack> stacks = warehouseBo.getStacks();
				if(stacks!=null&&stacks.size()>0){
					for(Stack stack:stacks){
						stack.setWid(id);
						stack.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						stack.setCreateUser(1);
						stack.setFlag("1");
						boolean isAdd=false;
						if(stack.getId()<=0){
							isAdd=true;
						}
						 Stack stackResult = stackJpaDao.save(stack);
						if(stackResult!=null){
							 if(isAdd){
								 InventoryList inventoryList=new InventoryList();
									inventoryList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
									inventoryList.setCreateUser(1);
									inventoryList.setFlag("1");
									inventoryList.setQuantity(0);
									inventoryList.setSid(stackResult.getId());
									inventoryList.setState("1");
									inventoryList.setWid(stackResult.getWid());
									InventoryList inventoryResult = inventoryListJpaDao.save(inventoryList);
									if(inventoryResult!=null){
										flag=1;
										result.put("data", warehouseBo);
									}
							 }else{
								 flag=1;
								 result.put("data", warehouseBo);
							 }
						}
					}
				}
			}
		}
		result.put("result", flag);
		return result;
	}	
	
	/**  
	* @Title: convert  
	* @Description:  实体转Bo   
	* @param warehouse
	* @param domains
	* @return  WarehouseBo
	* @throws  
	*/ 
	private WarehouseBo convert(Warehouse warehouse,List<Domain> domains) {
		WarehouseBo warehouseBo=new WarehouseBo();
		if(warehouse!=null){
			String state = warehouse.getState();
			int createUser = warehouse.getCreateUser();
			String classify = warehouse.getClassify();
			
			warehouseBo.setId(warehouse.getId());
			warehouseBo.setWname(warehouse.getWname());
			warehouseBo.setWcode( warehouse.getWcode());
			warehouseBo.setState(state);
			warehouseBo.setLongitude(warehouse.getLongitude());
			warehouseBo.setLatitude(warehouse.getLatitude());
			warehouseBo.setFlag(warehouse.getFlag());
			warehouseBo.setCreateUser(createUser);
			warehouseBo.setCreateDate(warehouse.getCreateDate());
			warehouseBo.setClassify(classify);
			warehouseBo.setAddress( warehouse.getAddress());
			
			if(domains!=null&&domains.size()>0){
				if(classify!=null&&!classify.equals("")&&!classify.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("WarehousesClassify")&&domainKey.equals(classify)){
							warehouseBo.setClassifyValue(domain.getDomainValue());
						}
					}
				} 
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("WarehousesState")&&domainKey.equals(state)){
							warehouseBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
		}
		return warehouseBo;
	}
	/**  
	* @Title: convert  
	* @Description:Bo转实体  
	* @param warehouseBo
	* @return  Warehouse
	* @throws  
	*/ 
	private Warehouse convert(WarehouseBo warehouseBo) {
		Warehouse warehouse=new Warehouse();
		if(warehouseBo!=null){
			warehouse.setId(warehouseBo.getId());
			warehouse.setAddress(warehouseBo.getAddress());
			warehouse.setClassify(warehouseBo.getClassify());
			warehouse.setCreateDate(warehouseBo.getCreateDate());
			warehouse.setCreateUser(warehouseBo.getCreateUser());
			warehouse.setFlag(warehouseBo.getFlag());
			warehouse.setLatitude(warehouseBo.getLatitude());
			warehouse.setLongitude(warehouseBo.getLongitude());
			warehouse.setState(warehouseBo.getState());
			warehouse.setWcode(warehouseBo.getWcode());
			warehouse.setWname(warehouseBo.getWname());
		}
		return warehouse;
	}
	
}
