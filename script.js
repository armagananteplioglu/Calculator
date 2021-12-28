const numberButtons = document.querySelectorAll(".number")
const allClear = document.querySelector (".all-clear")
const del = document.querySelector(".del")
const operatorButtons = document.querySelectorAll(".operator")
const dot = document.querySelector(".dot")
const equals = document.querySelector(".equals")
const display = document.querySelector(".display")
const allButtons = document.querySelectorAll("button")

//functions

// function clearAll () {
//     display.innerText = "";
// }



function equalButton() {
    display.innerText += eval(display)
}
//event listeners 

// numberButtons.forEach (button => {
//     button.addEventListener("click", (e) => {
//         display.innerText += e.target.innerText
//     })
// })

allButtons.forEach (a => {
    a.addEventListener ("click", (e) => {
        switch (e.target.innerText){
            case "AC":
                display.innerText = "";
                break;
            case "DEL":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Invalid Expression"
                }
                
                break;
            default:
                display.innerText += e.target.innerText
        }
        
    })
})

allClear.addEventListener ("click", clearAll)

del.addEventListener ("click", delLast)

equals.addEventListener("click", equalButton)