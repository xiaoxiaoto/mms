package com.aoto.business.equipments.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.equipments.repository.pojo.Equipment;
import com.aoto.business.equipments.service.IEquipmentService;
import com.aoto.business.equipments.service.bo.EquipmentBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: EquipmentRestController  
* @Description: 设备管理 
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/equipments")
public class EquipmentRestController {
	@Autowired
	private IEquipmentService equipmentService;
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return equipmentService.queryBusinessDomains();
	}
	
	
	@ApiOperation(value="查询所有设备信息", notes="查询所有设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<Equipment> queryAllEquipments(HttpServletRequest request) {
		return equipmentService.queryAllEquipments();
	}
	
	@ApiOperation(value="查询所有设备信息(前端数据展示)", notes="查询所有设备信息(前端数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String, List<EquipmentBo>> queryAllEquipmentsForTable(HttpServletRequest request) {
		return equipmentService.queryAllEquipmentsForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询设备信息", notes="根据主键查询设备信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public EquipmentBo queryEquipmentByPk(HttpServletRequest request,@PathVariable int id) {
		return equipmentService.queryEquipmentByPkForTable(id);
	}
	
	
	@ApiOperation(value="根据设备名称查询设备信息", notes="根据设备名称查询设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "name", value = "设备名称", required = true, dataType = "String")
	})
	@RequestMapping("/query/name/{name}")
	public List<Equipment> queryEquipmentsByWname(HttpServletRequest request,@PathVariable String name) {
		return equipmentService.queryEquipmentsByEname(name);
	}
	
	
	
	@ApiOperation(value="根据设备种类查询设备信息", notes="根据设备种类查询设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "classify", value = "设备种类", required = true, dataType = "String")
	})
	@RequestMapping("/query/classify/{classify}")
	public List<Equipment> queryEquipmentsByWid(HttpServletRequest request,@PathVariable String classify) {
		return equipmentService.queryEquipmentsByEclassify(classify);
	}

	
	
	@ApiOperation(value="保存设备信息", notes="保存设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "equipment", value = "设备对象", required = true, dataType = "Equipment")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveEquipment(HttpServletRequest request,Equipment equipment) {
		return equipmentService.saveEquipment(equipment);
	}

	
	
	
	@ApiOperation(value="根据主键删除设备信息", notes="根据主键删除设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteEquipment(HttpServletRequest request,@PathVariable int id) {
		return equipmentService.deleteEquipment(id);
	}
	
	
	
	
	@ApiOperation(value="修改设备信息", notes="修改设备信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "equipment", value = "设备对象", required = true, dataType = "Equipment")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyEquipment(HttpServletRequest request,Equipment equipment) {
		return equipmentService.modifyEquipment(equipment);
	}
	
	
}
