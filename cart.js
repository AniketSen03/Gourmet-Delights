// Retrieve the cart items from localStorage or set to an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Reference to the cart items container
const cartItemsContainer = document.getElementById('cartItemsContainer');

// Function to render cart items
function renderCart() {
    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.querySelector('.inner').style.display = 'none';
        
    } else {
        cartItemsContainer.innerHTML = ''; // Clear container before rendering
        cartItems.forEach((item, index) => {
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.h3}">
                    <h3>${item.h3}</h3>
                    <input type="number" class="quantity" min="1" value="${item.quantity || 1}" data-index="${index}">
                    <button onclick="removeFromCart(${index})">Remove</button>
                    <span class="rate">₹<span class="item-price">${item.price}</span></span>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });

        // Set order summary in outer div
        document.querySelector('.outer').innerHTML = `
            <div class="inner">
                <h3>Order Quantity: <span class="order-quantity">${cartItems.length}</span></h3>
                <h3>Total Amount: <span class="total"></span></h3>
                <input type="text" id="coupon" placeholder="Add Coupon Code">
                <button>Order Now</button>
            </div>
        `;

        updateCartTotal();
        attachEventListeners();
    }
}

// Attach event listeners to quantity inputs
function attachEventListeners() {
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateItemQuantity); // Listen for changes in quantity input
    });
}

// Update quantity and overall total without changing item price
function updateItemQuantity(event) {
    const index = event.target.dataset.index; // Get the index of the item
    const newQuantity = parseInt(event.target.value) || 1; // Get new quantity from input (default to 1 if empty)
    cartItems[index].quantity = newQuantity; // Update the quantity in the cartItems array

    // Save updated cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Store the updated cart items

    // Update the overall cart total and order quantity
    updateCartTotal();
}

// Calculate and update the overall cart total and order quantity
function updateCartTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0); // Calculate total amount
    const totalQuantity = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0); // Calculate total quantity

    // Update the total amount and order quantity in the UI
    document.querySelector('.total').textContent = `₹${total}`; // Update total in the UI
    document.querySelector('.order-quantity').textContent = totalQuantity; // Update order quantity in the UI
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove the item at the given index

    // Update localStorage and re-render cart
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
    renderCart(); // Re-render cart to reflect changes
}

// Initial render of cart items
renderCart();



