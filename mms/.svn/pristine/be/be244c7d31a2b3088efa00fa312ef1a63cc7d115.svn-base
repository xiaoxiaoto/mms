package com.aoto.business.purchasems.purchasereceiptlist.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.purchasems.purchasereceiptlist.repository.pojo.PurchaseReceiptList;
import com.aoto.business.purchasems.purchasereceiptlist.service.IPurchaseReceiptListService;
import com.aoto.business.purchasems.purchasereceiptlist.service.bo.PurchaseReceiptListBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: PurchaseReceiptListRestController  
* @Description: 采购申请回执单管理
* @date 2017年3月29日  
*    
**/ 
@RestController
@RequestMapping("/purchasereceiptlists")
public class PurchaseReceiptListRestController {
	@Autowired
	private IPurchaseReceiptListService  purchaseReceiptListService;
	
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return purchaseReceiptListService.queryBusinessDomains();
	}
	
	
	
	@ApiOperation(value="查询所有采购申请回执单信息", notes="查询所有采购申请回执单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<PurchaseReceiptList> queryAllPurchaseReceiptList(HttpServletRequest request) {
		return purchaseReceiptListService.queryAllPurchaseReceiptLists();
	}
	
	
	@ApiOperation(value="查询所有采购申请回执单信息(前端数据渲染)", notes="查询所有采购申请回执单信息(前端数据渲染)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<PurchaseReceiptListBo>> queryAllPurchaseReceiptListsForTable(HttpServletRequest request) {
		return purchaseReceiptListService.queryAllPurchaseReceiptListsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询采购申请回执单信息", notes="根据主键查询采购申请回执单信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public PurchaseReceiptListBo queryPurchaseReceiptListByPk(HttpServletRequest request,@PathVariable int id) {
		return purchaseReceiptListService.queryPurchaseReceiptListByPk(id);
	}
	
	
	
	
	@ApiOperation(value="根据调拨申请ID查询采购申请回执单信息", notes="根据调拨申请ID查询采购申请回执单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/query/aid/{id}")
	public List<PurchaseReceiptList>  queryPurchaseReceiptListByAid(HttpServletRequest request,@PathVariable int aid) {
		return purchaseReceiptListService.queryPurchaseReceiptListsByAid(aid);
	}
	

	
	
	@ApiOperation(value="保存采购申请回执单信息", notes="保存采购申请回执单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "purchaseReceiptList", value = "采购申请回执单对象", required = true, dataType = "PurchaseReceiptList")
	})
	@RequestMapping("/save")
	public Map<String, Object> savePurchaseReceiptList(HttpServletRequest request,PurchaseReceiptList purchaseReceiptList) {
		purchaseReceiptList.setAid(1);
		purchaseReceiptList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		purchaseReceiptList.setCreateUser(1);
		purchaseReceiptList.setFlag("1");
		purchaseReceiptList.setQuantity(10);
		purchaseReceiptList.setState("1");
		purchaseReceiptList.setEid(1);
		return purchaseReceiptListService.savePurchaseReceiptList(purchaseReceiptList);
	}

	
	@ApiOperation(value="根据采购申请生成调拨清单", notes="根据采购申请生成调拨清单")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "采购申请编号", required = true, dataType = "int")
	})
	@RequestMapping("/save/aid/{aid}")
	public Map<String, Object> savePurchaseReceiptListByAid(HttpServletRequest request,@PathVariable int aid) {
		return purchaseReceiptListService.savePurchaseReceiptListByAid(aid);
	}
	
	
	@ApiOperation(value="根据主键删除采购申请回执单信息", notes="根据主键删除采购申请回执单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deletePurchaseReceiptList(HttpServletRequest request,@PathVariable int id) {
		return purchaseReceiptListService.deletePurchaseReceiptList(id);
	}
	
	
	
	
	@ApiOperation(value="修改采购申请回执单信息", notes="修改采购申请回执单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationList", value = "采购申请回执单对象", required = true, dataType = "AllocationList")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyAllocationList(HttpServletRequest request,PurchaseReceiptList purchaseReceiptList) {
		return purchaseReceiptListService.modifyPurchaseReceiptList(purchaseReceiptList);
	}
	
	
}
