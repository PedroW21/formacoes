const listaLivros = require("./array");
function mergeSort(array, nivelDeAninhamento = 0)
{
    if(array.length > 1)
    {   
        console.log(`Nivel de Aninhamento: ${nivelDeAninhamento}`); 

        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelDeAninhamento++);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelDeAninhamento++);

        array = ordenar(parte1,parte2);
    }

    return array;
}

function ordenar(arrParte1, arrParte2)
{
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;

    const resultado = [];

    while(posicaoAtualParte1 < arrParte1.length && posicaoAtualParte2 < arrParte2.length) 
    {
        let produtoAtualParte1 = arrParte1[posicaoAtualParte1];
        let produtoAtualParte2 = arrParte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco)
        {
            resultado.push(produtoAtualParte1);
            posicaoAtualParte1++;
        }
        else
        {
            resultado.push(produtoAtualParte2);
            produtoAtualParte2++;
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length 
        ? arrParte1.slice(posicaoAtualParte1) 
        : arrParte2.slice(posicaoAtualParte2)); 

}

console.log(mergeSort(listaLivros));
