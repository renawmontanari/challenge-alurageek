import { servicosDosProdutos } from "../services/conectaApi.js";

const containerDosProdutos = document.querySelector("[data-product]");

function criarElemento(nome, preco, imagem, id) {

    const cartao = document.createElement("div");
    cartao.classList.add("cartao");

    cartao.innerHTML = `
        <div class="img-container">
            <img src="${imagem}" alt="${nome}>
        </div>

        <div class="card-container--info">
            <p>${nome}</p>
            <div class="card-container--value">
                <p>${preco}</p>
                <button class="delete-button" data-id="${id}">
                    <img src="./assets/img/#" alt="excluir">
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
        console.log(listaDeProdutos)
    } catch (error) {
        console.log(error);
    }

};

renderizar()

