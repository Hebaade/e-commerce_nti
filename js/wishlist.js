let wishContainer=document.getElementById('wishContainer');
let wishList1
function displayWishList() {
    if (localStorage.getItem('wishList')!=null) {
        wishList1=JSON.parse(localStorage.getItem('wishList'))
    }
    else{
        wishList1=[]
    }
//  wishContainer.innerHTML=wishList1
for (let i = 0; i < wishList1.length; i++){
    let div=document.createElement('div')
    div.setAttribute('class','wishItem')
    div.innerHTML=`
    ${wishList1[i]}
    <button onclick="removeFromWishList(${i})"><i class="fa-solid fa-trash text-danger"></i></button>`
    wishContainer.append(div)
}
document.getElementById('wishNumber').innerText=wishList1.length
}
displayWishList()

function removeFromWishList(i){
    wishList1.splice(i,1)
    localStorage.setItem('wishList',JSON.stringify(wishList1))
    displayWishList()
    window.location.reload()
}