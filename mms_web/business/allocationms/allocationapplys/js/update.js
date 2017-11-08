/**
 * Created by Administrator on 2017/4/1.
 */
var allocationapplysUpdata={
    aid:null,
    allocationapply:null,
    allocationapplyDomains:null,
    applysTable:null,
    applys:[],
    inventorys:null,
    init:function(){
        allocationapplysUpdata.aid= global.getUrlParam("aid");
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI + "/allocationapplys/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                allocationapplysUpdata.allocationapplyDomains = data
            }
        });
        if(allocationapplysUpdata.aid!=null &&  typeof allocationapplysUpdata.aid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI + "/allocationapplys/query/"+allocationapplysUpdata.aid,
                dataType: "json",
                async: false,
                success: function (data) {
                    allocationapplysUpdata.allocationapply = data;
                }
            });
            $.ajax({
                type: "POST",
                url: global.serverURI + "/applydetails/table/query/aid/"+allocationapplysUpdata.aid,
                dataType: "json",
                async:false,
                success: function(data){
                    if(data!=null&& typeof(data) != 'undefined'){
                      var applyDetails=data.data;
                      if(applyDetails!=null&&applyDetails.length>0){
                         for(var i=0;i<applyDetails.length;i++){
                            var applyItem={
                                rid:applyDetails[i].id,
                                id:applyDetails[i].iid,
                                eid:applyDetails[i].eid,
                                ename:applyDetails[i].ename,
                                wid:applyDetails[i].wid,
                                wcode:applyDetails[i].wcode,
                                wname:applyDetails[i].wname,
                                sid:applyDetails[i].sid,
                                scode:applyDetails[i].scode,
                                position:applyDetails[i].position,
                                state:applyDetails[i].state,
                                stateValue:applyDetails[i].stateValue,
                                createUser:applyDetails[i].createUser,
                                createDate:applyDetails[i].createDate,
                                quantity:0,
                                applyQuantity:applyDetails[i].quantity,
                                flag:applyDetails[i].flag
                            };
                             allocationapplysUpdata.applys.push(applyItem);
                         }
                      }
                    }
                }
            });
        }
        allocationapplysUpdata.render();
    },
    render:function () {
        var $ = layui.jquery;
        $("#allocationapplys-applicant").val(allocationapplysUpdata.allocationapply.applicant);
        $("#allocationapplys-quantity").val(allocationapplysUpdata.allocationapply.quantity);
        $("#allocationapplys-applydate").val(allocationapplysUpdata.allocationapply.applyDate);
        $("#allocationapplys-returndate").val(allocationapplysUpdata.allocationapply.returnDate);
        $("#allocationapplys-reason").val(allocationapplysUpdata.allocationapply.reason);
        allocationapplysUpdata.addSelectOptions();
        allocationapplysUpdata.loadInventorys();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(allocationapplysUpdata.allocationapplyDomains!=null){
            var allocationapplysCirculation='<option value=""></option>';
            if(allocationapplysUpdata.allocationapplyDomains.length>0){
                for(var i=0;i<allocationapplysUpdata.allocationapplyDomains.length;i++){
                    var businessType=(allocationapplysUpdata.allocationapplyDomains)[i].businessType;
                    if(businessType==="AllocationapplysCirculation"){
                        if(allocationapplysUpdata.allocationapply.circulation===(allocationapplysUpdata.allocationapplyDomains)[i].domainKey){
                            allocationapplysCirculation+='<option value="'+(allocationapplysUpdata.allocationapplyDomains)[i].domainKey+'" selected>'+(allocationapplysUpdata.allocationapplyDomains)[i].domainValue+'</option>';
                        }else{
                            allocationapplysCirculation+='<option value="'+(allocationapplysUpdata.allocationapplyDomains)[i].domainKey+'">'+(allocationapplysUpdata.allocationapplyDomains)[i].domainValue+'</option>';
                        }
                    }
                }
            }
            $("#allocationapplys-circulation").html("");
            $("#allocationapplys-circulation").html(allocationapplysCirculation);
            form.render();
        }else{
            allocationapplysUpdata.init();
        }
    },
    loadInventorys:function(){
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url:global.serverURI+"/inventoryLists/table/query",
            dataType: "json",
            async: true,
            success: function (data) {
                allocationapplysUpdata.inventorys=data["data"];
                $('#inventorys-table').dataTable({
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
                    "data":allocationapplysUpdata.inventorys,
                    "columns": [ {
                        "data": "id"
                    }, {
                        "data": "wname"
                    }, {
                        "data": "scode"
                    }, {
                        "data": "ename"
                    }, {
                        "data": "quantity"
                    },  {
                        "data": function(obj) {
                            if(allocationapplysUpdata.hasApply(obj.id)){
                                return '<i id="icon-'+obj.id+'" class="layui-icon inventory-select active" onclick="allocationapplysUpdata.addApplyDetails('+obj.id+');">&#xe618;</i>';
                            }
                            return '<i id="icon-'+obj.id+'" class="layui-icon inventory-select" onclick="allocationapplysUpdata.addApplyDetails('+obj.id+');">&#xe618;</i>';
                        }
                    }
                    ]
                });
                if(allocationapplysUpdata.applys!=null&&allocationapplysUpdata.applys.length>0){
                    for(var i=0;i<allocationapplysUpdata.applys.length;i++){
                        var id=allocationapplysUpdata.applys[i].id;
                        if(allocationapplysUpdata.inventorys!=null&&allocationapplysUpdata.inventorys.length>0){
                            for(var j=0;j<allocationapplysUpdata.inventorys.length;j++){
                                var iid=allocationapplysUpdata.inventorys[j].id;
                                if(id==iid){
                                    allocationapplysUpdata.applys[i].quantity=allocationapplysUpdata.inventorys[j].quantity;
                                }
                            }
                        }
                    }
                }
                allocationapplysUpdata.renderApplys();
            }
        });
    },
    hasApply:function (id) {
        var hasApply=false;
        if(allocationapplysUpdata.applys.length>0){
            for(var j=0;j<allocationapplysUpdata.applys.length;j++){
                if(allocationapplysUpdata.applys[j]!=null && typeof (allocationapplysUpdata.applys[j])!="undefined"){
                    if(allocationapplysUpdata.applys[j]["id"]==id){
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
        if( allocationapplysUpdata.inventorys!=null){
            for(var i=0;i<allocationapplysUpdata.inventorys.length;i++){
                if(allocationapplysUpdata.inventorys[i]!=null && typeof (allocationapplysUpdata.inventorys[i])!="undefined"){
                    if(allocationapplysUpdata.inventorys[i]["id"]==data){
                        row=allocationapplysUpdata.inventorys[i];
                    }
                }
            }
            var hasRow=false;
            if(allocationapplysUpdata.applys.length>0){
                for(var j=0;j<allocationapplysUpdata.applys.length;j++){
                    if(allocationapplysUpdata.applys[j]!=null && typeof (allocationapplysUpdata.applys[j])!="undefined"){
                        if(allocationapplysUpdata.applys[j]["id"]==data){
                            hasRow=true;
                            break;
                        }
                    }
                }
            }
            if(!hasRow){
                allocationapplysUpdata.applys.push(row);
            }
            if(allocationapplysUpdata.applysTable!=null){
                allocationapplysUpdata.applysTable.fnDestroy();
                allocationapplysUpdata.renderApplys();
            }else{
                allocationapplysUpdata.renderApplys();
            }
        }
    },
    renderApplys:function () {
        var $ = layui.jquery;
        allocationapplysUpdata.applysTable=$('#applys-table').dataTable({
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
            "data":allocationapplysUpdata.applys,
            "columns": [ {
                "data": "id"
            }, {
                "data": "wname"
            }, {
                "data": "scode"
            }, {
                "data": "ename"
            }, {
                "data": "quantity"
            }, {
                "data": function(obj) {
                    if(typeof (obj.applyQuantity)==="undefined"||obj.applyQuantity==null){
                        obj.applyQuantity=obj.quantity;
                    }
                    return '<div>' +
                        '<button class="layui-btn table-btn-plus" onclick="allocationapplysUpdata.plus('+obj.id+');"><i class="icon-plus"></i></button>' +
                        '<input id="table-input-quantity'+obj.id+'"type="text" name="quantity'+obj.id+'" lay-verify="required|number" autocomplete="off" placeholder="请输入数量" class="layui-input table-input-quantity" value="'+obj.applyQuantity+'">' +
                        '<button class="layui-btn table-btn-minus" onclick="allocationapplysUpdata.minus('+obj.id+');"><i class="icon-minus"></i></button>' +
                        '</div>';
                }
            }, {
                "data": function(obj) {
                    return '<i class="layui-icon" onclick="allocationapplysUpdata.delete('+obj.id+','+obj.rid+');"></i>';
                }
            }]
        });
    },
    plus:function(id){
        var $ = layui.jquery;
        var row=null;
        if( allocationapplysUpdata.applys!=null){
            for(var i=0;i<allocationapplysUpdata.applys.length;i++){
                if(allocationapplysUpdata.applys[i]!=null && typeof (allocationapplysUpdata.applys[i])!="undefined"){
                    if(allocationapplysUpdata.applys[i]["id"]==id){
                        row=allocationapplysUpdata.applys[i];
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
                url: global.serverURI + "/applydetails/delete/"+rid,
                dataType: "json",
                async: false,
                success: function (data) {
                }
            });
        }
        if( allocationapplysUpdata.applys!=null){
            for(var i=0;i<allocationapplysUpdata.applys.length;i++){
                if(allocationapplysUpdata.applys[i]!=null && typeof (allocationapplysUpdata.applys[i])!="undefined"){
                    if(allocationapplysUpdata.applys[i]["id"]==id){
                        (allocationapplysUpdata.applys).splice(i,1);
                    }
                }
            }
            if(allocationapplysUpdata.applysTable!=null){
                allocationapplysUpdata.applysTable.fnDestroy();
                allocationapplysUpdata.renderApplys();
            }else{
                allocationapplysUpdata.renderApplys();
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
        $("#rallocationapply-submit").click(function () {
            $("#allocationapply-submit").click();
        });
        form.on('submit(allocationapply-submit)', function(data){
            $("#allocationapply-submit").attr({"disabled":"disabled"});
            if( allocationapplysUpdata.applys!=null){
                var equipments=[];
                for(var i=0;i<allocationapplysUpdata.applys.length;i++){
                    if(allocationapplysUpdata.applys[i]!=null && typeof (allocationapplysUpdata.applys[i])!="undefined"){
                        allocationapplysUpdata.applys[i].applyQuantity= $("#table-input-quantity"+allocationapplysUpdata.applys[i].id).val();

                        var equipmentItem={
                            name:allocationapplysUpdata.applys[i].ename,
                            quantity:allocationapplysUpdata.applys[i].applyQuantity
                        };
                        equipments.push(equipmentItem);
                    }
                }
            }
            var noRepeateQuipments=[];

            for(var i=0;i<equipments.length;i++){
                var item=equipments[i];
                if(!allocationapplysUpdata.hasItem(item.name,noRepeateQuipments)){
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
            var allocationapply={
                id:allocationapplysUpdata.aid,
                equipments:equipmentss,
                reason:(data.field)["reason"],
                circulation:(data.field)["circulation"],
                applicant:(data.field)["applicant"],
                applyDate:(data.field)["applyDate"],
                returnDate:(data.field)["returnDate"]
            };
            var details=[];
            if(allocationapplysUpdata.applys!=null&&allocationapplysUpdata.applys.length>0){
                for(var i=0;i<allocationapplysUpdata.applys.length;i++){
                    var detail={
                        eid:(allocationapplysUpdata.applys)[i].eid,
                        wid:(allocationapplysUpdata.applys)[i].wid,
                        sid:(allocationapplysUpdata.applys)[i].sid,
                        iid:(allocationapplysUpdata.applys)[i].id,
                        quantity:(allocationapplysUpdata.applys)[i].applyQuantity
                    }
                    if(allocationapplysUpdata.applys[i].rid!=null&&typeof (allocationapplysUpdata.applys[i].rid)!="undefined"){
                        detail.id=allocationapplysUpdata.applys[i].rid;
                    }
                    details.push(detail);
                }
            }
            $.ajax({
                type: "POST",
                url: global.serverURI + "/allocationapplys/save",
                data:allocationapply,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        $.ajax({
                            type: "POST",
                            contentType:"application/json",
                            url: global.serverURI + "/allocationapplys/detail/save",
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
                                        parent.allocationapplys.refreshTable();
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

            allocationapplysUpdata.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    allocationapplysUpdata.init();
    allocationapplysUpdata.submitForm();

});



