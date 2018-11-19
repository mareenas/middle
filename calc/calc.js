function Calculator(elId) {
    this.num1Value = 0;
    this.num2Value = 0;
    this.resultField = undefined;

    this.init = function () {
        let el = document.getElementById(elId);
        this.resultField = el.querySelector(".result-number");
        let num1 = el.querySelector(".num1");
        let num2 = el.querySelector(".num2");

        let buttonSum = el.querySelector(".sum");
        let buttonMinus = el.querySelector(".minus");
        let buttonMultiply = el.querySelector(".multiply");
        let buttonDivide = el.querySelector(".divide");

        num1.addEventListener('change', this.onNum1Change.bind(this));
        num2.addEventListener('change', this.onNum2Change.bind(this));

        buttonSum.addEventListener('click', this.onButtonSumClick.bind(this));
        buttonMinus.addEventListener('click', this.onButtonMinusClick.bind(this));
        buttonMultiply.addEventListener('click', this.onButtonMultiplyClick.bind(this));
        buttonDivide.addEventListener('click', this.onButtonDivideClick.bind(this));
    };

    this.onNum1Change = function(e) {
        this.num1Value = Number(e.currentTarget.value);
    };
    this.onNum2Change = function(e) {
        this.num2Value = Number(e.currentTarget.value);
    };
    this.onButtonSumClick = function () {
        this.resultField.textContent = sum(this.num1Value, this.num2Value);
    };
    this.onButtonMinusClick = function () {
        this.resultField.textContent = minus(this.num1Value, this.num2Value);
    };
    this.onButtonMultiplyClick = function () {
        this.resultField.textContent = multiply(this.num1Value, this.num2Value);
    };
    this.onButtonDivideClick = function() {
        this.resultField.textContent = divide(this.num1Value, this.num2Value);
    };
}

let calcFactory = {
    getNewCalc: function(elId) {
        let newCalc = new Calculator(elId);
        return newCalc;
    }
};