package com.aoto.business.purchasems.purchasereceiptlist.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.applysdetails.service.IApplysDetailService;
import com.aoto.business.purchasems.purchasereceiptlist.repository.dao.IPurchaseReceiptListIbaitsDao;
import com.aoto.business.purchasems.purchasereceiptlist.repository.dao.IPurchaseReceiptListJpaDao;
import com.aoto.business.purchasems.purchasereceiptlist.repository.pojo.PurchaseReceiptList;
import com.aoto.business.purchasems.purchasereceiptlist.service.IPurchaseReceiptListService;
import com.aoto.business.purchasems.purchasereceiptlist.service.bo.PurchaseReceiptListBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;

/**  
* @ClassName: PurchaseReceiptListServiceImpl  
* @Description:采购申请回执单管理
* @date 2017年3月25日  
*    
**/ 
@Service
public class PurchaseReceiptListServiceImpl implements IPurchaseReceiptListService {
	@Autowired
	private IPurchaseReceiptListIbaitsDao purchaseReceiptListIbaitsDao;
	@Autowired
	private IPurchaseReceiptListJpaDao purchaseReceiptListJpaDao;
	@Autowired
	private IApplysDetailService  applysDetailService;
	@Autowired
	private IEquipmentService equipmentService;
	@Autowired
	private IDomainService domainService;
	
	@Value("${sequence.prefix}")
	private String sequencePrefix;
	
	
	/**  
	* @Title: queryBusinessDomains  
	* @Description: 查询业务模块值域
	* @param businessTypes
	* @return  List<Domain>
	* @throws  
	*/ 
	@Override
	public List<Domain> queryBusinessDomains(){
		String[] businessTypes=new String[]{"PurchaseReceiptListState"};
		List<Domain> result=new ArrayList<>();
		if(businessTypes!=null&&businessTypes.length>0){
			for(String businessType:businessTypes){
				result.addAll( domainService.queryDomainByDomainType(businessType));
			}
		}
		return result;
	}
	
	/**  
	* @Title: queryAllPurchaseReceiptLists  
	* @Description: 查询所有采购申请回执单 
	* @return  List<PurchaseReceiptList>
	* @throws  
	*/ 
	@Override
	//@Cacheable(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseReceiptLists'", unless="#result==null")//创建缓存
	public List<PurchaseReceiptList> queryAllPurchaseReceiptLists() {
		return purchaseReceiptListJpaDao.findAll();
	}
	
	/**  
	* @Title: queryAllPurchaseReceiptListsForTable  
	* @Description:查询所有采购申请回执单 (前端数据渲染)
	* @return  Map<String,List<PurchaseReceiptListBo>>
	* @throws  
	*/ 
	@Override
	public Map<String, List<PurchaseReceiptListBo>> queryAllPurchaseReceiptListsForTable() {
		Map<String, List<PurchaseReceiptListBo>> result=new HashMap<>();
		 List<PurchaseReceiptListBo> bos=new  ArrayList<>();
		 List<Domain> domains = this.queryBusinessDomains();
		 List<PurchaseReceiptList> purchaseReceiptLists = purchaseReceiptListJpaDao.findAll();
		 List<Equipment> equipments = equipmentService.queryAllEquipments();
			if (purchaseReceiptLists != null && purchaseReceiptLists.size() > 0) {
				for (PurchaseReceiptList purchaseReceiptList : purchaseReceiptLists) {
					bos.add(convert(purchaseReceiptList,domains,equipments));
				}
			}
			result.put("data", bos);
		return result;
	}

	/**  
	* @Title: queryPurchaseReceiptListByPk  
	* @Description: 根据主键查询采购申请回执单 
	* @param id
	* @return  PurchaseReceiptList
	* @throws  
	*/
	@Override
	public PurchaseReceiptListBo queryPurchaseReceiptListByPk(Serializable id) {
		if(id!=null){
			 List<Domain> domains = this.queryBusinessDomains();
			 PurchaseReceiptList purchaseReceiptList = purchaseReceiptListJpaDao.findOne(id);
			 List<Equipment> equipments = equipmentService.queryAllEquipments();
			return convert(purchaseReceiptList,domains,equipments);
		}
		return null;
	}

	/**  
	* @Title: queryPurchaseReceiptListsByAid  
	* @Description: 根据采购申请编号查询采购申请回执单
	* @param aid
	* @return  List<AllocationList>
	* @throws  
	*/ 
	@Override
	public List<PurchaseReceiptList> queryPurchaseReceiptListsByAid(int aid) {
		if(aid!=0){
			return purchaseReceiptListIbaitsDao.queryPurchaseReceiptListByAid(aid);
		}
		return null;
	}

	/**  
	* @Title: savePurchaseReceiptList  
	* @Description: 保存采购申请回执单 
	* @param purchaseReceiptList
	* @return  Map<String,Object>
	* @throws  
	*/
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseReceiptLists'")//设置缓存过期
	public Map<String, Object> savePurchaseReceiptList(PurchaseReceiptList purchaseReceiptList) {
		Map<String, Object> result=new HashMap<>();
		if(purchaseReceiptList!=null){
			PurchaseReceiptList save = purchaseReceiptListJpaDao.save(purchaseReceiptList);
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
	* @Title: savePurchaseReceiptListByAid  
	* @Description: 根据采购申请生成调拨清单
	* @param aid
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	public Map<String, Object> savePurchaseReceiptListByAid(int aid) {
		Map<String, Object> result=new HashMap<>();
		int flag=1;
		if(aid>0){
			List<PurchaseReceiptList> purchaseReceiptLists = purchaseReceiptListIbaitsDao.queryPurchaseReceiptListByAid(aid);
			if(purchaseReceiptLists!=null&&purchaseReceiptLists.size()>0){
				flag=0;
			}else{
				List<ApplysDetail> applyDetails= applysDetailService.queryApplysDetailsByAid(aid);
				if(applyDetails!=null&&applyDetails.size()>0){
					String sn = this.generateSequenceNumber();
					for(ApplysDetail applyDetail:applyDetails){
						PurchaseReceiptList purchaseReceiptList = this.generateAllocationList(sn,applyDetail);
						PurchaseReceiptList save = purchaseReceiptListJpaDao.save(purchaseReceiptList);
						if(save==null){
							flag=-1;
						}
					}
				}else{
					flag=-1;
				}
			}
		}else{
			flag=-1;
		}
		result.put("result", flag);
		return result;
	}
	/**  
	* @Title: deletePurchaseReceiptList  
	* @Description: 删除采购申请回执单
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseReceiptLists'")//设置缓存过期
	public Map<String, Object> deletePurchaseReceiptList(Serializable id) {
		Map<String, Object> result=new HashMap<>();
		if(id!=null){
			PurchaseReceiptList one = purchaseReceiptListJpaDao.findOne(id);
			if(one!=null){
				try{
					purchaseReceiptListJpaDao.delete(id);
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
	* @Title: modifyPurchaseReceiptList  
	* @Description: 修改采购申请回执单 
	* @param purchaseReceiptList
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@Override
	@Transactional
	//@CacheEvict(value="cache:purchasems", key="'cache:purchasems:queryAllPurchaseReceiptLists'")//设置缓存过期
	public Map<String, Object> modifyPurchaseReceiptList(PurchaseReceiptList purchaseReceiptList) {
		Map<String, Object> result=new HashMap<>();
		if(purchaseReceiptList!=null){
			PurchaseReceiptList save = purchaseReceiptListJpaDao.save(purchaseReceiptList);
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
	* @Title: generateAllocationList  
	* @Description: 根据调拨申请明细生成调拨单
	* @param applyDetail
	* @return  AllocationList
	* @throws  
	*/ 
	public PurchaseReceiptList generateAllocationList(String sequenceNumber,ApplysDetail applyDetail){
		PurchaseReceiptList purchaseReceiptList=new PurchaseReceiptList();
		purchaseReceiptList.setSequenceNumber(sequenceNumber);
		purchaseReceiptList.setAid(applyDetail.getAid());
		purchaseReceiptList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd"));
		purchaseReceiptList.setCreateUser(1);
		purchaseReceiptList.setEid(applyDetail.getEid());
		purchaseReceiptList.setFlag("id");
		purchaseReceiptList.setQuantity(applyDetail.getQuantity());
		purchaseReceiptList.setIntoquantity(0);
		purchaseReceiptList.setState("1");
		return purchaseReceiptList;
	}
	/**  
	* @Title: generateSequenceNumber  
	* @Description: 生成流水单号
	* @return  String
	* @throws  
	*/ 
	public String generateSequenceNumber(){
		if(this.sequencePrefix==null||this.sequencePrefix.equals("")){
			this.sequencePrefix="mms-allocationlist";
		}
		String sequenceNumber=this.sequencePrefix+DateUtil.getCurrentDate("yyyyMMddHHmmss")+(int)(Math.random()*(9999-1000+1))+1000;
		return sequenceNumber;
	}
	
	/**  
	* @Title: convert  
	* @Description: 实体转Bo  
	* @param applyDetail
	* @param allocationApplys
	* @return  ApplyDetailBo
	* @throws  
	*/ 
	private PurchaseReceiptListBo convert(PurchaseReceiptList purchaseReceiptList,List<Domain> domains,List<Equipment> equipments) {
		PurchaseReceiptListBo purchaseReceiptListBo=new PurchaseReceiptListBo();
		if(purchaseReceiptList!=null){
			int aid = purchaseReceiptList.getAid();
			int createUser = purchaseReceiptList.getCreateUser();
			int eid = purchaseReceiptList.getEid();
			String state = purchaseReceiptList.getState();
			
			purchaseReceiptListBo.setSequenceNumber(purchaseReceiptList.getSequenceNumber());
			purchaseReceiptListBo.setAid(aid);
			purchaseReceiptListBo.setCreateDate(purchaseReceiptList.getCreateDate());
			purchaseReceiptListBo.setCreateUser(createUser);
			purchaseReceiptListBo.setEid(eid);
			purchaseReceiptListBo.setFlag(purchaseReceiptList.getFlag());
			purchaseReceiptListBo.setId(purchaseReceiptList.getId());
			purchaseReceiptListBo.setQuantity( purchaseReceiptList.getQuantity());
			purchaseReceiptListBo.setIntoquantity( purchaseReceiptList.getIntoquantity());
			purchaseReceiptListBo.setState(state);
			
			if(domains!=null&&domains.size()>0){
				if(state!=null&&!state.equals("")&&!state.equals("null")){
					for (Domain domain : domains) {
						String businessType = domain.getBusinessType();
						String domainKey = domain.getDomainKey();
						if(businessType.equals("PurchaseReceiptListState")&&domainKey.equals(state)){
							purchaseReceiptListBo.setStateValue(domain.getDomainValue());
						}
					}
				} 
			}
			if(equipments!=null&&equipments.size()>0){
				if(eid>0){
					for (Equipment equipment : equipments) {
						int id = equipment.getId();
						if(id==eid){
							purchaseReceiptListBo.setEname(equipment.getEname());
						}
					}
				} 
			}
		}
		return purchaseReceiptListBo;
	}
	
}
