package com.aoto.systemutil.filehandle.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.multipart.MultipartFile;

public interface IFileHandleService {
	
public Map<String,Object> handleFileUpload(HttpServletRequest request,MultipartFile file);

public Map<String,Object> handleFileDownload(HttpServletRequest request,HttpServletResponse response);

public Map<String,Object> exportData(HttpServletRequest request,HttpServletResponse response);

public Map<String,Object> importData(HttpServletRequest request,HttpServletResponse response,MultipartFile file);
}
