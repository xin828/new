//禁止页面拖拽
document.addEventListener("touchmove", function() {
    e.preventDefault();
}, {
    passive: false
});