const productOneInput = document.getElementById("product-one");
const priceOneInput = document.getElementById("price-one");
const unitOneInput = document.getElementById("unit-one");
const moneyOneSpan = document.getElementById("money-one");

const productTwoInput = document.getElementById("product-two");
const priceTwoInput = document.getElementById("price-two");
const unitTwoInput = document.getElementById("unit-two");
const moneyTwoSpan = document.getElementById("money-two");

const tipInput = document.getElementById("tip");

const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");

const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function calculateFirst() {
  const priceOneValue = priceOneInput.value;
  const unitOneValue = unitOneInput.value;
  const priceOneTotalValue = priceOneValue * unitOneValue;
  moneyOneSpan.innerText = priceOneTotalValue;
}

function calculateTotal() {
  const priceOneValue = priceOneInput.value;
  const unitOneValue = unitOneInput.value;
  const priceOneTotalValue = priceOneValue * unitOneValue;

  const priceTwoValue = priceTwoInput.value;
  const unitTwoValue = unitTwoInput.value;
  const priceTwoTotalValue = priceTwoValue * unitTwoValue;

  const billValue = priceOneTotalValue + priceTwoTotalValue;
  subtotalSpan.innerText = billValue;

  const tipValue = tipInput.value;
  232;
  if (tipValue < 20) {
    const finalTipValue = (billValue * tipValue) / 100;
    const totalValue = billValue * (1 + tipValue / 100);
    finalTipSpan.innerText = finalTipValue.toFixed(2);
    totalSpan.innerText = totalValue.toFixed(2);
    finalTipSpan.classList.remove("error-highlight");
    totalSpan.classList.remove("error-highlight");
  } else {
    finalTipSpan.innerText = "The tip is abusive";
    totalSpan.innerText = "The tip is abusive";
    finalTipSpan.classList.add("error-highlight");
    totalSpan.classList.add("error-highlight");
  }
}

function cleanTotal() {
  productOneInput.value = null;
  priceOneInput.value = null;
  unitOneInput.value = null;
  moneyOneSpan.innerText = "";

  productTwoInput.value = null;
  priceTwoInput.value = null;
  unitTwoInput.value = null;
  moneyTwoSpan.innerText = "";

  tipInput.value = null;
  subtotalSpan.innerText = "";
  finalTipSpan.innerText = "";
  totalSpan.innerText = "";
}

priceOneInput.addEventListener("focusout", calculateFirst);
unitOneInput.addEventListener("focusout", calculateFirst);

btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
