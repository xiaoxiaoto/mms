/**
 * Created by Administrator on 2017/4/6.
 */
/**
 * Created by Administrator on 2017/4/1.
 */
var allocationapplysDetails={
    aid:null,
    init:function(){
        allocationapplysDetails.aid= global.getUrlParam("aid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(allocationapplysDetails.aid!=null &&  typeof allocationapplysDetails.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    allocationapplysDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-allocationapplys-equipments').html("");
        $('#site-allocationapplys-applicant').html("");
        $('#site-allocationapplys-quantity').html("");
        $('#site-allocationapplys-reason').html("");
        $('#site-allocationapplys-applydate').html("");
        $('#site-allocationapplys-circulation').html("");
        $('#site-allocationapplys-returndate').html("");

        $('#site-allocationapplys-equipments').html(data.equipments);
        $('#site-allocationapplys-applicant').html(data.applicant);
        $('#site-allocationapplys-quantity').html(data.quantity);
        $('#site-allocationapplys-reason').html(data.reason);
        $('#site-allocationapplys-applydate').html(data.applyDate);
        $('#site-allocationapplys-circulation').html(data.circulationValue);
        $('#site-allocationapplys-returndate').html(data.returnDate);
        if(allocationapplysDetails.aid!=null &&  typeof allocationapplysDetails.aid != 'undefined'){
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
                    "ajax": global.serverURI+"/applydetails/table/query/aid/"+allocationapplysDetails.aid, //数据的路径
                    "columns": [ {
                        "data": "id"
                    }, {
                        "data": "wname"
                    }, {
                        "data": "scode"
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
    allocationapplysDetails.init();
    allocationapplysDetails.loadData(global.serverURI+"/allocationapplys/query/"+allocationapplysDetails.aid);
});



