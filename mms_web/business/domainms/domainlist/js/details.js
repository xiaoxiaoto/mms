/**
 * Created by Administrator on 2017/4/6.
 */
/**
 * Created by Administrator on 2017/4/1.
 */
var domainsDetails={
    did:null,
    init:function(){
        domainsDetails.did= global.getUrlParam("did");
    },
    loadData:function(url){
        var $ = layui.jquery;
        if(domainsDetails.did!=null &&  typeof domainsDetails.did != 'undefined'){
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                async:false,
                success: function(data){
                    domainsDetails.renderDetails(data);
                }
            });
        }
    },
    renderDetails:function(data){
        var $ = layui.jquery;

        $('#site-domains-businesstype').html("");
        $('#site-domains-domainkey').html("");
        $('#site-domains-domainvalue').html("");
        $('#site-domains-describes').html("");

        $('#site-domains-businesstype').html(data.businessType);
        $('#site-domains-domainkey').html(data.domainKey);
        $('#site-domains-domainvalue').html(data.domainValue);
        $('#site-domains-describes').html(data.describes);

    }
};
layui.use(['jquery','layer', 'datatable'], function(){
    domainsDetails.init();
    domainsDetails.loadData(global.serverURI+"/domains/query/"+domainsDetails.did);
});



