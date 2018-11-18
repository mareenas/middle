let calcFactory = {
    getNewCalc: function(elId) {
        let newCalc = {
            num1Value: 0,
            num2Value: 0,
            init: function () {
                let el = document.getElementById(elId);
                let num1 = el.querySelector(".num1");
                let num2 = el.querySelector(".num2");
                let resultField = el.querySelector(".result-number");

                let buttonSum = el.querySelector(".sum");
                let buttonMinus = el.querySelector(".minus");
                let buttonMultiply = el.querySelector(".multiply");
                let buttonDivide = el.querySelector(".divide");

                let that = this;
                num1.addEventListener('change', function () {
                    that.num1Value = Number(this.value);
                });
                num2.addEventListener('change', function () {
                    that.num2Value = Number(this.value);
                });
                buttonSum.addEventListener('click', function () {
                    resultField.textContent = sum(that.num1Value, that.num2Value);
                });
                buttonMinus.addEventListener('click', function() {
                    resultField.textContent = minus(that.num1Value, that.num2Value);
                });
                buttonMultiply.addEventListener('click', function() {
                    resultField.textContent = multiply(that.num1Value, that.num2Value);
                });
                buttonDivide.addEventListener('click', function() {
                    resultField.textContent = divide(that.num1Value, that.num2Value);
                });
            }
        };
        return newCalc;
    }
};