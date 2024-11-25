const productTable = document.getElementById("product-table");
const productRows = productTable.children;

const btnAddProduct = document.getElementById("add-product");
const tipInput = document.getElementById("tip");

const btnCalculate = document.getElementById("calculate");
const btnClean = document.getElementById("clean");

const subtotalSpan = document.getElementById("subtotal");
const finalTipSpan = document.getElementById("final-tip");
const totalSpan = document.getElementById("total");

function addRow() {
  const htmlString = `
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <input type="number" />
            </td>
            <td>
              <span></span>
            </td>
            <td>
              <button class="btn-danger">Remove</button>
            </td>
        `;

  const row = document.createElement("tr");
  row.innerHTML = htmlString;
  const priceInput = row.children[1].firstElementChild;
  const unitInput = row.children[2].firstElementChild;
  const btnRemove = row.children[4].firstElementChild;
  priceInput.addEventListener("focusout", () => calculateRow(row));
  unitInput.addEventListener("focusout", () => calculateRow(row));
  btnRemove.addEventListener("click", () => removeRow(row));

  productTable.appendChild(row);
}

function removeRow(row) {
  productTable.removeChild(row);
}

function calculateRow(row) {
  const priceValue = row.children[1].firstElementChild.value;
  const unitValue = row.children[2].firstElementChild.value;
  const totalValue = priceValue * unitValue;
  const moneySpan = row.children[3].firstElementChild;
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

  const report = { products: [], tip: tipValue };

  for (let row = 0; row < productRows.length; row++) {
    const nameValue = productRows[row].children[0].firstElementChild.value;
    const priceValue = productRows[row].children[1].firstElementChild.value;
    const unitValue = productRows[row].children[2].firstElementChild.value;
    const product = { name: nameValue, price: priceValue, unit: unitValue };
    report.products.push(product);
  }
  console.log(report);
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

for (let rowNumber = 0; rowNumber < productRows.length; rowNumber++) {
  const row = productRows[rowNumber];
  const priceInput = row.children[1].firstElementChild;
  const unitInput = row.children[2].firstElementChild;
  const btnRemove = row.children[4].firstElementChild;
  priceInput.addEventListener("focusout", () => calculateRow(row));
  unitInput.addEventListener("focusout", () => calculateRow(row));
  btnRemove.addEventListener("click", () => removeRow(row));
}

btnAddProduct.addEventListener("click", addRow);
btnCalculate.addEventListener("click", calculateTotal);
btnClean.addEventListener("click", cleanTotal);
