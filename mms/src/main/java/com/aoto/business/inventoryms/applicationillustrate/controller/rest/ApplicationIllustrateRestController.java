package com.aoto.business.inventoryms.applicationillustrate.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.inventoryms.applicationillustrate.repository.pojo.ApplicationIllustrate;
import com.aoto.business.inventoryms.applicationillustrate.service.IApplicationIllustrateService;
import com.aoto.systemutil.datehandle.DateUtil;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: ApplicationIllustrateRestController  
* @Description: 设备使用说明管理  
* @date 2017年3月28日  
*    
**/ 
@RestController
@RequestMapping("/applicationIllustrates")
public class ApplicationIllustrateRestController {
	@Autowired
	private IApplicationIllustrateService applicationIllustrateService;
	
	
	
	
	@ApiOperation(value="查询所有使用说明管理 信息", notes="查询所有使用说明管理 信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<ApplicationIllustrate> queryAllApplicationIllustrates(HttpServletRequest request) {
		return applicationIllustrateService.queryAllApplicationIllustrates();
	}
	
	
	
	@ApiOperation(value="根据主键查询使用说明管理 信息", notes="根据主键查询使用说明管理信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public ApplicationIllustrate queryApplicationIllustrateByPk(HttpServletRequest request,@PathVariable int id) {
		return applicationIllustrateService.queryApplicationIllustrateByPk(id);
	}
	
	
	@ApiOperation(value="根据设备名编号询使用说明管理信息", notes="根据设备编号查询使用说明管理信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "eid", value = "设备编号", required = true, dataType = "int")
	})
	@RequestMapping("/query/eid/{eid}")
	public List<ApplicationIllustrate> queryApplicationIllustratesByWname(HttpServletRequest request,@PathVariable int eid) {
		return applicationIllustrateService.queryApplicationIllustratesByEid(eid);
	}
	
	
	
	
	@ApiOperation(value="保存使用说明管理信息", notes="保存使用说明管理信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applicationIllustrate", value = "使用说明管理对象", required = true, dataType = "ApplicationIllustrate")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveApplicationIllustrate(HttpServletRequest request,ApplicationIllustrate applicationIllustrate) {
		applicationIllustrate.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		applicationIllustrate.setCreateUser(1);
		applicationIllustrate.setEid(1);
		applicationIllustrate.setFlag("1");
		applicationIllustrate.setState("1");
		applicationIllustrate.setCompany("北京安心");
		applicationIllustrate.setDepartment("研发部");
		applicationIllustrate.setInstructions("研发中心服务器A-101");
		applicationIllustrate.setResponsiblePerson(1);
		applicationIllustrate.setUseDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		return applicationIllustrateService.saveApplicationIllustrate(applicationIllustrate);
	}

	
	
	
	@ApiOperation(value="根据主键删除使用说明管理信息", notes="根据主键删除使用说明管理信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteApplicationIllustrate(HttpServletRequest request,@PathVariable int id) {
		return applicationIllustrateService.deleteApplicationIllustrate(id);
	}
	
	
	
	
	@ApiOperation(value="修改使用说明管理信息", notes="修改使用说明管理信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "applicationIllustrate", value = "使用说明管理对象", required = true, dataType = "ApplicationIllustrate")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyApplicationIllustrate(HttpServletRequest request,ApplicationIllustrate applicationIllustrate) {
		applicationIllustrate = applicationIllustrateService.queryApplicationIllustrateByPk(1);
		applicationIllustrate.setCompany("北京国贸");
		return applicationIllustrateService.modifyApplicationIllustrate(applicationIllustrate);
	}
	
	
}
