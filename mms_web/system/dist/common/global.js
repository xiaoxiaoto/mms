/**
 * Created by Administrator on 2017/4/7.
 */
var global={
    serverURI:"http://localhost:9999/mms/rest",//后台服务地址
    dataTbaleLang:{
        "sProcessing": "处理中...",
        "sLengthMenu": "每页 _MENU_ 项",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
        "sInfoEmpty": "当前显示第 0 至 0 项，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "本地搜索：",
        "sUrl": "",
        "sEmptyTable": "暂无数据",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页",
            "sJump": "跳转"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    },
    getRootPath:function(){//获取当前页面的根路径
        // 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
        var curWwwPath = window.document.location.href;
        // 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        // 获取主机地址，如： http://localhost:8083
        var localhostPaht = curWwwPath.substring(0, pos);
        // 获取带"/"的项目名，如：/uimcardprj
        var projectName = pathName.substring(0,
            pathName.substring(1).indexOf('/') + 1);
        return (localhostPaht + projectName + "/");
    },
    getUrlParam:function (name,url) {//获取url参数
        var seachUrl = window.location.search.replace("?", "");
        if (url != null) {
            var index = url.indexOf('?');
            url = url.substr(index + 1);
            seachUrl = url;
        }
        var ss = seachUrl.split("&");
        var paramNameStr = "";
        var paramNameIndex = -1;
        for ( var i = 0; i < ss.length; i++) {
            paramNameIndex = ss[i].indexOf("=");
            paramNameStr = ss[i].substring(0, paramNameIndex);
            if (paramNameStr == name) {
                var returnValue = ss[i].substring(paramNameIndex + 1, ss[i].length);
                if (typeof (returnValue) == "undefined") {
                    returnValue = "";
                }
                return returnValue;
            }
        }
        return "";
    },
    getDateStr:function (regexp,attachedDays) {//获取时间字符串
        var days=0;
        if(attachedDays!=null&&typeof(attachedDays)!="undefined"){
            days=attachedDays;
        }
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + days);// 获取AddDayCount天后的日期
        var year = currentDate.getFullYear();
        var month = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);// 获取当前月份的日期，不足10补0
        var day = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();// 获取当前几号，不足10补0
        var hour=currentDate.getHours();
        var minute= currentDate.getMinutes();
        var second= currentDate.getSeconds();
        if(regexp!=null&&typeof(regexp)!="undefined"){
            if(regexp==="yyyy"){
                return year + "年";
            }else if(regexp==="yyyy-MM"){
                return year + "年" + month + "月";
            }else if(regexp==="yyyy-MM-dd"){
                return year + "年" + month + "月" +day + "日";
            }else if(regexp==="yyyy-MM-dd hh"){
                return year + "年" + month + "月" +day + "日 "+hour+"时";
            }else if(regexp==="yyyy-MM-dd hh:mm"){
                return year + "年" + month + "月" +day + "日 "+hour+"时"+minute+"分";
            }else if(regexp==="yyyy-MM-dd hh:mm:ss"){
                return year + "年" + month + "月" +day + "日 "+hour+"时"+minute+"分"+second+"秒";
            }else{
                return year + "年" + month + "月" +day + "日";
            }
        }else{
            return year + "年" + month + "月" +day + "日";
        }
    },
    urlHandle: function (url) {
        var getTimestamp = new Date().getTime();
        if (url.indexOf("?") > -1) {
            url = url + "&timestamp=" + getTimestamp
        } else {
            url = url + "?timestamp=" + getTimestamp
        }
        return url;
    }
}
