console.log("page loaded...");
function pauseVideo(video) {
    video.pause();
    video.currentTime = 0;
}
function playVideo(video) {
    video.play();
}