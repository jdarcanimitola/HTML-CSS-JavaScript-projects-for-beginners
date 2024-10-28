const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  if(tipValue<20){
    const finalTipValue = billValue * tipValue / 100;
    const totalValue = billValue * (1 + tipValue / 100);
    subtotalSpan.innerText = billValue;
    finalTipSpan.innerText = finalTipValue.toFixed(2);
    totalSpan.innerText = totalValue.toFixed(2);
  }
  else{
    subtotalSpan.innerText = billValue;
    finalTipValue = "The tip is abusive";
    finalTipSpan.innerText = finalTipValue;
    totalValue = "The tip is abusive";
    totalSpan.innerText = totalValue;
  }
    
  
}

function cleanTotal() {
billInput.value=null;
tipInput.value=null;
subtotalSpan.innerText = "";
finalTipSpan.innerText = "";
totalSpan.innerText = "";
}

btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
