// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu-container');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('div');
        categoryElement.textContent = category;
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemListElement = document.createElement('ul');
        menuContainer.appendChild(itemListElement);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement('li');
            listItem.textContent = item;
            
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));
            
            // Append the list item to the list of items
            itemListElement.appendChild(listItem);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price (Assuming all items have the same price for simplicity)
    const itemPrice = 10; // Example price
    const totalPrice = parseFloat(orderTotalElement.textContent) + itemPrice;
    orderTotalElement.textContent = totalPrice.toFixed(2); // Display total with two decimal places
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
