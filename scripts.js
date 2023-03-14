var numberSinal;

function attDisplay(number){
    var display = document.querySelector('#display');
    if(number == '+' || number == '-' || number == '/' || number == 'x'){
        numberSinal = number1;
        numberSinal += number;
        display.innerHTML = numberSinal;
    }else if(changeToNumber2 == 0){
        number = parseFloat(number);
        display.innerHTML = number;
    }else if(changeToNumber2 == 1){
        numberSinal += number;
        display.innerHTML = numberSinal;
    }
}

function cleanDisplay(){
    var display = document.querySelector('#display');
    display.innerHTML = 0;
    changeToString1 = 0;
    changeToString2 = 0;
    number1 = 0;
    number2 = 0;
    number3 = 0;
    calc;
    sinal = 0;
    changeToNumber2 = 0;
    identifyOperator = 0;
}

var changeToString1 = 0;
var changeToString2 = 0;
var number1 = 0;
var number2 = 0;
var calc;
var sinal = 0;
var changeToNumber2 = 0;
var identifyOperator = 0;
var clockToCalculate = 0;

var number3 = '';

function getNumber(number){

    if(changeToNumber2 == 0 && changeToString1 == 0){
        number1 += number;
        attDisplay(number1);
        changeToString1++;
    }else if(changeToNumber2 == 0 && changeToString1 == 1){
        number1 = String(number1);
        number1 += number;
        attDisplay(number1);
    }else if(changeToNumber2 == 1 && changeToString2 == 0){
        number2 += number;
        attDisplay(number2);
        number3 += String(number);
        alert(number3);
        changeToString2++;
    }else if(changeToNumber2 == 1 && changeToString2 == 1){
        number2 = String(number2);
        var numberView2 = number;
        number3 += numberView2;
        alert(number3);
        attDisplay(numberView2);
    }
}

function getOperator(operator){
    switch(operator){
        case '+':
            sinal = '+';
            attDisplay(sinal);
            changeToNumber2 = 1;
            break;
        case '-':
            sinal = '-';
            attDisplay(sinal);
            changeToNumber2 = 1;
            break;
        case '/':
            sinal = '/';
            attDisplay(sinal);
            changeToNumber2 = 1;
            break;
        case 'x':
            sinal = 'x';
            attDisplay(sinal);
            changeToNumber2 = 1;
            break;
    }
}

function calculate(){
    if(sinal == '+' && number1 != 0 && number2 != 0){
        calc = parseFloat(number1) + parseFloat(number3);
        cleanDisplay();
        attDisplay(calc);
    }

    if(sinal == '-' && number1 != 0 && number2 != 0){
        calc = parseFloat(number1) - parseFloat(number3);
        cleanDisplay();
        attDisplay(calc);
    }

    if(sinal == '/' && number1 != 0 && number2 != 0){
        calc = parseFloat(number1) / parseFloat(number3);
        cleanDisplay();
        attDisplay(calc);
    }

    if(sinal == 'x' && number1 != 0 && number2 != 0){
        calc = parseFloat(number1) * parseFloat(number3);
        cleanDisplay();
        attDisplay(calc);
    }
}

