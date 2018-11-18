let calc2 = {
    resultField: document.querySelector(".result-number"),
    countButton: document.querySelector(".button"),
    num1: document.querySelector(".num1"),
    num2: document.querySelector(".num2"),

    init: function () {
        let that = this;
        let el = document.querySelector("#calc2");
        this.countButton.addEventListener('click', function () {
            let num1Value = Number(that.num1.value);
            let num2Value = Number(that.num2.value);
            let operation = document.querySelector(".operation").value;
            switch (operation) {
                case 'sum':
                    that.resultField.textContent = sum(num1Value, num2Value);
                    break;
                case 'minus':
                    that.resultField.textContent = minus(num1Value, num2Value);
                    break;
                case 'multiply':
                    that.resultField.textContent = multiply(num1Value, num2Value);
                    break;
                case 'divide':
                    that.resultField.textContent = divide(num1Value, num2Value);
                    break;
            }
        });
    }
};

calc2.init();