$(() => {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabContent = $(".tab-con-item");

    // 처음 세팅
    // $tabContent.eq(0).siblings().hide();
    tabAction(0);

    $tabMenu.on("click", function (e) {
        // a의 기본 동작막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();

        tabAction(tabIdx);
    });

    // 공동의 동작을 함수로 정의
    function tabAction(idx) {
        // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(idx).addClass("on");

        // 인덱스에 해당하는 $tabContent 보이기
        $tabContent.hide();
        $tabContent.eq(idx).show();
    }
});
