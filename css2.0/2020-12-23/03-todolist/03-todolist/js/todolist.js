$(function() {
    //1.按下回车  把完整的数据 存储到本地存储里面
    //存储的数据格式：var todolist =  [{ title : ‘xxx’, done: false}]
    load();
    $("#title").on("keydown", function(event) {
        if (event.keyCode == 13) {
            //读取本地存储原来的数据
            var local = getDate();
            //把local数组进行更新数据  把最新的数据追加到local数组
            local.push({ title: $(this).val(), done: false })
                //把更新了的local数组要 存到本地存储
            $(this).val("");
            saveDate(local);
            //2.todolist 本地存储数据渲染加载
            load();
        }
    })

    //3.todolist 删除操作
    $("ol").on("click", "a", function() {
        //先获取本地存储的数据
        var data = getDate();
        // console.log(data);
        //修改数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        //保存到本地存储
        saveDate(data);
        //重新渲染页面
        load();
    })

    //4.todolist  正在进行和已经完成选择项操作
    $("ol,ul").on("click", "input", function() {
        //先获取本地存储的数据
        var data = getDate();
        //修改数据
        var index = $(this).siblings("a").attr("id");
        //data[?].done=?
        data[index].done = $(this).prop("checked");
        //保存到本地存储
        saveDate(data);
        //重新渲染页面
        load();
    })

    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            //本地存储里面的数据事字符串格式，需要转成对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    //保存本地存储的数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    //渲染加载数据
    function load() {
        //读取本地存储里面数据
        var data = getDate();
        //遍历整个数据
        //遍历数据之前,先清空ol里面内容
        $("ol,ul").empty();
        // $("ol").html("");
        var todoCount = 0, //正在进行
            doneCount = 0; //已经完成的个数
        $.each(data, function(i, ele) {
            if (ele.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked'> <p>" + ele.title + "</p><a href='javascript:;' id='" + i + "'></a></li>")
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + ele.title + "</p><a href='javascript:;' id='" + i + "'></a></li>")
                todoCount++;
            }

        })
    }
})