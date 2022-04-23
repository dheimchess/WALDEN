$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        initialSlide: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        variableWidth: true
    });

    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__link').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    })
});

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const navText1 = document.querySelector('.navigation__text:nth-of-type(1)');
    const navText2 = document.querySelector('.navigation__text:nth-of-type(2)');
    const navText3 = document.querySelector('.navigation__text:nth-of-type(3)');
    const navText4 = document.querySelector('.navigation__text:nth-of-type(4)');
    const navText5 = document.querySelector('.navigation__text:nth-of-type(5)');
    const circle = document.querySelector('.circle');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;

        if (scrollTop === 0){

            header.classList.remove('header_active');
            navText1.classList.remove('navigation__text_active');
            navText2.classList.remove('navigation__text_active');
            navText3.classList.remove('navigation__text_active');
            navText4.classList.remove('navigation__text_active');
            navText5.classList.remove('navigation__text_active');
            circle.classList.remove('circle_active');

        } else {

            header.classList.add('header_active');
            navText1.classList.add('navigation__text_active');
            navText2.classList.add('navigation__text_active');
            navText3.classList.add('navigation__text_active');
            navText4.classList.add('navigation__text_active');
            navText5.classList.add('navigation__text_active');
            circle.classList.add('circle_active');
            
        }
    });
});