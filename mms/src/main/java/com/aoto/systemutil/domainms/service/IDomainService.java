package com.aoto.systemutil.domainms.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.systemutil.domainms.repository.pojo.Domain;

/**  
* @ClassName: IReligiousPlaceService  
* @Description: 值域管理    
* @date 2017年3月15日  
*    
**/ 

public interface IDomainService {
	
	/**  
	* @Title: queryAllDmain  
	* @Description: 查询所有值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryAllDmain();
	
	
	/**  
	* @Title: queryAllDomainForTable  
	* @Description: 查询所有值域信息(前台数据展示) 
	* @return  Map<String,List<Domain>>
	* @throws  
	*/ 
	public Map<String, List<Domain>> queryAllDomainForTable();
	
	/**  
	* @Title: queryDomainPk  
	* @Description: 根据主键查询值域
	* @param id
	* @return  Domain
	* @throws  
	*/ 
	public Domain queryDomainPk(Serializable id);
	
	/**  
	* @Title: queryDomainByType  
	* @Description: 根据值域类型查询值域 
	* @param type
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryDomainByDomainType(String type);
	
	/**  
	* @Title: saveDomain  
	* @Description: 增加值域
	* @param domain
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveDomain(Domain domain);
	
	/**  
	* @Title: deleteDomain  
	* @Description: 删除值域
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteDomain(Serializable id);
	
	/**  
	* @Title: modifyDomain  
	* @Description: 修改值域
	* @param domain
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyDomain(Domain domain);
	
}