//main
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    });
}
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

//img

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

Array.from(smallimg).forEach(function (img, index) {
    img.onclick = function () {
        MainImg.src = img.src;
    };
});

// logo js

let intro = document.querySelector(".intro");
let Logo = document.querySelector(".Logo-header");
let LogoSpan = document.querySelectorAll(".Logo");

function animateLogo() {
  LogoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("active");
    }, (idx + 1) * 400);
  });
}

// Initial animation when the page loads
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    animateLogo();
  });
});

// Repeated animation every 2 seconds
setInterval(() => {
  // Resetting the animation by removing the "active" class
  LogoSpan.forEach((span) => {
    span.classList.remove("active");
  });

  // Triggering the animation again after a short delay
  setTimeout(() => {
    animateLogo();
  });
}, 10000);

//cart
const pro=document.getElementsByClassName("pro");
const addtocart=document.querySelectorAll(".pro a");
const imgcart=document.querySelectorAll(".pro img");
const ah5cart=document.querySelectorAll(".pro h5");
const ah4ocart=document.querySelectorAll(".pro h4");
console.log(addtocart);
for(let i=0;i<pro.length;i++){
addtocart[i].addEventListener("click",function(){
  let a=[ah5cart[i].textContent,ah4ocart[i].textContent,imgcart[i].src];
  localStorage.setItem("Item "+localStorage.length,a)
 
})
}

// login Page By Rami
const wrapper = document.querySelector(".wrapper");
const loginlink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", function(e){
  e.preventDefault();
  wrapper.classList.add("active");
});
loginlink.addEventListener("click", function(e){
  e.preventDefault();
  wrapper.classList.remove("active");
});
