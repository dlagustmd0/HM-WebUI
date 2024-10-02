$(() => {
    // 대상을 변수에 저장
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");

    // 메뉴에 마우스가 들어왓을 때
    $menu.on("mouseenter", function () {
        $submenu.slideDown();
    });
    $menu.on("mouseleave", function () {
        $submenu.slideUp();
    });
});
