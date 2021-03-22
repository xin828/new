$(function() {
    setInterval(() => {
        $('.person1').toggleClass('dn');
        $('.person2').toggleClass('dn');
    }, 400);
    setTimeout(function() {
        $('.loading').hide();
        $('.anchor').fadeIn();
    }, 2500);
    $('.ans-btn').on('click', function() {
        $('.anchor').hide();
        $('.choice').fadeIn();
    })
    $('.manner ul li').on('click', function() {
        $('.choice-pop').show();
    })
    $('.pop').on('click', function() {
        $('.choice-pop').hide();
    });
    $('.queren').on('click', function() {
        $('.choice').hide();
        $('.scan').show();
    })
    $('.btn1').on('click', function() {
        $('.scan').hide();
        $('.choice').show();
    })
})