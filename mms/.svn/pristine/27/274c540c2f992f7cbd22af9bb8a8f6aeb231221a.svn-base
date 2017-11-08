package com.aoto.business.equipments.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.equipments.repository.dao.IEquipmentIbaitsDao;
import com.aoto.business.equipments.repository.dao.IEquipmentJpaDao;
import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.equipments.service.bo.EquipmentBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: EquipmentServiceImpl  
* @Description: 设备管理  
* @date 2017年3月28日  
*    
**/ 
@Service
public class EquipmentServiceImpl implements IEquipmentService {
	@Autowired
	private IEquipmentIbaitsDao equipmentIbaitsDao;
	@Autowired
	private IEquipmentJpaDao equipmentJpaDao;
	@Autowired
	private IDomainService domainService;
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @param businessTypes
	* @return  List<Domain>
	* @throws  
	*/ 
	@Override
	public List<Domain> queryBusinessDomains(){
		String[] businessTypes=new String[]{"EquipmentsClassify","EquipmentsState","EquipmentsType"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllEquipments  
	* @Description: 查询所有设备信息 
	* @return  List<Equipment>
	* @throws  
	*/ 
	@Override
//	@Cacheable(value="cache:equipments", key="'cache:equipments:queryAllEquipments'", unless="#result==null")//创建缓存
	public List<Equipment> queryAllEquipments() {
		return equipmentJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllEquipmentsForTable  
	* @Description: 查询所有设备信息 (前台数据展示table数据)
	* @return  Map<String, List<Equipment>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<EquipmentBo>> queryAllEquipmentsForTable() {
		Map<String, List<EquipmentBo>> result = new HashMap<>();
		List<EquipmentBo> bos = new ArrayList<>();
		List<Equipment> equipments = equipmentJpaDao.findAll();
		List<Domain> domains = this.queryBusinessDomains();
		if (equipments != null && equipments.size() > 0) {
			for (Equipment equipment : equipments) {
				bos.add(convert(equipment, domains));
			}
		}
		result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryEquipmentByPk  
	* @Description: 根据主键查询设备信息
	* @param id
	* @return  Equipment
	* @throws  
	*/ 
	@Override
	public Equipment queryEquipmentByPk(Serializable id) {
		if(id!=null){
			return equipmentJpaDao.findOne(id);
		}
		return null;
	}

	/**  
	* @Title: queryEquipmentByPkForTable  
	* @Description:根据主键查询设备信息(前端数据展示)
	* @param id
	* @return  Equipment
	* @throws  
	*/ 
	@Override
	public EquipmentBo queryEquipmentByPkForTable(Serializable id) {
		if(id!=null){
			List<Domain> domains = this.queryBusinessDomains();
			Equipment equipment = equipmentJpaDao.findOne(id);
			return convert(equipment, domains);
		}
		return null;
	}
	/**  
	* @Title: queryEquipmentsByWname  
	* @Description:根据设备名称查询设备信息
	* @param name
	* @return  List<Equipment>
	* @throws  
	*/ 
	@Override
	public List<Equipment> queryEquipmentsByEname(String name) {
		if(name!=null&&!name.equals("")&&!name.equals("null")){
			return equipmentIbaitsDao.queryEquipmentsByEname(name);
		}
		return null;
	}

	/**  
	* @Title: queryEquipmentsByEclassify  
	* @Description: 根据设备类型查询设备信息
	* @param classify
	* @return  List<Equipment>
	* @throws  
	*/ 
	@Override
	public List<Equipment> queryEquipmentsByEclassify(String classify) {
		if(classify!=null&&!classify.equals("")&&!classify.equals("null")){
			return equipmentIbaitsDao.queryEquipmentsByEclassify(classify);
		}
		return null;
	}

	/**  
	* @Title: saveEquipment  
	* @Description: 保存设备信息 
	* @param equipment
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
//	@CacheEvict(value="cache:equipments", key="'cache:equipments:queryAllEquipments'")//设置缓存过期
	public Map<String, Object> saveEquipment(Equipment equipment) {
		Map<String, Object> result=new HashMap<>();
		if(equipment!=null){
			equipment.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			equipment.setCreateUser(1);
			equipment.setFlag("1");
			Equipment save = equipmentJpaDao.save(equipment);
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
	* @Title: deleteEquipment  
	* @Description: 删除设备信息 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
//	@CacheEvict(value="cache:equipments", key="'cache:equipments:queryAllEquipments'")//设置缓存过期
	public Map<String, Object> deleteEquipment(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			Equipment one = equipmentJpaDao.findOne(id);
			if(one!=null){
				try{
					equipmentJpaDao.delete(id);
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
	* @Title: modifyEquipment  
	* @Description: 修改设备信息
	* @param InventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
//	@CacheEvict(value="cache:equipments", key="'cache:equipments:queryAllEquipments'")//设置缓存过期
	public Map<String, Object> modifyEquipment(Equipment equipment) {
		Map<String, Object> result=new HashMap<>();
		if(equipment!=null){
			Equipment save = equipmentJpaDao.save(equipment);
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
	* @param equipment
	* @param domains
	* @return  EquipmentBo
	* @throws  
	*/ 
	private EquipmentBo convert(Equipment equipment,List<Domain> domains) {
		EquipmentBo equipmentBo=new EquipmentBo();
		if(equipment!=null){
			String state = equipment.getState();
			int createUser = equipment.getCreateUser();
			String classify = equipment.getEclassify();
			String type = equipment.getEtype();
			
			equipmentBo.setCreateDate(equipment.getCreateDate());
			equipmentBo.setCreateUser(createUser);
			equipmentBo.setEclassify(classify);
			equipmentBo.setEname(equipment.getEname());
			equipmentBo.setEtype(type);
			equipmentBo.setFlag(equipment.getFlag());
			equipmentBo.setId(equipment.getId());
			equipmentBo.setIntegrator(equipment.getIntegrator());
			equipmentBo.setLife(equipment.getLife());
			equipmentBo.setManufacturer(equipment.getManufacturer());
			equipmentBo.setPnfru(equipment.getPnfru());
			equipmentBo.setSerialNumber(equipment.getSerialNumber());
			equipmentBo.setSpecifications(equipment.getSpecifications());
			equipmentBo.setState(state);
			if(domains!=null&&domains.size()>0){
				if(classify!=null&&!classify.equals("")&&!classify.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("EquipmentsClassify")&&domainKey.equals(classify)){
							equipmentBo.setEclassifyValue(domain.getDomainValue());
						}
					}
				} 
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("EquipmentsState")&&domainKey.equals(state)){
							equipmentBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("EquipmentsType")&&domainKey.equals(state)){
							equipmentBo.setEtypeValue(domain.getDomainValue());
						}
					}
				} 
			}
		}
		return equipmentBo;
	}
	
}
