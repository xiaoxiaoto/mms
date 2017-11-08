/**
 * Created by Administrator on 2017/4/6.
 */
/**
 * Created by Administrator on 2017/4/1.
 */
var warehousesDetails={
    wid:null,
    init:function(){
        warehousesDetails.wid= global.getUrlParam("wid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(warehousesDetails.wid!=null &&  typeof warehousesDetails.wid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    warehousesDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-warehouses-detailswcode').html("");
        $('#site-warehouses-detailswname').html("");
        $('#site-warehouses-detailsclassify').html("");
        $('#site-warehouses-detailsstate').html("");
        $('#site-warehouses-detailsxy').html("");
        $('#site-warehouses-detailsaddress').html("");

        $('#site-warehouses-detailswcode').html(data.wcode);
        $('#site-warehouses-detailswname').html(data.wname);
        $('#site-warehouses-detailsclassify').html(data.classifyValue);
        $('#site-warehouses-detailsstate').html(data.stateValue);
        $('#site-warehouses-detailsxy').html(data.longitude+"/"+data.latitude);
        $('#site-warehouses-detailsaddress').html(data.address);
        if(warehousesDetails.wid!=null &&  typeof warehousesDetails.wid != 'undefined'){
            $('#data-table-stacks').dataTable({
                "language":global.dataTbaleLang , //提示信息
                "autoWidth": true, //自适应宽度，
                "bDestory": true,
                "lengthMenu": [5],
                "stripeClasses": ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
                "searching": true, //是否允许Datatables开启本地搜索
                "paging": true, //是否开启本地分页
                "lengthChange": true, //是否允许产品改变表格每页显示的记录数
                "info": true, //控制是否显示表格左下角的信息
                //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
                "order": [1, 'desc'], //asc升序   desc降序
                "aoColumnDefs": [{
                    "orderable": false,
                    "aTargets": [] // 指定列不参与排序
                }],
                "deferRender": true, //延迟渲染
                "ajax": global.serverURI+"/stacks/table/query/"+warehousesDetails.wid, //数据的路径
                "columns": [ {
                    "data": "id"
                }, {
                    "data": "scode"
                }, {
                    "data": "position"
                },  {
                    "data": "classifyValue"
                }, {
                    "data":"stateValue"
                }
                ]
            });
        }
    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    warehousesDetails.init();
    warehousesDetails.loadData(global.serverURI+"/warehouses/query/"+warehousesDetails.wid);
});



