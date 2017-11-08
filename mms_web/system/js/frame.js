/**
 * Created by Administrator on 2017/3/31.
 */
/**
 * 页面布局
 */
var frameLayout={
    /**浏览器显示区域宽度**/
    browserWidth: 0,
    /**浏览器显示区域高度**/
    browserHeight : 0,
    /**是否显示菜单面板**/
    isShowMenu:true,
    /**初始化页面布局**/
    initLayout:function(){
        frameLayout.getScreenSize();
        $('#toggle-menu-open').click(function () {
            frameLayout.toggleMenuHandle();
        });
        $('#toggle-menu-close').click(function () {
            frameLayout.toggleMenuHandle();
        });
        frameLayout.screenResize();
    },
    /**显示隐藏菜单面板操作**/
    toggleMenuHandle:function(){
        var pageLeft = $('#page-left');
        var toggleMenuOpen = $('#toggle-menu-open');
        var toggleMenuClose = $('#toggle-menu-close');
        var containerIframe = $('#container-iframe');
        if(!frameLayout.isShowMenu){
            pageLeft.removeClass("menu-min");
            toggleMenuOpen.css({
                display:"block"
            });
            toggleMenuClose.css({
                display:"none"
            });
            pageLeft.animate({
                width: 200
            }, 100);
            containerIframe.animate({
                width: frameLayout.browserWidth - 285
            },100);
            frameLayout.isShowMenu=!frameLayout.isShowMenu;
        }else{
            pageLeft.addClass("menu-min");
            toggleMenuOpen.css({
                display:"none"
            });
            toggleMenuClose.css({
                display:"block"
            });
            pageLeft.animate({
                width: 50
            }, 100);
            containerIframe.animate({
                width: frameLayout.browserWidth
            },100);
            frameLayout.isShowMenu=!frameLayout.isShowMenu;
        }
    },
    /**获取屏幕尺寸**/
    getScreenSize:function(){
        if (typeof ($(window).innerWidth()) == 'number') {
            //Non-IE
            frameLayout.browserWidth = $(window).innerWidth();
            frameLayout.browserHeight= $(window).innerHeight();
        }else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
            //IE 6+ in 'standards compliant mode'
            frameLayout.browserWidth = document.documentElement.clientWidth;
            frameLayout.browserHeight = document.documentElement.clientHeight;
        }
    },
    /**调整屏幕尺寸处理方法**/
    screenResize:function () {
        frameLayout.getScreenSize();
        window.onresize = function () {
            if (typeof ($(window).innerWidth()) == 'number') {
                //Non-IE
                frameLayout.browserWidth = window.innerWidth;
                frameLayout.browserHeight = window.innerHeight;
            }
            else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
                //IE 6+ in 'standards compliant mode'
                frameLayout.browserWidth = document.documentElement.clientWidth;
                frameLayout.browserHeight = document.documentElement.clientHeight;
            }
            frameLayout.setScreenSize();
        }
    },
    /**调设置内容区尺寸**/
    setScreenSize:function(){
        $("#container-iframe").width(frameLayout.browserWidth - $("#page-left")[0].offsetWidth);
        $("#container-iframe").height(frameLayout.browserHeight - 50);
    }
};


/**
 * tab页操作
 */
var headerTabs={
    initTab:function(){
        headerTabs.addTab();/**创建tab**/
        headerTabs.moveToHead();/**移到tab最前端tab**/
        headerTabs.moveToTail();/**移到tab最后端tab**/
        headerTabs.clickActiveTab();/**选中tab**/
        headerTabs.showUrl();/**双击tab**/
        $('.content-tabs').contextmenu({/**右键菜单**/
        target: '#context-menu',
            onItem: function (context, e) {
                if($(e.target).text()==="定位当前选项卡"){
                    headerTabs.showActive();
                }
                if($(e.target).text()==="关闭全部选项卡"){
                    headerTabs.closeAll();
                }
                if($(e.target).text()==="关闭其他选项卡"){
                    headerTabs.closeOthers();
                }
            }
        });
    },
    /**创建tab**/
    addTab:function(){
        $(".iframeurl").bind("click",function() {
            var cid = $(this).attr("name");
            var cname = $(this).attr("title");
            var id = $(this).attr("id");
            if(headerTabs.isHasTab(id)){
                $(".J_menuTab").removeClass("active");
                $(".J_mainContent").find("iframe.iframe-item").hide();
                headerTabs.activeTab(id);
                headerTabs.overstepContainer($(".J_menuTab.active"));
            }else{
                var tabInnerHtml = '<a href="javascript:;" class="active J_menuTab" name="'+id+'">' + cname + ' <i class="icon-remove" onclick="headerTabs.closeOne(this);"></i></a>';
                $(".J_menuTab").removeClass("active");
                $(".J_menuTabs .page-tabs-content").append(tabInnerHtml);
                var iframeInnerHtml = '<iframe  name="' + id + '"class="iframe-item"  width="100%" height="100%" src="' + cid + '" frameborder="0"  seamless></iframe>';
                $(".J_mainContent").find("iframe.iframe-item").hide().parents(".J_mainContent").append(iframeInnerHtml);
                headerTabs.overstepContainer($(".J_menuTab.active"));
            }
        });
    },
    /**超出Tab容器处理**/
    overstepContainer:function(obj){
        var prevAllWidth = headerTabs.getInnerDomWidth($(obj).prevAll());
        var nextAllWidth = headerTabs.getInnerDomWidth($(obj).nextAll());
        var otherDomWidth = headerTabs.getInnerDomWidth($(".content-tabs").children().not(".J_menuTabs"));
        var tabContainerWidth=$(".content-tabs").outerWidth(true) -otherDomWidth;
        var moveWidth = 0;
        if ($(".page-tabs-content").outerWidth() <tabContainerWidth) {
            moveWidth = 0;
        } else {
            if (nextAllWidth <= (tabContainerWidth - $(obj).outerWidth(true) - $(obj).next().outerWidth(true))) {
                if ((tabContainerWidth - $(obj).next().outerWidth(true)) > nextAllWidth) {
                    moveWidth = prevAllWidth;
                    var tempObj = obj;
                    while ((moveWidth - $(tempObj).outerWidth()) > ($(".page-tabs-content").outerWidth() - tabContainerWidth)) {
                        moveWidth -= $(tempObj).prev().outerWidth();
                        tempObj= $(tempObj).prev();
                    }
                }
            } else {
                if (prevAllWidth > (tabContainerWidth - $(obj).outerWidth(true) - $(obj).prev().outerWidth(true))) {
                    moveWidth = prevAllWidth - $(obj).prev().outerWidth(true);
                }
            }
        }

        $(".page-tabs-content").animate({marginLeft: (0 - moveWidth) + "px"}, "fast")
    },
    /**获取Tab容器内部宽度**/
    getInnerDomWidth:function(objArray){
        var width= 0;
        $(objArray).each(function () {
            width += $(this).outerWidth(true)
        });
        return width
    },
    /**移到tab最前端tab**/
    moveToHead:function(){
        $(".J_tabLeft").on("click", function(){
            var tabsContentMarginLeft = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
            var otherDomWidth = headerTabs.getInnerDomWidth($(".content-tabs").children().not(".J_menuTabs"));
            var tabContainerWidth=$(".content-tabs").outerWidth(true) -otherDomWidth;
            var moveWidth = 0;
            if ($(".page-tabs-content").width() < tabContainerWidth) {
            } else {
                var firstTab = $(".J_menuTab:first");
                var n = 0;
                while ((n + $(firstTab).outerWidth(true)) <= tabsContentMarginLeft) {
                    n += $(firstTab).outerWidth(true);
                    firstTab = $(firstTab).next()
                }
                n = 0;
                if (headerTabs.getInnerDomWidth($(firstTab).prevAll()) > tabContainerWidth) {
                    while ((n + $(firstTab).outerWidth(true)) < (tabContainerWidth) && firstTab.length > 0) {
                        n += $(firstTab).outerWidth(true);
                        firstTab = $(firstTab).prev()
                    }
                    moveWidth =headerTabs.getInnerDomWidth($(firstTab).prevAll())
                }
            }
            $(".page-tabs-content").animate({marginLeft: (0 - moveWidth) + "px"}, "fast")
        });
    },
    /**移到tab最后端tab**/
    moveToTail:function(){
        $(".J_tabRight").on("click", function(){
            var tabsContentMarginLeft = Math.abs(parseInt($(".page-tabs-content").css("margin-left")));
            var otherDomWidth = headerTabs.getInnerDomWidth($(".content-tabs").children().not(".J_menuTabs"));
            var tabContainerWidth=$(".content-tabs").outerWidth(true) -otherDomWidth;
            var moveWidth = 0;
            if ($(".page-tabs-content").width() < tabContainerWidth) {
            } else {
                var firstTab = $(".J_menuTab:first");
                var n = 0;
                while ((n + $(firstTab).outerWidth(true)) <= tabsContentMarginLeft) {
                    n += $(firstTab).outerWidth(true);
                    firstTab = $(firstTab).next()
                }
                n = 0;
                while ((n + $(firstTab).outerWidth(true)) < (tabContainerWidth) && firstTab.length > 0) {
                    n += $(firstTab).outerWidth(true);
                    firstTab = $(firstTab).next()
                }
                moveWidth = headerTabs.getInnerDomWidth($(firstTab).prevAll());
                if (moveWidth > 0) {
                    $(".page-tabs-content").animate({marginLeft: (0 -moveWidth) + "px"}, "fast")
                }
            }
        });
    },
    /**关闭其他Tab**/
    closeOthers:function(){
        $(".page-tabs-content").children("a").not(":first").not(".active").each(function () {
            $(this).remove();
            $('.iframe-item[name="' +$(this).attr("name")+ '"]').remove();
        });
        $(".page-tabs-content").css("margin-left", "0");
    },
    /**关闭全部Tab**/
    closeAll:function(){
        $(".page-tabs-content").children("a").not(":first").each(function () {
            $(this).remove();
            $('.iframe-item[name="' +$(this).attr("name")+ '"]').remove();
        });
        $(".page-tabs-content").children("a:first").each(function () {
            $(this).addClass("active");
            $('.iframe-item[name="' +$(this).attr("name")+ '"]').show();
        });
        $(".page-tabs-content").css("margin-left", "0");
    },
    /**关闭单个Tab**/
    closeOne:function(obj){
        var currID = $(obj).parents(".J_menuTab").attr("name");
        var currTabWidth = $(obj).parents(".J_menuTab").width();
        if ($(obj).parents(".J_menuTab").hasClass("active")) {
            if ($(obj).parents(".J_menuTab").next(".J_menuTab").size()) {
                var nextID = $(obj).parents(".J_menuTab").next(".J_menuTab:eq(0)").attr("name");
                $(obj).parents(".J_menuTab").next(".J_menuTab:eq(0)").addClass("active");
                $("iframe.iframe-item").each(function () {
                    if ($(this).attr("name") == nextID) {
                        $(this).show().siblings(".iframe-item").hide();
                    }
                });
                var contentMarginLfet = parseInt($(".page-tabs-content").css("margin-left"));
                if (contentMarginLfet < 0) {
                    $(".page-tabs-content").animate({marginLeft: (contentMarginLfet + currTabWidth) + "px"}, "fast")
                }
                $(obj).parents(".J_menuTab").remove();
                $("iframe.iframe-item").each(function () {
                    if ($(this).attr("name") == currID) {
                        $(this).remove();
                    }
                })
            }
            if ($(obj).parents(".J_menuTab").prev(".J_menuTab").size()) {
                var prevID = $(obj).parents(".J_menuTab").prev(".J_menuTab:last").attr("name");
                $(obj).parents(".J_menuTab").prev(".J_menuTab:last").addClass("active");
                $("iframe.iframe-item").each(function () {
                    if ($(this).attr("name") == prevID) {
                        $(this).show().siblings(".iframe-item").hide();
                    }
                });
                $(obj).parents(".J_menuTab").remove();
                $("iframe.iframe-item").each(function () {
                    if ($(this).data("name") ==currID) {
                        $(this).remove();
                    }
                })
            }
        } else {
            $(obj).parents(".J_menuTab").remove();
            $("iframe.iframe-item").each(function () {
                if ($(this).attr("name") == currID) {
                    $(this).remove();
                }
            });
            headerTabs.overstepContainer($(".J_menuTab.active"));
        }
    },
    /**定位到当前活动Tab**/
    showActive:function(){
        headerTabs.overstepContainer($(".J_menuTab.active"));
    },
    clickActiveTab:function(){
        $(".J_menuTabs").on("click", ".J_menuTab", function(){
            if (!$(this).hasClass("active")) {
                var currID = $(this).attr("name");
                $(this).addClass("active").siblings(".J_menuTab").removeClass("active");
                $("iframe.iframe-item").each(function () {
                    if ($(this).attr("name") ==currID) {
                        $(this).show().siblings(".iframe-item").hide();
                    }
                });
                headerTabs.overstepContainer($(this));
            }
        });
    },
    /**获取当前活动Tab**/
    activeTab:function(id){
        $(".J_menuTabs .page-tabs-content a").each(function(){
            var itemID=$(this).attr("name");
            if(itemID===id){
                $(this).addClass("active");
            }
        });
        $("iframe.iframe-item").each(function(){
            var itemID=$(this).attr("name");
            if(itemID===id){
                $(this).show();
            }
        });
    },
    /**双击tab**/
    showUrl:function(){
        $(".J_menuTabs").on("dblclick", ".J_menuTab", function(){
            var currIframe = $('.iframe-item[name="' + $(this).attr("name") + '"]');
            var url = currIframe.attr("src");
            alert(url);
        });
    },
    /**判断当前添加的Tab是否存在**/
    isHasTab:function(id){
        var flag=false;
        $(".J_menuTabs .page-tabs-content a").each(function(){
            var itemID=$(this).attr("name");
            if(itemID===id){
                flag=true;
            }
        });
        return flag;
    }
};

/**
 * 菜单加载
 */
menuTree = {
    initMenuTree: function (data) {
        /*递归实现获取无级树数据并生成DOM结构*/
        var innerHtml = "";
        var forTree = function (data) {
            for (var i = 0; i < data.length; i++) {
                var subInnerHtml = "";
                try {
                    if (typeof data[i]["url"] == "undefined") {
                        subInnerHtml = '<li><a href="#" class="dropdown-toggle"><i class="' + data[i]["icon"] + '"></i><span class="menu-text" id="' + data[i]["id"] + '">' + data[i]["title"] + ' </span><b class="arrow icon-angle-down"></b></a><ul class="submenu">';
                    } else {
                        subInnerHtml = '<li class="home"><a  href="javascript:void(0)" name="' + data[i]["url"] + '"  title="' + data[i]["title"] + '" class="iframeurl" id="' + data[i]["id"] + '">' + data[i]["title"] + '</a></li><ul class="submenu">';
                    }
                    innerHtml += subInnerHtml;
                    if (data[i]["children"] != null) {
                        forTree(data[i]["children"]);
                    }
                    innerHtml += "</ul></div>";
                } catch (e) {
                }
            }
            return innerHtml;
        };
        /* 添加无级树 */
        document.getElementById("nav-list").innerHTML = forTree(data);

        //设置节点激活样式
        $(document).ready(function () {
            $('#nav_list').find('li.home').click(function () {
                $('#nav_list').find('li.home').removeClass('active');
                $(this).addClass('active');
            });
        });
        menuTree.navListHandle();
    },
    /* 点击展开或关闭菜单 */
    navListHandle:function(){
        $(".nav-list").click(function (e) {
            var aDom = $(e.target).closest("a");
            if (!aDom || aDom.length == 0) {
                return
            }
            var isMin = $("#page-left").hasClass("menu-min");
            if (!aDom.hasClass("dropdown-toggle")) {
                if (isMin&& aDom.get(0).parentNode.parentNode == this) {
                    var i = aDom.find(".menu-text").get(0);
                    if (e.target != i && !a.contains(i, e.target)) {
                        return false
                    }
                }
                return
            }
            var aDomNext = aDom.next().get(0);
            if (!$(aDomNext).is(":visible")) {
                var ulDom = $(aDomNext.parentNode).closest("ul");
                if (isMin && ulDom.hasClass("nav-list")) {
                    return
                }
                ulDom.find("> .open > .submenu").each(function () {
                    if (this != aDomNext && !$(this.parentNode).hasClass("active")) {
                        $(this).slideUp(200).parent().removeClass("open")
                    }
                })
            } else {
            }
            if (isMin && $(aDomNext.parentNode.parentNode).hasClass("nav-list")) {
                return false
            }
            $(aDomNext).slideToggle(200).parent().toggleClass("open");
            return false
        })
    }
}


