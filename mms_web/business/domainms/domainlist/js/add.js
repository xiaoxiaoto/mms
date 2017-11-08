/**
 * Created by Administrator on 2017/4/1.
 */
var domainsAdd={
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(domain-submit)', function(data){
            $("#domain-submit").attr({"disabled":"disabled"});
            $.ajax({
                type: "POST",
                url: global.serverURI + "/domains/save",
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
                            parent.domains.refreshTable();
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
    domainsAdd.submitForm();

});



