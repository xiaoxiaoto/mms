/**
 * Created by Administrator on 2017/4/1.
 */
var supplyedlistsDetails={
    suid:null,
    init:function(){
        supplyedlistsDetails.suid= global.getUrlParam("suid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(supplyedlistsDetails.suid!=null &&  typeof supplyedlistsDetails.suid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    supplyedlistsDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-supplyedlists-id').html("");
        $('#site-supplyedlists-ename').html("");
        $('#site-supplyedlists-wname').html("");
        $('#site-supplyedlists-scode').html("");
        $('#site-supplyedlists-quantity').html("");
        $('#site-supplyedlists-state').html("");
        $('#site-supplyedlists-operator').html("");
        $('#site-supplyedlists-applicant').html("");

        $('#site-supplyedlists-id').html(data.id);
        $('#site-supplyedlists-ename').html(data.ename);
        $('#site-supplyedlists-wname').html(data.wname);
        $('#site-supplyedlists-scode').html(data.scode);
        $('#site-supplyedlists-quantity').html(data.quantity);
        $('#site-supplyedlists-state').html(data.stateValue);
        $('#site-supplyedlists-operator').html(data.operator);
        $('#site-supplyedlists-applicant').html(data.applicant);

    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    supplyedlistsDetails.init();
    supplyedlistsDetails.loadData(global.serverURI+"/supplyedlists/query/"+supplyedlistsDetails.suid);
});



