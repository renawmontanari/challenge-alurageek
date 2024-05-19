import { servicosDosProdutos } from "../services/conectaApi.js";

const alertaWarn = document.querySelector(".alerta-warn");

document.addEventListener('click', async (event) => {

    const button = event.target.closest('.delete-button');

    if (button) {
        const produtoId = button.getAttribute('data-id');
        try {
            await servicosDosProdutos.deletarProduto(produtoId);
            document.querySelector(`[data-id="${produtoId}"]`).closest('.cartao').remove();

            alertaWarn.style.display = "block";

            setTimeout(() => {
                alertaWarn.style.display = "none";
            }, 4000);

        } catch (error) {
            console.error(`Erro ao deletar produto: ${error}`);
        }
    }

});

