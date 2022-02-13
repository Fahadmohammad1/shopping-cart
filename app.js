// phone
function updatePhoneNumber(product, price, isAdding) {
  const input = document.getElementById(product + "-input");
  const quantity = input.value;
  if (isAdding == true) {
    input.value = parseInt(quantity) + 1;
  } else if (isAdding == false && quantity > 0) {
    input.value = parseInt(quantity) - 1;
  }
  const phoneFinal = input.value;

  // price update
  const phonePrice = document.getElementById(product + "-price");
  const phoneTotal = phoneFinal * price;
  phonePrice.innerText = phoneTotal;

  // calcultate total
  calculateTotal();
}
function getInputValue(products) {
  const input = document.getElementById(products + "-input");
  const productsQuantity = parseInt(input.value);
  return productsQuantity;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subtotal = phoneTotal + caseTotal;
  const tax = subtotal / 10;
  const total = subtotal + tax;

  document.getElementById("subtotal-amount").innerText = subtotal;
  document.getElementById("total-tax").innerText = tax;
  document.getElementById("total-amount").innerText = total;
}

// phone plus
document.getElementById("phone-plus").addEventListener("click", function () {
  updatePhoneNumber("phone", 1219, true);
});
// phone minus
document.getElementById("phone-minus").addEventListener("click", function () {
  updatePhoneNumber("phone", 1219, false);
});

// case
document
  .getElementById("case-increase-btn")
  .addEventListener("click", function () {
    updatePhoneNumber("case", 59, true);
  });

document
  .getElementById("case-decrease-btn")
  .addEventListener("click", function () {
    updatePhoneNumber("case", 59, false);
  });
