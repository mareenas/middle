let calc2 = {
    init: function (elId) {
        let el = document.getElementById(elId);
        let num1 = el.querySelector(".num1");
        let num2 = el.querySelector(".num2");
        let resultField = el.querySelector(".result-number");

        let countButton = el.querySelector(".button");

        countButton.addEventListener('click', function () {
            let num1Value = Number(num1.value);
            let num2Value = Number(num2.value);
            let operation = el.querySelector(".operation").value;
            switch (operation) {
                case 'sum':
                    resultField.textContent = sum(num1Value, num2Value);
                    break;
                case 'minus':
                    resultField.textContent = minus(num1Value, num2Value);
                    break;
                case 'multiply':
                    resultField.textContent = multiply(num1Value, num2Value);
                    break;
                case 'divide':
                    resultField.textContent = divide(num1Value, num2Value);
                    break;
            }
        });
    }
};