document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById('menu-button');
    const navContent = document.querySelector('.nav-content');
  
    menuButton.addEventListener('click', function () {
      navContent.classList.toggle('active');
    });
  });

  
let itemCount = localStorage.getItem('cartItemCount') || 0;
updateCartCount();
function addToCart() {
    itemCount++;
    updateCartCount();
    localStorage.setItem('cartItemCount',itemCount);
  
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

