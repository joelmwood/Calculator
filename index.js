let input01 = 0;
let input02 = 0;
let answer = 0;
let operator = "";

function add(a, b){
    answer = a + b;
    if(!Number.isInteger(answer)){
        answer = answer.toFixed(2);
    }
}
function subtract(a, b){
    answer =  a - b;
    if(!Number.isInteger(answer)){
        answer = answer.toFixed(2);
    }
}
function multiply(a, b){
    answer = a * b;
    if(!Number.isInteger(answer)){
        answer = answer.toFixed(2);
    }
}
function divide(a, b){
    if(b === 0){
        checkDivideByZero();
    }else{
        answer = a / b;
        if(!Number.isInteger(answer)){
            answer = answer.toFixed(2);
        }
    }
    
}

function checkDivideByZero(){
    alert("Silly Goose, You Can't Divide by Zero.");

}


document.getElementById("calc-btn-one").addEventListener("click", updateDisplayOne);
document.getElementById("calc-btn-two").addEventListener("click", updateDisplayTwo);
document.getElementById("calc-btn-three").addEventListener("click", updateDisplayThree);
document.getElementById("calc-btn-four").addEventListener("click", updateDisplayFour);
document.getElementById("calc-btn-five").addEventListener("click", updateDisplayFive);
document.getElementById("calc-btn-six").addEventListener("click", updateDisplaySix);
document.getElementById("calc-btn-seven").addEventListener("click", updateDisplaySeven);
document.getElementById("calc-btn-eight").addEventListener("click", updateDisplayEight);
document.getElementById("calc-btn-nine").addEventListener("click", updateDisplayNine);
document.getElementById("calc-btn-zero").addEventListener("click", updateDisplayZero);

document.getElementById("calc-btn-dot").addEventListener("click", updateDisplayDot);

document.getElementById("calc-btn-add").addEventListener("click", updateDisplayAdd);
document.getElementById("calc-btn-subtract").addEventListener("click", updateDisplaySubtract);
document.getElementById("calc-btn-multiply").addEventListener("click", updateDisplayMultiply);
document.getElementById("calc-btn-divide").addEventListener("click", updateDisplayDivide);

document.getElementById("calc-btn-backspace").addEventListener("click", backspace);
document.getElementById("calc-btn-all-clear").addEventListener("click", clearDisplayAndResults);
document.getElementById("calc-btn-equals").addEventListener("click", displayResults);


document.addEventListener('keypress', function(event){
    // console.log(` ${event.code}`);
    // console.log(`${event.code}`);
    if(event.code === 'Numpad1'){
        //console.log(`${event.code}`);
        updateDisplayOne();
    }else if(event.code === 'Numpad2'){
        //console.log(`${event.code}`);
        updateDisplayTwo();
    }else if(event.code === 'Numpad3'){
        //console.log(`${event.code}`);
        updateDisplayThree();
    }else if(event.code === 'Numpad4'){
        //console.log(`${event.code}`);
        updateDisplayFour();
    }else if(event.code === 'Numpad5'){
        //console.log(`${event.code}`);
        updateDisplayFive();
    }else if(event.code === 'Numpad6'){
        //console.log(`${event.code}`);
        updateDisplaySix();
    }else if(event.code === 'Numpad7'){
        //console.log(`${event.code}`);
        updateDisplaySeven();
    }else if(event.code === 'Numpad8'){
        //console.log(`${event.code}`);
        updateDisplayEight();
    }else if(event.code === 'Numpad9'){
        //console.log(`${event.code}`);
        updateDisplayNine();
    }else if(event.code === 'Numpad0'){
        //console.log(`${event.code}`);
        updateDisplayZero();
    }else if(event.code === "NumpadDecimal"){
        //console.log(`${event.code}`);
        updateDisplayDot();
    }else if(event.code === "NumpadEnter"){
        //console.log(`${event.code}`);
        displayResults();
    }else if(event.code === "NumpadAdd"){
        //console.log(`${event.code}`);
        updateDisplayAdd();
    }else if(event.code === "NumpadSubtract"){
        //console.log(`${event.code}`);
        updateDisplaySubtract();
    }else if(event.code === "NumpadMultiply"){
        //console.log(`${event.code}`);
        updateDisplayMultiply();
    }else if(event.code === "NumpadDivide"){
        //console.log(`${event.code}`);
        updateDisplayDivide();
    }
})

function updateDisplayOne(){
        updateDisplay("1");
}
function updateDisplayTwo(){
        updateDisplay("2");
}
function updateDisplayThree(){
        updateDisplay("3");
}
function updateDisplayFour(){
        updateDisplay("4");
}
function updateDisplayFive(){
        updateDisplay("5");
}
function updateDisplaySix(){
        updateDisplay("6");
}
function updateDisplaySeven(){
        updateDisplay("7");
}
function updateDisplayEight(){
        updateDisplay("8");
}
function updateDisplayNine(){
        updateDisplay("9");
}
function updateDisplayZero(){
        updateDisplay("0");
}
function updateDisplayDot(){
    let string = document.getElementById("calc-display-input").innerHTML;
    let subString = ".";
    if(string.includes(subString)){
        //stops user from adding additional dot to number
    }else{
        //if number is already zero, adds a zero in front of the dot for readability;
        if(string === "0"){
            document.getElementById("calc-display-input").innerHTML = "0.";
        }else{
            updateDisplay(".");
        }
    }        
}
function updateDisplay(string){

        let stringToFloat = (document.getElementById("calc-display-input").innerHTML);
        if(stringToFloat === "0"){
            document.getElementById("calc-display-input").innerHTML = string;
        }else{
            document.getElementById("calc-display-input").innerHTML += string;
        }      
}
function backspace(){
    let string = document.getElementById("calc-display-input").innerHTML;
    if(string === "0"){
        //if display box is 0, do nothing
    }else if(string.length === 1){
        //if only one number left, resets display to zero
        document.getElementById("calc-display-input").innerHTML = 0;
    }else{
        //if more than one number on the display, deletes the last number
        let editedString = string.slice(0, -1);
        document.getElementById("calc-display-input").innerHTML = editedString;
    }
    
}
function clearDisplay(){
    document.getElementById("calc-display-input").innerHTML = 0;
}
function clearDisplayAndResults(){
    document.getElementById("calc-display-input").innerHTML = "0";
    document.getElementById("calc-display-results").innerHTML = "";
    input = 0;
    answer = 0;
    operator = "";
}
function updateDisplayAdd(){
    operator  = "+"
    moveNumInDisplayToResults(operator);

}
function updateDisplaySubtract(){
    operator  = "-"
    moveNumInDisplayToResults(operator);
}
function updateDisplayMultiply(){
    operator  = "*"
    moveNumInDisplayToResults(operator);

}
function updateDisplayDivide(){
    operator  = "/"
    moveNumInDisplayToResults(operator);

}
function moveNumInDisplayToResults(tempOperator){

    console.log("input01: " + input01);
    console.log("input02: " + input02);
    console.log("answer: " + answer);


    operator = tempOperator;
    let results = document.getElementById("calc-display-results").innerHTML;
    let display = parseFloat(document.getElementById("calc-display-input").innerHTML);
    if(results === "" && display === 0){
        //do nothing
    }
    if(results.length === 0 && display !== 0){
        input01 = display;
        document.getElementById("calc-display-results").innerHTML = input01 + " " + operator;
        document.getElementById("calc-display-input").innerHTML = 0;
    }
    if(results.length !== 0 && input01 === 0 && answer === 0){
        input02 = input01;
        input01 = display;
        document.getElementById("calc-display-results").innerHTML = input02 + " " + operator;
        document.getElementById("calc-display-input").innerHTML = 0;
    }
    if(answer !==0 && display !== 0){
        document.getElementById("calc-display-results").innerHTML = input01 + " " + operator;
    }
    if(results.length !== 0 && display === 0 && answer !== 0){
        console.log("hooray");
        input01 = answer;
        document.getElementById("calc-display-results").innerHTML = input01 + " " + operator;

    }

    // console.log("input01: " + input01);
    // console.log("input02: " + input02);
    // console.log("answer: " + answer);
    
    
}
function displayResults(){
    input02 = parseFloat(document.getElementById("calc-display-input").innerHTML);
    calculateAnswer(input01, input02);
    document.getElementById("calc-display-results").innerHTML = answer;
    document.getElementById("calc-display-input").innerHTML = 0;

    input01 = 0;
    input02 = 0;

}
function calculateAnswer(){
    if(operator === "+"){
        add(input01, input02);
    }else if(operator === "-"){
        subtract(input01, input02);
    }else if(operator === "*"){
        multiply(input01, input02);
    }else if(operator === "/"){
        divide(input01, input02);
    }
}
