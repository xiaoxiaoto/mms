/**
 * Created by Administrator on 2017/4/1.
 */
var purchaseapplysAdd={
    purchaseapplyDomains:null,
    applysTable:null,
    applys:[],
    equipments:null,
    init:function(){
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI + "/purchaseapplys/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                purchaseapplysAdd.purchaseapplyDomains = data
            }
        });
        purchaseapplysAdd.addSelectOptions();
        purchaseapplysAdd.loadEquipments();
        purchaseapplysAdd.renderApplys();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(purchaseapplysAdd.purchaseapplyDomains!=null){
            var purchaseapplysCirculation='<option value=""></option>';
            if(purchaseapplysAdd.purchaseapplyDomains.length>0){
                for(var i=0;i<purchaseapplysAdd.purchaseapplyDomains.length;i++){
                    var businessType=(purchaseapplysAdd.purchaseapplyDomains)[i].businessType;
                    if(businessType==="PurchaseApplysCirculation"){
                        purchaseapplysCirculation+='<option value="'+(purchaseapplysAdd.purchaseapplyDomains)[i].domainKey+'">'+(purchaseapplysAdd.purchaseapplyDomains)[i].domainValue+'</option>';
                    }
                }
            }
            $("#purchaseapplys-circulation").html("");
            $("#purchaseapplys-circulation").html(purchaseapplysCirculation);

            form.render();
        }else{
            purchaseapplysAdd.init();
        }
    },
   loadEquipments:function(){
       var $ = layui.jquery;
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
           "ajax": {
               "url":global.serverURI+"/equipments/table/query", //数据的路径,
               "dataSrc": function (data) {
                   purchaseapplysAdd.equipments=data["data"];
                   return data["data"];
               }
           },
           "columns": [ {
               "data": "id"
           }, {
               "data": "ename"
           },{
               "data": function(obj) {
                   return '<i id="icon-'+obj.id+'" class="layui-icon equipment-select" onclick="purchaseapplysAdd.addApplyDetails('+obj.id+');">&#xe618;</i>';
               }
           }
           ]
       });
   },
    addApplyDetails:function (data) {
       var $ = layui.jquery;
       if(!$("#icon-"+data).hasClass("active")){
           $("#icon-"+data).addClass("active");
       }
       var row=null;
       if( purchaseapplysAdd.equipments!=null){
           for(var i=0;i<purchaseapplysAdd.equipments.length;i++){
               if(purchaseapplysAdd.equipments[i]!=null && typeof (purchaseapplysAdd.equipments[i])!="undefined"){
                   if(purchaseapplysAdd.equipments[i]["id"]==data){
                     row=purchaseapplysAdd.equipments[i];
                   }
               }
           }
           var hasRow=false;
           if(purchaseapplysAdd.applys.length>0){
               for(var j=0;j<purchaseapplysAdd.applys.length;j++){
                   if(purchaseapplysAdd.applys[j]!=null && typeof (purchaseapplysAdd.applys[j])!="undefined"){
                       if(purchaseapplysAdd.applys[j]["id"]==data){
                           hasRow=true;
                           break;
                       }
                   }
               }
           }
           if(!hasRow){
               purchaseapplysAdd.applys.push(row);
           }
           if(purchaseapplysAdd.applysTable!=null){
               purchaseapplysAdd.applysTable.fnDestroy();
               purchaseapplysAdd.renderApplys();
           }else{
               purchaseapplysAdd.renderApplys();
           }
       }
    },
renderApplys:function () {
        var $ = layui.jquery;
        purchaseapplysAdd.applysTable=$('#applys-table').dataTable({
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
            "data":purchaseapplysAdd.applys,
            "columns": [ {
                "data": "id"
            }, {
                "data": "ename"
            }, {
                "data": function(obj) {
                    return '<div>' +
                              '<button class="layui-btn table-btn-plus" onclick="purchaseapplysAdd.plus('+obj.id+');"><i class="icon-plus"></i></button>' +
                              '<input id="table-input-quantity'+obj.id+'"type="text" name="quantity'+obj.id+'" lay-verify="required|number" autocomplete="off" placeholder="请输入数量" class="layui-input table-input-quantity" value="0">' +
                              '<button class="layui-btn table-btn-minus" onclick="purchaseapplysAdd.minus('+obj.id+');"><i class="icon-minus"></i></button>' +
                           '</div>';
                }
            }, {
                "data": function(obj) {
                    return '<i class="layui-icon" onclick="purchaseapplysAdd.delete('+obj.id+');"></i>';
                }
            }]
        });
    },
    plus:function(id){
        var $ = layui.jquery;
       var row=null;
        if( purchaseapplysAdd.applys!=null){
            for(var i=0;i<purchaseapplysAdd.applys.length;i++){
                if(purchaseapplysAdd.applys[i]!=null && typeof (purchaseapplysAdd.applys[i])!="undefined"){
                    if(purchaseapplysAdd.applys[i]["id"]==id){
                        row=purchaseapplysAdd.applys[i];
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
    delete:function(id){
        var $ = layui.jquery;
        if($("#icon-"+id).hasClass("active")){
            $("#icon-"+id).removeClass("active");
        }

        if( purchaseapplysAdd.applys!=null){
            for(var i=0;i<purchaseapplysAdd.applys.length;i++){
                if(purchaseapplysAdd.applys[i]!=null && typeof (purchaseapplysAdd.applys[i])!="undefined"){
                    if(purchaseapplysAdd.applys[i]["id"]==id){
                        (purchaseapplysAdd.applys).splice(i,1);
                    }
                }
            }
            if(purchaseapplysAdd.applysTable!=null){
                purchaseapplysAdd.applysTable.fnDestroy();
                purchaseapplysAdd.renderApplys();
            }else{
                purchaseapplysAdd.renderApplys();
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
            if( purchaseapplysAdd.applys!=null){
                var equipments=[];
                for(var i=0;i<purchaseapplysAdd.applys.length;i++){
                    if(purchaseapplysAdd.applys[i]!=null && typeof (purchaseapplysAdd.applys[i])!="undefined"){
                        purchaseapplysAdd.applys[i].applyQuantity= $("#table-input-quantity"+purchaseapplysAdd.applys[i].id).val();

                        var equipmentItem={
                            name:purchaseapplysAdd.applys[i].ename,
                            quantity:purchaseapplysAdd.applys[i].applyQuantity
                        };
                        equipments.push(equipmentItem);
                    }
                }
            }
            var noRepeateQuipments=[];

            for(var i=0;i<equipments.length;i++){
                var item=equipments[i];
                if(!purchaseapplysAdd.hasItem(item.name,noRepeateQuipments)){
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
                equipments:equipmentss,
                reason:(data.field)["reason"],
                circulation:(data.field)["circulation"],
                applicant:(data.field)["applicant"],
                applyDate:(data.field)["applyDate"],
                arrivalDate:(data.field)["arrivalDate"]
            };
            var details=[];
            if(purchaseapplysAdd.applys!=null&&purchaseapplysAdd.applys.length>0){
              for(var i=0;i<purchaseapplysAdd.applys.length;i++){
                  var detail={
                      eid:(purchaseapplysAdd.applys)[i].id,
                      quantity:(purchaseapplysAdd.applys)[i].applyQuantity
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

            purchaseapplysAdd.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    purchaseapplysAdd.init();
    purchaseapplysAdd.submitForm();

});



