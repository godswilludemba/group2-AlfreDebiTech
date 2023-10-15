let itemCount = localStorage.getItem('cartItemCount') || 0;
updateCartCount();
function addToCart(productName, productImage, productPrice) {
    itemCount++;
    updateCartCount();
    localStorage.setItem('cartItemCount',itemCount);
    localStorage.setItem('selectedProduct', JSON.stringify({name: productName, image: productImage, price: productPrice }));
  
    window.location.href='../addToCartPage/index.html';
}

function updateCartCount(){
    document.getElementById('cart-number').innerText=itemCount;
}
addToCart;
function resetCart() {
    itemCount = 0;
    updateCartCount();
    localStorage.removeItem('selectedProduct');
}

resetCart;

