
async function listaDeProdutos() {

    const conexao = await fetch("http://localhost:3000/produto");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
};

async function criarProduto(nome, preco, imagem) {

    const conexao = await fetch("http://localhost:3000/produto", {

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })

    });

    if (!conexao.ok) {
        throw new Error("Não foi possível adicionar o produto!");
    };

    const conexaoConvertida = await conexao.json(); 
    
    return conexaoConvertida;

};

async function deletarProduto(id) {

    const conexao = await fetch(`http://localhost:3000/produto/${id}`, {
        method: "DELETE",
    });

    if (!conexao.ok) {
        throw new Error(`Não foi possível deletar o produto com o id ${id}: ${resposta.status}`);
    };

};

export const servicosDosProdutos = {

    listaDeProdutos,
    criarProduto,
    deletarProduto

};