var first = result;
var second = null;
var result = null;
var expression = "";

var mainScreen = document.getElementById("tester");
var secondScreen = document.getElementById("equation");
function adder(button){
    mainScreen.innerHTML += button.value;
    secondScreen.innerText += button.value;
}
function expres(btn){
    if(second == null){
        second = parseInt(document.getElementById('tester').innerHTML);
    }
    if(result != null){
        second = result;
    }
    secondScreen.innerHTML += btn.value;
    mainScreen.innerHTML = '';
    expression = btn.value;
}
function calculate(btn){
    first = parseInt(document.getElementById('tester').innerHTML);
    switch(expression){
        case "+":
            result = first + second;
            mainScreen.innerHTML = result;
            break;
        case "-":
            result = second-first;
            mainScreen.innerHTML = result;
            break;
        case "*":
            result = first * second;
            mainScreen.innerHTML = result;
            break;
        case "/":
            result = second / first;
            mainScreen.innerHTML = result;
            break;
    }
    mainScreen.innerHTML = result;
}
function reset(){
    location.reload();
}