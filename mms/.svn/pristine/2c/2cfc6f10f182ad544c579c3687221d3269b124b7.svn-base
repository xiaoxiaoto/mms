package com.aoto.business.inventoryms.storagelist.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.inventoryms.storagelist.repository.pojo.StorageList;
import com.aoto.business.inventoryms.storagelist.service.IStorageListService;
import com.aoto.business.inventoryms.storagelist.service.bo.StorageListBo;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;


/**  
* @ClassName: StorageListRestController  
* @Description: 入库清单管理  
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/storagelists")
public class StorageListRestController {
	@Autowired
	private IStorageListService storageListService;
	
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return storageListService.queryBusinessDomains();
	}
	
	
	@ApiOperation(value="查询所有入库清单信息", notes="查询所有入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<StorageList> queryAllStorageLists(HttpServletRequest request) {
		return storageListService.queryAllStorageLists();
	}
	
	@ApiOperation(value="查询所有入库清单信息(前台数据展示)", notes="查询所有入库清单信息(前台数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<StorageListBo>> queryAllStorageListsForTable(HttpServletRequest request) {
		return storageListService.queryAllStorageListsForTable();
	}
	
	
	@ApiOperation(value="根据主键查询入库清单信息", notes="根据主键查询入库清单信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public StorageListBo queryStorageListByPk(HttpServletRequest request,@PathVariable int id) {
		return storageListService.queryStorageListByPk(id);
	}
	
	
	@ApiOperation(value="根据设备名编号询入库清单信息", notes="根据设备编号查询入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "eid", value = "设备编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/eid/{eid}")
	public List<StorageList> queryStorageListsByWname(HttpServletRequest request,@PathVariable int eid) {
		return storageListService.queryStorageListsByEid(eid);
	}
	
	
	
	@ApiOperation(value="根据仓库编号查询入库清单信息", notes="根据仓库编号查询入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "wid", value = "仓库编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/wid/{wid}")
	public List<StorageList> queryStorageListsByWid(HttpServletRequest request,@PathVariable int wid) {
		return storageListService.queryStorageListsByWid(wid);
	}
	
	
	
	@ApiOperation(value="根据垛位编号查询入库清单信息", notes="根据垛位编号查询入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "sid", value = "垛位编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/sid/{sid}")
	public List<StorageList> queryStorageListsBySid(HttpServletRequest request,@PathVariable int sid) {
		return storageListService.queryStorageListsBySid(sid);
	}

	
	
	@ApiOperation(value="保存入库清单信息", notes="保存入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "equipment", value = "入库清单对象", required = true, dataType = "Equipment")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveStorageList(HttpServletRequest request,StorageList storageList) {
		return storageListService.saveStorageList(storageList);
	}

	
	
	
	@ApiOperation(value="根据主键删除入库清单信息", notes="根据主键删除入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteStorageList(HttpServletRequest request,@PathVariable int id) {
		return storageListService.deleteStorageList(id);
	}
	
	
	
	
	@ApiOperation(value="修改入库清单信息", notes="修改入库清单信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "storageList", value = "入库清单对象", required = true, dataType = "StorageList")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyStorageList(HttpServletRequest request,StorageList storageList) {
		return storageListService.modifyStorageList(storageList);
	}
	
	
}
