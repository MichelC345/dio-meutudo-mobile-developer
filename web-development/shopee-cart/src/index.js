import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Carrinho de compras da Shopee");

//criando dois itens
//const item1 = await createItem("hotwheels ferrari", 20.99, 1);
//const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// criação de items
const itemsToCart = [
    ["hotwheels ferrari", 20.99, 1],
    ["hotwheels lamborghini", 39.99, 3],
    ["qcy t1 pro", 199.99, 1],
    ["mouse gamer logitech", 89.99, 2],
    ["headset razer", 299.99, 1],
    ["camiseta preta", 49.99, 1],
];

// adicionei dois itens ao carrinho
//await cartService.addItem(myCart, item1);
//await cartService.addItem(myCart, item2);

//adicionar itens ao carrinho
console.log("\nAdicionando itens ao carrinho...");
for (const item of itemsToCart) {
    //console.log(item);
    //console.log(item[0], item[1], item[2]);
    //const newItem = await createItem(item[0], item[1], item[2]);
    const newItem = await createItem(...item);
    await cartService.addItem(myCart, newItem);
}

/*await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);*/
console.log("\nListando itens no carrinho da Shopee antes da remoção:");
await cartService.displaycart(myCart); // Exibe todos os itens do carrinho

const itemsToRemove = ["hotwheels lamborghini", "camiseta preta", "item não existente"];
// Remove itens
console.log("\nRemovendo itens do carrinho...");
for (const itemName of itemsToRemove) {
    console.log(`Tentando remover: ${itemName}`);
    await cartService.removeItem(myCart, itemName);
}

console.log("\nItens no carrinho da Shopee:");
await cartService.displaycart(myCart); // Exibe todos os itens do carrinho
// deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(myCart); // Calcula o valor total dos itens no carrinho

console.log("\nOrdenando itens do carrinho por preço...");
await cartService.orderByPrice(myCart); // Ordena os itens por preço
// Exibe os itens ordenados por preço
console.log("\nItens do carrinho ordenados por preço:");
await cartService.displaycart(myCart);


const itemsToWishlist = [
    ["pc gamer", 4999.99, 1],
    ["smartphone xiaomi", 1999.99, 1],
    ["notebook dell", 3499.99, 1],
]


console.log("\nAdicionando itens na lista de desejos...");
// Adicionando item na wishlist
for (const item of itemsToWishlist) {
    const newItem = await createItem(...item);
    myWishList.push(newItem);
}

console.log("\nLista de desejos da Shopee (ordenada por preço):");
// Ordenando a wishlist por preço
await cartService.orderByPrice(myWishList);
// Exibindo a wishlist
await cartService.displaycart(myWishList);
