//consts

const numberButtons = document.querySelectorAll(".number")
const allClear = document.querySelector (".all-clear")
const del = document.querySelector(".del")
const operatorButtons = document.querySelectorAll(".operator")
const dot = document.querySelector(".dot")
const equals = document.querySelector(".equals")
const display = document.querySelector(".display")
let firstValue = 0;
let secondValue;

//functions

function displayNumber(number) {
    display.innerHTML = firstValue
}

//button event listeners

numberButtons.forEach (number => {
    number.addEventListener ("click", console.log (number.innerText))
})