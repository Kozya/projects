const modal = document.querySelector(".modal"),
    receive = document.getElementById("receive"),
    choose = document.getElementById("choose"),
    heading = document.querySelector("h2"),
    closeBtn = document.querySelector(".close"),
    text = document.querySelector("textarea"),
    nameInput = document.querySelector(".contactform_name");


nameInput.addEventListener("input", textName);
receive.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
choose.addEventListener("click", changeHeading);


function changeHeading() {
    heading.textContent = "Все выключено";
}
function showModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function textName() {
    let nameUser = nameInput.value;
    text.textContent = `Меня зовут ${nameUser} и я хочу спросить:`;

}