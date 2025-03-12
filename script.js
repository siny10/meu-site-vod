document.addEventListener("DOMContentLoaded", function () {
    const mainVideo = document.getElementById("main-video");
    const videoItems = document.querySelectorAll(".video-item, .sidebar ul li");

    videoItems.forEach(item => {
        item.addEventListener("click", function () {
            const videoUrl = this.getAttribute("data-video");
            if (videoUrl) {
                mainVideo.src = videoUrl;
            }
        });
    });
});
