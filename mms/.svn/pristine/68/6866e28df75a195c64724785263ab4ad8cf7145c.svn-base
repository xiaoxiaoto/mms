package com.aoto.business.warehousems.warehouses.controller.rest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
import com.aoto.business.warehousems.warehouses.repository.pojo.Warehouse;
import com.aoto.business.warehousems.warehouses.service.IWarehouseService;
import com.aoto.business.warehousems.warehouses.service.bo.WarehouseBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: WarehouseRestController  
* @Description: 仓库信息管理  
* @date 2017年3月24日  
*    
**/ 
@RestController
@RequestMapping("/warehouses")
public class WarehouseRestController {
	@Autowired
	private IWarehouseService warehouseService;
	private WarehouseBo warehouseBos;
	
	
	
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return warehouseService.queryBusinessDomains();
	}
	
	@ApiOperation(value="查询所有仓库信息", notes="查询所有仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public  List<Warehouse> queryAllWarehouses(HttpServletRequest request) {
		return warehouseService.queryAllWarehouses();
	}
	
	
	@ApiOperation(value="查询所有仓库信息", notes="查询所有仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String, List<WarehouseBo>> queryAllWarehousesForTable(HttpServletRequest request) {
		return warehouseService.queryAllWarehousesForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询仓库信息", notes="根据主键查询仓库信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public WarehouseBo queryWarehouseByPk(HttpServletRequest request,@PathVariable int id) {
		return warehouseService.queryWarehouseByPk(id);
	}
	
	
	@ApiOperation(value="根据仓库名称查询仓库信息", notes="根据仓库名称查询仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "name", value = "仓库名称", required = true, dataType = "String")
	})
	@RequestMapping("/query/name/{name}")
	public List<Warehouse> queryWarehouseByWname(HttpServletRequest request,@PathVariable String name) {
		return warehouseService.queryWarehousesByWname(name);
	}
	
	
	
	@ApiOperation(value="根据仓库编码查询仓库信息", notes="根据仓库仓库编码查询仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "code", value = "仓库编码", required = true, dataType = "String")
	})
	@RequestMapping("/query/code/{code}")
	public List<Warehouse> queryWarehouseByWid(HttpServletRequest request,@PathVariable String code) {
		return warehouseService.queryWarehousesByWid(code);
	}

	
	
	@ApiOperation(value="保存仓库信息", notes="保存仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "warehouse", value = "仓库对象", required = true, dataType = "Warehouse")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveWarehouse(HttpServletRequest request,WarehouseBo warehouseBo) {
		 Map<String, Object> result=new HashMap<String, Object>();
		 warehouseBos=warehouseBo;
		if(warehouseBos!=null){
			result.put("result", 1);
			result.put("data", warehouseBos);
		}else{
			result.put("result", -1);
		}
		return result;
	}
	
	@ApiOperation(value="保存仓库信息(带垛位信息)", notes="保存仓库信息(带垛位信息)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "stacks", value = "垛位信息", required = true, dataType = "List<Stack>")
	})
	@RequestMapping("/stackes/save")
	public Map<String, Object> saveJsonWarehouse(HttpServletRequest request,@RequestBody List<Stack> stacks) {
		warehouseBos.setStacks(stacks);
		return warehouseService.saveJsonWarehouse(warehouseBos);
	}
	
	
	@ApiOperation(value="根据主键删除仓库信息", notes="根据主键删除仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteWarehouse(HttpServletRequest request,@PathVariable int id) {
		return warehouseService.deleteWarehouse(id);
	}
	
	
	
	@ApiOperation(value="修改仓库信息", notes="修改仓库信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "warehouseBo", value = "仓库对象", required = true, dataType = "WarehouseBo")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyWarehouse(HttpServletRequest request,WarehouseBo warehouseBo) {
		warehouseBo = warehouseService.queryWarehouseByPk(1);
		warehouseBo.setWname("学院路储备仓库");
		return warehouseService.modifyWarehouse(warehouseBo);
	}
	
	
	@ApiOperation(value="修改仓库信息(带垛位信息)", notes="修改仓库信息(带垛位信息)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "stacks", value = "垛位信息", required = true, dataType = "List<Stack>")
	})
	@RequestMapping("/stackes/update")
	public Map<String, Object> modifyWarehouse(HttpServletRequest request,@RequestBody List<Stack> stacks) {
		warehouseBos.setStacks(stacks);
		return warehouseService.modifyJsonWarehouse(warehouseBos);
	}
}
