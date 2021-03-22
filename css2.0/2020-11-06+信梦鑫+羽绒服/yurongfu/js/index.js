// 适配pc端
getChange();
window.onresize = getChange;

function getChange() {
    var htmlDom = document.documentElement; // 获取html
    var winW = document.body.clientWidth; //获取屏幕的宽度
    if (winW > 1920) {
        winW = 1920;
    } else if (winW < 1100) {
        //1100可以根据实际情况下修改
        winW = 1100;
    }
    // html字体大小=屏幕宽度/划分的份数
    window.offWidth = winW / 1920 * 100;
    document.body.style.opacity = 1;
    htmlDom.style.fontSize = offWidth + 'px';
}