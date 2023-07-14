document.addEventListener('DOMContentLoaded', function () {

    const screen = document.querySelector('.screen');
    const numberButtons = document.querySelectorAll('.num');
    const operatorButtons = document.querySelectorAll('.op');
    const equalButton = document.querySelector('.equalButton');
    let firstNumber = '';
    let selectedOperator = '';

    // Handle number button clicking
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', function () {
            console.log(this.value);
            screen.textContent += this.value;
        });
    });

    // Handle operator button clicking
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function () {
            firstNumber = screen.textContent; // Take the numbers from before the operator
            selectedOperator = this.value;
            screen.textContent += this.value;

            // Disable operators if one has already been selected on screen
            operatorButtons.forEach(button => {
                button.disabled = true;
            });

        });
    });

    // Handle equal button clicking
    equalButton.addEventListener('click', function () {
        const secondNumber = screen.textContent.slice(firstNumber.length + 1);
        const result = operate(parseFloat(firstNumber), selectedOperator, parseFloat(secondNumber));

        screen.textContent = result;
        selectedOperator = '';

        // Enable operations again
        operatorButtons.forEach(button => {
            button.disabled = false;
        });
    });


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
        return a / b;
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
});