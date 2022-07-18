const livros = require('./listaLivros');

function insertionSort(lista)
{
    for(let atual = 0; atual < lista.length; atual++)
    {
        let itemSendoAnalisado = atual;

        while(itemSendoAnalisado > 0 && lista[itemSendoAnalisado].preco < lista[itemSendoAnalisado - 1].preco)
        {
            let itemAtual = lista[itemSendoAnalisado];
            let itemAnterior = lista[itemSendoAnalisado -1];

            lista[itemSendoAnalisado] = itemAnterior;
            lista[itemSendoAnalisado - 1] = itemAtual;

            itemSendoAnalisado--;
        }
    }

    console.log(lista);
}

insertionSort(livros);