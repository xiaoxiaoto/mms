package com.aoto.systemutil.domainms.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.systemutil.domainms.repository.pojo.Domain;
import com.aoto.systemutil.domainms.service.IDomainService;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/domains")
public class DomainRestController {
	@Autowired
	private IDomainService domainService;
   
	
	
	
	@ApiOperation(value="查询所有值域信息", notes="查询所有值域信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<Domain> queryAllDomain(HttpServletRequest request) {
		return domainService.queryAllDmain();
	}
	
	
	
	@ApiOperation(value="查询所有值域信息(前台数据展示)", notes="查询所有值域信息(前台数据展示)")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/table/query")
	public Map<String,List<Domain>> queryAllDomainForTable(HttpServletRequest request) {
		return domainService.queryAllDomainForTable();
	}
	
	
	
	@ApiOperation(value="根据主键查询值域信息", notes="根据主键查询值域信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键", required = true, dataType = "int")
	})
	@RequestMapping("/query/{id}")
	public Domain queryDomainByPk(HttpServletRequest request,@PathVariable int id) {
		return domainService.queryDomainPk(id);
	}
	
	
	@ApiOperation(value="按值域类型查询值域信息", notes="按值域类型查询值域信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "type", value = "值域类型", required = true, dataType = "String")
    })
	@RequestMapping("/query/type/{type}")
	public List<Domain> queryDomainByDomainType(HttpServletRequest request,@PathVariable String type) {
		return domainService.queryDomainByDomainType(type);
	}
	
	
	
	@ApiOperation(value="新增值域", notes="新增值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "domain", value = "值域对象", required = true, dataType = "Domain")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveReligiousPlace(HttpServletRequest request,Domain domain) {
		return domainService.saveDomain(domain);
	}
	
	
	
	
	@ApiOperation(value="删除值域", notes="删除值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "值域对象ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteDomain(HttpServletRequest request,@PathVariable int id) {
		return domainService.deleteDomain(id);
	}
	
	
	
	
	@ApiOperation(value="修改值域", notes="修改值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "religiousPlace", value = "值域对象", required = true, dataType = "ReligiousPlace")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyDomain(HttpServletRequest request,Domain domain) {
		return domainService.modifyDomain(domain);
	}
	
	
}
