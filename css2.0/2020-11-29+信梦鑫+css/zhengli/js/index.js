var lis = document.querySelectorAll('ul>li');
var boxs = document.querySelectorAll('.content .item');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            boxs[j].style.display = 'none';

        }
        this.className = 'point';
        boxs[this.getAttribute('index')].style.display = 'block';
    }
}