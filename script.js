function scrollSlider(id, direction) {
    const slider = document.getElementById(id);
    const scrollAmount = 310;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function openLightbox(imgElement) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imgElement.src;
    lightbox.classList.add('active');
}


function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}


document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === this) {
        closeLightbox();
    }
});

