// case
document
  .getElementById("case-increase-btn")
  .addEventListener("click", function () {
    const casingInput = document.getElementById("case-input");
    const caseQuantity = casingInput.value;
    casingInput.value = parseInt(caseQuantity) + 1;
    const casingFinal = casingInput.value;
    // price update
    const plusPrice = document.getElementById("case-price");
    plusTotal = casingFinal * 59;
    plusPrice.innerText = plusTotal;
  });

document
  .getElementById("case-decrease-btn")
  .addEventListener("click", function () {
    const minusInput = document.getElementById("case-input");
    const minusQuantity = minusInput.value;
    minusInput.value = parseInt(minusQuantity) - 1;
    const minusFinal = minusInput.value;
    // minus price update
    const minusPrice = document.getElementById("case-price");
    minustotal = minusFinal * 59;
    minusPrice.innerText = minustotal;
  });
