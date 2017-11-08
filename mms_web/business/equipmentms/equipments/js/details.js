/**
 * Created by Administrator on 2017/4/6.
 */
/**
 * Created by Administrator on 2017/4/1.
 */
var equipmentsDetails={
    eid:null,
    init:function(){
        equipmentsDetails.eid= global.getUrlParam("eid");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(equipmentsDetails.eid!=null &&  typeof equipmentsDetails.eid != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    equipmentsDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-equipments-serialnumber').html("");
        $('#site-equipments-ename').html("");
        $('#site-equipments-eclassify').html("");
        $('#site-equipments-etype').html("");
        $('#site-equipments-specifications').html("");
        $('#site-equipments-manufacturer').html("");
        $('#site-equipments-integrator').html("");
        $('#site-equipments-state').html("");
        $('#site-equipments-life').html("");
        $('#site-equipments-pnfru').html("");

        $('#site-equipments-serialnumber').html(data.serialNumber);
        $('#site-equipments-ename').html(data.ename);
        $('#site-equipments-eclassify').html(data.eclassifyValue);
        $('#site-equipments-etype').html(data.etypeValue);
        $('#site-equipments-specifications').html(data.specifications);
        $('#site-equipments-manufacturer').html(data.manufacturer);
        $('#site-equipments-integrator').html(data.integrator);
        $('#site-equipments-state').html(data.stateValue);
        $('#site-equipments-life').html(data.life);
        $('#site-equipments-pnfru').html(data.pnfru);

    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    equipmentsDetails.init();
    equipmentsDetails.loadData(global.serverURI+"/equipments/query/"+equipmentsDetails.eid);
});



