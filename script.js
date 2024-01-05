let firstOperand;
let secondOperand = '';
let operator = null;
let currentOperation = null;
let displayValue = '0';
let result = null;

const resultDisplay = document.querySelector('.result');
const expressionDisplay = document.querySelector('.expression');

const updateDisplay = (value) => {
    resultDisplay.textContent = value;
}
updateDisplay(displayValue);

const inputOperand = (value) => {
    // value = Number(value);
    if (resultDisplay.textContent == '0') {
        resultDisplay.textContent = '';
        resultDisplay.textContent += value;
        expressionDisplay.textContent += value;
        firstOperand = resultDisplay.textContent;
    }
    else if (resultDisplay.textContent != '0') {
        if (currentOperation == null) {
            expressionDisplay.textContent += value;
            resultDisplay.textContent += value;
            firstOperand = resultDisplay.textContent;
        }
        else if (currentOperation != null) {
            expressionDisplay.textContent += value;
            secondOperand += value;
        }
    }
    // console.log(firstOperand, secondOperand);
}

const inputOperator = (operator) => {
    if (currentOperation == null) {
        currentOperation = operator;
        expressionDisplay.textContent += currentOperation;
    }
    else if (currentOperation != null) {
        if (secondOperand == '') {
            return;
        }
        else if (secondOperand != '') {
            result = operation(firstOperand, secondOperand, currentOperation);
            resultDisplay.textContent = result;
            firstOperand = resultDisplay.textContent;
            currentOperation = operator;
            expressionDisplay.textContent += currentOperation;
            secondOperand = '';
        }
    }
}

const inputDot = (value) => {
    if (!resultDisplay.innerText.includes('.')) {
        resultDisplay.innerText += value;
        expressionDisplay.innerText += value;
    }
}
const equal = () => {
    if (firstOperand && secondOperand && currentOperation != null) {
        // console.log(firstOperand, secondOperand, currentOperation); //for debugging
        resultDisplay.textContent = operation(firstOperand, secondOperand, currentOperation);
    }

}

const btns = document.querySelectorAll('button');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (btn.classList.contains('operand')) {
            inputOperand(btn.textContent);
        }
        else if (btn.classList.contains('operator')) {
            inputOperator(btn.textContent);
        }
        else if (btn.classList.contains('dot')) {
            inputDot(btn.textContent);
        }
        else if (btn.classList.contains('equal')) {
            equal();
        }
    })
})

//functions for arithmatic operations
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    //handling division by zero
    if (b == 0) {
        expressionDisplay.innerText = 'LMAO';
        return 0;
    }
    return (a / b).toFixed(2); //toFixed function rounds the result upto specified precision
}

//decides the current arithmatic operation
const operation = (a, b, operator) => {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '−':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return null;
    }
}

//clear button
const clearBtn = document.querySelector('#CLEAR');
clearBtn.addEventListener('click', () => {
    displayValue = '0';
    updateDisplay(displayValue);
    firstOperand = '';
    secondOperand = '';
    operator = null;
    currentOperation = null;
    result = null;
    expressionDisplay.textContent = '';
});

//backspace button
const deleteBtn = document.querySelector('#DELETE');
deleteBtn.addEventListener('click', () => {
    if (firstOperand && secondOperand == '') {
        return;
    }
    if (resultDisplay.textContent != '0') {
        resultDisplay.textContent = resultDisplay.textContent.slice(0, -1);
    }
    if (expressionDisplay.textContent == '.') {
        expressionDisplay.textContent = '';
    }
    if ((operator == '' || currentOperation == '')) {
        expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
    }
})