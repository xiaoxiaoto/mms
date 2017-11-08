package com.aoto.business.inventoryms.inventorylist.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.inventoryms.inventorylist.repository.pojo.InventoryList;
import com.aoto.business.inventoryms.inventorylist.service.IInventoryListService;
import com.aoto.business.inventoryms.inventorylist.service.bo.InventoryListBo;
import com.aoto.systemutil.datehandle.DateUtil;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: InventoryListRestController  
* @Description: 库存清单管理 
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/inventoryLists")
public class InventoryListRestController {
	@Autowired
	private IInventoryListService inventoryListService;
	
	
	
	
	@ApiOperation(value="查询所有库存清单信息", notes="查询所有库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<InventoryList> queryAllInventoryLists(HttpServletRequest request) {
		return inventoryListService.queryAllInventoryLists();
	}
	
	@ApiOperation(value="查询所有库存清单信息(前端数据展示)", notes="查询所有库存清单信息(前端数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<InventoryListBo>> queryAllInventoryListsForTable(HttpServletRequest request) {
		return inventoryListService.queryAllInventoryListsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询库存清单信息", notes="根据主键查询库存清单信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public InventoryListBo queryInventoryListByPk(HttpServletRequest request,@PathVariable int id) {
		return inventoryListService.queryInventoryListByPk(id);
	}
	
	
	@ApiOperation(value="根据设备名编号询库存清单信息", notes="根据设备编号查询库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "eid", value = "设备编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/eid/{eid}")
	public List<InventoryList> queryInventoryListsByWname(HttpServletRequest request,@PathVariable int eid) {
		return inventoryListService.queryInventoryListsByEid(eid);
	}
	
	
	
	@ApiOperation(value="根据仓库编号查询库存清单信息", notes="根据仓库编号查询库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "wid", value = "仓库编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/wid/{wid}")
	public List<InventoryList> queryInventoryListsByWid(HttpServletRequest request,@PathVariable int wid) {
		return inventoryListService.queryInventoryListsByWid(wid);
	}
	
	
	
	@ApiOperation(value="根据垛位编号查询库存清单信息", notes="根据垛位编号查询库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "sid", value = "垛位编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/sid/{sid}")
	public List<InventoryList> queryInventoryListsBySid(HttpServletRequest request,@PathVariable int sid) {
		return inventoryListService.queryInventoryListsBySid(sid);
	}

	
	
	@ApiOperation(value="保存库存清单信息", notes="保存库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "equipment", value = "库存清单对象", required = true, dataType = "Equipment")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveInventoryList(HttpServletRequest request,InventoryList inventoryList) {
		inventoryList.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		inventoryList.setCreateUser(1);
		inventoryList.setEid(1);
		inventoryList.setFlag("1");
		inventoryList.setQuantity(10);
		inventoryList.setSid(1);
		inventoryList.setState("1");
		inventoryList.setWid(1);
		return inventoryListService.saveInventoryList(inventoryList);
	}

	
	
	
	@ApiOperation(value="根据主键删除库存清单信息", notes="根据主键删除库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteInventoryList(HttpServletRequest request,@PathVariable int id) {
		return inventoryListService.deleteInventoryList(id);
	}
	
	
	
	
	@ApiOperation(value="修改库存清单信息", notes="修改库存清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "inventoryList", value = "库存清单对象", required = true, dataType = "InventoryList")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyInventoryList(HttpServletRequest request,InventoryList inventoryList) {
		return inventoryListService.modifyInventoryList(inventoryList);
	}
	
	
}
