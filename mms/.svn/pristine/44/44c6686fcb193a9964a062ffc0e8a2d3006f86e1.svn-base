package com.aoto.business.allocationms.allocationapplys.controller.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.allocationms.allocationapplys.repository.pojo.AllocationApply;
import com.aoto.business.allocationms.allocationapplys.service.IAllocationApplyService;
import com.aoto.business.allocationms.allocationapplys.service.bo.AllocationApplyBo;
import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: AllocationApplyRestController  
* @Description: 调拨申请管理
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/allocationapplys")
public class AllocationApplyRestController {
	@Autowired
	private IAllocationApplyService allocationApplyService;
	private AllocationApplyBo allocationApplyBo;
	
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return allocationApplyService.queryBusinessDomains();
	}
	
	@ApiOperation(value="查询所有调拨申请信息", notes="查询所有调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<AllocationApply> queryAllAllocationApplys(HttpServletRequest request) {
		return allocationApplyService.queryAllAllocationApplys();
	}
	
	
	@ApiOperation(value="查询所有调拨申请信息(前端数据展示)", notes="查询所有调拨申请信息(前端数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public  Map<String,List<AllocationApplyBo>> queryAllAllocationApplysForTable(HttpServletRequest request) {
		return allocationApplyService.queryAllAllocationApplysForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询调拨申请信息", notes="根据主键查询调拨申请信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public AllocationApplyBo queryAllocationApplyByPk(HttpServletRequest request,@PathVariable int id) {
		return allocationApplyService.queryAllocationApplyByPk(id);
	}
	

	
	
	@ApiOperation(value="保存调拨申请信息", notes="保存调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationApply", value = "调拨申请对象", required = true, dataType = "AllocationApply")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveAllocationApply(HttpServletRequest request,AllocationApplyBo allocationApplyBo) {
		 Map<String, Object> result=new HashMap<String, Object>();
		 this.allocationApplyBo=allocationApplyBo;
			if(allocationApplyBo!=null){
				result.put("result", 1);
				result.put("data", allocationApplyBo);
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
	public Map<String, Object> saveAllocationApply(HttpServletRequest request,@RequestBody List<ApplyDetail> applyDetails) {
		allocationApplyBo.setApplyDetails(applyDetails);
		return allocationApplyService.saveAllocationApply(this.allocationApplyBo);
	}

	
	
	
	@ApiOperation(value="根据主键删除调拨申请信息", notes="根据主键删除调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteAllocationApply(HttpServletRequest request,@PathVariable int id) {
		return allocationApplyService.deleteAllocationApply(id);
	}
	
	
	
	
	@ApiOperation(value="修改调拨申请信息", notes="修改调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationApply", value = "调拨申请对象", required = true, dataType = "AllocationApply")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyAllocationApply(HttpServletRequest request,AllocationApply allocationApply) {
		return allocationApplyService.modifyAllocationApply(allocationApply);
	}
	
	
	
	@ApiOperation(value="修改调拨申请信息", notes="修改调拨申请信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applyDetails", value = "调拨详情", required = true, dataType = "List<ApplyDetail>")
	})
	@RequestMapping("/detail/update")
	public Map<String, Object> modifyAllocationApplyOfDetails(HttpServletRequest request,@RequestBody List<ApplyDetail> applyDetails) {
		allocationApplyBo.setApplyDetails(applyDetails);
		return allocationApplyService.modifyAllocationApplyOfDetails(this.allocationApplyBo);
	}
	
}
