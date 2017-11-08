/**
 * Created by Administrator on 2017/4/1.
 */
var inventorylistsDetails={
    iid:null,
    init:function(){
        inventorylistsDetails.iid= global.getUrlParam("iid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(inventorylistsDetails.iid!=null &&  typeof inventorylistsDetails.iid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    inventorylistsDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-inventorylists-id').html("");
        $('#site-inventorylists-ename').html("");
        $('#site-inventorylists-wname').html("");
        $('#site-inventorylists-scode').html("");
        $('#site-inventorylists-quantity').html("");
        $('#site-inventorylists-state').html("");

        $('#site-inventorylists-id').html(data.id);
        $('#site-inventorylists-ename').html(data.ename);
        $('#site-inventorylists-wname').html(data.wname);
        $('#site-inventorylists-scode').html(data.scode);
        $('#site-inventorylists-quantity').html(data.quantity);
        $('#site-inventorylists-state').html(data.stateValue);

    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    inventorylistsDetails.init();
    inventorylistsDetails.loadData(global.serverURI+"/inventoryLists/query/"+inventorylistsDetails.iid);
});



