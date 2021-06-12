
let arrey = ["img/Dogs_Autumn.jpg","img/Dogs_Three_3_Rabbit.jpg","img/Dogs_White_Funny_Run.jpg"]
console.log(arrey);


let slideIndex = 1;
showSlides(slideIndex);

function showSlides (n){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].classList = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides (n){
    showSlides(slideIndex += n);
}

function positionSlide (n){
    showSlides(slideIndex = n);
}