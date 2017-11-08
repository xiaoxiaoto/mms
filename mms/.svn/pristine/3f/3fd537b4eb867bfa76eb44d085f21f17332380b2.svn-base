package com.aoto.business.warehousems.warehouses.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.bo.WarehouseBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;


/**  
* @ClassName: IWarehouseService  
* @Description: 仓库信息管理  
* @date 2017年3月23日  
*    
**/ 
public interface IWarehouseService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	/**  
	* @Title: queryAllWarehouses  
	* @Description: 查询所有仓库信息
	* @return  List<Warehouse>
	* @throws  
	*/ 
	public  List<Warehouse> queryAllWarehouses();
	/**  
	 * @Title: queryAllWarehousesForTable  
	 * @Description: 查询所有仓库信息(前端表格渲染数据)
	 * @return  Map<String, List<WarehouseBo>>
	 * @throws  
	 */ 
	public Map<String, List<WarehouseBo>> queryAllWarehousesForTable();
	
	/**  
	* @Title: queryWarehouseByPk  
	* @Description: 根据主键查询仓库信息
	* @param id
	* @return  Warehouse
	* @throws  
	*/ 
	public WarehouseBo queryWarehouseByPk(Serializable id);
	
	/**  
	* @Title: queryWarehousesByCname  
	* @Description: 根据仓库名称查询仓库信息
	* @param name
	* @return  List<Warehouse>
	* @throws  
	*/ 
	public List<Warehouse> queryWarehousesByWname(String name);
	/**  
	 * @Title: queryWarehousesByCname  
	 * @Description: 根据仓库编码查询仓库信息
	 * @param name
	 * @return  List<Warehouse>
	 * @throws  
	 */ 
	public List<Warehouse> queryWarehousesByWid(String code);
	
	/**  
	* @Title: saveWarehouse  
	* @Description: 保存仓库信息
	* @param warehouse
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveWarehouse(Warehouse warehouse);
	
	/**  
	* @Title: saveJsonWarehouse  
	* @Description: 保存仓库信息(JSON数据)
	* @param warehouseBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> saveJsonWarehouse(WarehouseBo warehouseBo);
	
	/**  
	* @Title: deleteWarehouse  
	* @Description: 根据主键查询仓库信息
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteWarehouse(Serializable id);
	
	/**  
	* @Title: modifyWarehouse  
	* @Description: 修改仓库信息
	* @param warehouse
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyWarehouse(WarehouseBo warehouseBo);

	/**  
	* @Title: modifyJsonWarehouse  
	* @Description: 修改仓库信息(JSON数据)
	* @param warehouseBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String, Object> modifyJsonWarehouse(WarehouseBo warehouseBos);
	
	
}
