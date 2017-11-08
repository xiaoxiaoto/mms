/**
 * Created by Administrator on 2017/4/1.
 */
//config的设置是全局的
var inventorylists={
    table: null,
    refreshFlag:0,
    render:function(id,url){
        var $ = layui.jquery;
        var table=$('#'+id).dataTable({
            "language": global.dataTbaleLang, //提示信息
            "autoWidth": true, //自适应宽度，
            "bDestory": true,
            "lengthMenu": [17],
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
                "data": "wname"
            }, {
                "data": "scode"
            }, {
                "data": "ename"
            }, {
                "data":"quantity"
            },{
                "data":"stateValue"
            }, {
                "data": function(obj) {
                    return '<div class="layui-btn-group"> '+
                        /*'<button class="layui-btn layui-btn-small" onclick="inventorylists.update('+obj.id+');"><i class="layui-icon" ></i></button>'+
                        '<button class="layui-btn layui-btn-small "onclick="inventorylists.delete('+obj.id+');"><i class="layui-icon"></i></button>'+*/
                        '<button class="layui-btn layui-btn-small" onclick="inventorylists.details('+obj.id+');"><i class="layui-icon">&#xe60b;</i></button>'+
                        '</div>';
                }
            }
            ]
        });
        inventorylists.table=table;
    },
    refreshTable:function(){
        inventorylists.table.fnDestroy();
        inventorylists.render("data-table",global.serverURI+"/inventoryLists/table/query");
    },
    delete:function(id){
        var layer = layui.layer;
        var $ = layui.jquery;
        layer.confirm('您是否确认需要删除？', {
            btn: ['是','否'] //按钮
        }, function(){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/inventoryLists/delete/"+id,
                dataType: "json",
                async:false,
                success: function(data){
                    if(data.result==1){
                        layer.msg('删除成功！',{
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        inventorylists.refreshTable();
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
    details:function (id) {
        var url =global.urlHandle("details.html")+"&iid="+id;
        var title = "库存详细信息";
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
                if(inventorylists.refreshFlag==1){
                    inventorylists.refreshTable();
                }
            }
        });
    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    inventorylists.render("data-table",global.serverURI+"/inventoryLists/table/query");
});




