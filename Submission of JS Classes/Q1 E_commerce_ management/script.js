class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    getDetails() {
        return `${this.name} (${this.category}) — ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 2499, "Electronics"),
    new Product(2, "Desk Lamp", 899, "Home"),
    new Product(3, "Mechanical Keyboard", 3299, "Electronics"),
    new Product(4, "Notebook Set", 499, "Stationery"),
    new Product(5, "Smart Watch", 4599, "Wearables")
];
products[0].applyDiscount(10);

const productContainer = document.querySelector("#products");
function renderProducts(items) {
    productContainer.innerHTML = "";
    items.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.innerHTML = `<h3>${product.name}</h3><p>ID: ${product.id}</p><p>Category: ${product.category}</p><strong>₹${product.price.toFixed(2)}</strong>`;
        productContainer.appendChild(card);
    });
}
renderProducts(products.filter((product) => product.price > 1000));
document.querySelector("#show-all").addEventListener("click", () => renderProducts(products));
