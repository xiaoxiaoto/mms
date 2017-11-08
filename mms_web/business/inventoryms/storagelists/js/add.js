/**
 * Created by Administrator on 2017/4/1.
 */
var storagelistsAdd={
    pid:null,
    receiptlist:null,
    storagelistsDomains:[],
    warehouses:[],
    stacks:[],
    init:function(){
        var $ = layui.jquery;
        storagelistsAdd.pid= global.getUrlParam("pid");
        if(storagelistsAdd.pid!=null &&  typeof storagelistsAdd.pid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/purchasereceiptlists/query/"+storagelistsAdd.pid,
                dataType: "json",
                async:false,
                success: function(data){
                    storagelistsAdd.receiptlist=data;
                }
            });
        };
        var qrcode = new QRCode('qrcode', {
            text: storagelistsAdd.receiptlist.sequenceNumber,
            width: 200,
            height: 200,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/storagelists/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                storagelistsAdd.storagelistsDomains = data
            }
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/warehouses/query",
            dataType: "json",
            async: false,
            success: function (data) {
                storagelistsAdd.warehouses = data
            }
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/stacks/query",
            dataType: "json",
            async: false,
            success: function (data) {
                storagelistsAdd.stacks = data
            }
        });
        storagelistsAdd.addSelectOptions();
        storagelistsAdd.render();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(storagelistsAdd.storagelistsDomains!=null){
            var storagelistState='<option value=""></option>';
            if(storagelistsAdd.storagelistsDomains.length>0){
                for(var i=0;i<storagelistsAdd.storagelistsDomains.length;i++){
                    var businessType=(storagelistsAdd.storagelistsDomains)[i].businessType;
                    if(businessType==="PurchaseReceiptListState"){
                        storagelistState+='<option value="'+(storagelistsAdd.storagelistsDomains)[i].domainKey+'">'+(storagelistsAdd.storagelistsDomains)[i].domainValue+'</option>';
                    }
                }
            }
            $("#storagelists-state").html("");
            $("#storagelists-state").html(storagelistState);
        }else{
            storagelistsAdd.init();
        }
        if(storagelistsAdd.warehouses!=null){
            var storagelistWarehouse='<option value=""></option>';
            if(storagelistsAdd.warehouses.length>0){
                for(var i=0;i<storagelistsAdd.warehouses.length;i++){
                    var id=(storagelistsAdd.warehouses)[i].id;
                    var wname=(storagelistsAdd.warehouses)[i].wname;
                    storagelistWarehouse+='<option value="'+id+'">'+wname+'</option>';
                }
            }
            $("#storagelists-warehouse").html("");
            $("#storagelists-warehouse").html(storagelistWarehouse);
            form.on('select(storagelists-warehouse)', function(data) {
                var value = data.value;
                if(storagelistsAdd.stacks!=null){
                    var storagelistStack='<option value=""></option>';
                    if(storagelistsAdd.stacks.length>0){
                        for(var i=0;i<storagelistsAdd.stacks.length;i++){
                            var wid=(storagelistsAdd.stacks)[i].wid;
                            if(wid==value){
                                storagelistStack+='<option value="'+(storagelistsAdd.stacks)[i].id+'">'+(storagelistsAdd.stacks)[i].scode+'</option>';
                            }
                        }
                    }
                    $("#storagelists-stack").html("");
                    $("#storagelists-stack").html(storagelistStack);
                    form.render();
                }else{
                    storagelistsAdd.init();
                }
            });
        }else{
            storagelistsAdd.init();
        }
        form.render();
    },
    render:function () {
        var $ = layui.jquery;
        $("#storagelists-ename").val(storagelistsAdd.receiptlist.ename);
        $("#storagelists-quantity").val(storagelistsAdd.receiptlist.quantity-storagelistsAdd.receiptlist.intoquantity);
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(storagelist-submit)', function(data){
            $("#storagelist-submit").attr({"disabled":"disabled"});
            var storagelist={
                qid:storagelistsAdd.receiptlist.id,
                eid:storagelistsAdd.receiptlist.eid,
                wid:data.field.wid,
                sid:data.field.sid,
                operator:data.field.operator,
                quantity:data.field.quantity,
                state:data.field.state
            };
            $.ajax({
                type: "POST",
                url: global.serverURI + "/storagelists/save",
                data:storagelist,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        layer.msg('保存成功！',{
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        setTimeout(function() {
                            parent.purchasereceiptlists.refreshTable();
                            parent.layer.closeAll();
                        },1001);
                    }else{
                        layer.msg('保存失败！',{
                            time: 1000, //10s后自动关闭
                            icon: 2
                        });
                        setTimeout(function() {
                            parent.layer.closeAll();
                        },1001);
                    }
                }
            });
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    var form=layui.form();
    storagelistsAdd.init();
    form.verify({
        quantity: function(value){
            if(value>(storagelistsAdd.receiptlist.quantity-storagelistsAdd.receiptlist.intoquantity)){
                return '入库数量必须小于现存货数量，现存货数量为'+(storagelistsAdd.receiptlist.quantity-storagelistsAdd.receiptlist.intoquantity)+'件';
            }
        },
        zero:function(value){
            if(value==0){
                return '没有可以入库的存货';
            }
        }
    });
    storagelistsAdd.submitForm();
});



