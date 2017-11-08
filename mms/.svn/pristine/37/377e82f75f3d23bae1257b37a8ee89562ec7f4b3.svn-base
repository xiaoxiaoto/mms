package com.aoto.systemutil.filehandle.controller.web;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.aoto.systemutil.filehandle.service.IFileHandleService;

@Controller
@RequestMapping("/filehandle")
public class FileHandleController {
	
	@Autowired
	private IFileHandleService fileHandleService;

	@RequestMapping("/index")
	public String file(HttpServletRequest request,
			HttpServletResponse response,@RequestParam("file") MultipartFile file) {
		//fileHandleService.exportData(request, response);
		fileHandleService.importData(request, response,file);
		return "/filehandle/index";
	}

	@RequestMapping("/upload")
	@ResponseBody
	public Map<String, Object> handleFileUpload(HttpServletRequest request,
			@RequestParam("file") MultipartFile file) {
		return fileHandleService.handleFileUpload(request, file);
	}

	@RequestMapping("/download")
	@ResponseBody
	public Map<String, Object> handleFileDownload(HttpServletRequest request,
			HttpServletResponse response) {
		return fileHandleService.handleFileDownload(request, response);
	}

}
