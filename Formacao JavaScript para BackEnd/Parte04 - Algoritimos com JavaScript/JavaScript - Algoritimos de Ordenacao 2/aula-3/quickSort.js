const listaLivros = require("./array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita)
{
    if(array.length > 1)
    {
        let idxAtual = particiona(array, esquerda, direita);

        if(esquerda < idxAtual - 1) quickSort(array, esquerda, idxAtual - 1);
        if(idxAtual < direita) quickSort(array, idxAtual, direita);
    }

    return array;
}

function particiona(array, esquerda, direita)  
{
    console.log("array", array);
    console.log("esquerda", esquerda);
    console.log("direita", direita);

    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsq = esquerda;
    let atualDir = direita;

    while(atualEsq <= atualDir)
    {
        while(array[atualEsq].preco < pivo.preco)
        {
            atualEsq++;
        }
        while(array[atualDir].preco > pivo.preco)
        {
            atualDir--;
        }

        if(atualEsq <= atualDir)
        {
            trocaLugar(array, atualEsq, atualDir);
        }

        atualEsq++;
        atualDir--;
    }

    return atualEsq;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1)); // length traz qtd elementos, queremos idx 