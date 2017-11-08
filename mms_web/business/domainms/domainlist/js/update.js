/**
 * Created by Administrator on 2017/4/1.
 */
var domainsUpdate={
    did:null,
    domains:null,
    init:function(){
        var $ = layui.jquery;
        domainsUpdate.did= global.getUrlParam("did");
        if(domainsUpdate.did!=null &&  typeof domainsUpdate.did != 'undefined'){
            $.ajax({
                type: "POST",
                url: global.serverURI+"/domains/query/"+domainsUpdate.did,
                dataType: "json",
                async:false,
                success: function(data){
                    domainsUpdate.domains=data;
                }
            });
        };
        domainsUpdate.render();
    },
    render:function () {
        var $ = layui.jquery;
        alert(JSON.stringify(domainsUpdate.domains));
        $('#domains-describes').val(domainsUpdate.domains.describes);
        $('#domains-businesstype').val(domainsUpdate.domains.businessType);
        $('#domains-domainkey').val(domainsUpdate.domains.domainKey);
        $('#domains-domainvalue').val(domainsUpdate.domains.domainValue);
    },
    submitForm:function(){
        var $ = layui.jquery;
        var form=layui.form();
        var layer = layui.layer;
        form.on('submit(domain-submit)', function(data){
            data.field.id=domainsUpdate.did;
            $.ajax({
                type: "POST",
                url: global.serverURI + "/domains/update",
                data: data.field,
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.result == 1) {
                        layer.msg('保存成功！', {
                            time: 1000, //10s后自动关闭
                            icon: 6
                        });
                        parent.domains.refreshTable();
                        setTimeout(function () {
                            parent.domains.refreshTable();
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
    domainsUpdate.init();
    domainsUpdate.submitForm();

});



