/**
 * Created by Administrator on 2017/4/1.
 */
//config的设置是全局的
var warehouses={
    table: null,//dataTable对象
    refreshFlag:0,//页面刷新标识
    initMap:function(id){
        var mapView = new BMap.Map(id);  // 创建Map实例
        var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        mapView.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
        warehouses.map=mapView;
        warehouses.initMapTools(true, true, true, true, true);
    },
    initMapTools: function (navigation, scale, overview, maptype, scrollwheel) {//地图小部件
        if (warehouses.map != null && typeof warehouses.map != "undefined") {
            if (navigation) {
                warehouses.map.addControl(new BMap.NavigationControl());
            }
            if (scale) {
                warehouses.map.addControl(new BMap.ScaleControl());
            }
            if (overview) {
                warehouses.map.addControl(new BMap.OverviewMapControl());
            }
            if (maptype) {
                warehouses.map.addControl(new BMap.MapTypeControl());
            }
            if (scrollwheel) {
                warehouses.map.enableScrollWheelZoom(true);
            } else {
                warehouses.map.enableScrollWheelZoom(false);
            }
        } else {
            warehouses.init();
        }
    },
    simpleMarker:function(data){//添加百度地图标注
        var point = new BMap.Point(data.longitude,data.latitude);
        var marker = new BMap.Marker(point);  // 创建标注
        warehouses.map.centerAndZoom(point, 15);

        var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
            '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
            '地址：'+data.address+'<br/>仓库类型：'+data.classify+'<br/>仓库状态：'+data.state+
            '</div>';

        //创建检索信息窗口对象
        var searchInfoWindow = new BMapLib.SearchInfoWindow(warehouses.map, content, {
            title  :data.title,      //标题
            width  : 290,             //宽度
            height : 105,              //高度
            panel  : "panel",         //检索结果面板
            enableAutoPan : true,     //自动平移
            searchTypes   :[
                BMAPLIB_TAB_SEARCH,   //周边检索
                BMAPLIB_TAB_TO_HERE,  //到这里去
                BMAPLIB_TAB_FROM_HERE //从这里出发
            ]
        });
        var marker = new BMap.Marker(point); //创建marker对象
        marker.enableDragging(); //marker可拖拽
        marker.addEventListener("click", function(e){
            searchInfoWindow.open(marker);
        });
        warehouses.map.addOverlay(marker); //在地图中添加marker
    },
    render:function(id,url){//渲染表格
        var $ = layui.jquery;

        var tools="<div class='layui-btn-group'>"+
            "<button class='layui-btn layui-btn-small' onclick='warehouses.add();'><i class='layui-icon'></i>增加</button>"+
            "</div>";
        global.dataTbaleLang.sLengthMenu=tools;//改变dataTable sLengthMenu改为新增按钮

        var table=$('#'+id).dataTable({//加载数据
            "language": global.dataTbaleLang, //提示信息
            "autoWidth": true, //自适应宽度，
            "bDestory": true,
            "lengthMenu": [5],
            "stripeClasses": ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
            "searching": true, //是否允许Datatables开启本地搜索
            "paging": true, //是否开启本地分页
            "lengthChange": true, //是否允许产品改变表格每页显示的记录数
            "info": true, //控制是否显示表格左下角的信息
            //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
            "order": [1, 'asc'], //asc升序   desc降序
            "aoColumnDefs": [{
                "orderable": false,
                "aTargets": [] // 指定列不参与排序
            }],
            "deferRender": true, //延迟渲染
            "ajax": url, //数据的路径
            "columns": [{
                "data": "id"
            }, {
                "data": "wcode"
            }, {
                "data": "wname"
            }, {
                "data": "address"
            }, {
                "data": "classifyValue"
            }, {
                "data":"stateValue"
            }, {
                "data": function(obj) {//功能按钮列
                    return '<div class="layui-btn-group"> '+
                        '<button class="layui-btn layui-btn-small" onclick="warehouses.update('+obj.id+');"><i class="layui-icon" ></i></button>'+
                        '<button class="layui-btn layui-btn-small "onclick="warehouses.delete('+obj.id+');"><i class="layui-icon"></i></button>'+
                        '<button class="layui-btn layui-btn-small" onclick="warehouses.location('+obj.id+');"><i class="layui-icon">&#xe604;</i></button>'+
                        '<button class="layui-btn layui-btn-small" onclick="warehouses.details('+obj.id+');"><i class="layui-icon">&#xe60b;</i></button>'+
                        '</div>';
                }
            }
            ]
        });
        warehouses.table=table;
    },
    refreshTable:function(){//刷新表格
        warehouses.table.fnDestroy();
        warehouses.render("data-table",global.serverURI+"/warehouses/table/query");
    },
    add:function(){//新增功能
        var url =global.urlHandle("add.html");
        var title = "新增仓库信息";
        var winWidth = 0;
        var winHeight = 0;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight - 100 + "px";
            winWidth = document.documentElement.clientWidth - 180 + "px";
        }
        var layer = layui.layer;
        layer.closeAll("iframe");

        var modelLayer = layer.load(
            2, {
                shade: [0.3, '#000']
            }
        );

        layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade:[0.3, '#000'],
            maxmin: false, //开启最大化最小化按钮
            area: [winWidth, winHeight],
            content: url,
            success: function (layero, index) {
                layer.close(modelLayer);
            },
            cancel: function (layero, index) {
                if(warehouses.refreshFlag==1){
                    warehouses.refreshTable();
                }
            }
        });
    },
    update:function (id) {//修改功能
        var url =global.urlHandle("update.html")+"&wid="+id;
        var title = "修改仓库信息";
        var winWidth = 0;
        var winHeight = 0;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight - 100 + "px";
            winWidth = document.documentElement.clientWidth - 180 + "px";
        }
        var layer = layui.layer;
        layer.closeAll("iframe");

        var modelLayer = layer.load(
            2, {
                shade: [0.3, '#000']
            }
        );

        layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade:[0.3, '#000'],
            maxmin: false, //开启最大化最小化按钮
            area: [winWidth, winHeight],
            content: url,
            success: function (layero, index) {
                layer.close(modelLayer);
            },
            cancel: function (layero, index) {
                if(warehouses.refreshFlag==1){
                    warehouses.refreshTable();
                }
            }
        });
    },
    location:function(id){//定位功能
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI+"/warehouses/query/"+id,
            dataType: "json",
            async:false,
            success: function(data){
                var markerData={
                    longitude:data.longitude,
                    latitude:data.latitude,
                    title:data.wname,
                    address:data.address,
                    classify:data.classifyValue,
                    state:data.stateValue
                }
                warehouses.simpleMarker(markerData);
            }
        });
    },
    delete:function(id){//删除功能
        var layer = layui.layer;
        var $ = layui.jquery;
        layer.confirm('您是否确认需要删除？', {
            btn: ['是','否'] //按钮
        }, function(){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/warehouses/delete/"+id,
                dataType: "json",
                async:false,
                success: function(data){
                    if(data.result==1){
                        layer.msg('删除成功！',{
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        warehouses.refreshTable();
                    }else{
                        layer.msg('删除失败！',{
                            time: 1000, //10s后自动关闭
                            icon: 2
                        });
                    }
                }
            });
        }, function(){
        });
    },
    details:function (id) {//详情展示功能
        var url =global.urlHandle("details.html")+"&wid="+id;
        var title = "仓库详细信息";
        var winWidth = 0;
        var winHeight = 0;
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight - 100 + "px";
            winWidth = document.documentElement.clientWidth - 180 + "px";
        }
        var layer = layui.layer;
        layer.closeAll("iframe");

        var modelLayer = layer.load(
            2, {
                shade: [0.3, '#000']
            }
        );
        layer.open({
            type: 2,
            title: title,
            shadeClose: true,
            shade:[0.3, '#000'],
            maxmin: false, //开启最大化最小化按钮
            area: [winWidth,winHeight],
            content:url,
            success: function (layero, index) {
                layer.close(modelLayer);
            },
            cancel: function (layero, index) {
                if(warehouses.refreshFlag==1){
                    warehouses.refreshTable();
                }
            }
        });
    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    warehouses.initMap("map-view");
    warehouses.render("data-table",global.serverURI+"/warehouses/table/query");
});




