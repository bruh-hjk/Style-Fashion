let cart = [];

// Função para renderizar o carrinho
const renderCart = () => {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  cartContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Carrinho vazio...</p>';
    totalPriceElement.textContent = 'R$ 0,00';
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <p>${item.name} - R$ ${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})" style="margin-left: 10px; color: red;">Remover</button>
      </p>
    `;
    cartContainer.appendChild(cartItem);
  });

  totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
};

// Função para adicionar ao carrinho
const addToCart = (name, price) => {
  cart.push({ name, price });
  renderCart();
};

// Função para remover do carrinho
const removeFromCart = (index) => {
  cart.splice(index, 1);
  renderCart();
};

// Adicionar evento de clique nos produtos
document.querySelectorAll('.produto').forEach((productElement) => {
  productElement.addEventListener('click', () => {
    const name = productElement.querySelector('.produto-nome').textContent;
    const price = parseFloat(
      productElement.querySelector('.produto-preco').textContent.replace('R$', '').replace(',', '.')
    );

    addToCart(name, price);
    alert(`${name} foi adicionado ao carrinho!`);
  });
});

// Evento para finalizar compra
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('O carrinho está vazio!');
    return;
  }
  alert('Compra finalizada!');
  cart = [];
  renderCart();
});

// Inicializa o carrinho vazio
renderCart();
