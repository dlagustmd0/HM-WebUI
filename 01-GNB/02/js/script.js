$(function () {
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $submenu.stop().slideDown(duration);
    });
    $menu.on("mouseleave", function () {
        $submenu.stop().slideUp(duration);
    });
});
