
const products = [
    {
        name: "Smart Watch",
        price: 2499,
        icon: "⌚"
    },
    {
        name: "Wireless Headphones",
        price: 1999,
        icon: "🎧"
    },
    {
        name: "Smart Phone",
        price: 15999,
        icon: "📱"
    },
    {
        name: "Laptop",
        price: 45999,
        icon: "💻"
    },
    {
        name: "Camera",
        price: 28999,
        icon: "📷"
    },
    {
        name: "Bluetooth Speaker",
        price: 2999,
        icon: "🔊"
    }
];

let cart = 0;

const productGrid = document.getElementById("productGrid");

products.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
        <div class="product-icon">${product.icon}</div>

        <h3>${product.name}</h3>

        <p>Premium quality product</p>

        <div class="price">
            ₹${product.price.toLocaleString("en-IN")}
        </div>

        <button onclick="addToCart('${product.name}')">
            Add to Cart
        </button>
    `;

    productGrid.appendChild(card);
});


function addToCart(productName) {

    cart++;

    document.getElementById("cartCount").textContent = cart;

    alert(productName + " added to cart!");
}


function showCart() {

    if (cart === 0) {
        alert("Your cart is empty.");
    } else {
        alert("You have " + cart + " item(s) in your cart.");
    }
}


function toggleMenu() {

    const navigation = document.getElementById("navigation");

    navigation.classList.toggle("active");
}


function submitForm(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}
