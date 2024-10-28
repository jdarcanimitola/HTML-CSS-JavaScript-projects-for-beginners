const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  if(tipValue<20){
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2);
  }
  else{
    totalValue = String("The tip is abusive");
    totalSpan.innerText= totalValue;
  }
    
  
}

btnEl.addEventListener("click", calculateTotal);
