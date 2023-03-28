var numberTapped;
var launcher = 0;
var wasDeleted = false;
var anyTurnDeleted = false; //This var is to fix the delete of the user until the zero to calculate again
var havePoint = false;

function deleter(){
    if(launcher == 0){
        alert('Digite um número'); 
        //No execute nothing because the user it's trying to delete 0;
    }else if(launcher == 1 && number1.length == 1 && operator == ''){
        number1 = '';
        numberTapped = '0';
        anyTurnDeleted = true;
        wasDeleted = true;
        launcher = 0;
        typer(numberTapped);
    }else if(launcher == 1 && number1.length > 1 && changed == false){
        if(changed == false){
            number1 = String(number1);
            numberTapped = number1.slice(0, -1);
            number1 = number1.slice(0, -1);
            wasDeleted = true;
            typer(numberTapped);
        }
    }else if(number2.length >= 1){
        number2 = String(number2);
        number2 = number2.slice(0, -1);
        numberTapped = number1 + operator + number2;
        wasDeleted = true;
        typer(numberTapped);
    }
    
    else if(operator != '' && number2.length == 0){
        operator = '';
        numberTapped = number1;
        changed = false;
        wasDeleted = true;
        typer(numberTapped);
    }else{
        alert('Reset para continuar');
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
        display.innerHTML = '';
        display.innerHTML = n;
        launcher = 1;
    }else if(launcher == 1 && wasDeleted == false && anyTurnDeleted == false && havePoint == false){
        display.innerHTML += n;
    }else if(launcher == 1 && wasDeleted == false && anyTurnDeleted == false && havePoint == true){
        display.innerHTML = '';
        display.innerHTML = n;
        havePoint = false;
    }
    else if(changed == false && wasDeleted == true){
        display.innerHTML = '';
        display.innerHTML = n;
        launcher = 1;
        wasDeleted = false;
    }else if(changed == true && wasDeleted == true){
        display.innerHTML = '';
        display.innerHTML = n;
        wasDeleted = false;
    }else if(launcher == 1 && wasDeleted == false && anyTurnDeleted == true && display.textContent == '0'){
        display.innerHTML = '';
        display.innerHTML += n;
        anyTurnDeleted = false;
    }
}

var number1 = '';
var number2 = '';
var operator = '';
var changed = false;

function addDecimal(){
    if(changed == false){
        number1 += '.';
        numberTapped = number1;
        havePoint = true;
        typer(numberTapped);
    }else{
        number2 += '.';
        numberTapped = number2;
        havePoint = true;
        typer(numberTapped);
    }
}

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
            calc = String(calc);
            if(calc.length > 5){
                calc = parseFloat(calc);
                calc = calc.toFixed(5);
                variablesCleaner();
                typer(calc);
            }else{
                calc = parseFloat(calc);
                calc = number1 / number2;
                variablesCleaner();
                typer(calc);
            }
            break;
        case 'x':
            calc = number1 * number2;
            calc = String(calc);
            if(calc.length > 5){
                calc = parseFloat(calc);
                calc = calc.toFixed(5);
                variablesCleaner();
                typer(calc);
            }else{
                calc = parseFloat(calc);
                variablesCleaner();
                typer(calc);
            }
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
                calc = String(calc);
                if(calc.length > 5){
                    calc = parseFloat(calc);
                    calc = calc.toFixed(5);
                    variablesCleaner();
                    typer(calc);
                }else{
                    calc = parseFloat(calc);
                    variablesCleaner();
                    typer(calc);
                }
                break;
            case 'x':
                calc = calc * number2;
                calc = String(calc);
                if(calc.length > 5){
                    calc = parseFloat(calc);
                    calc = calc.toFixed(5);
                    variablesCleaner();
                    typer(calc);
                }else{
                    calc = parseFloat(calc);
                    variablesCleaner();
                    typer(calc);
                }
            }
    }
}