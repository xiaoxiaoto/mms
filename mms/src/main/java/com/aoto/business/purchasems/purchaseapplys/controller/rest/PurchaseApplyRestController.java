package com.aoto.business.purchasems.purchaseapplys.controller.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.purchaseapplys.repository.pojo.PurchaseApply;
import com.aoto.business.purchasems.purchaseapplys.service.IPurchaseApplyService;
import com.aoto.business.purchasems.purchaseapplys.service.bo.PurchaseApplyBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: PurchaseApplyRestController  
* @Description: 采购申请管理  
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/purchaseapplys")
public class PurchaseApplyRestController {
	@Autowired
	private IPurchaseApplyService purchaseApplyService;
	private PurchaseApplyBo purchaseApplyBo;
	
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return purchaseApplyService.queryBusinessDomains();
	}
	
	
	@ApiOperation(value="查询所有采购申请信息", notes="查询所有采购申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<PurchaseApply> queryAllPurchaseApplys(HttpServletRequest request) {
		return purchaseApplyService.queryAllPurchaseApplys();
	}
	
	
	
	
	@ApiOperation(value="查询所有采购申请信息(前台数据展示)", notes="查询所有采购申请信息(前台数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<PurchaseApplyBo>> queryAllPurchaseApplysForTable(HttpServletRequest request) {
		return purchaseApplyService.queryAllPurchaseApplysForTable();
	}
	
	
	@ApiOperation(value="根据主键查询采购申请信息", notes="根据主键查询采购申请信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public PurchaseApplyBo queryPurchaseApplyByPk(HttpServletRequest request,@PathVariable int id) {
		return purchaseApplyService.queryPurchaseApplyByPk(id);
	}
	

	
	
	@ApiOperation(value="保存采购申请信息", notes="保存采购申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "purchaseApplyBo", value = "采购申请对象", required = true, dataType = "PurchaseApplyBo")
	})
	@RequestMapping("/save")
	public Map<String, Object> savePurchaseApply(HttpServletRequest request,PurchaseApplyBo purchaseApplyBo) {
		 Map<String, Object> result=new HashMap<String, Object>();
		 this.purchaseApplyBo=purchaseApplyBo;
			if(purchaseApplyBo!=null){
				result.put("result", 1);
				result.put("data", purchaseApplyBo);
			}else{
				result.put("result", -1);
			}
			return result;
	}

	
	
	@ApiOperation(value="保存调拨申请信息", notes="保存调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationApply", value = "调拨申请对象", required = true, dataType = "AllocationApply")
	})
	@RequestMapping("/detail/save")
	public Map<String, Object> savePurchaseApply(HttpServletRequest request,@RequestBody List<ApplysDetail> applyDetails) {
		purchaseApplyBo.setApplyDetails(applyDetails);
		return purchaseApplyService.savePurchaseApply(this.purchaseApplyBo);
	}
	
	
	/**  
	* @Title: deleteAllocationApply  
	* @Description:根据主键删除采购申请信息
	* @param request
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@ApiOperation(value="根据主键删除采购申请信息", notes="根据主键删除采购申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deletePurchaseApply(HttpServletRequest request,@PathVariable int id) {
		return purchaseApplyService.deletePurchaseApply(id);
	}
	
	
	
	
	@ApiOperation(value="修改采购申请信息", notes="修改采购申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "purchaseApply", value = "采购申请对象", required = true, dataType = "PurchaseApply")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyPurchaseApply(HttpServletRequest request,PurchaseApply purchaseApply) {
		return purchaseApplyService.modifyPurchaseApply(purchaseApply);
	}
	
	@ApiOperation(value="修改采购申请信息", notes="修改采购申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applyDetails", value = "采购详情", required = true, dataType = "List<ApplyDetail>")
	})
	@RequestMapping("/detail/update")
	public Map<String, Object> modifyAllocationApplyOfDetails(HttpServletRequest request,@RequestBody List<ApplysDetail> applyDetails) {
		purchaseApplyBo.setApplyDetails(applyDetails);
		return purchaseApplyService.modifyPurchaseApplyOfDetails(this.purchaseApplyBo);
	}
}
