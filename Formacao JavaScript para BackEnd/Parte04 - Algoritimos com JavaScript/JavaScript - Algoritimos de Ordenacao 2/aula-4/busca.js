const listaLivros = require("./arrayOrdenado");

function busca(array, deOndeComeca, ateOndeVai, valorBuscado)
{
    const meio = Math.floor((deOndeComeca + ateOndeVai) / 2);
    const atual = array[meio];

    if(deOndeComeca > ateOndeVai) return -1; // caso ele não acha oq procuramos.

    if(valorBuscado === atual.preco) return meio;

    if(valorBuscado < atual.preco)
    {
        return busca(array, deOndeComeca, meio-1, valorBuscado);
    }

    if(valorBuscado > atual.preco)
    {
        return busca(array, meio+1, ateOndeVai, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 27)); // idx = 8
