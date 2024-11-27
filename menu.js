const menu = [
    { name: "Clásica", price: 8 },
    { name: "Queso", price: 10 },
    { name: "Vegana", price: 12 }
];

let cart = [];

function displayMenu() {
    const menuElement = document.getElementById('menu');
    menu.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button onclick="addToCart('${item.name}', ${item.price})">Agregar al carrito</button>
        `;
        menuElement.appendChild(itemElement);
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

displayMenu();