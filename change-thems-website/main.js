const lightThemeInput = document.querySelectorAll(".light-theme");
const darkThemeInput = document.querySelectorAll(".dark-theme");
const grayThemeInput = document.querySelectorAll(".gray-theme");
const galleryLink = document.querySelectorAll(".gallery-link");
const mobileChoiceList = document.querySelector("#mobile-choice-list");
const modalCloseBtn = document.querySelector(".close");
const modalWindow = document.querySelector(".overlay");


const changeTheme = function (mainBg, color1, textColor, color2, navBg, color3, navBorder, color4) {
    document.documentElement.style.setProperty(mainBg, color1);
    document.documentElement.style.setProperty(textColor, color2);
    document.documentElement.style.setProperty(navBg, color3);
    document.documentElement.style.setProperty(navBorder, color4);

}
modalCloseBtn.addEventListener("click", closeModal);

mobileChoiceList.addEventListener("click", (event) => {
    const option = event.target.closest("[data-value]");
console.log(event.target);
    if (!option) {
       return       
    }
    debugger;
    const thameName = option.getAttribute("data-value")

    if (thameName == "light-theme") {
        changeTheme(
            '--main-bg-color', '#E2F1F8',
            '--text-color', '#0B0B0B',
            '--nav-bg-color', '#B0BEC5',
            '--nav-border-color', '#808E95'
        )

    }
    else if (thameName == "dark-theme") {
        changeTheme(
            '--main-bg-color', '#484848',
            '--text-color', '#FFFFFF',
            '--nav-bg-color', '#282828',
            '--nav-border-color', '#0B0B0B'
        )

    }
    else if (thameName == "gray-theme") {
        changeTheme(
            '--main-bg-color', '#A4A4A4',
            '--text-color', '#FFFFFF',
            '--nav-bg-color', '#757575',
            '--nav-border-color', '#494949'
        )

    }
},true)

for (let i = 0; i < lightThemeInput.length; i++) {
    lightThemeInput[i].addEventListener("click", changeTheme.bind(this,
        '--main-bg-color', '#E2F1F8',
        '--text-color', '#0B0B0B',
        '--nav-bg-color', '#B0BEC5',
        '--nav-border-color', '#808E95'
    ));
}
for (let i = 0; i < darkThemeInput.length; i++) {
    darkThemeInput[i].addEventListener("click", changeTheme.bind(this,
        '--main-bg-color', '#484848',
        '--text-color', '#FFFFFF',
        '--nav-bg-color', '#282828',
        '--nav-border-color', '#0B0B0B'
    ));

}
for (let i = 0; i < grayThemeInput.length; i++) {
    grayThemeInput[i].addEventListener("click", changeTheme.bind(this,
        '--main-bg-color', '#A4A4A4',
        '--text-color', '#FFFFFF',
        '--nav-bg-color', '#757575',
        '--nav-border-color', '#494949'
    ));

}

function openModal() {
    for (let i = 0; i < galleryLink.length; i++) {
        galleryLink[i].addEventListener("click", () => {
            modalWindow.classList.remove("hidden")
        })
    }
}
function closeModal() {
    modalWindow.classList.add("hidden");
}

openModal()