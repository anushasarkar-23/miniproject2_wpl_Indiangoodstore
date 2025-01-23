// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let total = 0;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        totalPriceElement.textContent = 'Total: ₹0';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            deleteItem(index); // Call delete function with the index
        };
        
        li.appendChild(deleteButton);
        cartItemsList.appendChild(li);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: ₹${total}`;
}

// Function to delete an item from the cart
function deleteItem(index) {
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    displayCartItems(); // Refresh the displayed cart items
}

// Add event listener to the checkout button
document.getElementById('checkout-button').addEventListener('click', function() {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
    }
});

// Call the display function on page load
displayCartItems();
