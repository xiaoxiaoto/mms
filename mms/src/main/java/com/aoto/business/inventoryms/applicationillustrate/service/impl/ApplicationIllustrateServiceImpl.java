package com.aoto.business.inventoryms.applicationillustrate.service.impl;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.inventoryms.applicationillustrate.repository.dao.IApplicationIllustrateIbaitsDao;
import com.aoto.business.inventoryms.applicationillustrate.repository.dao.IApplicationIllustrateJpaDao;
import com.aoto.business.inventoryms.applicationillustrate.repository.pojo.ApplicationIllustrate;
import com.aoto.business.inventoryms.applicationillustrate.service.IApplicationIllustrateService;


/**  
* @ClassName: ApplicationIllustrateServiceImpl  
* @Description: 设备使用说明管理  
* @date 2017年3月28日  
*    
**/ 
@Service
public class ApplicationIllustrateServiceImpl implements IApplicationIllustrateService {
	@Autowired
	private IApplicationIllustrateIbaitsDao applicationIllustrateIbaitsDao;
	@Autowired
	private IApplicationIllustrateJpaDao  applicationIllustrateJpaDao;
	
	/**  
	* @Title: queryAllApplicationIllustrates  
	* @Description:查询所有设备使用说明 
	* @return  List<ApplicationIllustrate>
	* @throws  
	*/ 
	@Override
	@Cacheable(value="cache:inventoryms", key="'cache:inventoryms:queryAllApplicationIllustrates'", unless="#result==null")//创建缓存
	public List<ApplicationIllustrate> queryAllApplicationIllustrates() {
		return  applicationIllustrateJpaDao.findAll();
	}

	/**  
	* @Title: queryApplicationIllustrateByPk  
	* @Description: 根据主键查询设备使用说明 
	* @param id
	* @return  ApplicationIllustrate
	* @throws  
	*/ 
	@Override
	public ApplicationIllustrate queryApplicationIllustrateByPk(Serializable id) {
		if(id!=null){
			return  applicationIllustrateJpaDao.findOne(id);
		}
		return null;
	}

	/**  
	* @Title: querApplicationIllustratesByEid  
	* @Description: 根据设备编号查询设备使用说明  
	* @param eid
	* @return  List<ApplicationIllustrate>
	* @throws  
	*/ 
	@Override
	public List<ApplicationIllustrate> queryApplicationIllustratesByEid(int eid) {
		if(eid!=0){
			return  applicationIllustrateIbaitsDao.queryApplicationIllustratesByEid(eid);
		}
		return null;
	}

	/**  
	* @Title: saveApplicationIllustrate  
	* @Description: 保存设备使用说明 
	* @param applicationIllustrate
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllApplicationIllustrates'")//设置缓存过期
	public Map<String, Object> saveApplicationIllustrate(ApplicationIllustrate applicationIllustrate) {
		Map<String, Object> result=new HashMap<>();
		if(applicationIllustrate!=null){
			ApplicationIllustrate save =  applicationIllustrateJpaDao.save(applicationIllustrate);
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
	* @Title: deleteApplicationIllustrate  
	* @Description: 删除设备使用说明  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllApplicationIllustrates'")//设置缓存过期
	public Map<String, Object> deleteApplicationIllustrate(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			ApplicationIllustrate one =  applicationIllustrateJpaDao.findOne(id);
			if(one!=null){
				try{
					 applicationIllustrateJpaDao.delete(id);
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
	* @Title: modifyApplicationIllustrate  
	* @Description: 修改设备使用说明  
	* @param applicationIllustrate
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	@CacheEvict(value="cache:inventoryms", key="'cache:inventoryms:queryAllApplicationIllustrates'")//设置缓存过期
	public Map<String, Object> modifyApplicationIllustrate(ApplicationIllustrate applicationIllustrate) {
		Map<String, Object> result=new HashMap<>();
		if(applicationIllustrate!=null){
			ApplicationIllustrate save =  applicationIllustrateJpaDao.save(applicationIllustrate);
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
	
}
