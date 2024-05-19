const camposDoFormulario = document.querySelectorAll("[required]");
const btnLimpar = document.querySelector(".btn-limpar");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());

});

const tiposDeErro = [
    'valueMissing',
    'patternMismatch',
    'tooShort'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    preco: {
        valueMissing: "O campo de preço não pode estar vazio.",
    },
    imagem: {
        valueMissing: "O campo de imagem não pode estar vazio."
    }
};

function verificaCampo(campo) {

    let mensagem = "";
    campo.setCustomValidity("");

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    });

    const mensagemErro = campo.nextElementSibling;
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    };

};

btnLimpar.addEventListener("click", () => {
    
    document.querySelector('[data-name]').value = '';
    document.querySelector('[data-price]').value = '';
    document.querySelector('[data-image]').value = '';

    const erros = document.querySelectorAll('.mensagem-erro');
    erros.forEach(erro => erro.textContent = '');

    document.querySelector('[data-name]').blur();

});
