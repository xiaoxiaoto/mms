package com.aoto.business.inventoryms.supplyedlist.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.inventoryms.supplyedlist.repository.pojo.SupplyedList;
import com.aoto.business.inventoryms.supplyedlist.service.ISupplyedListService;
import com.aoto.business.inventoryms.supplyedlist.service.bo.SupplyedListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: SupplyedListRestController  
* @Description:出库清单管理  
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/supplyedlists")
public class SupplyedListRestController {
	@Autowired
	private ISupplyedListService supplyedListService;
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return supplyedListService.queryBusinessDomains();
	}
	
	
	@ApiOperation(value="查询所有出库清单信息", notes="查询所有出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<SupplyedList> queryAllSupplyedLists(HttpServletRequest request) {
		return supplyedListService.queryAllSupplyedLists();
	}
	
	
	@ApiOperation(value="查询所有出库清单信息(前台数据展示)", notes="查询所有出库清单信息(前台数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<SupplyedListBo>> queryAllSupplyedListsForTable(HttpServletRequest request) {
		return supplyedListService.queryAllSupplyedListsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询出库清单信息", notes="根据主键查询出库清单信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public SupplyedListBo querySupplyedListByPk(HttpServletRequest request,@PathVariable int id) {
		return supplyedListService.querySupplyedListByPk(id);
	}
	
	
	@ApiOperation(value="根据设备名编号询出库清单信息", notes="根据设备编号查询出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "eid", value = "设备编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/eid/{eid}")
	public List<SupplyedList> querySupplyedListsByWname(HttpServletRequest request,@PathVariable int eid) {
		return supplyedListService.querySupplyedListsByEid(eid);
	}
	
	
	
	@ApiOperation(value="根据仓库编号查询出库清单信息", notes="根据仓库编号查询出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "wid", value = "仓库编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/wid/{wid}")
	public List<SupplyedList> querySupplyedListsByWid(HttpServletRequest request,@PathVariable int wid) {
		return supplyedListService.querySupplyedListsByWid(wid);
	}
	
	
	
	@ApiOperation(value="根据垛位编号查询出库清单信息", notes="根据垛位编号查询出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "sid", value = "垛位编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/sid/{sid}")
	public List<SupplyedList> querySSupplyedListsBySid(HttpServletRequest request,@PathVariable int sid) {
		return supplyedListService.querySupplyedListsBySid(sid);
	}

	
	
	@ApiOperation(value="保存出库清单信息", notes="保存出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "supplyedList", value = "出库清单对象", required = true, dataType = "SupplyedList")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveSupplyedList(HttpServletRequest request,SupplyedList supplyedList) {
		return supplyedListService.saveSupplyedList(supplyedList);
	}

	
	
	
	@ApiOperation(value="根据主键删除出库清单信息", notes="根据主键删除出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteSupplyedList(HttpServletRequest request,@PathVariable int id) {
		return supplyedListService.deleteSupplyedList(id);
	}
	
	
	
	
	@ApiOperation(value="修改出库清单信息", notes="修改出库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "supplyedList", value = "出库清单对象", required = true, dataType = "SupplyedList")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifySupplyedList(HttpServletRequest request,SupplyedList supplyedList) {
		return supplyedListService.modifySupplyedList(supplyedList);
	}
	
	
}
