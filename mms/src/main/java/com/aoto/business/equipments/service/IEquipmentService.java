package com.aoto.business.equipments.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.bo.EquipmentBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;



/**  
* @ClassName: IEquipmentService  
* @Description: 设备管理  
* @date 2017年3月27日  
*    
**/ 
public interface IEquipmentService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllEquipments  
	* @Description: 查询所有设备信息 
	* @return  List<Equipment>
	* @throws  
	*/ 
	public List<Equipment> queryAllEquipments();
	
	/**  
	* @Title: queryAllEquipmentsForTable  
	* @Description: 查询所有设备信息 (前台数据展示table数据)
	* @return  Map<String, List<Equipment>>
	* @throws  
	*/ 
	public Map<String, List<EquipmentBo>> queryAllEquipmentsForTable();
	
	/**  
	* @Title: queryEquipmentByPk  
	* @Description: 根据主键查询设备信息
	* @param id
	* @return  Equipment
	* @throws  
	*/ 
	public Equipment queryEquipmentByPk(Serializable id);
	
	/**  
	* @Title: queryEquipmentByPkForTable  
	* @Description:根据主键查询设备信息(前端数据展示)
	* @param id
	* @return  Equipment
	* @throws  
	*/ 
	public EquipmentBo queryEquipmentByPkForTable(Serializable id);
	
	/**  
	* @Title: queryEquipmentsByWname  
	* @Description:根据设备名称查询设备信息
	* @param name
	* @return  List<Equipment>
	* @throws  
	*/ 
	public List<Equipment> queryEquipmentsByEname(String name);
	
	/**  
	* @Title: queryEquipmentsByEclassify  
	* @Description: 根据设备类型查询设备信息
	* @param classify
	* @return  List<Equipment>
	* @throws  
	*/ 
	public List<Equipment> queryEquipmentsByEclassify(String classify);
	
	/**  
	* @Title: saveEquipment  
	* @Description: 保存设备信息 
	* @param equipment
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveEquipment(Equipment equipment);
	
	/**  
	* @Title: deleteEquipment  
	* @Description: 删除设备信息 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteEquipment(Serializable id);
	
	/**  
	* @Title: modifyEquipment  
	* @Description: 修改设备信息
	* @param InventoryList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyEquipment(Equipment equipment);
	
}
