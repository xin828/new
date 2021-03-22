var startbtn = document.querySelector(".start-btn");
var start = document.querySelector('.start');
var swiper = document.querySelector('.swiper-container');

startbtn.addEventListener('click', function() {
    start.style.display = 'none';
    swiper.classList.remove('dn');
})

$(function() {
    setTimeout(function() {
        $('.loading').hide();
        $('.start').fadeIn();
    }, 2000);
    $('.sure-btn').click(function() {
        $('.swiper-container').hide();
        $('.answer').fadeIn();
    })
})