/**
 * Created by Administrator on 2017/4/1.
 */
var allocationlistsUpdate={
    aid:null,
    allocationlists:null,
    allocationlistDomains:null,
    init:function(){
        var $ = layui.jquery;
        allocationlistsUpdate.aid= global.getUrlParam("aid");
        if(allocationlistsUpdate.aid!=null &&  typeof allocationlistsUpdate.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/allocationlists/query/"+allocationlistsUpdate.aid,
                dataType: "json",
                async:false,
                success: function(data){
                    allocationlistsUpdate.allocationlists=data;
                }
            });
        };
        $.ajax({
            type: "POST",
            url: global.serverURI + "/allocationlists/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                allocationlistsUpdate.allocationlistDomains = data
            }
        });
        allocationlistsUpdate.render();
    },
    render:function () {
        var $ = layui.jquery;
        $('#allocationlists-sequencenumber').val(allocationlistsUpdate.allocationlists.sequenceNumber);
        $('#allocationlists-ename').val(allocationlistsUpdate.allocationlists.ename);
        $('#allocationlists-quantity').val(allocationlistsUpdate.allocationlists.quantity);
        $('#allocationlists-outquantity').val(allocationlistsUpdate.allocationlists.outquantity);
        $('#allocationlists-wname').val(allocationlistsUpdate.allocationlists.wname);
        $('#allocationlists-scode').val(allocationlistsUpdate.allocationlists.scode);
        allocationlistsUpdate.addSelectOptions();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(allocationlistsUpdate.allocationlistDomains!=null){
            var allocationlistState='<option value=""></option>';
            if(allocationlistsUpdate.allocationlistDomains.length>0){
                for(var i=0;i<allocationlistsUpdate.allocationlistDomains.length;i++){
                    var businessType=(allocationlistsUpdate.allocationlistDomains)[i].businessType;
                    if(businessType==="SupplyedListState"){
                        if(allocationlistsUpdate.allocationlists.state===(allocationlistsUpdate.allocationlistDomains)[i].domainKey) {
                            allocationlistState += '<option value="' + (allocationlistsUpdate.allocationlistDomains)[i].domainKey + '" selected>' + (allocationlistsUpdate.allocationlistDomains)[i].domainValue + '</option>';
                        }else {
                            allocationlistState += '<option value="' + (allocationlistsUpdate.allocationlistDomains)[i].domainKey + '">' + (allocationlistsUpdate.allocationlistDomains)[i].domainValue + '</option>';
                        }
                    }
                }
            }
            $("#allocationlists-state").html("");
            $("#allocationlists-state").html(allocationlistState);

            form.render();
        }else{
            allocationlistsUpdate.init();
        }
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(allocationlist-submit)', function(data){
            alert(JSON.stringify(allocationlistsUpdate.allocationlists));
            allocationlistsUpdate.allocationlists.quantity=data.field.quantity;
            $.ajax({
                type: "POST",
                url: global.serverURI + "/allocationlists/update",
                data: allocationlistsUpdate.allocationlists,
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.result == 1) {
                        layer.msg('保存成功！', {
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        parent.allocationlists.refreshTable();
                        setTimeout(function () {
                            parent.allocationlists.refreshTable();
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
    allocationlistsUpdate.init();
    allocationlistsUpdate.submitForm();

});



