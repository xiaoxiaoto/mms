package com.aoto.business.warehousems.stacks.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;



/**  
* @ClassName: IStackService  
* @Description: 垛位信息管理  
* @date 2017年3月23日  
*    
**/ 
public interface IStackService {
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	public List<Domain> queryBusinessDomains();
	
	
	/**  
	* @Title: queryAllStacks  
	* @Description: 查询所有垛位信息
	* @return  List<Stack>
	* @throws  
	*/ 
	public  List<StackBo> queryAllStacks();
	
	/**  
	* @Title: queryStackByPk  
	* @Description: 根据主键查询垛位信息
	* @param id
	* @return  Stack
	* @throws  
	*/ 
	public Stack queryStackByPk(Serializable id);
	
	
	/**  
	* @Title: queryStacksByType  
	* @Description: 根据垛位号查询垛位信息
	* @param type
	* @return  List<Stack>
	* @throws  
	*/ 
	public List<Stack> queryStacksByScode(String type);
	
	/**  
	 * @Title: queryStacksByType  
	 * @Description: 根据仓库编号查询垛位信息
	 * @param type
	 * @return  List<Stack>
	 * @throws  
	 */ 
	public List<Stack> queryStacksByWid(int wid);
	
	/**  
	* @Title: queryStacksByWidForTable  
	* @Description: 根据仓库编号查询垛位信息（前端表格数据渲染） 
	* @param wid
	* @return  Map<String,List<StackBo>>
	* @throws  
	*/ 
	public Map<String, List<StackBo>> queryStacksByWidForTable(int wid);
	
	/**  
	* @Title: saveStack  
	* @Description: 保存垛位信息
	* @param religiousPlace
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveStack(Stack stack);
	
	/**  
	* @Title: deleteStack  
	* @Description: 根据主键删除垛位信息
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteStack(Serializable id);
	
	
	/**  
	* @Title: modifyStacks  
	* @Description: 修改垛位信息
	* @param religiousPlace
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyStack(Stack stack);

	/**  
	* @Title: deleteStacksByWid  
	* @Description: 根据仓库编号删除垛位信息
	* @param wid
	* @return  Map<String, Object>
	* @throws  
	*/ 
	public Map<String, Object> deleteStacksByWid(int wid);

}
