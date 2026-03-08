const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "Nope!" : a / b;

const operators = ["+", "-", "/", "*", "%"];

const userInput = document.querySelector("#user-input");
const btnContainer = document.querySelector(".btns-container");




function updateDisplay(val) {
    if(operators.includes(val) || Number(val)) userInput.value += val;
}



btnContainer.addEventListener("click", (e) => {
    updateDisplay(e.target.textContent); 
});




window.addEventListener("keydown", (e) => {
    updateDisplay(e.key);
});


