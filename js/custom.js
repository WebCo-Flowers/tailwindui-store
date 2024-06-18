$(document).ready(function () {
    /* **** Add Remove Class **** */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("show");
        $("header .navbar-nav").toggleClass("show");
        $("body").toggleClass("add-fix");
    });
    /* **** End Add Remove Class **** */

    /* **** Hero Slider **** */
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fal fa-chevron-right'></i></button>"
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $('.fresh-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fal fa-chevron-right'></i></button>"
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $('.products-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='far fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='far fa-chevron-right'></i></button>"
    });
    /* **** End Hero Slider **** */


    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        infinite: false,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        variableWidth: true,
    });

});