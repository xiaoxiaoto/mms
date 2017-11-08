package com.aoto.systemutil;

import java.io.File;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

/**  
* @ClassName: FileHandleListener  
* @Description: 系统加载后执行操作 
* @date 2017年3月22日  
*    
**/ 
@Component
public class InitListener implements ApplicationListener<ApplicationReadyEvent> {
	
	@Value("${file.handle.upload.rootpath}")
	private String uploadRootpath;
	@Value("${file.handle.servicer.resource}")
	private String servicerResource;
	@Value("${file.handle.excl.import.rootpath}")
	private String importTempletRootpath;
	@Value("${file.handle.excl.export.rootpath}")
	private String exportTempletRootPath;
	
	/**  
	* @Title: onApplicationEvent  
	* @Description: 系统初始化时创建必须目录
	* @param event
	* @throws  
	*/ 
    @Override
    public void onApplicationEvent(final ApplicationReadyEvent event) {
    	this.createSystemDirectory();
    }
    
    /**  
    * @Title: createSystemDirectory  
    * @Description: 系统初始化时创建必须目录
    * @throws  
    */ 
    public void createSystemDirectory(){
    	File uploadDirectory = new File(uploadRootpath);
    	File servicerResourceDirectory = new File(servicerResource);
    	File importTempletDirectory = new File(importTempletRootpath);
    	File exportTempletDirectory = new File(exportTempletRootPath);
        if(!uploadDirectory.exists()&&!uploadDirectory.isDirectory()){
        	uploadDirectory.mkdirs();
        }
        if(!servicerResourceDirectory.exists()&&!servicerResourceDirectory.isDirectory()){
        	servicerResourceDirectory.mkdirs();
        }
        if(!importTempletDirectory.exists()&&!importTempletDirectory.isDirectory()){
        	importTempletDirectory.mkdirs();
        }
        if(!exportTempletDirectory.exists()&&!exportTempletDirectory.isDirectory()){
        	exportTempletDirectory.mkdirs();
        }
    }

}
