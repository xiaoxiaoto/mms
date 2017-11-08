/**
 * Created by Administrator on 2017/4/1.
 */
var equipmentsUpdate={
    eid:null,
    equipments:null,
    equipmentDomains:null,
    init:function(){
        var $ = layui.jquery;
        equipmentsUpdate.eid= global.getUrlParam("eid");
        if(equipmentsUpdate.eid!=null &&  typeof equipmentsUpdate.eid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/equipments/query/"+equipmentsUpdate.eid,
                dataType: "json",
                async:false,
                success: function(data){
                    equipmentsUpdate.equipments=data;
                }
            });
        };
        $.ajax({
            type: "POST",
            url: global.serverURI + "/equipments/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                equipmentsUpdate.equipmentDomains = data
            }
        });
        equipmentsUpdate.render();
    },
    render:function () {
        var $ = layui.jquery;
        $('#equipments-serialnumber').val(equipmentsUpdate.equipments.serialNumber);
        $('#equipments-ename').val(equipmentsUpdate.equipments.ename);
        $('#equipments-eclassify').val(equipmentsUpdate.equipments.eclassify);
        $('#equipments-etype').val(equipmentsUpdate.equipments.etype);
        $('#equipments-specifications').val(equipmentsUpdate.equipments.specifications);
        $('#equipments-manufacturer').val(equipmentsUpdate.equipments.manufacturer);
        $('#equipments-integrator').val(equipmentsUpdate.equipments.integrator);
        $('#equipments-state').val(equipmentsUpdate.equipments.state);
        $('#equipments-life').val(equipmentsUpdate.equipments.life);
        $('#equipments-pnfru').val(equipmentsUpdate.equipments.pnfru);
        equipmentsUpdate.addSelectOptions();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(equipmentsUpdate.equipmentDomains!=null){
            var equipmentClassify='<option value=""></option>';
            var equipmentState='<option value=""></option>';
            var equipmentType='<option value=""></option>';
            if(equipmentsUpdate.equipmentDomains.length>0){
                for(var i=0;i<equipmentsUpdate.equipmentDomains.length;i++){
                    var businessType=(equipmentsUpdate.equipmentDomains)[i].businessType;
                    if(businessType==="EquipmentsClassify"){
                        if(equipmentsUpdate.equipments.eclassify===(equipmentsUpdate.equipmentDomains)[i].domainKey){
                            equipmentClassify+='<option value="'+(equipmentsUpdate.equipmentDomains)[i].domainKey+'" selected>'+(equipmentsUpdate.equipmentDomains)[i].domainValue+'</option>';
                        }else{
                            equipmentClassify+='<option value="'+(equipmentsUpdate.equipmentDomains)[i].domainKey+'">'+(equipmentsUpdate.equipmentDomains)[i].domainValue+'</option>';
                        }
                    }
                    if(businessType==="EquipmentsState"){
                        if(equipmentsUpdate.equipments.state===(equipmentsUpdate.equipmentDomains)[i].domainKey) {
                            equipmentState += '<option value="' + (equipmentsUpdate.equipmentDomains)[i].domainKey + '" selected>' + (equipmentsUpdate.equipmentDomains)[i].domainValue + '</option>';
                        }else {
                            equipmentState += '<option value="' + (equipmentsUpdate.equipmentDomains)[i].domainKey + '">' + (equipmentsUpdate.equipmentDomains)[i].domainValue + '</option>';
                        }
                    }
                    if(businessType==="EquipmentsType"){
                        if(equipmentsUpdate.equipments.etype===(equipmentsUpdate.equipmentDomains)[i].domainKey) {
                            equipmentType += '<option value="' + (equipmentsUpdate.equipmentDomains)[i].domainKey + '" selected>' + (equipmentsUpdate.equipmentDomains)[i].domainValue + '</option>';
                        }else {
                            equipmentType += '<option value="' + (equipmentsUpdate.equipmentDomains)[i].domainKey + '">' + (equipmentsUpdate.equipmentDomains)[i].domainValue + '</option>';
                        }
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
            equipmentsUpdate.init();
        }
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(equipment-submit)', function(data){
            data.field.id=equipmentsUpdate.eid;
            $.ajax({
                type: "POST",
                url: global.serverURI + "/equipments/update",
                data: data.field,
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.result == 1) {
                        layer.msg('保存成功！', {
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        parent.equipments.refreshTable();
                        setTimeout(function () {
                            parent.equipments.refreshTable();
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
    equipmentsUpdate.init();
    equipmentsUpdate.submitForm();

});



