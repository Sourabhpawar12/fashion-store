let cart = [];
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  const count = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  total.textContent = totalPrice;
  count.textContent = cart.length;
}
