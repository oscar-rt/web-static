var calcvalue = 0;

var displayvalue = document.getElementById("calculator-display");

var buffer = "NONE";

function refreshCalcValue(){
    displayvalue.innerHTML = calcvalue;
}

function shiftValue(number){
    calcvalue = calcvalue * 10;
    calcvalue = calcvalue + number;
}

function clickNum(number){
    if(buffer=="NONE"){
        shiftValue(number);
    }
    else if(buffer=="MULT"){
        calcvalue = calcvalue * number;
    }
    else if(buffer=="DIV"){
        calcvalue = calcvalue / number;
    }
    else if(buffer=="PLUS"){
        calcvalue = calcvalue + number;
    }
    else if(buffer=="MINUS"){
        calcvalue = calcvalue - number;
    }
    buffer = "NONE";
    refreshCalcValue();
}

var button0 = document.getElementById("button-0");
button0.addEventListener("click", function(){
    clickNum(0);
}, false);

var button1 = document.getElementById("button-1");
button1.addEventListener("click", function(){
    clickNum(1);
}, false);

var button2 = document.getElementById("button-2");
button2.addEventListener("click", function(){
    clickNum(2);
}, false);

var button3 = document.getElementById("button-3");
button3.addEventListener("click", function(){
    clickNum(3);
}, false);

var button4 = document.getElementById("button-4");
button4.addEventListener("click", function(){
    clickNum(4);
}, false);

var button5 = document.getElementById("button-5");
button5.addEventListener("click", function(){
    clickNum(5);
}, false);

var button6 = document.getElementById("button-6");
button6.addEventListener("click", function(){
    clickNum(6);
}, false);

var button7 = document.getElementById("button-7");
button7.addEventListener("click", function(){
    clickNum(7);
}, false);

var button8 = document.getElementById("button-8");
button8.addEventListener("click", function(){
    clickNum(8);
}, false);

var button9 = document.getElementById("button-9");
button9.addEventListener("click", function(){
    clickNum(9);
}, false);

var buttonReset = document.getElementById("button-R");
buttonReset.addEventListener("click", function(){
    calcvalue = 0;
    refreshCalcValue();
}, false);

var buttonMult = document.getElementById("button-mult");
buttonMult.addEventListener("click", function(){
    buffer="MULT";
}, false);

var buttonDiv = document.getElementById("button-div");
buttonDiv.addEventListener("click", function(){
    buffer="DIV";
}, false);

var buttonPlus = document.getElementById("button-plus");
buttonPlus.addEventListener("click", function(){
    buffer="PLUS";
}, false);

var buttonMinus = document.getElementById("button-min");
buttonMinus.addEventListener("click", function(){
    buffer="MINUS";
}, false);


