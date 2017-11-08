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