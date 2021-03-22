$(function() {
    //节流阀  互斥锁
    var flag = true;
    //1.显示隐藏电梯导航
    var toolTop = $(".recommend").offset().top;
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
        // 3.页面滚动到某个内容区域,左侧电梯导航小li相应添加或者删除current类名
        if (flag) {
            $(".floor .w").each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    }

    $(window).scroll(function() {
        toggleTool();
    });
    //2.点击电梯导航页面可以滚动到相应的内容区域
    $(".fixedtool li").click(function() {
        flag = false;
        //当我们每次点击li  就要计算出页面要去往的位置
        //选出对应索引号的内容区域  计算他们offset().top
        var current = $(".floor .w").eq($(this).index()).offset().top;
        //页面动画效果
        $("body,html").stop().animate({
            scrollTop: current
        }, function() {
            flag = true;
        });
        //点击之后  让当前的小li 添加current 类名  兄弟移除类名
        $(this).addClass("current").siblings().removeClass("current");
    })
});