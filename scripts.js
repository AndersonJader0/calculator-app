var numberTapped;
var launcher = 0;
var wasDeleted = false;

function deleter(){
    if(changed == false){
        number1 = String(number1);
        numberTapped = number1.slice(0, -1);
        number1 = number1.slice(0, -1);
        number1 = parseFloat(number1);
        wasDeleted = true;
        typer(numberTapped);
    }else{
        number2 = String(number2);
        numberTapped = number1 + operator + number2.slice(0, -1);
        number2 = number2.slice(0, -1);
        number2 = parseFloat(number2);
        wasDeleted = true;
        typer(numberTapped);
    }
}

function variablesCleaner(){
    launcher = 0;
    numberTapped = 0;
    display.innerHTML = '';
    number1 = '';
    number2 = '';
    operator = '';
    changed = true;
}

function reset(){
    launcher = 0;
    numberTapped = 0;
    display.innerHTML = 0;
    number1 = '';
    number2 = '';
    operator = '';
    changed = false;
    calc = 0;
}

function typer(n){
    var display = document.querySelector('#display');
    if(launcher == 0 && wasDeleted == false){
        display.innerHTML = n;
        launcher = 1;
    }else if(launcher == 1 && wasDeleted == false){
        display.innerHTML += n;
    }else if(changed == 0 && wasDeleted == true){
        display.innerHTML = '';
        display.innerHTML = n;
        launcher = 1;
        wasDeleted = false;
    }else if(changed == 1 && wasDeleted == true){
        display.innerHTML = '';
        display.innerHTML = n;
        wasDeleted = false;
    }
}

var number1 = '';
var number2 = '';
var operator;
var changed = false;

function tapNumber(n){
    if(changed == false){
        number1 += String(n);
        numberTapped = n;
        typer(numberTapped);
    }else{
        number2 += String(n);
        numberTapped = n;
        typer(numberTapped);
    }
}

function tapOperator(o){

    switch(o){
        case '+':
            operator = '+';
            typer(operator);
            break;
        case '-':
            operator = '-';
            typer(operator);
            break;
        case '/':
            operator = '/';
            typer(operator);
            break;
        case 'x':
            operator = 'x';
            typer(operator);
            break;
    }
    changed = true;
}

var calc = 0;

function calculator(){
    if(calc == 0){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch(operator){
        case '+':
            calc = number1 + number2;
            variablesCleaner();
            typer(calc);
            break;
        case '-':
            calc = number1 - number2;
            variablesCleaner();
            typer(calc);
            break;
        case '/':
            calc = number1 / number2;
            variablesCleaner();
            typer(calc);
            break;
        case 'x':
            calc = number1 * number2;
            variablesCleaner();
            typer(calc);
            break;
        }
    }else{
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        switch(operator){
            case '+':
                calc = calc + number2;
                variablesCleaner();
                typer(calc);
                break;
            case '-':
                calc = calc - number2;
                variablesCleaner();
                typer(calc);
                break;
            case '/':
                calc = calc / number2;
                variablesCleaner();
                typer(calc);
                break;
            case 'x':
                calc = calc * number2;
                variablesCleaner();
                typer(calc);
                break;
            }
    }
}