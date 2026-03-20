const userInput = document.querySelector("#user-input");
const btnContainer = document.querySelector(".btns-container");

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b === 0 ? "Nope!" : a / b,
    "%": (a, b) => a % b,
};




function handleInput(val) {
    userInput.value = val;
}



function operate(op, a, b) {
    const result = operations[op](Number(a), Number(b));
    return result;
}


btnContainer.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    handleInput(e.target.innerText);
});

window.addEventListener("keydown", (e) => {
    handleInput(e.key);
});

console.log(operate("/", 1, 0));