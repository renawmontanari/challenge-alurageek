import { servicosDosProdutos } from "../services/conectaApi.js";

document.addEventListener('click', async (event) => {

    const button = event.target.closest('.delete-button');

    if (button) {
        const produtoId = button.getAttribute('data-id');
        try {
            await servicosDosProdutos.deletarProduto(produtoId);
            document.querySelector(`[data-id="${produtoId}"]`).closest('.cartao').remove();

            alert("produto excluido");

        } catch (error) {
            console.error(`Erro ao deletar produto: ${error}`);
        }
    }

});

