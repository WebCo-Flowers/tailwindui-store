$(document).ready(function () {
    /* **** Add Remove Class **** */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("show");
        $(".navbar-nav").toggleClass("show");
        $("body").toggleClass("add-fix");
    });
    /* **** End Add Remove Class **** */

    /* **** Hero Slider **** */
    $(".hero-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        cssEase: "linear",
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fal fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fal fa-chevron-right'></i></button>",
        responsive: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                },
            },
        ],
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $(".fresh-slider").slick({
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
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "210px 0 0",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 447,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "150px 0 0",
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* **** End Hero Slider **** */

    /* **** Hero Slider **** */
    $(".products-slider").slick({
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
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "210px 0 0",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 447,
                settings: {
                    centerMode: true,
                    arrows: false,
                    centerPadding: "150px 0 0",
                    slidesToShow: 1,
                },
            },
        ],
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

    /* ***** Quantity Inputs **** */
    $(".quantity").on("click", ".plus", function (e) {
        let $input = $(this).prev("input.qty");
        let val = parseInt($input.val());
        $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
        let $input = $(this).next("input.qty");
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val(val - 1).change();
        }
    });
    /* ***** End Quantity Inputs **** */

    /* **** Fix Header **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 218) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });
    /* **** End Fix Header **** */

    /* **** Fix Header **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 164) {
            $(".top-head").addClass("top");
        } else {
            $(".top-head").removeClass("top");
        }
    });
    /* **** End Fix Header **** */

    /* **** Wizard **** */
    $(document).on("click", ".next-step", function () {
        var dataNext = $(this).data("next");
        step(`${dataNext}`);
    });

    function step(nextStep) {
        $(".step-block").each(function () {
            $(this).addClass("hidden");
        });
        $(".steps-link").each(function () {
            $(this).removeClass("current");
        });
        $(`.step-block[data-section=${nextStep}]`).removeClass("hidden");
        $(`.steps-link[data-navbar=${nextStep}]`).addClass("current");
    }
    /* **** Wizard **** */

    document.querySelectorAll(".accordion-header").forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            content.classList.toggle("show");
        });
    });

    /* **** Add Remove Class **** * /
    
    /* **** End Add Remove Class **** */
    $(".accordion-header").click(function () {
        $(this).toggleClass("show");
    });

    /* **** Tabs **** */
    let tabsContainer = document.querySelector("#tabs");
    let tabTogglers = tabsContainer.querySelectorAll("#tabs a");
    console.log(tabTogglers);
    tabTogglers.forEach(function (toggler) {
        toggler.addEventListener("click", function (e) {
            e.preventDefault();
            let tabName = this.getAttribute("href");
            let tabContents = document.querySelector("#tab-contents");
            for (let i = 0; i < tabContents.children.length; i++) {
                tabTogglers[i].parentElement.classList.remove("border-darker-foliage", "text-darker-foliage", "border-transparent");
                tabContents.children[i].classList.remove("hidden");
                if ("#" + tabContents.children[i].id === tabName) {
                    continue;
                }
                tabContents.children[i].classList.add("hidden");
            }
            e.target.parentElement.classList.add("border-darker-foliage", "text-darker-foliage");
        });
    });
    /* **** End Tabs **** */
});
