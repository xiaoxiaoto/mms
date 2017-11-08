package com.aoto.business.allocationms.allocationapplys.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.allocationms.allocationapplys.repository.dao.IAllocationApplyIbaitsDao;
import com.aoto.business.allocationms.allocationapplys.repository.dao.IAllocationApplyJpaDao;
import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
import com.aoto.business.allocationms.allocationapplys.service.IAllocationApplyService;
import com.aoto.business.allocationms.allocationapplys.service.bo.AllocationApplyBo;
import com.aoto.business.allocationms.applysdetails.repository.dao.IApplyDetailIbaitsDao;
import com.aoto.business.allocationms.applysdetails.repository.dao.IApplyDetailJpaDao;
import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;

/**  
* @ClassName: AllocationApplyService  
* @Description: 调拨申请管理 
* @date 2017年3月25日  
*    
**/ 
@Service
public class AllocationApplyServiceImpl implements IAllocationApplyService {
	@Autowired
	private IAllocationApplyIbaitsDao allocationApplyIbaitsDao;
	@Autowired
	private IAllocationApplyJpaDao allocationApplyJpaDao;
	@Autowired
	private IApplyDetailIbaitsDao applyDetailIbaitsDao;
	@Autowired
	private IApplyDetailJpaDao applyDetailJpaDao;
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
		String[] businessTypes=new String[]{"AllocationapplysCirculation"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllAllocationApplys  
	* @Description: 查询所有调拨申请
	* @return  List<AllocationApply>
	* @throws  
	*/
	@Override
	//@Cacheable(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationApplys'", unless="#result==null")//创建缓存
	public List<AllocationApply> queryAllAllocationApplys() {
		return allocationApplyJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllAllocationApplysForTable  
	* @Description: 查询所有调拨申请(前端数据展示)
	* @return  Map<String, List<AllocationApply>> 
	* @throws  
	*/ 
	@Override
	public Map<String, List<AllocationApplyBo>> queryAllAllocationApplysForTable() {
		Map<String, List<AllocationApplyBo>> result = new HashMap<>();
		List<AllocationApplyBo> bos = new ArrayList<>();
		List<AllocationApply> allocationApplys = allocationApplyJpaDao.findAll();
		List<Domain> domains = this.queryBusinessDomains();
		if (allocationApplys != null && allocationApplys.size() > 0) {
			for (AllocationApply allocationApply : allocationApplys) {
				bos.add(convert(allocationApply, domains));
			}
		}
		result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryAllocationApplyByPk  
	* @Description: 根据主键查询调拨申请 
	* @param id
	* @return  Stack
	* @throws  
	*/ 
	@Override
	public AllocationApplyBo queryAllocationApplyByPk(Serializable id) {
		if(id!=null){
			List<Domain> domains = this.queryBusinessDomains();
			AllocationApply allocationApply = allocationApplyJpaDao.findOne(id);
			return convert(allocationApply, domains);
		}
		return null;
	}

	/**  
	* @Title: saveStack  
	* @Description: 保存调拨申请 
	* @param allocationApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationApplys'")//设置缓存过期
	public Map<String, Object> saveAllocationApply(AllocationApplyBo allocationApplyBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(allocationApplyBo!=null){
			allocationApplyBo.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			allocationApplyBo.setCreateUser(1);
			allocationApplyBo.setFlag("1");
			
			AllocationApply allocationApply = this.convert(allocationApplyBo);
			AllocationApply save = allocationApplyJpaDao.save(allocationApply);
			if(save!=null){
				int id = save.getId();
				List<ApplyDetail> details = allocationApplyBo.getApplyDetails();
				if(details!=null&&details.size()>0){
					for(ApplyDetail applyDetail:details){
						applyDetail.setAid(id);
						applyDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						applyDetail.setCreateUser(1);
						applyDetail.setFlag("1");
						
						  ApplyDetail detailResult = applyDetailJpaDao.save(applyDetail);
						if(detailResult!=null){
							flag=1;
						}else{
							flag=-1;
							result.put("result", flag);
							return result;
						}
					}
				}else{
					flag=1;
				}
				result.put("result", flag);
				result.put("data", allocationApplyBo);
			}else{
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: deleteAllocationApply  
	* @Description: 删除调拨申请 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationApplys'")//设置缓存过期
	public Map<String, Object> deleteAllocationApply(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			AllocationApply one = allocationApplyJpaDao.findOne(id);
			if(one!=null){
				try{
					allocationApplyJpaDao.delete(id);
					int rows = applyDetailIbaitsDao.deleteByAid((int)id);
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
	* @Title: modifyAllocationApply  
	* @Description: 修改调拨申请 
	* @param allocationApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:allocationms", key="'cache:allocationms:queryAllAllocationApplys'")//设置缓存过期
	public Map<String, Object> modifyAllocationApply(AllocationApply allocationApply) {
		Map<String, Object> result=new HashMap<>();
		if(allocationApply!=null){
			AllocationApply save = allocationApplyJpaDao.save(allocationApply);
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
	* @Title: modifyAllocationApply  
	* @Description: 修改调拨申请 
	* @param allocationApplyBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	public Map<String, Object> modifyAllocationApplyOfDetails(AllocationApplyBo allocationApplyBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(allocationApplyBo!=null){
			allocationApplyBo.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			allocationApplyBo.setCreateUser(1);
			allocationApplyBo.setFlag("1");
			
			AllocationApply allocationApply = this.convert(allocationApplyBo);
			AllocationApply save = allocationApplyJpaDao.save(allocationApply);
			if(save!=null){
				int id = save.getId();
				List<ApplyDetail> details = allocationApplyBo.getApplyDetails();
				if(details!=null&&details.size()>0){
					for(ApplyDetail applyDetail:details){
						applyDetail.setAid(id);
						applyDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						applyDetail.setCreateUser(1);
						applyDetail.setFlag("1");
						
						  ApplyDetail detailResult = applyDetailJpaDao.save(applyDetail);
						if(detailResult!=null){
							flag=1;
						}else{
							flag=-1;
							result.put("result", flag);
							return result;
						}
					}
				}else{
					flag=1;
				}
				result.put("result", flag);
				result.put("data", allocationApplyBo);
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
	* @param allocationApply
	* @param domains
	* @return  AllocationApplyBo
	* @throws  
	*/ 
	private AllocationApplyBo convert(AllocationApply allocationApply,List<Domain> domains) {
		AllocationApplyBo allocationApplyBo=new AllocationApplyBo();
		if(allocationApply!=null){
			String circulation = allocationApply.getCirculation();
			int createUser = allocationApply.getCreateUser();
			allocationApplyBo.setApplicant(allocationApply.getApplicant());
			allocationApplyBo.setApplyDate(allocationApply.getApplyDate());
			allocationApplyBo.setCirculation(circulation);
			allocationApplyBo.setCreateDate(allocationApply.getCreateDate());
			allocationApplyBo.setCreateUser(createUser);
			allocationApplyBo.setEquipments(allocationApply.getEquipments());
			allocationApplyBo.setFlag(allocationApply.getFlag());
			allocationApplyBo.setId(allocationApply.getId());
			allocationApplyBo.setReason(allocationApply.getReason());
			allocationApplyBo.setReturnDate(allocationApply.getReturnDate());
			
			if(domains!=null&&domains.size()>0){
				if(circulation!=null&&!circulation.equals("")&&!circulation.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("AllocationapplysCirculation")&&domainKey.equals(circulation)){
							allocationApplyBo.setCirculationValue(domain.getDomainValue());
						}
					}
				} 
			}
		}
		return allocationApplyBo;
	}
	
	/**  
	* @Title: convert  
	* @Description: Bo转实体  
	* @param allocationApplyBo
	* @return  AllocationApply
	* @throws  
	*/ 
	private AllocationApply convert(AllocationApplyBo allocationApplyBo) {
		AllocationApply allocationApply=new AllocationApply();
		if(allocationApplyBo!=null){
			allocationApply.setApplicant(allocationApplyBo.getApplicant());
			allocationApply.setApplyDate(allocationApplyBo.getApplyDate());
			allocationApply.setCirculation(allocationApplyBo.getCirculation());
			allocationApply.setCreateDate(allocationApplyBo.getCreateDate());
			allocationApply.setCreateUser(allocationApplyBo.getCreateUser());
			allocationApply.setEquipments(allocationApplyBo.getEquipments());
			allocationApply.setFlag(allocationApplyBo.getFlag());
			allocationApply.setId(allocationApplyBo.getId());
			allocationApply.setReason(allocationApplyBo.getReason());
			allocationApply.setReturnDate(allocationApplyBo.getReturnDate());
		}
		return allocationApply;
	}

}
