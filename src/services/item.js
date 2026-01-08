//CRIA ITENS DO CARRINHO
//O subtotal é uma função que retorna o preço multiplicado pela quantidade
async function createItem(nome, preco, quantidade) {
    return{
        nome,
        preco,
        quantidade,
        subtotal:()=> preco * quantidade
    }
}

export { createItem };