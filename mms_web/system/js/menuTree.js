/**
 * Created by Administrator on 2017/3/31.
 */
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
                        subInnerHtml = '<li><a href="#" class="dropdown-toggle"><i class="' + data[i]["icon"] + '"></i><span class="menu-text" id="' + data[i]["id"] + '">' + data[i]["title"] + ' </span><b class="arrow icon-caret-right"></b></a><ul class="submenu">';
                    } else {
                        subInnerHtml = '<li class="home"><a  href="javascript:void(0)" name="' + data[i]["url"] + '"  title="' + data[i]["title"] + '" class="iframeurl" id="' + data[i]["id"] + '"><i class="icon-double-angle-right"></i>' + data[i]["title"] + '</a></li><ul class="submenu">';
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
                else {

                    $("b").removeClass("arrow icon-caret-down");
                    $("b").addClass("arrow icon-caret-right");

                    var liDom = $(aDomNext.parentNode).closest("li");
                    liDom.find("b").each(function () {
                        $(this).removeClass("arrow icon-caret-right");

                        $(this).toggleClass("arrow icon-caret-down");

                    })

                    ulDom.find("> .open > .submenu").each(function () {

                        if (this != aDomNext && !$(this.parentNode).hasClass("active")) {

                            $(this).slideUp(200).parent().removeClass("open");

                        }
                    })

                }

            }
            else {

                    $("b").removeClass("arrow icon-caret-down");
                    $("b").addClass("arrow icon-caret-right");

            }
            if (isMin && $(aDomNext.parentNode.parentNode).hasClass("nav-list")) {
                return false

            }



            $(aDomNext).slideToggle(200).parent().toggleClass("open");
            return false
        })
    }


}