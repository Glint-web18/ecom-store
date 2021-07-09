var addToCartButton = document.getElementsByClassName('shop-item-button')
for (var i = 0; i<addToCartButton.length; i++){
    var button = addToCartButton[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    
    addItemToCart(title,price,)
}

function addItemToCart(title, price){
    var carRow = document.createElement()
}
