const conectaApi = async function () {

    const conexao = await fetch("#");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);

};

conectaApi();