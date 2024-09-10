let range=document.getElementById("range-input")
let prodd=document.querySelectorAll(".product")
function filterPrice() {
    for (let i = 0; i < prodd.length; i++) {
      if (prodd[i].innerHTML.toLowerCase().includes(range.value) ) {
            prodd[i].style.display = "block"
      }
        else {
            prodd[i].style.display = "none"
        }
    }
  }
  range.addEventListener("input", filterPrice);