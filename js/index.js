$(document).ready(function () {
    $('.img1').css('display', 'unset');
    $('.pg-1').css('display', 'unset');
    $('.vl-before').css('height', '150px');


    $('.title2').on('click', function () {
        $('.vl-before').css('height', '300px');
        $('.img2').fadeIn(1000);
        $('.img2').css('display', 'unset');
        $('.img1').css('display', 'none');
        $('.img3').css('display', 'none');
        $('.pg-2').css('display', 'unset');
        $('.pg-1').css('display', 'none');
        $('.pg-3').css('display', 'none');
    });
    $('.title3').on('click', function () {
        $('.vl-before').css('height', '450px');
        $('.img3').fadeIn(1000);
        $('.img3').css('display', 'unset');
        $('.img1').css('display', 'none');
        $('.img2').css('display', 'none');
        $('.pg-3').css('display', 'unset');
        $('.pg-1').css('display', 'none');
        $('.pg-2').css('display', 'none');
    });
    $('.title1').on('click', function () {
        $('.vl-before').css('height', '150px');
        $('.img1').fadeIn(1000);
        $('.img1').css('display', 'unset');
        $('.img2').css('display', 'none');
        $('.img3').css('display', 'none');
        $('.pg-1').css('display', 'unset');
        $('.pg-2').css('display', 'none');
        $('.pg-3').css('display', 'none');
    });

});

document.querySelector("#nav-toggle").addEventListener("click", function () {
    $(".overlay-menu").fadeToggle(200);
    var body = document.querySelector('body');
    body.classList.toggle('overflow');
    this.classList.toggle("active");
});