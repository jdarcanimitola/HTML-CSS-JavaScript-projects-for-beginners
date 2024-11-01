const productTable = document.getElementById("product-table");
const productRows = productTable.children;

const tipInput = document.getElementById("tip");

const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");

const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function calculateRow(row) {
  const priceValue = productRows[row].children[1].firstElementChild.value;
  const unitValue = productRows[row].children[2].firstElementChild.value;
  const totalValue = priceValue * unitValue;
  const moneySpan = productRows[row].children[3].firstElementChild;
  moneySpan.innerText = totalValue;
}

function calculateTotal() {
  let subTotal = 0;
  for (let row = 0; row < productRows.length; row++) {
    const priceValue = productRows[row].children[1].firstElementChild.value;
    const unitValue = productRows[row].children[2].firstElementChild.value;
    subTotal += priceValue * unitValue;
  }

  subtotalSpan.innerText = subTotal;

  const tipValue = tipInput.value;

  if (tipValue < 20) {
    const finalTipValue = (subTotal * tipValue) / 100;
    const totalValue = subTotal * (1 + tipValue / 100);
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
  for (let row = 0; row < productRows.length; row++) {
    productRows[row].children[0].firstElementChild.value = null;
    productRows[row].children[1].firstElementChild.value = null;
    productRows[row].children[2].firstElementChild.value = null;
    productRows[row].children[3].firstElementChild.innerText = null;
  }

  tipInput.value = null;
  subtotalSpan.innerText = null;
  finalTipSpan.innerText = null;
  totalSpan.innerText = null;
}

for (let row = 0; row < productRows.length; row++) {
  const priceInput = productRows[row].children[1].firstElementChild;
  const unitInput = productRows[row].children[2].firstElementChild;
  priceInput.addEventListener("focusout", () => calculateRow(row));
  unitInput.addEventListener("focusout", () => calculateRow(row));
}

btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
