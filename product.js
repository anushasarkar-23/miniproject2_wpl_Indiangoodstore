// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1; // Increase quantity if item exists
    } else {
        cart.push({ name, price, quantity: 1 }); // Add new item
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    alert(`${name} has been added to your cart!`);
}

// Event listeners for all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        addToCart(name, price); // Call the addToCart function
    });
});
