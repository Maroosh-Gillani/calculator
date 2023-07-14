document.addEventListener('DOMContentLoaded', function () {

    const screen = document.querySelector('.screen');
    const numberButtons = document.querySelectorAll('.num');
    const operatorButtons = document.querySelectorAll('.op');
    const equalButton = document.querySelector('.equalButton');
    const clearButton = document.querySelector('.clearButton');

    let selectedOperator = '';

    let shouldEvaluate = false;

    // Handle number button clicking
    numberButtons.forEach(numberButton => {
        numberButton.addEventListener('click', function () {
            console.log(this.value);
            screen.textContent += this.value;
        });
    });

    function evaluate() {
        const expression = screen.textContent;
        const splitIndex = expression.lastIndexOf(selectedOperator);

        // Split the expression into firstNumber and secondNumber
        const firstNumber = expression.slice(0, splitIndex);
        const secondNumber = expression.slice(splitIndex + 1);

        let result;

        if (selectedOperator === '-') {
            result = subtract(parseFloat(firstNumber), parseFloat(secondNumber));
        } 
        else {
            result = operate(parseFloat(firstNumber), selectedOperator, parseFloat(secondNumber));
        }

        screen.textContent = result;
        shouldEvaluate = false;
    }


    // Handle operator button clicking
    operatorButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', function () {
            if (shouldEvaluate) {
                evaluate();
            }

            const lastChar = screen.textContent.slice(-1);
            const isDigit = /\d/.test(lastChar);

            if (isDigit) {
                selectedOperator = this.value;
                screen.textContent += this.value;

                // Enable equal button again
                equalButton.disabled = false;

                shouldEvaluate = true;
            }
        });
    });

    // Handle equal button clicking
    equalButton.addEventListener('click', function () {
        evaluate();
        selectedOperator = '';
    });

    // Handle clear button clicking
    clearButton.addEventListener('click', function () {
        screen.textContent = '';
        selectedOperator = '';
        shouldEvaluate = false;
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