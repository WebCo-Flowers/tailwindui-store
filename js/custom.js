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
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fal fa-chevron-right'></i></button>",
        responsive: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $('.fresh-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fal fa-chevron-right'></i></button>",
        responsive: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "210px 0 0",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 447,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "150px 0 0",
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $('.products-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='far fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='far fa-chevron-right'></i></button>",
        responsive: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "210px 0 0",
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 447,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "150px 0 0",
                    slidesToShow: 1,
                }
            }
        ]
    });
    /* **** End Hero Slider **** */

    /* **** Product Slider **** */
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
    /* **** End Product Slider **** */
});