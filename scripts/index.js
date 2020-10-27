var first = null;
var second = null;
var expression = "";
var result = null;

function test(buttonNum){
    val = buttonNum.value;
    if(document.getElementById("tester").innerHTML.length > 10){
        document.getElementById("tester").innerHTML = "";
    }
    
    if(val == "Reset"){
        reset();
        return;
    }



    if(val != "Enter"){
        if(val != "+" && val != "-" && val != "*" && val != "/"){
            if(first == null ){
                first = parseInt(val);
                console.log(val + " is saved in the first value. First Value: " + first + " Type: " + typeof(first));
                document.getElementById("tester").innerHTML += val;
            }
            else if(second == null && expression != ""){
                second = parseInt(val);
                console.log(val + " is saved in the second value. Second Value: " + second + " Type: " + typeof(second));
                document.getElementById("tester").innerHTML += val;

            }
            else{
                alert("Error");
            }
        }
        else if(expression  == "" && first != null){
            if(val == "+"){
                expression = "+";
            }
            else if(val == "-"){
                expression = "-";
            }
            else if(val == "*"){
                expression = "*";
            }
            else if(val == "/"){
                expression = "/";
            }
            document.getElementById("tester").innerHTML += val;
            console.log("Expression is: " + expression);
        }
    }
    else if(val == "Enter" && first != null && second != null){
        switch(expression){
            case "+":
                result = first + second;
                break;
            case "-":
                result  = first - second;
                break;
            case "*":
                result = first * second;
                break;
            case "/":
                result = first / second;
                break;
        }
        console.log("The result of " + first + " " + expression + " " + second + " is " + result);
        document.getElementById("tester").innerHTML = result;
    }


}

function reset(){
    var first = null;
    var second = null;
    var expression = "";
    var result = null;
    
}