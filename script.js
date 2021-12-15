//consts

const numberButtons = document.querySelectorAll(".number")
const allClear = document.querySelector (".all-clear")
const del = document.querySelector(".del")
const operatorButtons = document.querySelectorAll(".operator")
const dot = document.querySelector(".dot")
const equals = document.querySelector(".equals")
const display = document.querySelector(".display")
let newValue;
let oldValue;
let firstValue;
let secondValue;

//functions

function displayNumber(newValue) {
    if (oldValue == undefined) {
        display.textContent = parseInt(newValue);
        oldValue = newValue
    }

    else {
        display.textContent = oldValue + newValue
        oldValue = oldValue + newValue
    }
}

//button event listeners

numberButtons.forEach (number => {
    number.addEventListener ("click", () =>{
        newValue = number.innerHTML
        displayNumber(newValue)
    })
})