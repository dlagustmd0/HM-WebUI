$(() => {
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $videoWrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnClose = $(".btn-close");

    const $videoItem = $(".video-list li");

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", (e) => {
        const item = $(e.target);
        
        let videoLink = item.attr("data-link");
        videoLink += "?autoplay=1";
        $video.attr("src", videoLink);

        const videoTitle = item.text();
        $caption.text(videoTitle);

        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");

        console.log(videoLink);
    });

    // 닫기 버튼을 클릭했을 때
    $btnClose.on("click", (e) => {
        $dim.fadeOut();
        $videoWrap.removeClass("active");
        $video.attr("src", "");
    });

    // setTimeout(() => {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000);
});
