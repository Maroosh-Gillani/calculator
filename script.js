// These will probably come from query selector
let number1, operator, number2, displayValue;

// Basic Operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(num1, op, num2) {
    if (op == '+') {
        return add(num1, num2);
    }
    if (op == '-') {
        return subtract(num1, num2);
    }
    if (op == '*') {
        return multiply(num1, num2);
    }
    if (op == '/') {
        if (num2 == 0) {
            alert("Can't divide by 0.");
        }
        else {
            return divide(num1, num2);
        }
    }
}