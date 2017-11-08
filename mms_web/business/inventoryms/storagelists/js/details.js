/**
 * Created by Administrator on 2017/4/1.
 */
var storagelistsDetails={
    stid:null,
    init:function(){
        storagelistsDetails.stid= global.getUrlParam("stid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(storagelistsDetails.stid!=null &&  typeof storagelistsDetails.stid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    storagelistsDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-storagelists-id').html("");
        $('#site-storagelists-ename').html("");
        $('#site-storagelists-wname').html("");
        $('#site-storagelists-scode').html("");
        $('#site-storagelists-quantity').html("");
        $('#site-storagelists-operator').html("");
        $('#site-storagelists-storagedate').html("");
        $('#site-storagelists-state').html("");

        $('#site-storagelists-id').html(data.id);
        $('#site-storagelists-ename').html(data.ename);
        $('#site-storagelists-wname').html(data.wname);
        $('#site-storagelists-scode').html(data.scode);
        $('#site-storagelists-quantity').html(data.quantity);
        $('#site-storagelists-operator').html(data.operator);
        $('#site-storagelists-storagedate').html(data.storageDate);
        $('#site-storagelists-state').html(data.stateValue);

    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    storagelistsDetails.init();
    storagelistsDetails.loadData(global.serverURI+"/storagelists/query/"+storagelistsDetails.stid);
});



