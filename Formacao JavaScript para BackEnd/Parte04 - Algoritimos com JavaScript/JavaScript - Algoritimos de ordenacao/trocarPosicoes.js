function trocar(lista, itemSendoAnalisado)
{
    let itemAtual = lista[itemSendoAnalisado];
    let itemAnterior = lista[itemSendoAnalisado -1];

    lista[itemSendoAnalisado] = itemAnterior;
    lista[itemSendoAnalisado - 1] = itemAtual;
}

module.exports = trocar;