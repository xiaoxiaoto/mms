package com.aoto.business.allocationms.applysdetails.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.allocationms.applysdetails.repository.pojo.ApplyDetail;
import com.aoto.business.allocationms.applysdetails.service.IApplyDetailService;
import com.aoto.business.allocationms.applysdetails.service.bo.ApplyDetailBo;
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
@RequestMapping("/applydetails")
public class ApplyDetailRestController {
	@Autowired
	private IApplyDetailService  applyDetailService;
	
	
	
	
	@ApiOperation(value="查询所有调拨申请明细信息", notes="查询所有调拨申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<ApplyDetailBo> queryAllApplyDetailServices(HttpServletRequest request) {
		return applyDetailService.queryAllApplyDetails();
	}
	
	
	@ApiOperation(value="查询所有调拨申请明细信息(前端数据渲染)", notes="查询所有调拨申请明细信息(前端数据渲染)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String, List<ApplyDetailBo>> queryAllApplyDetailServicesForTable(HttpServletRequest request) {
		return applyDetailService.queryAllApplyDetailsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询调拨申请明细信息", notes="根据主键查询调拨申请明细信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public ApplyDetail queryApplyDetailByPk(HttpServletRequest request,@PathVariable int id) {
		return applyDetailService.queryApplyDetailByPk(id);
	}
	
	
	
	
	@ApiOperation(value="根据申请编号查询调拨申请明细信息", notes="根据申请编号查询调拨申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "调拨申请编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/aid/{id}")
	public List<ApplyDetail> queryApplyDetailByAid(HttpServletRequest request,@PathVariable int aid) {
		return applyDetailService.queryApplyDetailsByAid(aid);
	}
	
	
	
	@ApiOperation(value="根据申请编号查询调拨申请明细信息(前端数据渲染)", notes="根据申请编号查询调拨申请明细信息(前端数据渲染)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "调拨申请编号", required = true, dataType = "int")
	})
	@RequestMapping("/table/query/aid/{aid}")
	public Map<String, List<ApplyDetailBo>> queryApplyDetailByAidForTable(HttpServletRequest request,@PathVariable int aid) {
		return applyDetailService.queryApplyDetailsByAidForTable(aid);
	}
	

	
	
	@ApiOperation(value="保存调拨申请明细信息", notes="保存调拨申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationList", value = "调拨申请明细对象", required = true, dataType = "AllocationList")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveApplyDetail(HttpServletRequest request,ApplyDetail applyDetail) {
		applyDetail.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		applyDetail.setCreateUser(1);
		applyDetail.setEid(1);
		applyDetail.setFlag("1");
		applyDetail.setQuantity(20);
		applyDetail.setAid(1);
		return applyDetailService.saveApplyDetail(applyDetail);
	}

	
	
	
	@ApiOperation(value="根据主键删除调拨申请明细信息", notes="根据主键删除调拨申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteApplyDetail(HttpServletRequest request,@PathVariable int id) {
		return applyDetailService.deleteApplyDetail(id);
	}
	
	
	
	
	@ApiOperation(value="修改调拨申请明细信息", notes="修改调拨申请明细信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applyDetail", value = "调拨申请明细对象", required = true, dataType = "ApplyDetail")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyApplyDetail(HttpServletRequest request,ApplyDetail applyDetail) {
		applyDetail = applyDetailService.queryApplyDetailByPk(1);
		applyDetail.setQuantity(4);
		return applyDetailService.modifyApplyDetail(applyDetail);
	}
	
}
