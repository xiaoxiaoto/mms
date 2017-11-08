/**
 * Created by Administrator on 2017/4/1.
 */
var warehousesUpdate={
    wid:null,
    warehouses:null,
    stacks:null,
    stackDomains:null,
    warehouseDomains:null,
    stackNum:0,
    init:function(){
        var $ = layui.jquery;
        warehousesUpdate.wid= global.getUrlParam("wid");
        if(warehousesUpdate.wid!=null &&  typeof warehousesUpdate.wid != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/warehouses/query/"+warehousesUpdate.wid,
                dataType: "json",
                async:false,
                success: function(data){
                    warehousesUpdate.warehouses=data;
                }
            });
            $.ajax({
                type: "POST",
                url: global.serverURI+"/stacks/table/query/"+warehousesUpdate.wid,
                dataType: "json",
                async:false,
                success: function(data){
                    warehousesUpdate.stacks=data;
                }
            });
        };
        $.ajax({
            type: "POST",
            url: global.serverURI + "/warehouses/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                warehousesUpdate.warehouseDomains = data
            }
        });
        $.ajax({
            type: "POST",
            url: global.serverURI + "/stacks/domain/query",
            dataType: "json",
            async: false,
            success: function (data) {
                warehousesUpdate.stackDomains = data
            }
        });
        warehousesUpdate.render();
    },
    render:function () {
        var $ = layui.jquery;
        $("#wid").val(warehousesUpdate.warehouses.id);
        $("#wcode").val(warehousesUpdate.warehouses.wcode);
        $("#wname").val(warehousesUpdate.warehouses.wname);
        $("#xy").val(warehousesUpdate.warehouses.xy);
        $("#address").val(warehousesUpdate.warehouses.address);
        warehousesUpdate.addSelectOptions();
        if(warehousesUpdate.stacks!=null && warehousesUpdate.stacks.data.length>0){
            for(var i=0;i<warehousesUpdate.stacks.data.length;i++){
                var stack=warehousesUpdate.stacks.data[i];
                warehousesUpdate.addStacks();
                $("#sid"+i).val(stack.id);
                $("#scode"+i).val(stack.scode);
                $("#position"+i).val(stack.position);
            }
        }
    },
    addSelectOptions:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(warehousesUpdate.warehouseDomains!=null){
            var warehouseClassify='<option value=""></option>';
            var warehouseState='<option value=""></option>';
            if(warehousesUpdate.warehouseDomains.length>0){
                for(var i=0;i<warehousesUpdate.warehouseDomains.length;i++){
                    var businessType=(warehousesUpdate.warehouseDomains)[i].businessType;
                    if(businessType==="WarehousesClassify"){
                        if(warehousesUpdate.warehouses.classify===(warehousesUpdate.warehouseDomains)[i].domainKey){
                            warehouseClassify+='<option value="'+(warehousesUpdate.warehouseDomains)[i].domainKey+'" selected>'+(warehousesUpdate.warehouseDomains)[i].domainValue+'</option>';
                        }else{
                            warehouseClassify+='<option value="'+(warehousesUpdate.warehouseDomains)[i].domainKey+'">'+(warehousesUpdate.warehouseDomains)[i].domainValue+'</option>';
                        }
                    }
                    if(businessType==="WarehousesState"){
                        if(warehousesUpdate.warehouses.state===(warehousesUpdate.warehouseDomains)[i].domainKey) {
                            warehouseState += '<option value="' + (warehousesUpdate.warehouseDomains)[i].domainKey + '" selected>' + (warehousesUpdate.warehouseDomains)[i].domainValue + '</option>';
                        }else {
                            warehouseState += '<option value="' + (warehousesUpdate.warehouseDomains)[i].domainKey + '">' + (warehousesUpdate.warehouseDomains)[i].domainValue + '</option>';
                        }
                    }
                }
            }
            $("#warehouses-classify").html("");
            $("#warehouses-state").html("");
            $("#warehouses-classify").html(warehouseClassify);
            $("#warehouses-state").html(warehouseState);

            form.render();
        }else{
            warehousesUpdate.init();
        }
    },
    addStacks:function(){
        var $ = layui.jquery;
        var form=layui.form();
        if(warehousesUpdate.stackDomains!=null){
            var stackClassify='<option value=""></option>';
            var stackState='<option value=""></option>';
            if(warehousesUpdate.stackDomains.length>0){
                for(var i=0;i<warehousesUpdate.stackDomains.length;i++){
                    var businessType=(warehousesUpdate.stackDomains)[i].businessType;
                    if((warehousesUpdate.stacks.data)[warehousesUpdate.stackNum]!=null && typeof (warehousesUpdate.stacks.data)[warehousesUpdate.stackNum] != 'undefined'){
                        if(businessType==="StacksClassify"){
                            if((warehousesUpdate.stacks.data)[warehousesUpdate.stackNum].classify===(warehousesUpdate.warehouseDomains)[i].domainKey) {
                                stackClassify += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '" selected>' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                            }else{
                                stackClassify += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '">' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                            }
                        }
                        if(businessType==="StacksState"){
                            if((warehousesUpdate.stacks.data)[warehousesUpdate.stackNum].state===(warehousesUpdate.stackDomains)[i].domainKey) {
                                stackState += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '" selected>' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                            }else{
                                stackState += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '">' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                            }
                        }
                    }else{
                        if(businessType==="StacksClassify"){
                            stackClassify += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '">' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                        }
                        if(businessType==="StacksState"){
                             stackState += '<option value="' + (warehousesUpdate.stackDomains)[i].domainKey + '">' + (warehousesUpdate.stackDomains)[i].domainValue + '</option>';
                        }
                    }

                }
            }
            var stackItem='<tr>'+
                                '<td>'+
                                     '<input id="sid'+warehousesUpdate.stackNum+'" type="text" name="sid'+warehousesUpdate.stackNum+'" class="layui-input" style="display: none">'+
                                     '<input id="scode'+warehousesUpdate.stackNum+'" type="text" name="scode'+warehousesUpdate.stackNum+'" lay-verify="required" autocomplete="off" placeholder="请输入垛位编号" class="layui-input">'+
                                '</td>'+
                                '<td>'+
                                     '<input id="position'+warehousesUpdate.stackNum+'" type="text" name="position'+warehousesUpdate.stackNum+'" lay-verify="required" autocomplete="off" placeholder="请输入垛位位置" class="layui-input">'+
                                '</td>'+
                                '<td>'+
                                     '<select id="classify'+warehousesUpdate.stackNum+'" name="classify'+warehousesUpdate.stackNum+'" lay-verify="required">'+stackClassify+'</select>'+
                                '</td>'+
                                '<td>'+
                                      '<select id="state'+warehousesUpdate.stackNum+'" name="state'+warehousesUpdate.stackNum+'" lay-verify="required" >'+stackState+'</select>'+
                                '</td>'+
                            '</tr>';
            $("#stack-box tbody").append(stackItem);
            form.render();
            warehousesUpdate.stackNum=warehousesUpdate.stackNum+1;
        }else{
            warehousesUpdate.init();
        }
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(warehouse-submit)', function(data){
            var warehouse={
                id:(data.field)["wid"],
                wcode:(data.field)["wcode"],
                wname:(data.field)["wname"],
                classify:(data.field)["classify"],
                state:(data.field)["state"],
                address:(data.field)["address"],
            };
            var stackes=[];
            for(var i=0;i<warehousesUpdate.stackNum;i++){
                var stacke={
                    id:(data.field)["sid"+i],
                    scode:(data.field)["scode"+i],
                    position:(data.field)["position"+i],
                    classify:(data.field)["classify"+i],
                    state:(data.field)["state"+i],
                };
                stackes.push(stacke)
            }
            $.ajax({
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
                            url: global.serverURI + "/warehouses/stackes/update",
                            data:JSON.stringify(stackes),
                            dataType: "json",
                            async: false,
                            success: function (data) {
                                if(data.result==1){
                                    layer.msg('保存成功！',{
                                        time: 1000, //10s后自动关闭
                                        icon: 6
                                    });
                                    parent.warehouses.refreshTable();
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

            warehousesUpdate.stackNum=0;
            return false;
        });
    }
};
layui.use(['jquery','form', 'layedit', 'laydate','layer'], function(){
    warehousesUpdate.init();
    warehousesUpdate.submitForm();

});



