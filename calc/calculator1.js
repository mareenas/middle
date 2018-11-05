let calc1 = {
    buttonSum: document.querySelector(".sum"),
    buttonMinus: document.querySelector(".minus"),
    buttonMultiply: document.querySelector(".multiply"),
    buttonDivide: document.querySelector(".divide"),
    num1: document.querySelector(".num1"),
    num2: document.querySelector(".num2"),
    num1Value: 0,
    num2Value: 0,
    resultField: document.querySelector(".result-number"),
    init: function () {
        this.num1.addEventListener('change', function () {
            this.num1Value = this.num1.value;
            console.log(this.num1Value);
        });
    }
};
calc1.init();


num2.addEventListener('change', function () {
    num2Value = num2.value;
});

buttonSum.addEventListener('click', function () {
    resultField.textContent = sum(+num1Value, +num2Value);
});

buttonMinus.addEventListener('click', function() {
    resultField.textContent = minus(+num1Value, +num2Value);
});

buttonMultiply.addEventListener('click', function() {
    resultField.textContent = multiply(+num1Value, +num2Value);
});

buttonDivide.addEventListener('click', function() {
    resultField.textContent = divide(+num1Value, +num2Value);
});

