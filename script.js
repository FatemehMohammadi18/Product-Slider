let containerProduct = document.querySelector(".product");
let divImg = document.querySelector('.img');
let rightButton = document.querySelector('.right-side');
let lefttButton = document.querySelector('.left-side');

lefttButton.addEventListener('click', function(){
    containerProduct.scrollLeft -= 200;
} )

rightButton.addEventListener('click', function(){
    containerProduct.scrollLeft += 200;
} )


let maxscrollleft = containerProduct.scrollWidth - containerProduct.clientWidth;



function slidershow(){
    if(containerProduct.scrollLeft > (maxscrollleft-1)){
        containerProduct.scrollLeft -= maxscrollleft;
    }
    else{
        containerProduct.scrollLeft += 1   }
}

let play = setInterval (slidershow, 35)
