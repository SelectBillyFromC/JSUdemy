const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}

// currentResult = add(currentResult, 2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

add();

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);