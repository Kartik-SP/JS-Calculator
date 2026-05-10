let currentNum = "";
let expression = "";
let display = document.getElementById('output');
function append(number){
    currentNum += number;
    expression += currentNum;
    display.innerText = expression;
}
function show(){
    display.innerHTML = eval(expression);
}