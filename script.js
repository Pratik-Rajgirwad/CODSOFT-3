let display = document.getElementById('display');
let currentOperation = null;
let previousValue = '';

function appendNumber(number) {
    display.value += number;
}

function setOperation(operation) {
    currentOperation = operation;
    previousValue = display.value;
    display.value = '';
}

function clearDisplay() {
    display.value = '';
    currentOperation = null;
    previousValue = '';
}

function calculate() {
    if (currentOperation && previousValue !== '') {
        display.value = eval(previousValue + currentOperation + display.value);
        currentOperation = null;
        previousValue = '';
    }
}
