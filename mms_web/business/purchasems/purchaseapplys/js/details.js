/**
 * Created by Administrator on 2017/4/6.
 */
/**
 * Created by Administrator on 2017/4/1.
 */
var purchaseapplysDetails={
    aid:null,
    init:function(){
        purchaseapplysDetails.aid= global.getUrlParam("aid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(purchaseapplysDetails.aid!=null &&  typeof purchaseapplysDetails.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    purchaseapplysDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-purchaseapplys-equipments').html("");
        $('#site-purchaseapplys-applicant').html("");
        $('#site-purchaseapplys-quantity').html("");
        $('#site-purchaseapplys-reason').html("");
        $('#site-purchaseapplys-applydate').html("");
        $('#site-purchaseapplys-circulation').html("");
        $('#site-purchaseapplys-returndate').html("");

        $('#site-purchaseapplys-equipments').html(data.equipments);
        $('#site-purchaseapplys-applicant').html(data.applicant);
        $('#site-purchaseapplys-quantity').html(data.quantity);
        $('#site-purchaseapplys-reason').html(data.reason);
        $('#site-purchaseapplys-applydate').html(data.applyDate);
        $('#site-purchaseapplys-circulation').html(data.circulationValue);
        $('#site-purchaseapplys-returndate').html(data.arrivalDate);
        if(purchaseapplysDetails.aid!=null &&  typeof purchaseapplysDetails.aid != 'undefined'){
            var table=$(function() {
                $('#data-table-details').dataTable({
                    "language":global.dataTbaleLang , //提示信息
                    "autoaidth": true, //自适应宽度，
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
                    "ajax": global.serverURI+"/purchaseApplysDetails/table/query/aid/"+purchaseapplysDetails.aid, //数据的路径
                    "columns": [ {
                        "data": "id"
                    },  {
                        "data": "ename"
                    }, {
                        "data":"quantity"
                    }
                    ]
                });
            });

        }
    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    purchaseapplysDetails.init();
    purchaseapplysDetails.loadData(global.serverURI+"/purchaseapplys/query/"+purchaseapplysDetails.aid);
});



