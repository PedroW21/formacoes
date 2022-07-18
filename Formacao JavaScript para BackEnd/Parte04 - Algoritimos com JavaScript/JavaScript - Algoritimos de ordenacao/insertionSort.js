const livros = require('./listaLivros');
const trocar = require('./trocarPosicoes');

function insertionSort(lista)
{
    for(let atual = 0; atual < lista.length; atual++)
    {
        let itemSendoAnalisado = atual;

        while(itemSendoAnalisado > 0 && lista[itemSendoAnalisado].preco < lista[itemSendoAnalisado - 1].preco)
        {
            trocar(lista, itemSendoAnalisado);
            itemSendoAnalisado--;
        }
    }

    console.log(lista);
}

insertionSort(livros);