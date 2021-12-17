

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
let computeOperator;

//functions

function displayNumber(newValue) {
    if (oldValue == undefined) {
        display.textContent = parseInt(newValue);
        oldValue = newValue
        firstValue = oldValue
    }

    else {
        display.textContent = oldValue + newValue
        oldValue = oldValue + newValue
        firstValue = oldValue
    }
}

function clear () {
    newValue = "";
    oldValue = "";
    firstValue = "";
    secondValue = "";
    computeOperator = "";
    display.textContent = "";
    computeOperator = "";
}

function compute(computeOperator) {

    let computationResult;
    display.textContent = "";
    secondValue = display.textContent;
    if (computeOperator === "+") {
        computationResult = parseInt(firstValue) + parseInt(secondValue);
        display.textContent = computationResult;
        firstValue = computationResult;
    }
    else if (computeOperator === "-") {
        computationResult = parseInt(firstValue) - parseInt(secondValue);
        display.textContent = computationResult;
        firstValue = computationResult;
    }
    else if (computeOperator === "*") {
        computationResult = parseInt(firstValue) * parseInt(secondValue);
        display.textContent = computationResult;
        firstValue = computationResult;
    }
    else if (computeOperator === "÷") {
        computationResult = parseInt(firstValue) / parseInt(secondValue);
        display.textContent = computationResult;
        firstValue = computationResult;
    }


    // if (firstValue === undefined && secondValue === undefined) {
    //     firstValue = display.textContent;
    //     display.textContent = ""
    // }
    // else if (firstValue !== undefined) {
    //     secondValue = display.textContent;
    //     if (computeOperator === "+") {
    //         computationResult = parseInt(firstValue) + parseInt(secondValue);
    //         display.textContent = computationResult;
    //         firstValue = computationResult;
    //     }
    //     else if (computeOperator === "-") {
    //         computationResult = parseInt(firstValue) - parseInt(secondValue);
    //         display.textContent = computationResult;
    //         firstValue = computationResult;
    //     }
    //     else if (computeOperator === "*") {
    //         computationResult = parseInt(firstValue) * parseInt(secondValue);
    //         display.textContent = computationResult;
    //         firstValue = computationResult;
    //     }
    //     else if (computeOperator === "÷") {
    //         computationResult = parseInt(firstValue) / parseInt(secondValue);
    //         display.textContent = computationResult;
    //         firstValue = computationResult;
    //     }
    // }
    // firstValue = parseInt(display.textContent);
    // display.textContent = ""
    // console.log(`first value = ${firstValue}`)
    // console.log(`second value = ${secondValue}`)
    // newValue = "";
    // oldValue = "";
}

function equal (firstValue, secondValue, computeOperator) {
}

//button event listeners

numberButtons.forEach (number => {
    number.addEventListener ("click", () => {
        newValue = number.innerHTML
        displayNumber(newValue)
    })
})

allClear.addEventListener ("click", clear)

operatorButtons.forEach(button => {
    button.addEventListener ("click", () => {
        computeOperator = button.innerHTML
        compute(computeOperator)
    })
})

equals.addEventListener("click", equal)