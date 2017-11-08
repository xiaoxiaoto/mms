/**
 * Created by Administrator on 2017/4/1.
 */
var supplyedlistsAdd={
    aid:null,
    allocationlist:null,
    supplyedlistsDomains:[],
    warehouses:[],
    stacks:[],
    init:function(){
        var $ = layui.jquery;
        supplyedlistsAdd.aid= global.getUrlParam("aid");
        if(supplyedlistsAdd.aid!=null &&  typeof supplyedlistsAdd.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/allocationlists/query/"+supplyedlistsAdd.aid,
                dataType: "json",
                async:false,
                success: function(data){
                    supplyedlistsAdd.allocationlist=data;
                }
            });
        };
        var qrcode = new QRCode('qrcode', {
            text: supplyedlistsAdd.allocationlist.sequenceNumber,
            width: 200,
            height: 200,
            colorDark : '#000000',
            colorLight : '#ffffff',
            correctLevel : QRCode.CorrectLevel.H
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/supplyedlists/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                supplyedlistsAdd.supplyedlistsDomains = data
            }
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/warehouses/query",
            dataType: "json",
            async: false,
            success: function (data) {
                supplyedlistsAdd.warehouses = data
            }
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/stacks/query",
            dataType: "json",
            async: false,
            success: function (data) {
                supplyedlistsAdd.stacks = data
            }
        });
        supplyedlistsAdd.addSelectOptions();
        supplyedlistsAdd.render();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(supplyedlistsAdd.supplyedlistsDomains!=null){
            var supplyedlistState='<option value=""></option>';
            if(supplyedlistsAdd.supplyedlistsDomains.length>0){
                for(var i=0;i<supplyedlistsAdd.supplyedlistsDomains.length;i++){
                    var businessType=(supplyedlistsAdd.supplyedlistsDomains)[i].businessType;
                    if(businessType=="SupplyedListState"){
                        if(supplyedlistsAdd.allocationlist.state==(supplyedlistsAdd.supplyedlistsDomains)[i].domainKey) {
                            supplyedlistState += '<option value="' + (supplyedlistsAdd.supplyedlistsDomains)[i].domainKey + '" selected>' + (supplyedlistsAdd.supplyedlistsDomains)[i].domainValue + '</option>';
                        }else {
                            supplyedlistState += '<option value="' + (supplyedlistsAdd.supplyedlistsDomains)[i].domainKey + '">' + (supplyedlistsAdd.supplyedlistsDomains)[i].domainValue + '</option>';
                        }
                    }
                }
            }
            $("#supplyedlists-state").html("");
            $("#supplyedlists-state").html(supplyedlistState);
        }else{
            supplyedlistsAdd.init();
        }
        if(supplyedlistsAdd.warehouses!=null){
            var supplyedlistWarehouse='<option value=""></option>';
            if(supplyedlistsAdd.warehouses.length>0){
                for(var i=0;i<supplyedlistsAdd.warehouses.length;i++){
                    var id=(supplyedlistsAdd.warehouses)[i].id;
                    var wname=(supplyedlistsAdd.warehouses)[i].wname;
                    if(supplyedlistsAdd.allocationlist!=null &&  typeof supplyedlistsAdd.allocationlist != 'undefined'){
                        if(id==supplyedlistsAdd.allocationlist.wid) {
                            supplyedlistWarehouse += '<option value="'+id+'" selected>'+wname+'</option>';
                        }else {
                            supplyedlistWarehouse+='<option value="'+id+'">'+wname+'</option>';
                        }
                    }else{
                        supplyedlistWarehouse+='<option value="'+id+'">'+wname+'</option>';
                    }
                }
            }
            $("#supplyedlists-warehouse").html("");
            $("#supplyedlists-warehouse").html(supplyedlistWarehouse);

            if(supplyedlistsAdd.allocationlist!=null &&  typeof supplyedlistsAdd.allocationlist != 'undefined'){
                var wid=supplyedlistsAdd.allocationlist.wid;
                var sid=supplyedlistsAdd.allocationlist.sid;
                var supplyedlistStack='<option value=""></option>';
                if(supplyedlistsAdd.stacks.length>0){
                    for(var i=0;i<supplyedlistsAdd.stacks.length;i++){
                        var widr=(supplyedlistsAdd.stacks)[i].wid;
                        var sidr=(supplyedlistsAdd.stacks)[i].id;
                        if(wid==widr){
                            if(sid==sidr){
                                supplyedlistStack+='<option value="'+(supplyedlistsAdd.stacks)[i].id+'" selected>'+(supplyedlistsAdd.stacks)[i].scode+'</option>';
                            }else{
                                supplyedlistStack+='<option value="'+(supplyedlistsAdd.stacks)[i].id+'">'+(supplyedlistsAdd.stacks)[i].scode+'</option>';
                            }
                        }
                    }
                }
                $("#supplyedlists-stack").html("");
                $("#supplyedlists-stack").html(supplyedlistStack);
                form.render();
            }else{
                supplyedlistsAdd.init();
            }

            form.on('select(supplyedlists-warehouse)', function(data) {
                var value = data.value;
                if(supplyedlistsAdd.stacks!=null){
                    var supplyedlistStack='<option value=""></option>';
                    if(supplyedlistsAdd.stacks.length>0){
                        for(var i=0;i<supplyedlistsAdd.stacks.length;i++){
                            var wid=(supplyedlistsAdd.stacks)[i].wid;
                            if(wid==value){
                                supplyedlistStack+='<option value="'+(supplyedlistsAdd.stacks)[i].id+'">'+(supplyedlistsAdd.stacks)[i].scode+'</option>';
                            }
                        }
                    }
                    $("#supplyedlists-stack").html("");
                    $("#supplyedlists-stack").html(supplyedlistStack);
                    form.render();
                }else{
                    supplyedlistsAdd.init();
                }
            });
        }else{
            supplyedlistsAdd.init();
        }
        form.render();
    },
    render:function () {
        var $ = layui.jquery;
        $("#supplyedlists-ename").val(supplyedlistsAdd.allocationlist.ename);
        $("#supplyedlists-quantity").val(supplyedlistsAdd.allocationlist.quantity-supplyedlistsAdd.allocationlist.outquantity);
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(supplyedlist-submit)', function(data){
            $("#supplyedlist-submit").attr({"disabled":"disabled"});
            var supplyedlist={
                aid:supplyedlistsAdd.allocationlist.id,
                eid:supplyedlistsAdd.allocationlist.eid,
                wid:data.field.wid,
                sid:data.field.sid,
                operator:data.field.operator,
                applicant:data.field.applicant,
                quantity:data.field.quantity,
                state:data.field.state
            };
            $.ajax({
                type: "POST",
                url: global.serverURI + "/supplyedlists/save",
                data:supplyedlist,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        layer.msg('保存成功！',{
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        setTimeout(function() {
                            parent.allocationlists.refreshTable();
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
    supplyedlistsAdd.init();
    form.verify({
        quantity: function(value){
            if(value>(supplyedlistsAdd.allocationlist.quantity-supplyedlistsAdd.allocationlist.outquantity)){
                return '出库数量必须小于库存数量，库存数量数量为'+(supplyedlistsAdd.allocationlist.quantity-supplyedlistsAdd.allocationlist.outquantity)+'件';
            }
        },
        zero:function(value){
            if(value==0){
                return '库存为空不能出库';
            }
        }
    });
    supplyedlistsAdd.submitForm();
});



