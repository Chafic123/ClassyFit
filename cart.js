let total=0;
const ss=document.querySelectorAll(".pricetotal");

function loaddata(){ 
    document.querySelector("tbody").innerHTML="";
    for(let i=0;i<localStorage.length;i++){
    let a=localStorage.getItem("Item "+i).split(",");
    total+=parseFloat(a[1].substring(1));
    document.querySelector("tbody").innerHTML+=`<tr>
    <input type="hidden" value="Item `+i+`"/>
    <td><button class="removeitem" onclick="removeclick(this)"><i class="far fa-times-circle"></i></button></td>
    <td><img src="`+a[2]+`" alt=""></td>
    <td>`+a[0]+`</td>
    <td class="price">`+a[1]+`</td>
    <td><input type="number" class="inputQuantity" value="1" onchange="updatevalue(this)"></td>
    <td class="Priceload">`+a[1]+`</td>
</tr>`}
ss[0].textContent="$"+total;
ss[1].textContent="$"+total;
}

function removeclick(button) {
    var itemValue = button.parentNode.parentNode.firstElementChild.value;
    button.parentNode.parentNode.remove();
    console.log(itemValue);
    localStorage.removeItem(itemValue);
}

function updatevalue(input){

total=0
let Input1=document.getElementsByClassName("inputQuantity");
let Price1=document.getElementsByClassName("price");
let PriceLoad=document.querySelectorAll(".Priceload");

for(let i=0;i<Input1.length;i++){
    console.log(input.parentNode.parentNode.children[4]);
    let a=Price1[i].textContent.substring(1)*Input1[i].value;
    console.log(input.parentNode.parentNode.children[i].textContent)
    total+=a;
    // console.log(PriceLoad)
    PriceLoad[i].innerHTML="$" + a;
}

ss[0].textContent="$"+total;
ss[1].textContent="$"+total;
}
loaddata();

document.getElementById("btnforproced").addEventListener("click", function () {
    let h3 = document.createElement("h3");
    h3.textContent = "Thank You! ";

    let p = document.createElement("p");
    p.innerHTML = "You Will Receive Your Order In Few Days <br> Pleasure Serving You!";

    let popup = document.getElementById("popup");
    popup.appendChild(h3);
    popup.appendChild(p);
    popup.style.display = "block";

    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);

});

document.getElementById("prizefor").addEventListener("click", function () {
    let h3 = document.createElement("h3");
    h3.textContent = "You Have Submitted Your Number ";

    let p = document.createElement("p");
    p.innerHTML = "We Will Announce The Winners Soon";

    let popup = document.getElementById("popup");
    popup.appendChild(h3);
    popup.appendChild(p);
    popup.style.display = "block";

    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);
    document.querySelector('#coupon input[type="text"]').value = '';
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