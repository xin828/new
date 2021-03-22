var item = document.querySelectorAll('.item');
var pollow = document.querySelectorAll('.pillow div');
for (var i = 0; i < pollow.length; i++) {
    pollow[i].setAttribute('index', i);
    pollow[i].onclick = function() {
        for (var j = 0; j < pollow.length; j++) {
            pollow[j].style.borderLeft = 'transparent 6px solid';
            item[j].style.display = 'none';
        }
        item[this.getAttribute('index')].style.display = 'block';
        this.style.borderLeft = '6px solid #998779';
    }
}

var btn = document.querySelector('.btn');
var block = document.querySelector('.blocks');
var lis = document.querySelectorAll('.item li');
btn.onclick = function() {
    block.style.display = 'none';
}
for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
        block.style.display = 'block';
    }
}