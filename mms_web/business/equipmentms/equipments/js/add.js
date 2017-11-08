/**
 * Created by Administrator on 2017/4/1.
 */
var equipmentsAdd={
    equipmentsDomains:null,
    init:function(){
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI + "/equipments/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                equipmentsAdd.equipmentsDomains = data
            }
        });
        equipmentsAdd.addSelectOptions();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(equipmentsAdd.equipmentsDomains!=null){
            var equipmentClassify='<option value=""></option>';
            var equipmentState='<option value=""></option>';
            var equipmentType='<option value=""></option>';
            if(equipmentsAdd.equipmentsDomains.length>0){
                for(var i=0;i<equipmentsAdd.equipmentsDomains.length;i++){
                    var businessType=(equipmentsAdd.equipmentsDomains)[i].businessType;
                    if(businessType==="EquipmentsClassify"){
                        equipmentClassify+='<option value="'+(equipmentsAdd.equipmentsDomains)[i].domainKey+'">'+(equipmentsAdd.equipmentsDomains)[i].domainValue+'</option>';
                    }
                    if(businessType==="EquipmentsState"){
                        equipmentState+='<option value="'+(equipmentsAdd.equipmentsDomains)[i].domainKey+'">'+(equipmentsAdd.equipmentsDomains)[i].domainValue+'</option>';
                    }
                    if(businessType==="EquipmentsType"){
                        equipmentType+='<option value="'+(equipmentsAdd.equipmentsDomains)[i].domainKey+'">'+(equipmentsAdd.equipmentsDomains)[i].domainValue+'</option>';
                    }
                }
            }
            $("#equipments-classify").html("");
            $("#equipments-state").html("");
            $("#equipments-type").html("");
            $("#equipments-classify").html(equipmentClassify);
            $("#equipments-state").html(equipmentState);
            $("#equipments-type").html(equipmentType);

            form.render();
        }else{
            equipmentsAdd.init();
        }
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(equipment-submit)', function(data){
            $("#equipment-submit").attr({"disabled":"disabled"});
            $.ajax({
                type: "POST",
                url: global.serverURI + "/equipments/save",
                data:data.field,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        layer.msg('保存成功！',{
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        setTimeout(function() {
                            parent.equipments.refreshTable();
                            var index = parent.layer.getFrameIndex(window.name); //获取当前窗体索引
                            parent.layer.close(index); //执行关闭
                        },1001);
                    }else{
                        layer.msg('保存失败！',{
                            time: 1000, //10s后自动关闭
                            icon: 2
                        });
                    }
                }
            });
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    equipmentsAdd.init();
    equipmentsAdd.submitForm();

});



