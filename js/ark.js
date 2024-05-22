// the media container js
document.addEventListener('DOMContentLoaded', function() {
    const mediaContainer = document.querySelector('.media-container');
    const video = mediaContainer.querySelector('.media-video');
    const image = mediaContainer.querySelector('.media-image');
    const mediaInfo = mediaContainer.querySelector('.media-info');

    mediaContainer.addEventListener('mouseover', () => {
        image.style.display = 'none';
        mediaInfo.style.opacity = '0';
        video.style.display = 'block';
        video.play();
    });

    mediaContainer.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.display = 'none';
        image.style.display = 'block';
        mediaInfo.style.opacity = '1';
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const height = window.innerHeight;
        const fadeStart = height * 0.5;

        if (scrollTop >= fadeStart) {
            mediaContainer.style.opacity = 0;
            mediaContainer.style.transform = 'translateY(-20px)';
        } else {
            mediaContainer.style.opacity = 1;
            mediaContainer.style.transform = 'translateY(0)';
        }
    });
});
