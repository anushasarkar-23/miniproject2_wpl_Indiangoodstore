// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items in checkout
function displayCheckoutItems() {
    const cartItemsList = document.getElementById('checkout-cart-items');
    const totalPriceElement = document.getElementById('checkout-total-price');
    let total = 0;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceElement.textContent = 'Total: ₹0';
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
        cartItemsList.appendChild(li);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: ₹${total}`;
}

// Function to handle form submission (confirming the purchase)
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postal = document.getElementById('postal').value;

    // You can send the order details to a server here using an API (optional)

    // For now, just show a success message and clear the cart
    alert(`Thank you, ${name}! Your order has been placed successfully.`);
    
    // Clear the cart after purchase
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to a confirmation or home page
    window.location.href = 'index.html'; // Redirect to home page after order
});

// Display checkout items on page load
displayCheckoutItems();
