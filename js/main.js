// start of header
const menu = document.getElementById("Menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("nav-pos");
});
// End of header

// start of super deals section
const featured_dealsBtn = document.getElementById("featured_deals");
const onSale_dealsBtn = document.getElementById("onSale_deals");
const bestRate_dealsBtn = document.getElementById("bestRate_deals");
const products_deals = document.getElementById("products");

let pros = [];
function featured_pros() {
  pros = [
    {
      name: "Huawei MediaPad",
      price: 100,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
    },
    {
      name: "Beoplay H7",
      price: 200,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
    },
    
    {
      name: "Huawei MediaPad",
      price: 500,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
         quantity:"1"
          ,
        image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 100,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
         quantity:"1"
          ,
        category:"Headphone"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },
  ];
  let bag=``
  for (let i = 0; i < pros.length; i++) {
   bag+=`<div class="product">
                        <div class="img-cont">
                            <img src=${pros[i].image} alt="img">
                        </div>
                        <div class="info">
                            <span>$${pros[i].price}</span>
                            <span class="opacity-50">${pros[i].category}</span>
                            <span class="fw-bold">${pros[i].name}</span>
                        <button onClick="addCart(${i});">Add Cart</button>
                        </div>
                    </div>`
  }
  products_deals.innerHTML=bag
}
featured_pros()
featured_dealsBtn.addEventListener("click", () => {
    featured_dealsBtn.style.color="black"
    featured_pros()
})
function onSale_pros() {
  pros = [
    {
      name: "Huawei MediaPad",
      price: 100,
      category:"Smartphone"
      ,
      quantity:"1"
      ,
      image: "img/deals-featured/xfeatured_5.png.pagespeed.ic.YLLo4CaDpU.webp",
    },
    {
      name: "Beoplay H7",
      price: 200,
      category:"Headphone"
      ,
      quantity:"1"
      ,
      image: "img/deals-featured/xfeatured_7.png.pagespeed.ic.TSCkRrtjRn.webp",
    },
    
    {
      name: "Huawei MediaPad",
      price: 500,
      category:"Headphone"
      ,
      quantity:"1"
      ,
      image: "img/deals-featured/xfeatured_8.png.pagespeed.ic.KucKh-Yb2w.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
        image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 100,
         quantity:"1"
          ,
        category:"Smartphone"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
        category:"Headphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },
  ];
  let bag=``
  for (let i = 0; i < pros.length; i++) {
   bag+=`<div class="product">
                        <div class="img-cont">
                            <img src=${pros[i].image} alt="img">
                        </div>
                        <div class="info">
                            <span>$${pros[i].price}</span>
                            <span class="opacity-50">${pros[i].category}</span>
                            <span class="fw-bold">${pros[i].name}</span>
                   <button onClick="addCart(${i});">Add Cart</button>
                        </div>
                    </div>`
  }
  products_deals.innerHTML=bag
}

onSale_dealsBtn.addEventListener("click", () => {
    onSale_dealsBtn.style.color="black"
    onSale_pros()
})
function bestRate_pros() {
    pros = [
      {
        name: "Huawei MediaPad",
        price: 100,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_6.png.pagespeed.ic.KkzNytvHVM.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
        category:"Headphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      
      {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_8.png.pagespeed.ic.KucKh-Yb2w.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 300,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 300,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
      },
      {
          name: "Huawei MediaPad",
          price: 500,
          category:"Headphone"
          ,
          quantity:"1"
          ,
          image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
        },
        {
          name: "Huawei MediaPad",
          price: 100,
          category:"Smartphone"
          ,
          quantity:"1"
          ,
          image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
        },
        {
          name: "Beoplay H7",
          price: 200,
          category:"Headphone"
          ,
          quantity:"1"
          ,
          image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
        },
    ];
    let bag=``
    for (let i = 0; i < pros.length; i++) {
     bag+=`<div class="product">
                          <div class="img-cont">
                              <img src=${pros[i].image} alt="img">
                          </div>
                          <div class="info">
                              <span>$${pros[i].price}</span>
                              <span class="opacity-50">${pros[i].category}</span>
                              <span class="fw-bold">${pros[i].name}</span>
                              <button onClick="addCart(${i});">Add Cart</button>
                          </div>
                      </div>`
    }
    products_deals.innerHTML=bag
  }
  
bestRate_dealsBtn.addEventListener("click", () => {
    bestRate_dealsBtn.style.color="black"
      bestRate_pros()
  })
// End of super deals section
// Cart section
let cart=[]
function addCart(i) {
    if (localStorage.getItem("cart")!=null) {
        cart=JSON.parse(localStorage.getItem("cart"))
    }
let item={
    name: pros[i].name,
    price: pros[i].price,
    category:pros[i].category,
    image: pros[i].image,
    quantity:pros[i].quantity
}
cart.push(item)
localStorage.setItem('cartLength', JSON.stringify(cart.length))
localStorage.setItem("cart",JSON.stringify(cart))
document.getElementById("cartNumber").innerText=localStorage.getItem("cartLength")
}

// End cart section

// start of arrival section
const featuredArrivalBtn=document.getElementById("featuredArrival")
const audioArrivalBtn=document.getElementById("audioArrival")
const laptopsArrivalBtn=document.getElementById("laptopsArrival")
const arrivalItems=document.getElementById("arrivalItems")
const rightSec_arrival=document.getElementById("rightSec_arrival")
function featuredArrival_pros() {
  pros = [
    {
      name: "Huawei MediaPad",
      price: 100,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_3.jpg.pagespeed.ic.5huJuP7Vcc.webp",
    },
    {
      name: "Beoplay H7",
      price: 200,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_2.jpg.pagespeed.ic.HKQA4qV2Mn.webp",
    },
    
    {
      name: "Huawei MediaPad",
      price: 500,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_4.jpg.pagespeed.ic.YvShdYiv_G.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_6.jpg.pagespeed.ic.K3dGMH41m4.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
         quantity:"1"
          ,
        image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 100,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
         quantity:"1"
          ,
        category:"Headphone"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },

  ];
  let bag=``
  for (let i = 0; i < pros.length; i++) {
   bag+=`<div class="product">
                        <div class="img-cont">
                            <img src=${pros[i].image} alt="img">
                        </div>
                        <div class="info">
                            <span>$${pros[i].price}</span>
                            <span class="opacity-50">${pros[i].category}</span>
                            <span class="fw-bold">${pros[i].name}</span>
                        <button onClick="addCart(${i});">Add Cart</button>
                        </div>
                    </div>`
  }
arrivalItems.innerHTML=bag

}
featuredArrival_pros()
featuredArrivalBtn.addEventListener("click", () => {
  featuredArrivalBtn.style.color="black"
  featuredArrival_pros()
})
function audioArrival_pros() {
  pros = [
    {
      name: "Huawei MediaPad",
      price: 100,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_8.jpg.pagespeed.ic.lAcp8-nlW0.webp",
    },
    {
      name: "Beoplay H7",
      price: 200,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_6.jpg.pagespeed.ic.K3dGMH41m4.webp",
    },
    
    {
      name: "Huawei MediaPad",
      price: 500,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_4.jpg.pagespeed.ic.YvShdYiv_G.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_3.jpg.pagespeed.ic.5huJuP7Vcc.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
         quantity:"1"
          ,
        image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 100,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
         quantity:"1"
          ,
        category:"Headphone"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },
  ];
  let bag=``
  for (let i = 0; i < pros.length; i++) {
   bag+=`<div class="product">
                        <div class="img-cont">
                            <img src=${pros[i].image} alt="img">
                        </div>
                        <div class="info">
                            <span>$${pros[i].price}</span>
                            <span class="opacity-50">${pros[i].category}</span>
                            <span class="fw-bold">${pros[i].name}</span>
                        <button onClick="addCart(${i});">Add Cart</button>
                        </div>
                    </div>`
  }
arrivalItems.innerHTML=bag
}
audioArrivalBtn.addEventListener("click", () => {
  audioArrivalBtn.style.color="black"
  audioArrival_pros()
})

function laptopArrival_pros() {
  pros = [
    {
      name: "Huawei MediaPad",
      price: 100,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_5.jpg.pagespeed.ic.o6B80wnRBW.webp",
    },
    {
      name: "Beoplay H7",
      price: 200,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_6.jpg.pagespeed.ic.K3dGMH41m4.webp",
    },
    
    {
      name: "Huawei MediaPad",
      price: 500,
      category:"Headphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_2.jpg.pagespeed.ic.HKQA4qV2Mn.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/new-arrivals/xnew_8.jpg.pagespeed.ic.lAcp8-nlW0.webp",
    },
    {
      name: "Huawei MediaPad",
      price: 300,
      category:"Smartphone"
      ,
       quantity:"1"
          ,
      image: "img/deals-featured/xfeatured_4.png.pagespeed.ic.ffUr_ZlXtN.webp",
    },
    {
        name: "Huawei MediaPad",
        price: 500,
        category:"Headphone"
        ,
         quantity:"1"
          ,
        image: "img/deals-featured/xfeatured_2.png.pagespeed.ic.3F_5Hs2lhs.webp",
      },
      {
        name: "Huawei MediaPad",
        price: 100,
        category:"Smartphone"
        ,
        quantity:"1"
        ,
        image: "img/deals-featured/xfeatured_1.png.pagespeed.ic.nzWvRNeKk3.webp",
      },
      {
        name: "Beoplay H7",
        price: 200,
         quantity:"1"
          ,
        category:"Headphone"
        ,
        image: "img/deals-featured/xfeatured_3.png.pagespeed.ic.wmJbCYIZcx.webp",
      },
  ];
  let bag=``
  for (let i = 0; i < pros.length; i++) {
   bag+=`<div class="product">
                        <div class="img-cont">
                            <img src=${pros[i].image} alt="img">
                        </div>
                        <div class="info">
                            <span>$${pros[i].price}</span>
                            <span class="opacity-50">${pros[i].category}</span>
                            <span class="fw-bold">${pros[i].name}</span>
                        <button onClick="addCart(${i});">Add Cart</button>
                        </div>
                    </div>`
  }
arrivalItems.innerHTML=bag
}
laptopsArrivalBtn.addEventListener("click", () => {
  laptopsArrivalBtn.style.color="black"
 laptopArrival_pros()
})
// End of new arrival section
// start of best seller section
const featuredSeller=document.querySelector("#featuredSeller")
const onSaleSeller=document.querySelector("#onSaleSeller")
const bestRateSeller=document.querySelector("#bestRateSeller")
const bottomSecBest=document.querySelector(".best-seller .bottom-sec")
featuredSeller.addEventListener("click", () => {
  featuredSeller.style.color="black"
  bottomSecBest.classList.toggle("show-best")
})
onSaleSeller.addEventListener("click", () => {
  bottomSecBest.classList.toggle("show-best")
  onSaleSeller.style.color="black"
})
bestRateSeller.addEventListener("click", () => {
  bottomSecBest.classList.toggle("show-best")
  bestRateSeller.style.color="black"
})
// end of best seller section

// start of wishList section
const  likedItems=document.querySelectorAll(".love")
const itemsList=document.querySelectorAll(".trends-slider .slide")
let wishList=[]
likedItems.forEach((item,index) => {
item.addEventListener("click", () => {
  item.style.color="red"
wishList.push(itemsList[index].innerHTML)
localStorage.setItem("wishList",JSON.stringify(wishList))
})
})
// start of up scroll button
let upbutton = document.getElementById("upBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of up scroll button
// start of search input
let search =document.getElementById("search")
let search1 =document.getElementById("search1")
let prods=document.querySelectorAll(".product")
let select=document.getElementById("select")
function filterItems() {
  for (let i = 0; i < prods.length; i++) {
    if (prods[i].innerHTML.toLowerCase().includes(search.value.toLowerCase()) && prods[i].innerHTML.toLowerCase().includes(select.value.toLowerCase())) {
          prods[i].style.display = "block"
    }
      else {
          prods[i].style.display = "none"
      }
  }
}
document.getElementById("search-btn").addEventListener("click", filterItems)
function filterItems1() {
  for (let i = 0; i < prods.length; i++) {
    if (prods[i].innerHTML.toLowerCase().includes(search1.value.toLowerCase()) ) {
          prods[i].style.display = "block"
    }
      else {
          prods[i].style.display = "none"
      }
  }
}
search1.addEventListener("input", filterItems1)