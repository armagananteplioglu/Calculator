

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
let computationResult;

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

function clear () {
    newValue = "";
    oldValue = "";
    firstValue = "";
    secondValue = "";
    computeOperator = "";
    display.textContent = "";
    computeOperator = "";
    computationResult = "";
}

function displayCleaner() {
    newValue = "";
    oldValue = "";
}

function compute(computeOperator) {
    if (firstValue === undefined && secondValue === undefined) {
        firstValue = display.textContent;
        display.textContent = "";
        displayCleaner();
    }

    else if (firstValue !== undefined) {
        display.textContent = "";
        displayCleaner();
        equal();
    }
}

function equal () {
    if (firstValue !== undefined) {
        if (computeOperator === "+") {
            secondValue = display.textContent;
            computationResult = parseInt(firstValue) + parseInt(secondValue);
            display.textContent = computationResult;
            firstValue = computationResult;            
        }
    }

        else if (computeOperator === "-") {
            secondValue = display.textContent;
            computationResult = parseInt(firstValue) - parseInt(secondValue);
            display.textContent = computationResult;
            firstValue = computationResult;
    }

        else if (computeOperator === "*") {
            secondValue = display.textContent;
            computationResult = parseInt(firstValue) * parseInt(secondValue);
            display.textContent = computationResult;
            firstValue = computationResult;
    }

        else if (computeOperator === "÷") {
            secondValue = display.textContent;
            computationResult = parseInt(firstValue) / parseInt(secondValue);
            display.textContent = computationResult;
            firstValue = computationResult;
    }
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