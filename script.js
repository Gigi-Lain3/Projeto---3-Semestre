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

// java do navegador das imagens 
var radio = document.querySelector('.manual-btn');
var cont = 1

document.getElementById('radio1').checked = true; 

setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 3){ 
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true;
}