$(document).ready(function () {
    /* **** Add Remove Class **** */
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("show");
        $("header .navbar-nav").toggleClass("show");
        $("body").toggleClass("add-fix");
    });
    /* **** End Add Remove Class **** */
});