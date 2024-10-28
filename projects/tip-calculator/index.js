const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");
const productOneInput = document.getElementById("product-one");
const productTwoInput = document.getElementById("product-two");
const priceOneInput = document.getElementById("price-one");
const priceTwoInput = document.getElementById("price-two");
const tipInput = document.getElementById("tip");
const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const priceOneValue = 0 + priceOneInput.value;
  const priceTwoValue = 0 + priceTwoInput.value;
  const billValue = parseFloat(priceOneValue) + parseFloat(priceTwoValue);
  const tipValue = tipInput.value;
  subtotalSpan.innerText = billValue;
  if(tipValue<20){
    const finalTipValue = billValue * tipValue / 100;
    const totalValue = billValue * (1 + tipValue / 100);
    finalTipSpan.innerText = finalTipValue.toFixed(2);
    totalSpan.innerText = totalValue.toFixed(2);
  }
  else{
    finalTipSpan.innerText = "The tip is abusive";
    totalSpan.innerText = "The tip is abusive";
  }
}

function cleanTotal() {
productOneInput.value=null;
productTwoInput.value=null;
priceOneInput.value=null;
priceTwoInput.value=null;
tipInput.value=null;
subtotalSpan.innerText = "";
finalTipSpan.innerText = "";
totalSpan.innerText = "";
}

btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
