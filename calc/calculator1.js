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
        let that = this;
        this.num1.addEventListener('change', function () {
            that.num1Value = Number(this.value);
        });
        this.num2.addEventListener('change', function () {
            that.num2Value = Number(this.value);
        });
        this.buttonSum.addEventListener('click', function () {
            that.resultField.textContent = sum(that.num1Value, that.num2Value);
        });
        this.buttonMinus.addEventListener('click', function() {
            that.resultField.textContent = minus(that.num1Value, that.num2Value);
        });
        this.buttonMultiply.addEventListener('click', function() {
            that.resultField.textContent = multiply(that.num1Value, that.num2Value);
        });
        this.buttonDivide.addEventListener('click', function() {
            that.resultField.textContent = divide(that.num1Value, that.num2Value);
        });
    }
};

calc1.init();
