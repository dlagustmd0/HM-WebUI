$(() => {
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $videoWrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnClose = $(".btn-close");

    const $videoItem = $(".video-list li");

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", (e) => {
        const videoLink = $(e.target).attr("data-link");
        // const videoLink = $(e.target).data("link");
        $video.attr("src", videoLink);

        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");

        console.log(videoLink);
    });

    // 닫기 버튼을 클릭했을 때
    $btnClose.on("click", (e) => {
        $dim.fadeOut();
        $videoWrap.removeClass("active");
    });

    // setTimeout(() => {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000);
});
