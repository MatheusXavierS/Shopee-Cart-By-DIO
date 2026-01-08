import { createItem } from "./services/item.js";
import * as Cart from "./services/cart.js";

const userCart = [];

let item1 = await createItem('Notebook', 2500, 2);
let item2 = await createItem('Mouse', 150, 1);
let item3 = await createItem('Teclado', 300, 1);

console.log("\n Itens adicionado com sucesso! \n ");
await Cart.addItens(userCart, item1);
await Cart.addItens(userCart, item2);
await Cart.addItens(userCart, item3);

console.log("\n Calculando saldo total do carrinho:");
await Cart.calcularSaldo(userCart);

console.log('\n Removendo item "Mouse" do carrinho:');
await Cart.deletaItem(userCart, item2.nome);


await Cart.displayCart(userCart);