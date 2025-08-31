// Produtos de exemplo
const products = [
  { id: 1, name: "Camisa", price: 59.90, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Tênis", price: 199.90, img: "https://via.placeholder.com/200" },
  { id: 3, name: "Boné", price: 39.90, img: "https://via.placeholder.com/200" },
  { id: 4, name: "Mochila", price: 149.90, img: "https://via.placeholder.com/200" }
];

let cart = [];

// Renderiza produtos
const productsContainer = document.getElementById("products");
products.forEach(prod => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <p>R$ ${prod.price.toFixed(2)}</p>
    <button onclick="addToCart(${prod.id})">Adicionar</button>
  `;
  productsContainer.appendChild(div);
});

// Adiciona ao carrinho
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// Atualiza carrinho
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - R$ ${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">❌</button>`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-count").textContent = cart.length;
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Remove item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout (simples)
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    alert("Compra finalizada com sucesso!");
    cart = [];
    updateCart();
  }
});
