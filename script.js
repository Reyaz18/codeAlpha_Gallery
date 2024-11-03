let currentImageIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;
       if (index >= totalImages) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = totalImages - 1;
    } else {
        currentImageIndex = index;
    }

    const offset = -currentImageIndex * 100;
    images.forEach(img => {
        img.style.transform = `translateX(${offset}%)`;
    });
}
function prevImage() {
    showImage(currentImageIndex - 1);
}
function nextImage() {
    showImage(currentImageIndex + 1);
}
showImage(currentImageIndex);
