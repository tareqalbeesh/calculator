const display = document.querySelector(".display");

let currValue = ""

display.innerHTML = currValue;
let oldVlaue = null;
let operation = null;
let nextTypeClear = false
document.querySelector('#clear').addEventListener("click", () => {
    oldVlaue = null;
    operation = null;
    currValue = ""
    display.innerHTML = currValue;
})
document.querySelectorAll("#num-btn").forEach((item) => {
    item.addEventListener("click", () => {
        let value = item.innerHTML;
        if (nextTypeClear == true) {
            display.innerHTML = ""
            nextTypeClear = false
        }
        if (item.innerHTML == '.' && display.innerHTML.includes('.')) { }
        else
            display.innerHTML += value
    })
})
document.querySelector("#equal-btn").addEventListener("click", () => {
    if (oldVlaue != null && operation != null) {
        display.innerHTML = roundMe(operate(+oldVlaue, +display.innerHTML, operation))
        oldVlaue = null;
        operation = null;
    }

});
document.querySelectorAll("#operation-btn").forEach((item) => {
    item.addEventListener("click", () => {
        let op = item.value;
        if (oldVlaue == null) {
            if (op != '+/-') {

                oldVlaue = +display.innerHTML
                operation = op
                nextTypeClear = true
            }

            else {
                display.innerHTML = - +display.innerHTML
            }

        } else {

            if (op == '+/-') {

                display.innerHTML = - +display.innerHTML
                // oldVlaue = null;
                // operation = null;
            }
            else {
                display.innerHTML = roundMe(operate(+oldVlaue, +display.innerHTML, operation))
                oldVlaue = display.innerHTML
                operation = op;
                nextTypeClear = true

            }


        }
    })
})

function roundMe(number) {
    return Math.round(number * 100) / 100
}



function operate(num1, num2, operation) {
    switch (operation) {
        case "%":
            return num1 % num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        case "%":
            return num1 % num2;
        default:
            return -1
    }
}