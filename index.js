let expression = "";
const reset_expression = 0;
let display = document.querySelector(".calculator-display");

function appendToDisplay(operator){
    if(operator == "-" && expression == "0"){
        expression = "";
    }
    expression += operator;
    display.innerText = expression;
}
function ResultDisplay(){
    try{
        expression = eval(expression);
        display.innerText = expression;
    }
    catch(error){
        display.innerText = "ERROR";
    }
}
function Clear(){
    expression = reset_expression;
    display.innerText = expression;
}
