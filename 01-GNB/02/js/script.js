$(function () {
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });
    $menu.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration);
    });

    // 마우스 휠을 조작했을 때
    $window.on("wheel", function (e) {
        // if (e.originalEvent.wheelDelta > 0) {
        //     // 휠을 올렸을 때
        //     $header.removeClass("hide");
        // } else {
        //     // 휠을 내렸을 때
        //     $header.addClass("hide");
        // }
        e.originalEvent.wheelDelta > 0 ? $header.addClass("hide") : $header.removeClass("hide");
    });
});
