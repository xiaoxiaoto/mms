package com.aoto.business.inventoryms.applicationillustrate.service;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.aoto.business.inventoryms.applicationillustrate.repository.pojo.ApplicationIllustrate;


/**  
* @ClassName: IApplicationIllustrateService  
* @Description: 设备使用说明管理 
* @date 2017年3月28日  
*    
**/ 
public interface IApplicationIllustrateService {
	
	/**  
	* @Title: queryAllApplicationIllustrates  
	* @Description:查询所有设备使用说明 
	* @return  List<ApplicationIllustrate>
	* @throws  
	*/ 
	public List<ApplicationIllustrate> queryAllApplicationIllustrates();
	
	/**  
	* @Title: queryApplicationIllustrateByPk  
	* @Description: 根据主键查询设备使用说明 
	* @param id
	* @return  ApplicationIllustrate
	* @throws  
	*/ 
	public ApplicationIllustrate queryApplicationIllustrateByPk(Serializable id);
	
	/**  
	* @Title: querApplicationIllustratesByEid  
	* @Description: 根据设备编号查询设备使用说明  
	* @param eid
	* @return  List<ApplicationIllustrate>
	* @throws  
	*/ 
	public List<ApplicationIllustrate> queryApplicationIllustratesByEid(int eid);
	
	/**  
	* @Title: saveApplicationIllustrate  
	* @Description: 保存设备使用说明 
	* @param applicationIllustrate
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> saveApplicationIllustrate(ApplicationIllustrate applicationIllustrate);
	
	/**  
	* @Title: deleteApplicationIllustrate  
	* @Description: 删除设备使用说明  
	* @param id
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> deleteApplicationIllustrate(Serializable id);
	
	/**  
	* @Title: modifyApplicationIllustrate  
	* @Description: 修改设备使用说明  
	* @param applicationIllustrate
	* @return  Map<String,Object>
	* @throws  
	*/ 
	public Map<String,Object> modifyApplicationIllustrate(ApplicationIllustrate applicationIllustrate);
}
