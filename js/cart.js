const cartContainer=document.getElementById('cart');
let cartItems ;
let totalPrice=0
function displayCart(){
if(localStorage.getItem('cart')!=null)
{
    cartItems = JSON.parse(localStorage.getItem('cart'))
}
else{
    cartItems = []
}

let bag=``
for(let i=0; i<cartItems.length; i++){
    totalPrice=totalPrice+(Number(cartItems[i].price)*Number(cartItems[i].quantity))
    bag += `
       <tr>
       <td>
       <img src="${cartItems[i].image}" alt="">
       </td>
       <td>
       
       <p>${cartItems[i].name}</p>
       </td>
    <td>
    
    <p>$${cartItems[i].price}</p>
    </td>
<td>
    <p>${cartItems[i].category}</p>
</td>
<td>
    <p ><input class="quantity-input" type="number" placeholder=${cartItems[i].quantity }></p>
</td>
<td>
<button onclick="editCart(${i})"><i class="fa-solid fa-edit"></i></button>
</td>
<td>
<button onclick="removeFromCart(${i})"><i class="fa-solid fa-trash"></i></button>
</td>
           
       </tr>
    `
}
cartContainer.innerHTML = bag
document.getElementById("total_price").innerText="$"+totalPrice
document.getElementById("price").innerText="$"+totalPrice
localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
}
displayCart()
function removeFromCart(index) {
cartItems.splice(index, 1)
localStorage.setItem('cart', JSON.stringify(cartItems))
displayCart()
window.location.reload()
}
let qInput=document.getElementsByClassName("quantity-input")
function editCart(index) {
    console.log(index)
    qInput[index].focus()

    qInput[index].addEventListener("input",()=>{
        console.log(index)
    cartItems[index].quantity=qInput[index].value
    localStorage.setItem('cart', JSON.stringify(cartItems))
    displayCart()
    window.location.reload()
})

// document.getElementById("quantity-input").addEventListener("input",()=>{
//     cartItems[index].quantity=document.getElementById("quantity-input").value
//     localStorage.setItem('cart', JSON.stringify(cartItems))
//     displayCart()
// })
}