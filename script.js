let currentImageIndex = 0;
const images = [];

function openModal(element) {
    const modal = document.getElementById('modal');
    const fullImage = document.getElementById('fullImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    currentImageIndex = Array.from(thumbnails).indexOf(element);
    images.length = 0; // Clear the images array
    thumbnails.forEach(img => images.push(img.src)); // Populate the images array

    fullImage.src = element.src;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Loop around the images
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    document.getElementById('fullImage').src = images[currentImageIndex];
}
