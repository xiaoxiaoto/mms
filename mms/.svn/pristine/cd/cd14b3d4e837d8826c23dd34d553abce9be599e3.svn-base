package com.aoto.business.warehousems.stacks.controller.rest;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aoto.business.warehousems.stacks.repository.pojo.Stack;
import com.aoto.business.warehousems.stacks.service.IStackService;
import com.aoto.business.warehousems.stacks.service.bo.StackBo;
import com.aoto.systemutil.datehandle.DateUtil;
import com.aoto.systemutil.domainms.repository.pojo.Domain;

import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;

/**  
* @ClassName: StackRestController  
* @Description: 垛位信息管理  
* @date 2017年3月23日  
*    
**/ 
@RestController
@RequestMapping("/stacks")
public class StackRestController {
	@Autowired
	private IStackService stackService;
   
	@ApiOperation(value="查询业务模块值域", notes="查询业务模块值域")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/domain/query")
	public  List<Domain> queryBusinessDomains(HttpServletRequest request) {
		return stackService.queryBusinessDomains();
	}
	
	
	@ApiOperation(value="查询所有垛位信息", notes="查询所有垛位信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
	})
	@RequestMapping("/query")
	public List<StackBo> queryAllStacks(HttpServletRequest request) {
		return stackService.queryAllStacks();
	}
	
	
	
	@ApiOperation(value="根据主键查询垛位信息", notes="根据主键查询垛位信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
            @ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
    })
	@RequestMapping("/query/{id}")
	public Stack queryStackByPk(HttpServletRequest request,@PathVariable int id) {
		return stackService.queryStackByPk(id);
	}
	
	@ApiOperation(value="根据仓库编号查询垛位信息（前端表格数据渲染）", notes="根据仓库编号查询垛位信息（前端表格数据渲染）")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "wid", value = "仓库ID", required = true, dataType = "int")
	})
	@RequestMapping("/table/query/{wid}")
	public Map<String,List<StackBo>> queryStackByWidForTable(HttpServletRequest request,@PathVariable int wid) {
		return stackService.queryStacksByWidForTable(wid);
	}
	
	
	@ApiOperation(value="根据垛位号查询垛位信息", notes="根据垛位号查询垛位信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "sn", value = "垛位号", required = true, dataType = "String")
	})
	@RequestMapping("/query/sn/{sn}")
	public List<Stack> queryStackByStackNumber(HttpServletRequest request,@PathVariable String sn) {
		return stackService.queryStacksByScode(sn);
	}

	
	
	@ApiOperation(value="保存垛位信息", notes="保存垛位信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "stack", value = "垛位对象", required = true, dataType = "Stack")
	})
	@RequestMapping("/save")
	public Map<String, Object> saveStack(HttpServletRequest request,Stack stack) {
		stack.setWid(63);
		stack.setClassify("1");
		stack.setCreateDate(DateUtil.getCurrentDate("yyyy-MM-dd HH:mm:ss"));
		stack.setCreateUser(1);
		stack.setFlag("1");
		stack.setScode("2F-4R-6C");
		stack.setPosition("东南脚");
		stack.setState("1");
		return stackService.saveStack(stack);
	}

	
	
	
	@ApiOperation(value="根据主键删除垛位信息", notes="根据主键删除垛位信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "id", value = "主键ID", required = true, dataType = "int")
	})
	@RequestMapping("/delete/{id}")
	public Map<String, Object> deleteStack(HttpServletRequest request,@PathVariable int id) {
		return stackService.deleteStack(id);
	}
	
	
	
	
	@ApiOperation(value="修改垛位信息", notes="修改垛位信息")
	@ApiImplicitParams({
		@ApiImplicitParam(name = "request", value = "HttpServletRequest", required = false, dataType = "HttpServletRequest"),
		@ApiImplicitParam(name = "stack", value = "垛位对象", required = true, dataType = "Stack")
	})
	@RequestMapping("/update")
	public Map<String, Object> modifyStack(HttpServletRequest request,Stack stack) {
	    stack = stackService.queryStackByPk(1);
	    stack.setPosition("西南角");
		return stackService.modifyStack(stack);
	}
	
	
}
