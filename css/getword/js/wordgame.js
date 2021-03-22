$(function () {
         init();
         getTxt();
         $("#beginGame").click(function (event) {
             if (event.button == 0) {
                 $(".menu").css("visibility", "hidden");
                 $("#logo").css("visibility", "hidden");
                 $("#tim").css("visibility", "hidden");
                 newWord();
                 addKeydownEvent();
            }
        });

       
    });
    
    //初始化
    function init() {
        $("#txtletterCount").blur(function () {
            var count = $(this).val();
            if (!isInteger(count)) {
                $("#txtletterCount").val("1");
            }
        });
    
        $("#txtNewLetterTime").blur(function () {
            var time = $(this).val();
            if (!isInteger(time)) {
                $("#txtNewLetterTime").val("2000");
            }
        });
    }
   
    //正则验证
    function isInteger(obj) {
        var reg = /^\d+$/;
        if (!reg.test(obj)) {
            alert("请输入正整数");
            return false;
        }
        else {
            return true;
        }
    }
    
    //产生count个随机数
    function numbers(count, length) {
        var ok = 1;
        r = new Array(count);
        for (var i = 1; i <= count; i++) {
            r[i] = Math.round(Math.random() * (length - 1)) + 1;
        }
        for (var i = count; i >= 1; i--) {
            for (var j = count; j >= 1; j--) {
                if ((i != j) && (r[i] == r[j])) ok = 0;
            }
        }
        if (ok) {
            return r;
        }
        else numbers(count, length);
    }
    
    
    
    
    function drawWord(word, chinese) {
        var letterDiv = "";
        var length = word.length;
        var count = $("#txtletterCount").val();
    
        if (count > length) {
            count = length;
        }
    
        var random;
        var letterWidth = 200 / word.length - 3;
    
    
    
        //可优化，如果隐藏的随机数大于单词长度一半则生成显示的随机数length-count
        if (count > (length / 2)) {
            if (count == length) {
                // alert("count_" + count + "__length_" + length);
                $.each(word, function (key, value) {
                    letterDiv += "<div   style='width:" + parseInt(letterWidth) + "px; border:1px solid black; float:left;' name='hide'>" + value + "</div>";
                });
            }
            else {
                //alert("count_" + count + "__length_" + length);
                random = numbers(length - count, length);
                $.each(word, function (key, value) {
                    var index = $.inArray(key + 1, random);
                    //alert(index)
                    if (index != -1) {
                        letterDiv += "<div   style='width:" + parseInt(letterWidth) + "px; border:1px solid black; float:left;' name='show'>" + value + "</div>";
    
                    }
                    else {
                        letterDiv += "<div   style='width:" + parseInt(letterWidth) + "px; border:1px solid black; float:left;' name='hide'>" + value + "</div>";
    
                    }
              });
           }
   
       }
       else {
           //alert("count_" + count + "__length_" + length);
           random = numbers(count, length);
           $.each(word, function (key, value) {
               var index = $.inArray(key + 1, random);
               //alert(index)
               if (index != -1) {
                   letterDiv += "<div   style='width:" + parseInt(letterWidth) + "px; border:1px solid black; float:left;' name='hide'>" + value + "</div>";
               }
               else {
                   letterDiv += "<div   style='width:" + parseInt(letterWidth) + "px; border:1px solid black; float:left;' name='show'>" + value + "</div>";
               }
           });
       }
   
   
       var row = $('<div name="row" style="height:22px; position:absolute; top:0px; left:0px; " top="0"><div name="word">' + letterDiv + '</div><div name="chinese">' + chinese + '</div></div>');
       $("#screen").append(row);
   
       $("div[name='hide']").hide(1000, function () {
       });
   
   }
   
   
   var eandcs; //english and chinese
   var len; //单词个数
   //取txt
   function getTxt() {
       $.get('words.txt', function (d) {
           eandcs = d.split(')');
           len = $(eandcs).size() - 1;
       });
   }
   
   
   
   //新单词
   function newWord() {
       var interval; //调度器对象。
       var i = 0;
       //var len;
   
       var word;
       var chinese;
   
   
       // alert("长度_" + len)
       var newLetterTime = parseInt($("#txtNewLetterTime").val());
   
       interval = setInterval(function () {
           word = eandcs[i].split('(')[0].toLowerCase();
           //alert("英文_" + word);
           chinese = eandcs[i].split('(')[1];
           //alert("中文_" + chinese);
           var rows = $("div[name='row']");
           var top;
           drawWord(word, chinese);
   
           $.each(rows, function (key, value) {
               top = parseInt($(value).attr("top"));
               // alert("top" + key +"  "+top);
               $(value).attr("top", top + 22);
               $(value).css("top", parseInt(top + 22) + "px");
               if (top > 470) {
                   clearInterval(interval);
                   $("div[name='row']").remove();
                   alert("game over");
                   $(".menu").css("visibility", "visible");
                   $("#logo").css("visibility", "visible");
               }
           });
   
           i++;
           //alert("i_"+i);
           if (i >= len) {
               //alert("完成所有的单词");
               i = 0;
           }
   
       }, newLetterTime);
   }
   
   
   function addKeydownEvent() {
   
       $("html").keydown(function (event) {
   
           var realkey = String.fromCharCode(event.keyCode).toLowerCase();
   
           var words = $("div[name='word']");
           $.each(words, function (key, value) {
               // alert(key + "_" + value);
               if (key != 0) {
                   return;
               }
               else {
   
                   var letterHide = $(value).find("div[name='hide']");
                   var l = $(letterHide).size();
                   var letter = new Array(l);
                   $.each(letterHide, function (key1, value1) {
                       // var letter = $(this).text();
                       if (realkey == $(value1).text()) {
                           $(value1).attr("name", "show");
                         $(value1).show(100, function () {
                             //alert("what_" + $(value).find("div[name='hide']"))size();
                             if ($(value).find("div[name='hide']").size() == 0) {
                                 $(value).parent().hide(100, function () {
                                     $(value).parent().remove();
                                  });
                            }
                             else {
 
                             }
                         });
                     }
                 });
             }
         });
      });
   }