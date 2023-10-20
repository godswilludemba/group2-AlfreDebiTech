document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector('.fa-bars'); 
  const navContent = document.querySelector('.links');

  menuButton.addEventListener('click', function () {
    navContent.classList.toggle('showmylinks');
  });
});



let itemCount = localStorage.getItem('cartItemCount') || 0;
updateCartCount();
function addToCart() {
  itemCount++;
  updateCartCount();
  localStorage.setItem('cartItemCount',itemCount);
  alert("Item added to cart!");
}
function updateCartCount(){
  document.getElementById('cart-number').innerText=itemCount;
}
addToCart;


function resetCart() {
itemCount = 0;
updateCartCount();
localStorage.setItem('cartItemCount', itemCount);
localStorage.removeItem('selectedProduct');
}

resetCart;

