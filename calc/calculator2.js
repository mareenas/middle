let resultField = document.querySelector(".result-number");
let countButton = document.querySelector(".button");

countButton.addEventListener("click", function() {
    let num1Value = document.querySelector(".num1").value;
    let num2Value = document.querySelector(".num2").value;
    let operation = document.querySelector(".operation").value;

    switch (operation) {
        case 'sum':
            resultField.textContent = sum(+num1Value, +num2Value);
            break;
        case 'minus':
            resultField.textContent = minus(+num1Value, +num2Value);
            break;
        case 'multiply':
            resultField.textContent = multiply(+num1Value, +num2Value);
            break;
        case 'divide':
            resultField.textContent = divide(+num1Value, +num2Value);
            break;
    }
});