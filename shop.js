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

document.addEventListener("DOMContentLoaded", async function () {
    const proContainer = document.querySelector(".pro-container");

    function createProductElement(product) {
        const proDiv = document.createElement("div");
        proDiv.className = "pro";

        const img = document.createElement("img");
        img.className="shopImage";
        img.src = product.image_url;
        img.alt = product.name;

        const desDiv = document.createElement("div");
        desDiv.className = "des";

        const brandSpan = document.createElement("span");
        brandSpan.textContent = product.brandname;

        const nameH5 = document.createElement("h5");
        nameH5.textContent = product.name;
        nameH5.className="shopName";
        const priceH4 = document.createElement("h4");
        priceH4.textContent = '$' + product.price;
        priceH4.className="shopPrice";

// to be tested
        const link = document.createElement("a");
        link.className="shopButton";
        link.href = "cart.html";
        const cartIcon = document.createElement("i");
        cartIcon.className = "fal fa-shopping-cart cart";
        link.appendChild(cartIcon);

        desDiv.appendChild(brandSpan);
        desDiv.appendChild(nameH5);
        desDiv.appendChild(priceH4);
        desDiv.appendChild(link);
        proDiv.appendChild(img);
        proDiv.appendChild(desDiv);

        proContainer.appendChild(proDiv);
  
       
        link.addEventListener("click",function(){
          let a=[nameH5.textContent,priceH4.textContent,img.src];
          localStorage.setItem("Item "+localStorage.length,a)
        })
        
    }

    fetch("data.json")
        .then(response => response.json())
        .then(data => {

            const selectedProducts = [];
            for (const category in data) {
                const products = data[category]["products"];
                for (let i = 0; i < Math.min(products.length); i++) {
                    selectedProducts.push(products[i]);

                }
            }
            selectedProducts.forEach(product => {
                createProductElement(product);
            });

      // Event listener for the "Hoddies" button
      let hoddies = document.getElementById("hoodies");
      hoddies.addEventListener("click", function () {
          // Clear the existing products
          proContainer.innerHTML = "";
          // Add products from the "hoodies Category"
          const selectedProducts = data["hoodies"]["products"];
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });

      let pants = document.getElementById("pants");
      pants.addEventListener("click", function () {
          proContainer.innerHTML = "";
          const selectedProducts = data["pants"]["products"];
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });

      let gloves = document.getElementById("gloves");
      gloves.addEventListener("click", function () {
          proContainer.innerHTML = "";
          const selectedProducts = data["gloves"]["products"];
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });

      let womenjakets = document.getElementById("womenjakets");
      womenjakets.addEventListener("click", function () {
          proContainer.innerHTML = "";
          const selectedProducts = data["womenjackets"]["products"];
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });

     
      let menjakets = document.getElementById("menjakets");
      menjakets.addEventListener("click", function () {
          proContainer.innerHTML = "";
          const selectedProducts = data["menjackets"]["products"];
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });


      let all = document.getElementById("all"); 
      all.addEventListener("click", function () {
          proContainer.innerHTML = "";

          const selectedProducts = [];
          for (const category in data) {
              const products = data[category]["products"];
              for (let i = 0; i < Math.min(10, products.length); i++) {
                  selectedProducts.push(products[i]);
              }
          }
          selectedProducts.forEach(product => {
              createProductElement(product);
          });
      });

        })
        .catch(error => console.error("Error fetching JSON:", error));
});

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