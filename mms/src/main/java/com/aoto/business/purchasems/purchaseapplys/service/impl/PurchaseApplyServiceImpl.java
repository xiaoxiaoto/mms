package com.aoto.business.purchasems.purchaseapplys.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.purchasems.applysdetails.repository.dao.IApplysDetailIbaitsDao;
import com.aoto.business.purchasems.applysdetails.repository.dao.IApplysDetailJpaDao;
import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.purchaseapplys.repository.dao.IPurchaseApplyIbaitsDao;
import com.aoto.business.purchasems.purchaseapplys.repository.dao.IPurchaseApplyJpaDao;
import com.aoto.business.purchasems.purchaseapplys.repository.pojo.PurchaseApply;
import com.aoto.business.purchasems.purchaseapplys.service.IPurchaseApplyService;
import com.aoto.business.purchasems.purchaseapplys.service.bo.PurchaseApplyBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;

/**  
* @ClassName: PurchaseApplyServiceImpl  
* @Description:  采购申请管理 
* @date 2017年3月25日  
*    
**/ 
@Service
public class PurchaseApplyServiceImpl implements IPurchaseApplyService {
	@Autowired
	private IPurchaseApplyIbaitsDao purchaseApplyIbaitsDao;
	@Autowired
	private IPurchaseApplyJpaDao purchaseApplyJpaDao;
	@Autowired
	private IApplysDetailIbaitsDao applysDetailIbaitsDao;
	@Autowired
	private IApplysDetailJpaDao applysDetailJpaDao;
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
		String[] businessTypes=new String[]{"PurchaseApplysCirculation"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllPurchaseApplys  
	* @Description: 查询所有采购申请 
	* @return  List<PurchaseApply>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseApplys'", unless="#result==null")//创建缓存
	public List<PurchaseApply> queryAllPurchaseApplys() {
		return purchaseApplyJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllPurchaseApplysForTable  
	* @Description: 查询所有采购申请(前台数据展示)  
	* @return  Map<String,List<PurchaseApplyBo>>
	* @throws  
	*/
	@Override
	public Map<String, List<PurchaseApplyBo>> queryAllPurchaseApplysForTable() {
		Map<String, List<PurchaseApplyBo>> result = new HashMap<>();
		List<PurchaseApplyBo> bos = new ArrayList<>();
		List<PurchaseApply> purchaseApplys = purchaseApplyJpaDao.findAll();
		List<Domain> domains = this.queryBusinessDomains();
		if (purchaseApplys != null && purchaseApplys.size() > 0) {
			for (PurchaseApply purchaseApply : purchaseApplys) {
				bos.add(convert(purchaseApply, domains));
			}
		}
		result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryPurchaseApplyByPk  
	* @Description: 根据主键查询采购申请
	* @param id
	* @return  PurchaseApply
	* @throws  
	*/ 
	@Override
	public PurchaseApplyBo queryPurchaseApplyByPk(Serializable id) {
		if(id!=null){
			List<Domain> domains = this.queryBusinessDomains();
			PurchaseApply purchaseApply = purchaseApplyJpaDao.findOne(id);
			return convert(purchaseApply, domains);
		}
		return null;
	}

	/**  
	* @Title: savePurchaseApply  
	* @Description: 保存采购申请 
	* @param purchaseApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseApplys'")//设置缓存过期
	public Map<String, Object> savePurchaseApply(PurchaseApplyBo purchaseApplyBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(purchaseApplyBo!=null){
			purchaseApplyBo.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			purchaseApplyBo.setCreateUser(1);
			purchaseApplyBo.setFlag("1");
			
			PurchaseApply purchaseApply = this.convert(purchaseApplyBo);
			PurchaseApply save = purchaseApplyJpaDao.save(purchaseApply);
			if(save!=null){
				int id = save.getId();
				List<ApplysDetail> details = purchaseApplyBo.getApplyDetails();
				if(details!=null&&details.size()>0){
					for(ApplysDetail applyDetail:details){
						applyDetail.setAid(id);
						applyDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						applyDetail.setCreateUser(1);
						applyDetail.setFlag("1");
						
						  ApplysDetail detailResult = applysDetailJpaDao.save(applyDetail);
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
				result.put("data", purchaseApplyBo);
			}else{
				result.put("result", -1);
			}
		}else{
			result.put("result", -1);
		}
		return result;
	}

	/**  
	* @Title: deletePurchaseApply  
	* @Description: 删除采购申请 
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseApplys'")//设置缓存过期
	public Map<String, Object> deletePurchaseApply(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			PurchaseApply one = purchaseApplyJpaDao.findOne(id);
			if(one!=null){
				try{
					purchaseApplyJpaDao.delete(id);
					int rows = applysDetailIbaitsDao.deleteByAid((int)id);
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
	* @Title: modifyPurchaseApply  
	* @Description: 修改采购申请
	* @param purchaseApply
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseApplys'")//设置缓存过期
	public Map<String, Object> modifyPurchaseApply(PurchaseApply purchaseApply) {
		Map<String, Object> result=new HashMap<>();
		if(purchaseApply!=null){
			PurchaseApply save = purchaseApplyJpaDao.save(purchaseApply);
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
	* @Title: modifyPurchaseApplyOfDetails  
	* @Description: 修改采购申请
	* @param purchaseApplyBo
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	public Map<String, Object> modifyPurchaseApplyOfDetails(PurchaseApplyBo purchaseApplyBo) {
		Map<String, Object> result=new HashMap<>();
		int flag=-1;
		if(purchaseApplyBo!=null){
			purchaseApplyBo.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
			purchaseApplyBo.setCreateUser(1);
			purchaseApplyBo.setFlag("1");
			
			PurchaseApply purchaseApply = this.convert(purchaseApplyBo);
			PurchaseApply save = purchaseApplyJpaDao.save(purchaseApply);
			if(save!=null){
				int id = save.getId();
				List<ApplysDetail> details = purchaseApplyBo.getApplyDetails();
				if(details!=null&&details.size()>0){
					for(ApplysDetail applyDetail:details){
						applyDetail.setAid(id);
						applyDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
						applyDetail.setCreateUser(1);
						applyDetail.setFlag("1");
						
						  ApplysDetail detailResult = applysDetailJpaDao.save(applyDetail);
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
				result.put("data", purchaseApplyBo);
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
	* @Description:  实体转Bo  
	* @param purchaseApply
	* @param domains
	* @return  PurchaseApplyBo
	* @throws  
	*/ 
	private PurchaseApplyBo convert(PurchaseApply purchaseApply,List<Domain> domains) {
		PurchaseApplyBo purchaseApplyBo=new PurchaseApplyBo();
		if(purchaseApplyBo!=null){
			String circulation = purchaseApply.getCirculation();
			int createUser = purchaseApply.getCreateUser();
			purchaseApplyBo.setApplicant(purchaseApply.getApplicant());
			purchaseApplyBo.setApplyDate(purchaseApply.getApplyDate());
			purchaseApplyBo.setCirculation(circulation);
			purchaseApplyBo.setCreateDate(purchaseApply.getCreateDate());
			purchaseApplyBo.setCreateUser(createUser);
			purchaseApplyBo.setEquipments(purchaseApply.getEquipments());
			purchaseApplyBo.setFlag(purchaseApply.getFlag());
			purchaseApplyBo.setId(purchaseApply.getId());
			purchaseApplyBo.setReason(purchaseApply.getReason());
			purchaseApplyBo.setArrivalDate(purchaseApply.getArrivalDate());
			
			if(domains!=null&&domains.size()>0){
				if(circulation!=null&&!circulation.equals("")&&!circulation.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("PurchaseApplysCirculation")&&domainKey.equals(circulation)){
							purchaseApplyBo.setCirculationValue(domain.getDomainValue());
						}
					}
				} 
			}
		}
		return purchaseApplyBo;
	}
	
	/**  
	* @Title: convert  
	* @Description: Bo转实体
	* @param purchaseApplyBo
	* @return  PurchaseApply
	* @throws  
	*/ 
	private PurchaseApply convert(PurchaseApplyBo purchaseApplyBo) {
		PurchaseApply purchaseApply=new PurchaseApply();
		if(purchaseApplyBo!=null){
			purchaseApply.setApplicant(purchaseApplyBo.getApplicant());
			purchaseApply.setApplyDate(purchaseApplyBo.getApplyDate());
			purchaseApply.setCirculation(purchaseApplyBo.getCirculation());
			purchaseApply.setCreateDate(purchaseApplyBo.getCreateDate());
			purchaseApply.setCreateUser(purchaseApplyBo.getCreateUser());
			purchaseApply.setEquipments(purchaseApplyBo.getEquipments());
			purchaseApply.setFlag(purchaseApplyBo.getFlag());
			purchaseApply.setId(purchaseApplyBo.getId());
			purchaseApply.setReason(purchaseApplyBo.getReason());
			purchaseApply.setArrivalDate(purchaseApplyBo.getArrivalDate());
		}
		return purchaseApply;
	}
}
