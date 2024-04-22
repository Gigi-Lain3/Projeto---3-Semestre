let slideIndex = 0;

function showImage(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextImage() {
    slideIndex++;
    showImage(slideIndex);
}

function prevImage() {
    slideIndex--;
    showImage(slideIndex);
}

showImage(slideIndex);
