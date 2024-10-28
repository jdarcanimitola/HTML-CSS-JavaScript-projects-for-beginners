const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");
const productOneInput = document.getElementById("product-one");
const productTwoInput = document.getElementById("product-two");
const priceOneInput = document.getElementById("price-one");
const priceTwoInput = document.getElementById("price-two");
const unitOneInput = document.getElementById("unit-one");
const unitTwoInput = document.getElementById("unit-two");
const tipInput = document.getElementById("tip");
const moneyOneSpan = document.getElementById("money-one");
const moneyTwoSpan = document.getElementById("money-two");
const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const priceOneValue = priceOneInput.value;
  const priceTwoValue = priceTwoInput.value;
  const unitOneValue = unitOneInput.value;
  const unitTwoValue = unitTwoInput.value;
  const priceOneTotalValue = priceOneValue*unitOneValue;
  const priceTwoTotalValue = priceTwoValue*unitTwoValue;
  moneyOneSpan.innerText = priceOneTotalValue;
  moneyTwoSpan.innerText = priceTwoTotalValue;
  
  const billValue = priceOneTotalValue + priceTwoTotalValue;
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
unitOneInput.value=null;
unitTwoInput.value=null;
moneyOneSpan.innerText="";
moneyTwoSpan.innerText="";
tipInput.value=null;
subtotalSpan.innerText = "";
finalTipSpan.innerText = "";
totalSpan.innerText = "";
}

btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
