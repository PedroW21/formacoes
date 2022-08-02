const listaLivros = require("./array");

function encontraMenores(pivo, array)
{
    let menores = 0;
    
    for(let atual = 0; atual < array.length; atual++)
    {
        let produtoAtual = array[atual];

        if(produtoAtual.preco < pivo.preco) menores++;


    }

    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar(array, deOndeVem, paraOndeVai)
{
    const elemento1 = array[deOndeVem];
    const elemento2 = array[paraOndeVai];

    array[paraOndeVai] = elemento1;
    array[deOndeVem] = elemento2;
}

console.log(encontraMenores(listaLivros[2], listaLivros));