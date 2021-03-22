$(function() {
    //1.按下回车   把完整的数据存储到本地存储里面
    //存储的数据格式:var todolist = [{ title : 'xxx', done:false }]
    $("#title").on("keydown", function(event) {
        if (event.keyCode == 13) {
            //读取本地存储原来的数据
            var local = getDate();
            //把local数组进行更新数据  把最新的数据追加到local数组
            local.push({ title: $(this).val(), done: false })
            console.log(local);
            //把更新了的local数组要存到本地存储
            // localStorage.setItem("todolist", JSON.stringify(local));
            saveDate(local);
            //2.todolist  本地存储数据渲染加载
        }
    })

    //读取本地存储的数据
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            //本地存储里面的数据是字符串格式,需要转成对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    //保存本地存储的数据
    function saveDate(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    load();

    //渲染加载数据
    function load() {
        //读取本地存储里面数据
        var data = getDate();
        console.log(data);
        //遍历整个数组
        $.each(data, function(i, ele) {
            console.log(ele);
        })
    }
})