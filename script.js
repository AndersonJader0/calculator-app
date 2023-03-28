var number1 = '';
var number2 = '';
var operator = '';
var display = '';
var calc = 0;
var keep = false;

function reset(){
    document.getElementById('output').innerText = '0';
    number1 = '';
    number2 = '';
    operator = '';
    display = '';
    calc = 0;
    keep = false;
    nm1point = false;
    nm2point = false;
}

const clean = () => document.getElementById('output').innerText = '';

function tap(value){

    if(value === '+'|| value === '-' || value === '/' || value === 'x'){
        if(operator.length < 2){
        clean();
        display += value;
        document.getElementById('output').innerText = display;
        }
    }else if(operator == ''){
        clean();
        display += value;
        document.getElementById('output').innerText = display;
        saveValue1(value);
    }else if(operator != '' & operator.length < 2){
        clean();
        display += value;
        document.getElementById('output').innerText = display;
        saveValue2(value);
    }
}

const saveValue1 = n1 => number1 += n1;
const saveValue2 = n2 => number2 += n2;

function getOperator(sinal){
    if(document.getElementById('output').innerText !== '0' && document.getElementById('output').innerText !== '.'){
    operator += sinal;
    tap(operator);
    }
}

function calculate(){
    if(number2 != ''){
        number1 = parseFloat(number1);
        number2 = parseFloat(number2);
        calc = parseFloat(calc);
        if(keep === false){
            switch(operator){
            case '+':
                calc = number1 + number2;
                break ;
            case '-':
                calc = number1 - number1;
                break;
            case '/':
                calc = number1 / number2;
                break;
            case 'x':
                calc = number1 * number2;
                break;
            default:
                'operator não identificado';
            }
            keep = true;
            result();
        }else if(keep === true && number2 != ''){
            switch(operator){
            case '+':
                calc += number2;
                break;
            case '-':
                calc -= number2;
                break;
            case '/':
                calc /= number2;
                break;
            case 'x':
                calc *= number2;
                break;
            default:
                'operator não identificado';
            }
            result();
        }
    }
}
function result(){
    clean();
    number1 = '';
    number2 = '';
    operator = '';
    display = calc;
    document.getElementById('output').innerText = display;
}

function deleter(){
    display = display.slice(0, -1);
    clean();
    document.getElementById('output').innerText = display;
    if(operator == ''){
        number1 = number1.slice(0, -1);
        if(number1.length == 0){
            reset();
        }
    }else if(operator != '' && number2 == ''){
        operator = '';
    }else if(operator != '' && number2 != ''){
        number2 = number2.slice(0, -1);
    }
}

var nm1point = false;
var nm2point = false;
function pointer(){
    if(operator == '' && nm1point == false){
        display += '.';
        document.getElementById('output').innerText = display;
        number1 += '.';
        nm1point = true;
    }else if(operator != '' && number2 == ''){
        alert('Digite um número antes');
    }else if(operator != '' && number2 != '' && nm2point == false){
        display += '.';
        document.getElementById('output').innerText = display;
        number2 += '.';
        nm2point = true;
    }
}

/* Checkbox */

function verifier() {
    let check = document.getElementById("chk-box");
    var btns = document.getElementsByTagName('button');
    if(check.checked == true){
        document.querySelector('.body').style.background = '#444';
        document.getElementById('calculator').style.background = '#111'
        document.getElementById('calculator').style.color = '#ccc'
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = "#ccc";
        }
        output.style.color = 'black';
    }else{
        document.querySelector('.body').style.background = '#eee';
        document.getElementById('calculator').style.background = '#ddd'
        document.getElementById('calculator').style.color = '#111'
        for (let i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = "#eee";
        }
        output.style.color = 'black';
    }
} 
