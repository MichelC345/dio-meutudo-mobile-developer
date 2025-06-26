//CASOS DE USO DOS ITENS

// -> criar item com subtotal certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity, //no caso subtotal é uma função
  };
}

export default createItem;