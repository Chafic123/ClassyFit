$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let name = $("#Name").val();
    let email = $("#Email").val();
    let subject = $("#Message").val();
    let message = $("#MessageContent").val();
    let isValid = true;

    if (email === "") {
      isValid = false;
      $("#responseMessage").append("<p class='error-message'>-Email is required</p>");
    } else {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        isValid = false;
        $("#responseMessage").append("<p class='error-message'>-Email is not valid</p>");
      }
    }

    if (name === "") {
      isValid = false;
      $("#responseMessage").append("<p class='error-message'>-Name is required</p>");
    }

    if (subject === "") {
      isValid = false;
      $("#responseMessage").append("<p class='error-message'>-Subject is required</p>");
    }

    if (message === "") {
      isValid = false;
      $("#responseMessage").append("<p class='error-message'>-Message is required</p>");
    }

    if (isValid) {
      let h3 = $("<h3>").text("Success");
      let p = $("<p>").html("Hello " + name + "<br>Thank you for your feedback.<br>We will respond to your request via Email.");

$("#popup").append(h3, p).fadeIn();
      
      setTimeout(function() {
        $("#popup").fadeOut();
      }, 3000);
      $('#contactForm')[0].reset();
    }
  });
});
//logo
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
const pro = document.getElementsByClassName("pro");
const addtocart = document.querySelectorAll(".pro a");
const imgcart = document.querySelectorAll(".pro img");
const ah5cart = document.querySelectorAll(".pro h5");
const ah4ocart = document.querySelectorAll(".pro h4");
for (let i = 0; i < pro.length; i++) {
  addtocart[i].addEventListener("click", function () {
    let a = [ah5cart[i].textContent, ah4ocart[i].textContent, imgcart[i].src];
    localStorage.setItem("Item " + localStorage.length, a)
  })
}
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