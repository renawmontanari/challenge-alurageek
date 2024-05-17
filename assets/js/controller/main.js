import { servicosDosProdutos } from "../services/conectaApi.js";

const containerDosProdutos = document.querySelector("[data-product]");
const formularioProdutos = document.querySelector("[data-form]");

function criarElemento(nome, preco, imagem, id) {

    const cartao = document.createElement("div");
    cartao.classList.add("cartao");

    cartao.innerHTML = `
        <div class="img-container">
            <img src="${imagem}" alt="${nome}>
        </div>

        <div class="card-container--info">
            <p class="titulo-cartao">${nome}</p>
            <div class="card-container--value">
                <p>${preco}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="./assets/img/trash.png" alt="excluir">
                </button>
            </div> 
        </div>
    `

    containerDosProdutos.appendChild(cartao);
    return cartao;

};

const renderizar = async () => {

    try {
        const listaDeProdutos = await servicosDosProdutos.listaDeProdutos();
        
        listaDeProdutos.forEach((produto) => {
            containerDosProdutos.appendChild(
                criarElemento(
                    produto.nome,
                    produto.preco,
                    produto.imagem,
                    produto.id
                )
            )
        });
    } catch (error) {
        console.log(error);
    }

};

formularioProdutos.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const nome = document.querySelector("[data-name]").value;
    const preco = document.querySelector("[data-price]").value;
    const imagem = document.querySelector("[data-image]").value;

    try {
        await servicosDosProdutos.criarProduto(nome, preco, imagem);

        window.location.href = "./index.html";
    } catch (error) {
        console.log(error); 
    }

});

renderizar();

