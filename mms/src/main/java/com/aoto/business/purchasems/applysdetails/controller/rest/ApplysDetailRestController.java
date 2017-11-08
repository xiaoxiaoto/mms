package com.aoto.business.purchasems.applysdetails.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.purchasems.applysdetails.repository.pojo.ApplysDetail;
import com.aoto.business.purchasems.applysdetails.service.IApplysDetailService;
import com.aoto.business.purchasems.applysdetails.service.bo.ApplysDetailBo;
import com.aoto.systemutil.datehandle.DateUtil;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: ApplyDetailRestController  
* @Description: TODO  
* @date 2017年3月25日  
*    
**/ 
@RestController
@RequestMapping("/purchaseApplysDetails")
public class ApplysDetailRestController {
	@Autowired
	private IApplysDetailService  applysDetailService;
	
	
	
	
	@ApiOperation(value="查询所有采购申请明细信息", notes="查询所有采购申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<ApplysDetailBo> queryAllApplysDetailServices(HttpServletRequest request) {
		return applysDetailService.queryAllApplysDetails();
	}
	
	
	
	@ApiOperation(value="根据主键查询采购申请明细信息", notes="根据主键查询采购申请明细信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public ApplysDetail queryPurchaseApplysDetailByPk(HttpServletRequest request,@PathVariable int id) {
		return applysDetailService.queryApplysDetailByPk(id);
	}
	
	
	
	
	@ApiOperation(value="根据申请编号查询采购申请明细信息", notes="根据申请编号查询采购申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/query/aid/{id}")
	public List<ApplysDetail> queryApplyDetailByAid(HttpServletRequest request,@PathVariable int aid) {
		return applysDetailService.queryApplysDetailsByAid(aid);
	}
	

	
	@ApiOperation(value="根据申请编号查询调拨申请明细信息(前端数据渲染)", notes="根据申请编号查询调拨申请明细信息(前端数据渲染)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "调拨申请编号", required = true, dataType = "int")
	})
	@RequestMapping("/table/query/aid/{aid}")
	public Map<String, List<ApplysDetailBo>> queryApplyDetailByAidForTable(HttpServletRequest request,@PathVariable int aid) {
		return applysDetailService.queryApplyDetailsByAidForTable(aid);
	}
	
	
	
	
	@ApiOperation(value="保存采购申请明细信息", notes="保存采购申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applysDetail", value = "采购申请明细对象", required = true, dataType = "ApplysDetail")
	})
	@RequestMapping("/save")
	public Map<String, Object> savePurchaseApplysDetail(HttpServletRequest request,ApplysDetail applysDetail) {
		applysDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		applysDetail.setCreateUser(1);
		applysDetail.setEid(1);
		applysDetail.setFlag("1");
		applysDetail.setQuantity(20);
		applysDetail.setAid(1);
		return applysDetailService.saveApplysDetail(applysDetail);
	}

	
	
	
	/**  
	* @Title: deleteAllocationApply  
	* @Description: TODO 
	* @param request
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	@ApiOperation(value="根据主键删除采购申请明细信息", notes="根据主键删除采购申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deletePurchaseApplysDetail(HttpServletRequest request,@PathVariable int id) {
		return applysDetailService.deleteApplysDetail(id);
	}
	
	
	
	
	@ApiOperation(value="修改采购申请明细信息", notes="修改采购申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applyDetail", value = "采购申请明细对象", required = true, dataType = "ApplyDetail")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyPurchaseApplysDetail(HttpServletRequest request,ApplysDetail applysDetail) {
		applysDetail = applysDetailService.queryApplysDetailByPk(1);
		applysDetail.setQuantity(4);
		return applysDetailService.modifyApplysDetail(applysDetail);
	}
	
}
