/**
 * Created by Administrator on 2017/4/1.
 */
var purchaseapplysUpdata={
    aid:null,
    purchaseapply:null,
    purchaseapplyDomains:null,
    applysTable:null,
    applys:[],
    equipments:null,
    init:function(){
        purchaseapplysUpdata.aid= global.getUrlParam("aid");
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI + "/purchaseapplys/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                purchaseapplysUpdata.purchaseapplyDomains = data
            }
        });
        if(purchaseapplysUpdata.aid!=null &&  typeof purchaseapplysUpdata.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI + "/purchaseapplys/query/"+purchaseapplysUpdata.aid,
                dataType: "json",
                async: false,
                success: function (data) {
                    purchaseapplysUpdata.purchaseapply = data;
                }
            });
            $.ajax({
                type: "POST",
                url: global.serverURI + "/purchaseApplysDetails/table/query/aid/"+purchaseapplysUpdata.aid,
                dataType: "json",
                async:false,
                success: function(data){
                    if(data!=null&& typeof(data) != 'undefined'){
                      var applyDetails=data.data;
                      if(applyDetails!=null&&applyDetails.length>0){
                          for(var i=0;i<applyDetails.length;i++){
                             var applyItem={
                                rid:applyDetails[i].id,
                                id:applyDetails[i].eid,
                                ename:applyDetails[i].ename,
                                quantity:0,
                                applyQuantity:applyDetails[i].quantity,
                            };
                             purchaseapplysUpdata.applys.push(applyItem);
                         }
                      }
                    }
                }
            });
        }
        purchaseapplysUpdata.render();
    },
    render:function () {
        var $ = layui.jquery;
        $("#purchaseapplys-applicant").val(purchaseapplysUpdata.purchaseapply.applicant);
        $("#purchaseapplys-quantity").val(purchaseapplysUpdata.purchaseapply.quantity);
        $("#purchaseapplys-applydate").val(purchaseapplysUpdata.purchaseapply.applyDate);
        $("#purchaseapplys-arrivaldate").val(purchaseapplysUpdata.purchaseapply.arrivalDate);
        $("#purchaseapplys-reason").val(purchaseapplysUpdata.purchaseapply.reason);
        purchaseapplysUpdata.addSelectOptions();
        purchaseapplysUpdata.loadEquipments();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(purchaseapplysUpdata.purchaseapplyDomains!=null){
            var purchaseapplysCirculation='<option value=""></option>';
            if(purchaseapplysUpdata.purchaseapplyDomains.length>0){
                for(var i=0;i<purchaseapplysUpdata.purchaseapplyDomains.length;i++){
                    var businessType=(purchaseapplysUpdata.purchaseapplyDomains)[i].businessType;
                    if(businessType==="PurchaseApplysCirculation"){
                        if(purchaseapplysUpdata.purchaseapply.circulation===(purchaseapplysUpdata.purchaseapplyDomains)[i].domainKey){
                            purchaseapplysCirculation+='<option value="'+(purchaseapplysUpdata.purchaseapplyDomains)[i].domainKey+'" selected>'+(purchaseapplysUpdata.purchaseapplyDomains)[i].domainValue+'</option>';
                        }else{
                            purchaseapplysCirculation+='<option value="'+(purchaseapplysUpdata.purchaseapplyDomains)[i].domainKey+'">'+(purchaseapplysUpdata.purchaseapplyDomains)[i].domainValue+'</option>';
                        }
                    }
                }
            }
            $("#purchaseapplys-circulation").html("");
            $("#purchaseapplys-circulation").html(purchaseapplysCirculation);
            form.render();
        }else{
            purchaseapplysUpdata.init();
        }
    },
    loadEquipments:function(){
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url:global.serverURI+"/equipments/table/query",
            dataType: "json",
            async: true,
            success: function (data) {
                purchaseapplysUpdata.equipments=data["data"];
                $('#equipments-table').dataTable({
                    "language":global.dataTbaleLang , //提示信息
                    "autoWidth": true, //自适应宽度，
                    "bDestory": true,
                    "lengthMenu": [5],
                    "stripeClasses": ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
                    "searching": true, //是否允许Datatables开启本地搜索
                    "paging": true, //是否开启本地分页
                    "lengthChange": true, //是否允许产品改变表格每页显示的记录数
                    "info": true, //控制是否显示表格左下角的信息
                    //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
                    "order": [1, 'desc'], //asc升序   desc降序
                    "aoColumnDefs": [{
                        "orderable": false,
                        "aTargets": [] // 指定列不参与排序
                    }],
                    "deferRender": true, //延迟渲染
                    "data":purchaseapplysUpdata.equipments,
                    "columns": [ {
                        "data": "id"
                    }, {
                        "data": "ename"
                    }, {
                        "data": function(obj) {
                            if(purchaseapplysUpdata.hasApply(obj.id)){
                                return '<i id="icon-'+obj.id+'" class="layui-icon equipment-select active" onclick="purchaseapplysUpdata.addApplyDetails('+obj.id+');">&#xe618;</i>';
                            }
                            return '<i id="icon-'+obj.id+'" class="layui-icon equipment-select" onclick="purchaseapplysUpdata.addApplyDetails('+obj.id+');">&#xe618;</i>';
                        }
                    }
                    ]
                });
                if(purchaseapplysUpdata.applys!=null&&purchaseapplysUpdata.applys.length>0){
                    for(var i=0;i<purchaseapplysUpdata.applys.length;i++){
                        var id=purchaseapplysUpdata.applys[i].id;
                        if(purchaseapplysUpdata.equipments!=null&&purchaseapplysUpdata.equipments.length>0){
                            for(var j=0;j<purchaseapplysUpdata.equipments.length;j++){
                                var iid=purchaseapplysUpdata.equipments[j].id;
                                if(id==iid){
                                    purchaseapplysUpdata.applys[i].quantity=purchaseapplysUpdata.equipments[j].quantity;
                                }
                            }
                        }
                    }
                }
                purchaseapplysUpdata.renderApplys();
            }
        });
    },
    hasApply:function (id) {
        var hasApply=false;
        if(purchaseapplysUpdata.applys.length>0){
            for(var j=0;j<purchaseapplysUpdata.applys.length;j++){
                if(purchaseapplysUpdata.applys[j]!=null && typeof (purchaseapplysUpdata.applys[j])!="undefined"){
                    if(purchaseapplysUpdata.applys[j]["id"]==id){
                        hasApply=true;
                        break;
                    }
                }
            }
        }
        return hasApply;
    },
    addApplyDetails:function (data) {
        var $ = layui.jquery;
        if(!$("#icon-"+data).hasClass("active")){
            $("#icon-"+data).addClass("active");
        }
        var row=null;
        if( purchaseapplysUpdata.equipments!=null){
            for(var i=0;i<purchaseapplysUpdata.equipments.length;i++){
                if(purchaseapplysUpdata.equipments[i]!=null && typeof (purchaseapplysUpdata.equipments[i])!="undefined"){
                    if(purchaseapplysUpdata.equipments[i]["id"]==data){
                        row=purchaseapplysUpdata.equipments[i];
                    }
                }
            }
            var hasRow=false;
            if(purchaseapplysUpdata.applys.length>0){
                for(var j=0;j<purchaseapplysUpdata.applys.length;j++){
                    if(purchaseapplysUpdata.applys[j]!=null && typeof (purchaseapplysUpdata.applys[j])!="undefined"){
                        if(purchaseapplysUpdata.applys[j]["id"]==data){
                            hasRow=true;
                            break;
                        }
                    }
                }
            }
            if(!hasRow){
                purchaseapplysUpdata.applys.push(row);
            }
            if(purchaseapplysUpdata.applysTable!=null){
                purchaseapplysUpdata.applysTable.fnDestroy();
                purchaseapplysUpdata.renderApplys();
            }else{
                purchaseapplysUpdata.renderApplys();
            }
        }
    },
    renderApplys:function () {
        var $ = layui.jquery;
        purchaseapplysUpdata.applysTable=$('#applys-table').dataTable({
            "language":global.dataTbaleLang , //提示信息
            "autoWidth": true, //自适应宽度，
            "bDestory": true,
            "lengthMenu": [5],
            "stripeClasses": ["odd", "even"], //为奇偶行加上样式，兼容不支持CSS伪类的场合
            "searching": true, //是否允许Datatables开启本地搜索
            "paging": true, //是否开启本地分页
            "lengthChange": true, //是否允许产品改变表格每页显示的记录数
            "info": true, //控制是否显示表格左下角的信息
            //跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
            "order": [1, 'desc'], //asc升序   desc降序
            "aoColumnDefs": [{
                "orderable": false,
                "aTargets": [] // 指定列不参与排序
            }],
            "deferRender": true, //延迟渲染
            "data":purchaseapplysUpdata.applys,
            "columns": [ {
                "data": "id"
            }, {
                "data": "ename"
            }, {
                "data": function(obj) {
                    if(typeof (obj.applyQuantity)==="undefined"||obj.applyQuantity==null){
                        obj.applyQuantity=0;
                    }
                    return '<div>' +
                        '<button class="layui-btn table-btn-plus" onclick="purchaseapplysUpdata.plus('+obj.id+');"><i class="icon-plus"></i></button>' +
                        '<input id="table-input-quantity'+obj.id+'"type="text" name="quantity'+obj.id+'" lay-verify="required|number" autocomplete="off" placeholder="请输入数量" class="layui-input table-input-quantity" value="'+obj.applyQuantity+'">' +
                        '<button class="layui-btn table-btn-minus" onclick="purchaseapplysUpdata.minus('+obj.id+');"><i class="icon-minus"></i></button>' +
                        '</div>';
                }
            }, {
                "data": function(obj) {
                    return '<i class="layui-icon" onclick="purchaseapplysUpdata.delete('+obj.id+','+obj.rid+');"></i>';
                }
            }]
        });
    },
    plus:function(id){
        var $ = layui.jquery;
        var row=null;
        if( purchaseapplysUpdata.applys!=null){
            for(var i=0;i<purchaseapplysUpdata.applys.length;i++){
                if(purchaseapplysUpdata.applys[i]!=null && typeof (purchaseapplysUpdata.applys[i])!="undefined"){
                    if(purchaseapplysUpdata.applys[i]["id"]==id){
                        row=purchaseapplysUpdata.applys[i];
                    }
                }
            }
            var quantity=row["quantity"];
            var currQuantity=parseInt($("#table-input-quantity"+id).val());
            var applyQuantity=currQuantity+1;
            if(applyQuantity>=quantity){
                applyQuantity=quantity;
            }
            $("#table-input-quantity"+id).val(applyQuantity);
        }

    },
    minus:function(id){
        var $ = layui.jquery;
        var currQuantity=$("#table-input-quantity"+id).val();
        var applyQuantity=currQuantity-1;
        if(applyQuantity<=0){
            applyQuantity=0;
        }
        $("#table-input-quantity"+id).val(applyQuantity);

    },
    delete:function(id,rid){
        var $ = layui.jquery;
        if($("#icon-"+id).hasClass("active")){
            $("#icon-"+id).removeClass("active");
        }
        if(rid!=null && typeof (rid)!="undefined"){
            $.ajax({
                type: "POST",
                url: global.serverURI + "/purchaseApplysDetails/delete/"+rid,
                dataType: "json",
                async: false,
                success: function (data) {
                }
            });
        }
        if( purchaseapplysUpdata.applys!=null){
            for(var i=0;i<purchaseapplysUpdata.applys.length;i++){
                if(purchaseapplysUpdata.applys[i]!=null && typeof (purchaseapplysUpdata.applys[i])!="undefined"){
                    if(purchaseapplysUpdata.applys[i]["id"]==id){
                        (purchaseapplysUpdata.applys).splice(i,1);
                    }
                }
            }
            if(purchaseapplysUpdata.applysTable!=null){
                purchaseapplysUpdata.applysTable.fnDestroy();
                purchaseapplysUpdata.renderApplys();
            }else{
                purchaseapplysUpdata.renderApplys();
            }
        }
    },
    hasItem:function(item,Array){
        var flag=false;
        if(Array!=null&&Array.length>0){
            for(var i=0;i<Array.length;i++){
                var arrayItem=Array[i];
                if(arrayItem.name==item){
                    flag=true;
                    break;
                }
            }
        }
        return flag;
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        $("#rpurchaseapply-submit").click(function () {
            $("#purchaseapply-submit").click();
        });
        form.on('submit(purchaseapply-submit)', function(data){
            $("#purchaseapply-submit").attr({"disabled":"disabled"});
            if( purchaseapplysUpdata.applys!=null){
                var equipments=[];
                for(var i=0;i<purchaseapplysUpdata.applys.length;i++){
                    if(purchaseapplysUpdata.applys[i]!=null && typeof (purchaseapplysUpdata.applys[i])!="undefined"){
                        purchaseapplysUpdata.applys[i].applyQuantity= $("#table-input-quantity"+purchaseapplysUpdata.applys[i].id).val();

                        var equipmentItem={
                            name:purchaseapplysUpdata.applys[i].ename,
                            quantity:purchaseapplysUpdata.applys[i].applyQuantity
                        };
                        equipments.push(equipmentItem);
                    }
                }
            }
            var noRepeateQuipments=[];

            for(var i=0;i<equipments.length;i++){
                var item=equipments[i];
                if(!purchaseapplysUpdata.hasItem(item.name,noRepeateQuipments)){
                    noRepeateQuipments.push({name:item.name,quantity:0});
                }
            }
            if(noRepeateQuipments!=null&&noRepeateQuipments.length>0){
                for(var i=0;i<noRepeateQuipments.length;i++){
                    var noRepeateQuipment=noRepeateQuipments[i];
                    for(var j=0;j<equipments.length;j++){
                        var item=equipments[j];
                        if(noRepeateQuipment.name==item.name){
                            noRepeateQuipment.quantity=parseInt(noRepeateQuipment.quantity)+parseInt(item.quantity);
                        }
                    }
                }
            }
            var equipmentss="";
            if(noRepeateQuipments!=null&&noRepeateQuipments.length>0){
                for(var i=0;i<noRepeateQuipments.length;i++){
                    equipmentss=equipmentss+noRepeateQuipments[i].name+"X"+noRepeateQuipments[i].quantity+",";
                }
            }
            equipmentss=equipmentss.substring(0,equipmentss.lastIndexOf(","));
            var purchaseapply={
                id:purchaseapplysUpdata.aid,
                equipments:equipmentss,
                reason:(data.field)["reason"],
                circulation:(data.field)["circulation"],
                applicant:(data.field)["applicant"],
                applyDate:(data.field)["applyDate"],
                arrivalDate:(data.field)["arrivalDate"]
            };
            var details=[];
            if(purchaseapplysUpdata.applys!=null&&purchaseapplysUpdata.applys.length>0){
                for(var i=0;i<purchaseapplysUpdata.applys.length;i++){
                    var detail={
                        eid:(purchaseapplysUpdata.applys)[i].id,
                        quantity:(purchaseapplysUpdata.applys)[i].applyQuantity
                    }
                    if(purchaseapplysUpdata.applys[i].rid!=null&&typeof (purchaseapplysUpdata.applys[i].rid)!="undefined"){
                        detail.id=purchaseapplysUpdata.applys[i].rid;
                    }
                    details.push(detail);
                }
            }
            $.ajax({
                type: "POST",
                url: global.serverURI + "/purchaseapplys/save",
                data:purchaseapply,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        $.ajax({
                            type: "POST",
                            contentType:"application/json",
                            url: global.serverURI + "/purchaseapplys/detail/save",
                            data:JSON.stringify(details),
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                if(data.result==1){
                                    layer.msg('保存成功！',{
                                        time: 1000, //10s后自动关闭
                                        icon: 6
                                    });
                                    setTimeout(function() {
                                        parent.purchaseapplys.refreshTable();
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
                    }
                }
            });

            purchaseapplysUpdata.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    purchaseapplysUpdata.init();
    purchaseapplysUpdata.submitForm();

});



