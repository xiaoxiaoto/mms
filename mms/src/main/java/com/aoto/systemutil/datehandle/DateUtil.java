package com.aoto.systemutil.datehandle;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

/**
 * @ClassName: DateUtil
 * @Description: 日期处理工具类
 * @date 2017年3月25日
 * 
 **/
public class DateUtil {

	/**
	 * @Title: getCurrentDate @Description: 获取当前时间 @param regex @return
	 *         String @throws
	 */
	public static String getCurrentDate(String regex) {
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00")); // 获取东八区时间
		SimpleDateFormat format = new SimpleDateFormat(regex);
		return format.format(calendar.getTime()); // 当前日期
	};

	/**  
	* @Title: getCurrentDateItem  
	* @Description: 获取时间每一项如年、月、日....
	* @return  Map<String,Integer>
	* @throws  
	*/ 
	public static Map<String, Integer> getCurrentDateItem() {
		Map<String, Integer> dateItem = new HashMap<>();
		Calendar calendar = Calendar.getInstance(TimeZone.getTimeZone("GMT+08:00")); // 获取东八区时间
		dateItem.put("year", calendar.get(Calendar.YEAR)); // 获取年
		dateItem.put("month", calendar.get(Calendar.MONTH) + 1); // 获取月份，0表示1月份
		dateItem.put("day", calendar.get(Calendar.DAY_OF_MONTH)); // 获取日期
		dateItem.put("hour", calendar.get(Calendar.HOUR_OF_DAY)); // 获取小时
		dateItem.put("minute", calendar.get(Calendar.MINUTE)); // 获取分钟
		dateItem.put("second", calendar.get(Calendar.SECOND)); // 获取当前秒
		dateItem.put("year", calendar.get(Calendar.YEAR)); // 获取年
		dateItem.put("minday", calendar.getActualMinimum(Calendar.DAY_OF_MONTH)); // 获取年
		dateItem.put("maxday", calendar.getActualMaximum(Calendar.DAY_OF_MONTH)); // 获取年
		return dateItem;
	}
	
	
}
