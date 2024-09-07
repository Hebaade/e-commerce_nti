let imgs=document.querySelectorAll('.sideImg');
let mainImg=document.querySelector('.mainImg');
function changeImg() {
for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function() {
        mainImg.src=imgs[i].src
    }
    )
}
}
changeImg()