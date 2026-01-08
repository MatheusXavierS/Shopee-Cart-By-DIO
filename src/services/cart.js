//ADICIONA ITENS AO CARRINHO
async function addItens(userCart,item) {
    console.log(`Item: ${item.nome}, Preço: ${item.preco}, Quantidade: ${item.quantidade}, Subtotal: ${item.subtotal()}`);
    userCart.push(item);
}

//CALCULA O SALDO TOTAL DO CARRINHO
//O total dentro de () é o valor inicial do acumulador
//O item dentro de () é os itens do array que estão sendo percorridos
async function calcularSaldo(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0);
    console.log(result);
}

//DELETA ITENS DO CARRINHO PELO NOME
//No splice, o primeiro parametro é o indice que será removido
//O segundo parametro é a quantidade de itens que serão removidos a partir do indice
async function deletaItem(userCart, name) {
    const index = userCart.findIndex((item) => item.nome === name);

    if (index !== -1) {
        userCart.splice(index, 1);
        console.log(`Item "${name}" removido do carrinho.`);
    }
}

//DELETA ITENS DO CARRINHO PELO INDICE
async function removeItemByIndex(userCart, index) {
    // Ajusta o índice para corresponder ao array (baseado em zero) 
    const deleteIndex = index - 1;  
    
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex,1);
    }
}

async function removeItem(userCart, item) {
    //Encontra o indice do item no carrinho
    const indexFound = userCart.findIndex((cartItem) => cartItem.nome === item.nome);    

    //casp nao encontre o item
    if (indexFound == -1) {
        console.log(`Item "${item.nome}" não encontrado no carrinho.`);
        return;
    } 

    //Se a quantidade for maior que 1, diminui a quantidade em 1
    //Se for igual a 1, remove o item do carrinho
    else if(userCart[indexFound].quantidade > 1) {
        userCart[indexFound].quantidade -= 1;
        return;
    } else {
        userCart.splice(indexFound, 1);
    }
}

//EXIBE ITENS DO CARRINHO
//O primeiro parametro do forEach é o item do array
//O segundo parametro é o indice do item no array
async function displayCart(userCart) {
    console.log("Itens no carrinho:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.nome}: Preço: ${item.preco}, Quantidade: ${item.quantidade}, Subtotal: ${item.subtotal()} \n `);
    });
}

export { 
    addItens,
    calcularSaldo, 
    deletaItem, 
    removeItemByIndex,
    removeItem, 
    displayCart,
 };