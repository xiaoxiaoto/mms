/**
 * Created by Administrator on 2017/4/1.
 */
var allocationapplysAdd={
    allocationapplyDomains:null,
    applysTable:null,
    applys:[],
    inventorys:null,
    init:function(){
        var $ = layui.jquery;
        $.ajax({
            type: "POST",
            url: global.serverURI + "/allocationapplys/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                allocationapplysAdd.allocationapplyDomains = data
            }
        });
        allocationapplysAdd.addSelectOptions();
        allocationapplysAdd.loadInventorys();
        allocationapplysAdd.renderApplys();
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(allocationapplysAdd.allocationapplyDomains!=null){
            var allocationapplysCirculation='<option value=""></option>';
            if(allocationapplysAdd.allocationapplyDomains.length>0){
                for(var i=0;i<allocationapplysAdd.allocationapplyDomains.length;i++){
                    var businessType=(allocationapplysAdd.allocationapplyDomains)[i].businessType;
                    if(businessType==="AllocationapplysCirculation"){
                        allocationapplysCirculation+='<option value="'+(allocationapplysAdd.allocationapplyDomains)[i].domainKey+'">'+(allocationapplysAdd.allocationapplyDomains)[i].domainValue+'</option>';
                    }
                }
            }
            $("#allocationapplys-circulation").html("");
            $("#allocationapplys-circulation").html(allocationapplysCirculation);

            form.render();
        }else{
            allocationapplysAdd.init();
        }
    },
   loadInventorys:function(){
       var $ = layui.jquery;
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
           "ajax": {
               "url":global.serverURI+"/inventoryLists/table/query", //数据的路径,
               "dataSrc": function (data) {
                   allocationapplysAdd.inventorys=data["data"];
                   return data["data"];
               }
           },
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
                   return '<i id="icon-'+obj.id+'" class="layui-icon inventory-select" onclick="allocationapplysAdd.addApplyDetails('+obj.id+');">&#xe618;</i>';
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
       if( allocationapplysAdd.inventorys!=null){
           for(var i=0;i<allocationapplysAdd.inventorys.length;i++){
               if(allocationapplysAdd.inventorys[i]!=null && typeof (allocationapplysAdd.inventorys[i])!="undefined"){
                   if(allocationapplysAdd.inventorys[i]["id"]==data){
                     row=allocationapplysAdd.inventorys[i];
                   }
               }
           }
           var hasRow=false;
           if(allocationapplysAdd.applys.length>0){
               for(var j=0;j<allocationapplysAdd.applys.length;j++){
                   if(allocationapplysAdd.applys[j]!=null && typeof (allocationapplysAdd.applys[j])!="undefined"){
                       if(allocationapplysAdd.applys[j]["id"]==data){
                           hasRow=true;
                           break;
                       }
                   }
               }
           }
           if(!hasRow){
               allocationapplysAdd.applys.push(row);
           }
           if(allocationapplysAdd.applysTable!=null){
               allocationapplysAdd.applysTable.fnDestroy();
               allocationapplysAdd.renderApplys();
           }else{
               allocationapplysAdd.renderApplys();
           }
       }
    },
renderApplys:function () {
        var $ = layui.jquery;
        allocationapplysAdd.applysTable=$('#applys-table').dataTable({
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
            "data":allocationapplysAdd.applys,
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
                    return '<div>' +
                              '<button class="layui-btn table-btn-plus" onclick="allocationapplysAdd.plus('+obj.id+');"><i class="icon-plus"></i></button>' +
                              '<input id="table-input-quantity'+obj.id+'"type="text" name="quantity'+obj.id+'" lay-verify="required|number" autocomplete="off" placeholder="请输入数量" class="layui-input table-input-quantity" value="'+obj.quantity+'">' +
                              '<button class="layui-btn table-btn-minus" onclick="allocationapplysAdd.minus('+obj.id+');"><i class="icon-minus"></i></button>' +
                           '</div>';
                }
            }, {
                "data": function(obj) {
                    return '<i class="layui-icon" onclick="allocationapplysAdd.delete('+obj.id+');"></i>';
                }
            }]
        });
    },
    plus:function(id){
        var $ = layui.jquery;
       var row=null;
        if( allocationapplysAdd.applys!=null){
            for(var i=0;i<allocationapplysAdd.applys.length;i++){
                if(allocationapplysAdd.applys[i]!=null && typeof (allocationapplysAdd.applys[i])!="undefined"){
                    if(allocationapplysAdd.applys[i]["id"]==id){
                        row=allocationapplysAdd.applys[i];
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

        if( allocationapplysAdd.applys!=null){
            for(var i=0;i<allocationapplysAdd.applys.length;i++){
                if(allocationapplysAdd.applys[i]!=null && typeof (allocationapplysAdd.applys[i])!="undefined"){
                    if(allocationapplysAdd.applys[i]["id"]==id){
                        (allocationapplysAdd.applys).splice(i,1);
                    }
                }
            }
            if(allocationapplysAdd.applysTable!=null){
                allocationapplysAdd.applysTable.fnDestroy();
                allocationapplysAdd.renderApplys();
            }else{
                allocationapplysAdd.renderApplys();
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
            if( allocationapplysAdd.applys!=null){
                var equipments=[];
                for(var i=0;i<allocationapplysAdd.applys.length;i++){
                    if(allocationapplysAdd.applys[i]!=null && typeof (allocationapplysAdd.applys[i])!="undefined"){
                        allocationapplysAdd.applys[i].applyQuantity= $("#table-input-quantity"+allocationapplysAdd.applys[i].id).val();

                        var equipmentItem={
                            name:allocationapplysAdd.applys[i].ename,
                            quantity:allocationapplysAdd.applys[i].applyQuantity
                        };
                        equipments.push(equipmentItem);
                    }
                }
            }
            var noRepeateQuipments=[];

            for(var i=0;i<equipments.length;i++){
                var item=equipments[i];
                if(!allocationapplysAdd.hasItem(item.name,noRepeateQuipments)){
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
                equipments:equipmentss,
                reason:(data.field)["reason"],
                circulation:(data.field)["circulation"],
                applicant:(data.field)["applicant"],
                applyDate:(data.field)["applyDate"],
                returnDate:(data.field)["returnDate"]
            };
            var details=[];
            if(allocationapplysAdd.applys!=null&&allocationapplysAdd.applys.length>0){
              for(var i=0;i<allocationapplysAdd.applys.length;i++){
                  var detail={
                      eid:(allocationapplysAdd.applys)[i].eid,
                      wid:(allocationapplysAdd.applys)[i].wid,
                      sid:(allocationapplysAdd.applys)[i].sid,
                      iid:(allocationapplysAdd.applys)[i].id,
                      quantity:(allocationapplysAdd.applys)[i].applyQuantity
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

            allocationapplysAdd.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    allocationapplysAdd.init();
    allocationapplysAdd.submitForm();

});



