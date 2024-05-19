import { servicosDosProdutos } from "../services/conectaApi.js";

const containerDosProdutos = document.querySelector("[data-product]");
const formularioProdutos = document.querySelector("[data-form]");
const alerta = document.querySelector(".alerta");

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
                <p>R$ ${preco}</p>
                <button class="delete-button" data-id="${id}">
                    <i class='bx bxs-trash-alt' style='color:#db184d'  ></i>
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

function mostrarAlerta(mensagem) {
    alerta.textContent = mensagem;
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.display = "none";
    }, 4000);
};

formularioProdutos.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const nome = document.querySelector("[data-name]").value;
    const preco = document.querySelector("[data-price]").value;
    const imagem = document.querySelector("[data-image]").value;

    if (nome.trim() === '' || preco.trim() === '' || imagem.trim() === '') {
        Toastify({
            text: "Por favor, preencha todos os campos antes de adicionar o produto.",
            duration: 5000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "#ef4444",
              },
        }).showToast();
        return;
    }

    try {
        await servicosDosProdutos.criarProduto(nome, preco, imagem);

        mostrarAlerta("Produto adicionado com sucesso!");
    } catch (error) {
        console.log(error); 
    }

});

renderizar();

