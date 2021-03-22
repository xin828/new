window.onload = function() {
    var swiper = new Swiper('.swiper-container', {
        on: {
            slideChangeTransitionEnd: function() {
                document.querySelector('.animation').classList.remove('animation');              
                slides[this.activeIndex].classList.add('animation');
            },
        },
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        direction: 'vertical',
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    var slides = document.querySelectorAll('.swiper-slide');
}