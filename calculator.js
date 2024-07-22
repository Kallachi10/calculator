let num1=0;
let num2=0;
let result=0;
let lastClick = "";
let operator = "";
let operatorFlag = false;
const displayValue = document.querySelector(".displayValue");
displayValue.textContent = "";
let test=0;
function evaluate(operator){

   if(operator=="+"){
    result = num1 + num2;
   }
   else if(operator=="-"){
    result = num1-num2;
   }
   else if(operator=="x"){
    result = num1*num2;
   }
   else if(operator=="/"){
    result = num1/num2;
   }
   else if(operator=="%"){
    result = num1%num2;
   }
   else if(operator==""){
    result = result;
   }
}
function onClick(e){
    
    if(e.target.classList.contains("nums")){
        displayValue.textContent+=e.target.textContent;
        if(operatorFlag==true){
            num2=num2*10+parseInt(e.target.textContent);
        }
    }
    else if(e.target.classList.contains("operator")){
        
        if(operatorFlag==true){
            evaluate(operator);
            operator = e.target.textContent;
            displayValue.textContent = result+e.target.textContent;
            num2 = 0;
            num1 = result;
        }
        else{
            num1 = parseInt(displayValue.textContent);
            operator = e.target.textContent;
            displayValue.textContent += e.target.textContent;
            operatorFlag = true;
        }
        
    }

    else if(e.target.textContent=="+/-"){

        if(operatorFlag){
            evaluate(operator);
            operatorFlag = false;
        }

        else{
            result = displayValue.textContent;
        }
        num2=0;
        result = -result;
        num1 = result;
        displayValue.textContent = result;
    }

    else if(e.target.textContent=="="){
        if(displayValue.textContent.length!=0){
            evaluate(operator);
            operatorFlag = false;
            num2=0;
            num1=result;
            displayValue.textContent = result;
        }
    }

    else if(e.target.classList.contains("clear")){
        if(e.target.textContent=="AC"){
            displayValue.textContent = "";
            num1=0;
            num2=0;
            result=0;
        }
        else{
            displayValue.textContent = displayValue.textContent.slice(0,-1);
            if(parseInt(lastClick)!=NaN)
            num2 = (num2-num2%10)/10;
            
            else{
                operatorFlag=false;
            }
        }
    }
    lastClick = "e.target.textContent";
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    let clear = button.classList.contains("clear");
    let equals = button.classList.contains("equals");
    let nums = button.classList.contains("nums");
    let toggle = button.classList.contains("toggle");
    if(!(nums||clear||equals||toggle)){
        button.classList.add("operator");
    }
    button.addEventListener("click",onClick);
});