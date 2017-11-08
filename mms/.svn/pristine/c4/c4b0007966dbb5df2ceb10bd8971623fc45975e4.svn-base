package com.aoto.business.warehousems.stacks.service.impl;

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
import com.aoto.business.warehousems.stacks.repository.dao.IStackIbaitsDao;
import com.aoto.business.warehousems.stacks.repository.dao.IStackJpaDao;
import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;


/**  
* @ClassName: StackServiceImpl  
* @Description: 垛位信息管理  
* @date 2017年3月23日  
*    
**/ 
@Service
public class StackServiceImpl implements IStackService {
	@Autowired
	private IStackIbaitsDao stackIbaitsDao;
	@Autowired
	private IStackJpaDao stackJpaDao;
	@Autowired
	private IDomainService domainService;
	@Autowired
	private IInventoryListIbaitsDao  inventoryListIbaitsDao;
	@Autowired
	private IInventoryListJpaDao  inventoryListJpaDao;
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @return  List<Domain>
	* @throws  
	*/ 
	@Override
	public List<Domain> queryBusinessDomains(){
		String[] businessTypes=new String[]{"StacksClassify","StacksState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
   
	/**  
	* @Title: queryAllStacks  
	* @Description: 查询所有垛位信息
	* @return  List<Stack>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:warehousems", key="'cache:warehousems:queryAllStacks'", unless="#result==null")//创建缓存
	public List<StackBo> queryAllStacks() {
		List<StackBo> result= new ArrayList<>();
		List<Domain> domains = this.queryBusinessDomains();
		List<Stack> stacks = stackJpaDao.findAll();
		if(stacks!=null&&stacks.size()>0){
			for(Stack stack:stacks){
				result.add(convert(stack, domains));
			}
		}
		return result;
	}

	/**  
	* @Title: queryStackByPk  
	* @Description: 根据主键查询垛位信息
	* @param id
	* @return  Stack
	* @throws  
	*/ 
	@Override
	public Stack queryStackByPk(Serializable id) {
		if(id!=null){
			return stackJpaDao.findOne(id);
		}
		return null;
	}

	/**  
	* @Title: queryStacksByType  
	* @Description: 根据垛位号查询垛位信息
	* @param type
	* @return  List<Stack>
	* @throws  
	*/ 
	@Override
	public List<Stack> queryStacksByScode(String code) {
		if(code!=null&&!code.equals("")&&!code.equals("null")){
			return stackIbaitsDao.queryStacksByScode(code);
		}
		return null;
	}
	

	@Override
	public List<Stack> queryStacksByWid(int wid) {
		if(wid!=0){
			return stackIbaitsDao.queryStacksByWid(wid);
		}
		return null;
	}
	
	/**  
	* @Title: queryStacksByWidForTable  
	* @Description: 根据仓库编号查询垛位信息（前端表格数据渲染） 
	* @param wid
	* @return  Map<String,List<StackBo>>
	* @throws  
	*/ 
	@Override
	public Map<String,List<StackBo>> queryStacksByWidForTable(int wid) {
		Map<String, List<StackBo>> result=new HashMap<>();
		List<StackBo> bos=new  ArrayList<>();
		List<Domain> domains = this.queryBusinessDomains();
			
		if(wid!=0){
			List<Stack> stacks = stackIbaitsDao.queryStacksByWid(wid);
			if(stacks!=null&&stacks.size()>0){
				for(Stack stack:stacks){
					bos.add(convert(stack, domains));
				}
			}
		}
		result.put("data", bos);
		return result;
	}

	/**  
	* @Title: saveStack  
	* @Description: 保存垛位信息
	* @param religiousPlace
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllStacks'")//设置缓存过期
	public Map<String, Object> saveStack(Stack stack) {
		Map<String, Object> result=new HashMap<>();
		if(stack!=null){
			Stack save = stackJpaDao.save(stack);
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
	* @Title: deleteStack  
	* @Description: 根据主键删除垛位信息
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllStacks'")//设置缓存过期
	public Map<String, Object> deleteStack(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			Stack one = stackJpaDao.findOne(id);
			if(one!=null){
				try{
					stackJpaDao.delete(id);
					int allocationList = inventoryListIbaitsDao.deleteInventoryListsByWSid(one.getWid(), one.getId());
					if(allocationList>0){
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
	* @Title: deleteStacksByWid  
	* @Description: 根据仓库编号删除垛位信息
	* @param wid
	* @return  Map<String, Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	public Map<String, Object> deleteStacksByWid(int wid) {
		Map<String, Object> result = new HashMap<>();
		if (wid != 0) {
			try {
				int rows = stackIbaitsDao.deleteStacksByWid(wid);
				if(rows>=0){
					result.put("result", 1);
				}else{
					result.put("result", -1);
				}
			} catch (Exception e) {
				result.put("result", -1);
			}
		} else {
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: modifyStacks  
	* @Description: 修改垛位信息
	* @param religiousPlace
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:warehousems", key="'cache:warehousems:queryAllStacks'")//设置缓存过期
	public Map<String, Object> modifyStack(Stack stack) {
		Map<String, Object> result=new HashMap<>();
		if(stack!=null){
			Stack save = stackJpaDao.save(stack);
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
	* @param stack
	* @param domains
	* @return  StackBo
	* @throws  
	*/ 
	private StackBo convert(Stack stack,List<Domain> domains) {
		StackBo stackBo=new StackBo();
		if(stack!=null){
			String classify = stack.getClassify();
			String state = stack.getState();
			
			stackBo.setClassify(classify);
			stackBo.setCreateDate( stack.getCreateDate());
			stackBo.setCreateUser( stack.getCreateUser());
			stackBo.setFlag( stack.getFlag());
			stackBo.setId(stack.getId());
			stackBo.setPosition(stack.getPosition());
			stackBo.setScode(stack.getScode());
			stackBo.setState(state);
			stackBo.setWid( stack.getWid());
			
			if(domains!=null&&domains.size()>0){
				if(classify!=null&&!classify.equals("")&&!classify.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("StacksClassify")&&domainKey.equals(classify)){
							stackBo.setClassifyValue(domain.getDomainValue());
						}
					}
				} 
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("StacksState")&&domainKey.equals(state)){
							stackBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
		}
		return stackBo;
	}

}
