package com.aoto.business.allocationms.allocationlist.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.allocationms.allocationlist.repository.pojo.AllocationList;
import com.aoto.business.allocationms.allocationlist.service.IAllocationListService;
import com.aoto.business.allocationms.allocationlist.service.bo.AllocationListBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: AllocationListRestController  
* @Description:调拨单管理
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/allocationlists")
public class AllocationListRestController {
	@Autowired
	private IAllocationListService  allocationListService;
	
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return allocationListService.queryBusinessDomains();
	}

	
	
	
	@ApiOperation(value="查询所有调拨单信息", notes="查询所有调拨单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<AllocationList> queryAllAllocationLists(HttpServletRequest request) {
		return allocationListService.queryAllAllocationLists();
	}
	
	
	
	@ApiOperation(value="查询所有调拨单信息(前端数据渲染)", notes="查询所有调拨单信息(前端数据渲染)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<AllocationListBo>> queryAllAllocationListsForTable(HttpServletRequest request) {
		return allocationListService.queryAllAllocationListsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询调拨单信息", notes="根据主键查询调拨单信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public AllocationListBo queryAllocationListByPk(HttpServletRequest request,@PathVariable int id) {
		return allocationListService.queryAllocationListByPk(id);
	}
	
	
	
	
	@ApiOperation(value="根据调拨申请ID查询调拨单信息", notes="根据调拨申请ID查询调拨单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/query/aid/{id}")
	public List<AllocationList>  queryAllocationListsByAid(HttpServletRequest request,@PathVariable int aid) {
		return allocationListService.queryAllocationListsByAid(aid);
	}
	

	
	
	@ApiOperation(value="保存调拨单信息", notes="保存调拨单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationList", value = "调拨单对象", required = true, dataType = "AllocationList")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveAllocationList(HttpServletRequest request,AllocationList allocationList) {
		allocationList.setAid(1);
		allocationList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		allocationList.setCreateUser(1);
		allocationList.setFlag("1");
		allocationList.setQuantity(10);
		allocationList.setState("1");
		allocationList.setEid(1);
		return allocationListService.saveAllocationList(allocationList);
	}
	
	
	
	@ApiOperation(value="根据调拨申请生成调拨清单", notes="根据调拨申请生成调拨清单")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "aid", value = "调拨申请编号", required = true, dataType = "int")
	})
	@RequestMapping("/save/aid/{aid}")
	public Map<String, Object> saveAllocationListByAid(HttpServletRequest request,@PathVariable int aid) {
		return allocationListService.saveAllocationListByAid(aid);
	}

	
	
	
	@ApiOperation(value="根据主键删除调拨单信息", notes="根据主键删除调拨单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteAllocationList(HttpServletRequest request,@PathVariable int id) {
		return allocationListService.deleteAllocationList(id);
	}
	
	
	
	
	@ApiOperation(value="修改调拨单信息", notes="修改调拨单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "allocationList", value = "调拨单对象", required = true, dataType = "AllocationList")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyAllocationList(HttpServletRequest request,AllocationList allocationList) {
		return allocationListService.modifyAllocationList(allocationList);
	}
	
	
}
