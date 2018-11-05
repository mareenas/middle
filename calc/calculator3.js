let resultField = document.querySelector(".result-container");

let operator = "";
let firstNum = 0;
let secondNum = 0;

let numbersWrapper = document.querySelector(".numbers-container");
numbersWrapper.addEventListener('click', function (e) {
    let numberEl = e.target;

    if(operator==='') {
        if(firstNum===0) {
            resultField.innerHTML = '';
        }
        resultField.innerHTML += numberEl.textContent;
        firstNum = Number(resultField.innerHTML);
    }else {
        if(secondNum === 0) {
            resultField.innerHTML = '';
        }
        resultField.innerHTML += numberEl.textContent;
        secondNum = Number(numberEl.textContent);
    }
});

let operatorsWrapper = document.querySelector(".operation-container");
operatorsWrapper.addEventListener('click', function(e) {
    operator = e.target.textContent;
});

let equalsButton = document.querySelector(".equal-sign");
equalsButton.addEventListener('click', function(e) {
    let result = 0;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }
    resultField.innerHTML = ""+result;
    firstNum = 0;
    secondNum = 0;
    operator = "";
});

let clear = document.querySelector(".clear");
clear.addEventListener('click', function (e) {
    resultField.innerHTML = "0";
    firstNum = 0;
    secondNum = 0;
    operator = "";
});