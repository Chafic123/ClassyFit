
document.addEventListener("DOMContentLoaded", function() {
    let price = parseFloat(document.querySelector(".sproduct_price").innerText.replace("$", ""));
    let numberInput = document.querySelector(".number");

    numberInput.addEventListener("input", function() {
        let nb = parseFloat(numberInput.value);
        if (!isNaN(nb)) { 
            let totalPrice = price * nb;
            document.querySelector(".sproduct_price").innerHTML = "$" + totalPrice.toFixed(2);
        } else {
            document.querySelector(".sproduct_price").innerHTML = "$" + price.toFixed(2);
        }
    });
});

document.getElementById("btnforproced").addEventListener("click", function () {
    let sproduct_price = document.querySelector(".sproduct_price");
    sproduct_price.textContent = "$0";

    let h3 = document.createElement("h3");
    h3.textContent = "Thank You!";

    let p = document.createElement("p");
    p.innerHTML = "You Will Receive Your Order In a Few Days <br> Pleasure Serving You!";

    let popup = document.getElementById("popup");
    popup.appendChild(h3);
    popup.appendChild(p);
    popup.style.display = "block";

    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
});

//scroll to bottom
document.addEventListener("DOMContentLoaded", function () {
    var scrollToBottomBtn = document.getElementById("btn-top");
    scrollToBottomBtn.addEventListener("click", function () {
        scrollSmoothToBottom();
    });
  });
  function scrollSmoothToBottom() {
    var div = document.querySelector("footer"); // Replace with the actual ID of your content div
    div.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };