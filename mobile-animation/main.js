const startHeaderImage = document.querySelector(".start-header-block");
const headerTagline = document.querySelector(".start-header-tagline");
const startHeaderIconNew = document.querySelector(".start-header-icon-new");
const startTeaProduct = document.querySelector(".start-tea");
const startStrawbery = document.querySelector(".start-strawbery");
const startStrawberyTop = document.querySelector(".start-strawbery-2");
const startMint = document.querySelector(".start-mint-1");
const startMintFooter = document.querySelector(".start-mint-2");
const startSeedTop = document.querySelector(".start-seed-2");
const startSeedBottom = document.querySelector(".start-seed-1");
const startArrowLeft = document.querySelector(".start-arrow-left");
const startArrowRight = document.querySelector(".start-arrow-right");
const btn = document.querySelector(".start-btn");
const startPepermint = document.querySelector("#start-pepermint");


const contentContainer = document.querySelector("#content");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const headerBlock = document.querySelector(".header-block");
const headerImage = document.querySelector(".header-img");
const headerIconNew = document.querySelector(".header-icon-new");
const teaProduct = document.querySelector(".tea");
const teaElementTop = document.querySelector(".tea-element-top");
const elementTop = document.querySelector(".element-top");
const teaElementBottom = document.querySelector(".tea-element-bottom");
const elementBottom = document.querySelector(".mint-2");
const smallElementRightTop = document.querySelector(".seed-2");
const smallElementRightBottom = document.querySelector(".seed-1");
const petalLeftBottom = document.querySelector(".petal-left-bottom");
const elementTopRaspberry = document.querySelector(".raspberry");
const teaSlide = document.querySelector(".tea-slide");

let currentIndex = 0;


arrowRight.addEventListener("click", right)
arrowLeft.addEventListener("click", left)

function changeHeader() {
    contentContainer.style.background = data[currentIndex].background
    headerIconNew.src = data[currentIndex].headerImgUrl;
    headerImage.className = data[currentIndex].classHeader;
    headerImage.src = data[currentIndex].headerBgUrl;
}

function hideOldElements() {
    teaElementTop.style.opacity = "0";
    elementTop.style.opacity = "0";
    teaElementBottom.style.opacity = "0";
    elementBottom.style.opacity = "0";
    smallElementRightTop.style.opacity = "0";
    smallElementRightBottom.style.opacity = "0";
    petalLeftBottom.style.opacity = "0";
    elementTopRaspberry.style.opacity = "0";
}

function showNewElements() {


    teaElementTop.src = data[currentIndex].teaElementTop;
    teaElementBottom.src = data[currentIndex].teaElementBottom;
    elementTop.src = data[currentIndex].elementTop;
    elementBottom.src = data[currentIndex].elementBottom;
    smallElementRightTop.src = data[currentIndex].smallElementRightTop;
    smallElementRightBottom.src = data[currentIndex].smallElementRightBottom;
    petalLeftBottom.src = data[currentIndex].smallElementLeftBottom;
    elementTopRaspberry.src = data[currentIndex].teaElementTop2;



    teaElementTop.className = data[currentIndex].classElementTop;
    teaElementBottom.className = data[currentIndex].classElementBottom;
    elementTop.className = data[currentIndex].classElementTop2;
    elementBottom.className = data[currentIndex].classElementBottom2;
    smallElementRightTop.className = data[currentIndex].classElementSmallRightTop;
    smallElementRightBottom.className = data[currentIndex].classElementSmallRightBottom;
    petalLeftBottom.className = data[currentIndex].classSmallElementLeftBottom;
    elementTopRaspberry.className = data[currentIndex].classTeaElementTop2;


}

function moveElementLeft() {
    teaProduct.src = data[currentIndex].product;
    teaProduct.className = "tea";
    setTimeout(() => {
        teaProduct.className = "tea-move-right";
        teaSlide.className = "tea-slide-left";
        setTimeout(() => {
            teaSlide.className = "none";
            teaSlide.src = data[currentIndex].product;
        }, 1000);
    }, 0);

}

function moveElementRight() {
    teaProduct.src = data[currentIndex].product;
    teaProduct.className = "tea"

    setTimeout(() => {
        teaProduct.className = "tea-move-left";
        teaSlide.className = "tea-slide-right";
        setTimeout(() => {
            teaSlide.className = "none";
            teaSlide.src = data[currentIndex].product;

        }, 1000);
    }, 0);

}


function right() {

    if (currentIndex === data.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;

    }

    changeHeader()
    hideOldElements()
    showNewElements()
    moveElementRight()

}

function left() {

    if (currentIndex < 1) {
        currentIndex = data.length - 1;
    } else {
        currentIndex--;
    }

    changeHeader()
    hideOldElements()
    showNewElements()
    moveElementLeft()

}

function change() {
    contentContainer.classList.remove("hidden");
    startPepermint.classList.add("hidden");
}

window.onload = function() {
    startStrawbery.style.width = "184%"
    startMint.style.width = "213%"
    startMintFooter.style.width = "35%"
    startStrawberyTop.style.width = "31%"
    startSeedTop.style.width = "11%"
    startSeedBottom.style.width = "9%"
    startHeaderImage.style.transform = "translate(0, 560px)";
    startTeaProduct.style.right = "0px";
    setTimeout(() => {
        startHeaderIconNew.style.top = "0px";
    }, 1500);
    setTimeout(() => {
        startArrowLeft.style.width = "10%";
        startArrowRight.style.width = "10%";
        setTimeout(() => {
            change()
        }, 500);

    }, 2000);
    setTimeout(() => {
        headerTagline.style.width = "8%";
        headerTagline.style.transform = "scale(9.2)";
    }, 1000);
    currentIndex = 2;

};



teaProduct.addEventListener("touchstart", touchStart, false)
teaProduct.addEventListener("touchmove", touchMove, false)

let x1 = null;
let y1 = null;


function touchStart(event) {
    const firstTouch = event.touches[0];

    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function touchMove(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xPosition = x2 - x1;
    let yPosition = y2 - y1;
    if (Math.abs(xPosition) > Math.abs(yPosition)) {
        if (xPosition > 0) {
            right();
        } else left();
    }
    x1 = null;
    y1 = null;
}