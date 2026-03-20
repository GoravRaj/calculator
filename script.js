const userInput = document.querySelector("#user-input");
const btnContainer = document.querySelector(".btns-container");

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b === 0 ? "Nope!" : a / b,
    "%": (a, b) => a % b,
};

// State Variables
let firstNum = "";
let secondNum = "";
let currentOp = null;
let shouldReset = false;


function handleInput(val) {
    // Handle Numbers and Decimals
    if (!isNaN(val) || val === ".") {
        const activeNum = currentOp ? secondNum : firstNum;
        if (val === "." && activeNum.includes(".")) return; // prevents 5..5

        if (!currentOp) {
            // If we just hit '=', start a new number
            if (shouldReset) {
                firstNum = val;
                shouldReset = false;
            } else {
                firstNum += val;
            }
        } else {
            secondNum += val;
        }

    } else if (val in operations) {
        if (firstNum && currentOp && secondNum) {
            firstNum = String(operate(currentOp, firstNum, secondNum));
            secondNum = "";
        }
        if (firstNum) {
            currentOp = val;
            shouldReset = false; 
        }
    }


    else if (val === "=" || val === "Enter") {
        if (firstNum && currentOp && secondNum) {
            firstNum = String(operate(currentOp, firstNum, secondNum));
            secondNum = "";
            currentOp = null;
            shouldReset = true;
        }
    }

    // Update Display
    let displayString = firstNum || "0";
    if (currentOp) displayString += ` ${currentOp}`;
    if (secondNum) displayString += ` ${secondNum}`;
    userInput.value = displayString;
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
    // Map 'Enter' to '=' and prevent default browser behavior
    if (e.key === "Enter") e.preventDefault();
    handleInput(e.key);
});
