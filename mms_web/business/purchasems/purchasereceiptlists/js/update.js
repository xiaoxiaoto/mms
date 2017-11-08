/**
 * Created by Administrator on 2017/4/1.
 */
var purchasereceiptlistsUpdate={
    aid:null,
    purchasereceiptlists:null,
    purchasereceiptlistDomains:null,
    init:function(){
        var $ = layui.jquery;
        purchasereceiptlistsUpdate.aid= global.getUrlParam("aid");
        if(purchasereceiptlistsUpdate.aid!=null &&  typeof purchasereceiptlistsUpdate.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/purchasereceiptlists/query/"+purchasereceiptlistsUpdate.aid,
                dataType: "json",
                async:false,
                success: function(data){
                    purchasereceiptlistsUpdate.purchasereceiptlists=data;
                }
            });
        };
        $.ajax({
            type: "POST",
            url: global.serverURI + "/purchasereceiptlists/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                purchasereceiptlistsUpdate.purchasereceiptlistDomains = data
            }
        });
        purchasereceiptlistsUpdate.render();
    },
    render:function () {
        var $ = layui.jquery;
        $('#purchasereceiptlists-sequencenumber').val(purchasereceiptlistsUpdate.purchasereceiptlists.sequenceNumber);
        $('#purchasereceiptlists-ename').val(purchasereceiptlistsUpdate.purchasereceiptlists.ename);
        $('#purchasereceiptlists-quantity').val(purchasereceiptlistsUpdate.purchasereceiptlists.quantity);
        $('#purchasereceiptlists-intoquantity').val(purchasereceiptlistsUpdate.purchasereceiptlists.intoquantity);
        purchasereceiptlistsUpdate.addSelectOptions();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(purchasereceiptlistsUpdate.purchasereceiptlistDomains!=null){
            var purchasereceiptlistState='<option value=""></option>';
            if(purchasereceiptlistsUpdate.purchasereceiptlistDomains.length>0){
                for(var i=0;i<purchasereceiptlistsUpdate.purchasereceiptlistDomains.length;i++){
                    var businessType=(purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].businessType;
                    if(businessType==="PurchaseReceiptListState"){
                        if(purchasereceiptlistsUpdate.purchasereceiptlists.state===(purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].domainKey) {
                            purchasereceiptlistState += '<option value="' + (purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].domainKey + '" selected>' + (purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].domainValue + '</option>';
                        }else {
                            purchasereceiptlistState += '<option value="' + (purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].domainKey + '">' + (purchasereceiptlistsUpdate.purchasereceiptlistDomains)[i].domainValue + '</option>';
                        }
                    }
                }
            }
            $("#purchasereceiptlists-state").html("");
            $("#purchasereceiptlists-state").html(purchasereceiptlistState);

            form.render();
        }else{
            purchasereceiptlistsUpdate.init();
        }
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(purchasereceiptlist-submit)', function(data){
            purchasereceiptlistsUpdate.purchasereceiptlists.quantity=data.field.quantity;
            $.ajax({
                type: "POST",
                url: global.serverURI + "/purchasereceiptlists/update",
                data: purchasereceiptlistsUpdate.purchasereceiptlists,
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.result == 1) {
                        layer.msg('保存成功！', {
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        parent.purchasereceiptlists.refreshTable();
                        setTimeout(function () {
                            parent.purchasereceiptlists.refreshTable();
                            var index = parent.layer.getFrameIndex(window.name); //获取当前窗体索引
                            parent.layer.close(index); //执行关闭
                        }, 1001);
                    } else {
                        layer.msg('保存失败！', {
                            time: 1000, //10s后自动关闭
                            icon: 2
                        });
                    }
                }
            });
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer'], function(){
    purchasereceiptlistsUpdate.init();
    purchasereceiptlistsUpdate.submitForm();

});



