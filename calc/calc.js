function Calculator(elId) {
    this.num1Value = 0;
    this.num2Value = 0;
    this.resultField = undefined;
    this.el = document.getElementById(elId);
}

Calculator.prototype.init = function () {
    this.resultField = this.el.querySelector(".result-number");
    let num1 = this.el.querySelector(".num1");
    let num2 = this.el.querySelector(".num2");

    let buttonSum = this.el.querySelector(".sum");
    let buttonMinus = this.el.querySelector(".minus");
    let buttonMultiply = this.el.querySelector(".multiply");
    let buttonDivide = this.el.querySelector(".divide");

    num1.addEventListener('change', this.onNum1Change.bind(this));
    num2.addEventListener('change', this.onNum2Change.bind(this));

    buttonSum.addEventListener('click', this.onButtonSumClick.bind(this));
    buttonMinus.addEventListener('click', this.onButtonMinusClick.bind(this));
    buttonMultiply.addEventListener('click', this.onButtonMultiplyClick.bind(this));
    buttonDivide.addEventListener('click', this.onButtonDivideClick.bind(this));
};

Calculator.prototype.onNum1Change = function(e) {
    this.num1Value = Number(e.currentTarget.value);
};

Calculator.prototype.onNum2Change = function(e) {
    this.num2Value = Number(e.currentTarget.value);
};

Calculator.prototype.onButtonSumClick = function () {
    this.resultField.textContent = sum(this.num1Value, this.num2Value);
};

Calculator.prototype.onButtonMinusClick = function () {
    this.resultField.textContent = minus(this.num1Value, this.num2Value);
};

Calculator.prototype.onButtonMultiplyClick = function () {
    this.resultField.textContent = multiply(this.num1Value, this.num2Value);
};

Calculator.prototype.onButtonDivideClick = function() {
    this.resultField.textContent = divide(this.num1Value, this.num2Value);
};

let calcFactory = {
    getNewCalc: function(elId) {
        let newCalc = new Calculator(elId);
        return newCalc;
    }
};