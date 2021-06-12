const searcIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search");
const btn = document.querySelector(".btn");
const moreText = document.querySelectorAll(".more-text");
const textLineArr = document.querySelectorAll(".text-line-item");
const textArr = document.querySelectorAll(".main-text");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-item");
const slidesMark = document.querySelectorAll(".slider-line-top");
const mobileArrow = document.querySelector(".mobile-arrow");
const mobileBlock = document.querySelector(".block-right");
let currentIndex = 0;

searcIcon.addEventListener("click", showOrHideSearchInput);
btn.addEventListener("click", showText);
arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);
mobileArrow.addEventListener("click", openMobileBlock);



function openMobileBlock() {
    mobileBlock.style.display = "block";
}

function slideRight() {

    slides[currentIndex].classList.remove("active-slide");
    slidesMark[currentIndex].classList.add("hidden");

    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;

    }
    slides[currentIndex].classList.add("active-slide");
    slidesMark[currentIndex].classList.remove("hidden");
}
function slideLeft() {
    slides[currentIndex].classList.remove("active-slide");
    slidesMark[currentIndex].classList.add("hidden");

    if (currentIndex < 1) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex--;
    }
    slides[currentIndex].classList.add("active-slide");
    slidesMark[currentIndex].classList.remove("hidden");
}


for (let i = 0; i < textLineArr.length; i++) {
    textLineArr[i].addEventListener("click", changeText);

}


function changeText(event) {

    const activeLine = document.querySelector(".active-line");
    activeLine.classList.remove("active-line");
    event.target.classList.add("active-line");

    textArr.forEach(element => {
        element.classList.add("hidden");
    });
    textArr[event.target.id].classList.remove("hidden");

    moreText.forEach(element => {
        element.classList.remove("active-small-text");
    });
    moreText[event.target.id].classList.add("active-small-text")

}

function showOrHideSearchInput() {
    searchInput.classList.toggle("show-input");
}
function showText() {
    const smallText = document.querySelector(".active-small-text")
    smallText.classList.toggle("hidden");
}

searchInput.addEventListener("input", searchText);

function searchText() {
    let value = this.value.trim();
    let textItems = document.querySelectorAll("p,b,h1")
    if (value != "") {
        textItems.forEach(element => {
            if (element.innerText.search(RegExp(value, "gi")) == -1) {
                element.innerHTML = element.innerText;
            } else {
                let str = element.innerText;
                element.innerHTML = markText(str, element.innerText.search(RegExp(value, "gi")), value.length)

            }
        });
    } else {
        textItems.forEach(element => {
            element.innerHTML = element.innerText;
        });

    }

}
function markText(string, pos, len) {
    return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);

}

