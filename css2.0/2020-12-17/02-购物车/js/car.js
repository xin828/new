$(function() {
    //1.全选 全不选功能模块
    //把全选按钮(checkall)的状态赋值给 三个小复选框（j-checkbox）就可以可
    //事件 可以用change
    $(".checkall").change(function() { //全选
        // console.log($(this).prop("checked"));
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            //添加类名 check-cart-item
            $(".cart-item").addClass("check-cart-item");
        } else {
            //移除样式
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });
    //2.当我们每次点击小的复选框按钮,改变全选按钮的状态
    $(".j-checkbox").change(function() {
        // if (被选中的小复选框的个数 == 3){
        //     就要选中全选按钮
        // }else {
        //     不要选中全选按钮
        // }
        // console.log($(".j-checkbox:checked").length);
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        if ($(this).prop("checked")) {
            //添加类名 check-cart-item
            $("this").parents(".cart-item").addClass("check-cart-item");
        } else {
            //移除样式
            $("this").parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    });
    //3.增减商品模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $(".increment").click(function() {
        //得到当前兄弟文本.itxt的值
        var num = $(this).siblings(".itxt").val();
        // console.log(num);
        num++;
        $(this).siblings(".itxt").val(num);
        //4.修改商品小计 每次点击+号，根据文本框的值 乘以 当前商品的价格  就是 商品的小计
        //获取当前商品的单价
        // var price = $(this).parent().parent().siblings(".p-price").text();
        var price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        //toFixed(2) 表示结果保留两位小数
        var p = (num * price).toFixed(2);
        //给商品小计赋值
        // $(this).parent().parent().siblings(".p-sum").text("￥" + p);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + p);
        getSum();
    });
    $(".decrement").click(function() {
        //得到当前兄弟文本.itxt的值
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        //4.修改商品小计 每次点击+号，根据文本框的值 乘以 当前商品的价格  就是 商品的小计
        //获取当前商品的单价
        var price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        //toFixed(2) 表示结果保留两位小数
        var p = (num * price).toFixed(2);
        //给商品小计赋值
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + p);
        getSum();
    });
    //4.修改商品小计 
    $(".itxt").keyup(function() {
        if (!(/^[0-9]{1,4}$/).test($(this).val())) {
            $(this).val("")
        }
    });

    var reg = /^\d{1,4}$/;
    $(".itxt").change(function() {
        //得到当前文本.itxt的值
        var num = $(this).val();
        if (num < 1) {
            return false;
        }
        //获取当前商品的单价
        var price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        //toFixed(2) 表示结果保留两位小数
        var p = (num * price).toFixed(2);
        //给商品小计赋值
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + p);
        getSum();
    });

    getSum();
    //5.计算总计和总数
    function getSum() {
        var count = 0, //总件数
            money = 0; //总金额
        $(".itxt").each(function(i, ele) {
            if ($(".j-checkbox").eq(i).prop("checked")) {
                count += parseInt($(ele).val());
            }
        });
        $(".amount-sum em").html(count);
        $(".p-sum").each(function(i, ele) {
            if ($(".j-checkbox").eq(i).prop("checked")) {
                money += parseFloat($(ele).text().substr(1));
            }

        })
        $(".price-sum em").html("¥" + money.toFixed(2));
    }

    // 3.删除商品模块
    //(1).商品后面的删除按钮
    $(".p-action a").click(function() {
            $(this).parents(".cart-item").remove();
            getSum();
        })
        //(2)删除选中的商品
    $(".remove-batch").click(function() {
            $(".j-checkbox:checked").parents(".cart-item").remove();
            getSum();
        })
        // (3)清空购物车 删除剩余全部商品
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })
});