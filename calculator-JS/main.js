const poolWidth = document.querySelector("#option-1");
const poolLength = document.querySelector("#option-2");
const radio1 = document.querySelector("#radio-1");
const radio2 = document.querySelector("#radio-2");
const radio3 = document.querySelector("#radio-3");
const priceRol1 = document.querySelector("#Price01");
const priceRol2 = document.querySelector("#Price02");
const priceRol3 = document.querySelector("#Price03");
const LamelpriceRol1 = document.querySelector("#Price21");
const LamelpriceRol2 = document.querySelector("#Price22");
const LamelpriceRol3 = document.querySelector("#Price23");
const LamelpriceRol4 = document.querySelector("#Price24");
const LamelpriceRol5 = document.querySelector("#Price25");
const LamelpriceRol6 = document.querySelector("#Price26");
const LamelpriceRol7 = document.querySelector("#Price27");
const LamelpriceRol8 = document.querySelector("#Price28");
const mountpriceRol1 = document.querySelector("#Price32");
const mountpriceRol2 = document.querySelector("#Price31");
const mountpriceRol3 = document.querySelector("#Price33");
const calcRadio = document.querySelectorAll(".calc-radio");
const radioLamel = document.querySelectorAll("input[name='r2']");
const radioFastening = document.querySelectorAll("input[name='r3']");
const radioStand = document.querySelectorAll("input[name='r01']");
const equipment = document.querySelectorAll("input[name='cb1']");
const cost = document.querySelector(".cost");
const lamelradio1 = document.querySelector("#r11");
const lamelradio2 = document.querySelector("#r12");
const lamelradio3 = document.querySelector("#r13");
const lamelradio4 = document.querySelector("#r14");
const lamelradio5 = document.querySelector("#r15");
const lamelradio6 = document.querySelector("#r16");
const lamelradio7 = document.querySelector("#r17");
const lamelradio8 = document.querySelector("#r18");
const mountradio1 = document.querySelector("#r9");
const mountradio2 = document.querySelector("#r8");
const mountradio3 = document.querySelector("#r10");
const stand2 = document.querySelector("#r02");
const stand3 = document.querySelector("#r03");
const stand4 = document.querySelector("#r04");
const stand5 = document.querySelector("#r05");
const stand6 = document.querySelector("#r06");
const standPriceRol2 = document.querySelector("#Price102");
const standPriceRol3 = document.querySelector("#Price103");
const standPriceRol4 = document.querySelector("#Price104");
const standPriceRol5 = document.querySelector("#Price105");
const standPriceRol6 = document.querySelector("#Price106");


poolWidth.addEventListener('change', poolSize);
poolLength.addEventListener('change', poolValue);

radio1.addEventListener('change', radio);
radio2.addEventListener('change', radio);
radio3.addEventListener('change', radio);

let targetRadio2 = 0;
let targetRadio3 = 0;
let targetRadio5 = 0;
let poolWidthValue = 0;
let poolLengthValue = 0;
let targetRadio = 0;
let lamelResult = 0;
let targetRadio4 = 0;
let sumEquip = 0;
let valuePool = 0;
let size = 0;
let addSize;



function poolValue(ev) {

    poolLengthValue = poolLength.options[poolLength.selectedIndex].textContent;
    poolWidthValue = poolWidth.value;
    addSize = poolWidthValue + poolLengthValue;
    let size = dataPrice[addSize][0];

    radio1.setAttribute("value", size.motorManual);
    priceRol1.innerHTML = `${size.motorManual}`;
    radio2.setAttribute("value", size.motorMechanics);
    priceRol2.innerHTML = `${size.motorMechanics}`;
    radio3.setAttribute("value", size.motorSolar);
    priceRol3.innerHTML = `${size.motorSolar}`;

    lamelradio1.setAttribute("value", size.lamelradio1);
    LamelpriceRol1.innerHTML = `${size.lamelradio1}€ / пог.м`;

    lamelradio2.setAttribute("value", size.lamelradio2);
    LamelpriceRol2.innerHTML = `${size.lamelradio2}€ / пог.м`;

    lamelradio3.setAttribute("value", size.lamelradio3);
    LamelpriceRol3.innerHTML = `${size.lamelradio3}€ / пог.м`;

    lamelradio4.setAttribute("value", size.lamelradio4);
    LamelpriceRol4.innerHTML = `${size.lamelradio4}€ / пог.м`;

    lamelradio5.setAttribute("value", size.lamelradio5);
    LamelpriceRol5.innerHTML = `${size.lamelradio5}€ / пог.м`;

    lamelradio6.setAttribute("value", size.lamelradio6);
    LamelpriceRol6.innerHTML = `${size.lamelradio6}€ / пог.м`;

    lamelradio7.setAttribute("value", size.lamelradio7);
    LamelpriceRol7.innerHTML = `${size.lamelradio7}€ / пог.м`;

    lamelradio8.setAttribute("value", size.lamelradio8);
    LamelpriceRol8.innerHTML = `${size.lamelradio8}€ / пог.м`;

    stand2.setAttribute("value", size.stands);
    standPriceRol2.innerHTML = `${size.stands}€`;

    stand3.setAttribute("value", size.stands);
    standPriceRol3.innerHTML = `${size.stands}€`;

    stand4.setAttribute("value", size.stands);
    standPriceRol4.innerHTML = `${size.stands}€`;

    stand5.setAttribute("value", size.stands);
    standPriceRol5.innerHTML = `${size.stands}€`;

    stand6.setAttribute("value", size.stands);
    standPriceRol6.innerHTML = `${size.stands}€`;

    mountradio1.setAttribute("value", size.mountradio1);
    mountpriceRol1.innerHTML = `${size.mountradio1}€`;

    mountradio2.setAttribute("value", size.mountradio2);
    mountpriceRol2.innerHTML = `${size.mountradio2}€`;

    mountradio3.setAttribute("value", size.mountradio3);
    mountpriceRol3.innerHTML = `${size.mountradio3}€`;


}

function poolSize(ev) {

    poolLength.innerHTML = "<option disabled selected value=''>0 м</option>";
    let c = this.value, o;
    for (let i = 0; i < lengthObj[c].length; i++) {
        o = new Option(lengthObj[c][i], i, false, false);
        poolLength.append(o);
    }
}

function radio(event) {
    targetRadio = event.target.value;
    finalCost();

}

function calculateLamel() {

    for (let i = 0; i < radioLamel.length; i++) {
        radioLamel[i].addEventListener('change', () => {
            target = event.target;
            targetRadio2 = parseInt(event.target.value);
            lamelResult = Number(targetRadio2) * parseInt(poolLengthValue);
            finalCost();
        });
    }
}

function fastening() {


    for (let i = 0; i < radioFastening.length; i++) {
        radioFastening[i].addEventListener('change', () => {
            target = event.target;
            targetRadio3 = parseInt(event.target.value);
            finalCost();
        });
    }
}
function calculateStand() {


    for (let i = 0; i < radioStand.length; i++) {
        radioStand[i].addEventListener('change', () => {
            target = event.target;
            targetRadio5 = parseInt(event.target.value);
            finalCost();
        });
    }
}


function equipOption() {

    for (let i = 0; i < equipment.length; i++) {

        equipment[i].addEventListener('change', () => {
            target = event.target;
            targetRadio4 = parseInt(event.target.value);


            if (target.checked) {

                sumEquip += targetRadio4;

            }
            else {


                sumEquip -= targetRadio4;
            }

            finalCost();
        });
    }
}
function finalCost() {
    let sum = parseInt(targetRadio) + lamelResult + targetRadio3 + sumEquip + targetRadio5;
    cost.setAttribute("value", sum);

}

calculateLamel();
fastening();
equipOption();
calculateStand()



