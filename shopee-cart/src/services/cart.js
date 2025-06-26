//quais açoes meu carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  console.log("\nO carrinho de compras da Shopee está calculando o total...");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁Total: R$ ${result.toFixed(2)}`);
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> ✅ remover um item - diminui um item
//async function removeItem(userCart, item) {
async function removeItem(userCart, itemName) { //modificada para passar apenas o nome do item
  //1. encontrar o indice do item buscando pelo nome
  const indexFound = userCart.findIndex((p) => p.name === itemName);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado.");
    return;
  }else if (userCart[indexFound].quantity > 1) { //3. item > 1 subtrair um item
    userCart[indexFound].quantity -= 1;
    console.log("1 amostra do item foi removida com sucesso!");
    return;
  }else if (userCart[indexFound].quantity == 1) {//4. caso item = 1 deletar o item
    userCart.splice(indexFound, 1);
    console.log("Restava apenas 1 item, removido do carrinho com sucesso.");
    return;
  }
}

// ✅ mostra todos os items do carrinho
async function displaycart(userCart) {
  console.log("\nListando itens:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

async function orderByPrice(userCart) {
  userCart.sort((a, b) => a.price - b.price);
  //console.log("\nItens ordenados por preço:");
  //displaycart(userCart);
}

export { addItem, calculateTotal, deleteItem, removeItem, displaycart, orderByPrice };