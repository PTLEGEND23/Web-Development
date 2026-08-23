const screen = document.getElementById("screen");

const allclear = document.getElementById("allclear");
allclear.addEventListener("click", function () {
    screen.textContent = "";
});

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", function () {
    screen.textContent = screen.textContent.slice(0, -1);
});

let firstNumber = "";
let operator = "";
let secondNumber = "";
let operatorClicked = false;
let justCalculated = false;

const num = document.querySelectorAll(".num");
num.forEach(function (button) {
    button.addEventListener("click", function () {
        if (justCalculated === true) {
            screen.textContent = "";
            firstNumber = "";
            justCalculated = false;
        }
        if (operatorClicked == false) {
            firstNumber += button.textContent;
        }
        else {
            secondNumber += button.textContent;
        }
        screen.textContent += button.textContent;
    });
});

const op = document.querySelectorAll(".operator");
op.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === "=") {
            let num1 = parseFloat(firstNumber);
            let num2 = parseFloat(secondNumber);
            let result;
            justCalculated = true;
            if (operator === "+")
                result = num1 + num2;
            else if (operator === "-")
                result = num1 - num2;
            else if (operator === "*")
                result = num1 * num2;
            else
                result = num1 / num2;
            screen.textContent = result;
            firstNumber = result;
            operator = "";
            secondNumber = "";
            operatorClicked = false;
            justCalculated = true;
        }
        else {
            operator = button.textContent;
            operatorClicked = true;
            justCalculated = false;
            screen.textContent += button.textContent;
        }
    });
});
