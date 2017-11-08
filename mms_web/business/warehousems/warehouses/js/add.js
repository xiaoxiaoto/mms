/**
 * Created by Administrator on 2017/4/1.
 */
var warehousesAdd={
    stackDomains:null,//垛位模块值域
    warehouseDomains:null,//仓库模块值域
    stackNum:0,//垛位数
    init:function(){//页面初始化
        var $ = layui.jquery;
        $.ajax({//加载仓库模块值域
            type: "POST",
            url: global.serverURI + "/warehouses/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                warehousesAdd.warehouseDomains = data
            }
        });
        $.ajax({//加载垛位模块值域
            type: "POST",
            url: global.serverURI + "/stacks/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                warehousesAdd.stackDomains = data
            }
        });
        warehousesAdd.addSelectOptions();
    },
    addSelectOptions:function(){//根据数据渲染下拉列表选项
        var $ = layui.jquery;
        var form=layui.form();
        if(warehousesAdd.warehouseDomains!=null){
            var warehouseClassify='<option value=""></option>';
            var warehouseState='<option value=""></option>';
            if(warehousesAdd.warehouseDomains.length>0){
                for(var i=0;i<warehousesAdd.warehouseDomains.length;i++){
                    var businessType=(warehousesAdd.warehouseDomains)[i].businessType;
                    if(businessType==="WarehousesClassify"){
                        warehouseClassify+='<option value="'+(warehousesAdd.warehouseDomains)[i].domainKey+'">'+(warehousesAdd.warehouseDomains)[i].domainValue+'</option>';
                    }
                    if(businessType==="WarehousesState"){
                        warehouseState+='<option value="'+(warehousesAdd.warehouseDomains)[i].domainKey+'">'+(warehousesAdd.warehouseDomains)[i].domainValue+'</option>';
                    }
                }
            }
            $("#warehouses-classify").html("");
            $("#warehouses-state").html("");
            $("#warehouses-classify").html(warehouseClassify);
            $("#warehouses-state").html(warehouseState);

            form.render();
        }else{
            warehousesAdd.init();
        }
    },
    addStacks:function(){//添加垛位表单
        var $ = layui.jquery;
        var form=layui.form();
        if(warehousesAdd.stackDomains!=null){
            var stackClassify='<option value=""></option>';
            var stackState='<option value=""></option>';
            if(warehousesAdd.stackDomains.length>0){
                for(var i=0;i<warehousesAdd.stackDomains.length;i++){
                    var businessType=(warehousesAdd.stackDomains)[i].businessType;
                    if(businessType==="StacksClassify"){
                        stackClassify+='<option value="'+(warehousesAdd.stackDomains)[i].domainKey+'">'+(warehousesAdd.stackDomains)[i].domainValue+'</option>';
                    }
                    if(businessType==="StacksState"){
                        stackState+='<option value="'+(warehousesAdd.stackDomains)[i].domainKey+'">'+(warehousesAdd.stackDomains)[i].domainValue+'</option>';
                    }
                }
            }
            var stackItem='<tr id="row'+warehousesAdd.stackNum+'">'+
                                '<td>'+
                                    '<input type="text" name="scode'+warehousesAdd.stackNum+'" lay-verify="required" autocomplete="off" placeholder="请输入垛位编号" class="layui-input">'+
                                '</td>'+
                                '<td>'+
                                     '<input type="text" name="position'+warehousesAdd.stackNum+'" lay-verify="required" autocomplete="off" placeholder="请输入垛位位置" class="layui-input">'+
                                '</td>'+
                                '<td>'+
                                     '<select  name="classify'+warehousesAdd.stackNum+'" lay-verify="required">'+stackClassify+'</select>'+
                                '</td>'+
                                '<td>'+
                                      '<select name="state'+warehousesAdd.stackNum+'" lay-verify="required" >'+stackState+'</select>'+
                                '</td>'+
                            '</tr>';
            $("#stack-box tbody").append(stackItem);
            form.render();
            warehousesAdd.stackNum=warehousesAdd.stackNum+1;
        }else{
            warehousesAdd.init();
        }
    },
    removeStack:function(){//删除垛位表单
        var $ = layui.jquery;
        if(warehousesAdd.stackNum>0){
            $("#stack-box tbody tr:last").remove();
            warehousesAdd.stackNum=warehousesAdd.stackNum-1;
        }
    },
    submitForm:function(){//表表单提交
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(warehouse-submit)', function(data){
            $("#warehouse-submit").attr({"disabled":"disabled"});

            //数据处理
            var warehouse={
                wcode:(data.field)["wcode"],
                wname:(data.field)["wname"],
                classify:(data.field)["classify"],
                state:(data.field)["state"],
                address:(data.field)["address"],
            };

            var stackes=[];
            for(var i=0;i<warehousesAdd.stackNum;i++){
                var stacke={
                    scode:(data.field)["scode"+i],
                    position:(data.field)["position"+i],
                    classify:(data.field)["classify"+i],
                    state:(data.field)["state"+i],
                };
                stackes.push(stacke)
            }

            $.ajax({//表单提交
                type: "POST",
                url: global.serverURI + "/warehouses/save",
                data:warehouse,
                dataType: "json",
                async: false,
                success: function (data) {
                    if(data.result==1){
                        $.ajax({
                            type: "POST",
                            contentType:"application/json",
                            url: global.serverURI + "/warehouses/stackes/save",
                            data:JSON.stringify(stackes),
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                if(data.result==1){
                                    layer.msg('保存成功！',{
                                        time: 1000, //10s后自动关闭
                                        icon: 6
                                    });
                                    setTimeout(function() {
                                        parent.warehouses.refreshTable();
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

            warehousesAdd.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer','datatable'], function(){
    warehousesAdd.init();
    warehousesAdd.submitForm();

});



