const {edGalho, edFolha} = require("./arrays");

function juntaListas(lista1, lista2)
{
    let listaFinal = [];
    let posicaoListaFinal = 0;    

    let idxLista1 = 0;
    let idxLista2 = 0;

    while(idxLista1 < lista1.length && idxLista2 < lista2.length)
    {
        let produtoAtualLista1 = lista1[idxLista1];
        let produtoAtualLista2 = lista2[idxLista2];

        //console.log(produtoAtualLista1.preco  + "\n" + produtoAtualLista2.preco)

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) 
        {
            listaFinal[posicaoListaFinal] = produtoAtualLista1;
            idxLista1++;
        }
        else
        {
            listaFinal[posicaoListaFinal] = produtoAtualLista2;
            idxLista2++;
        }

        posicaoListaFinal++;
    }

    while (idxLista1 < lista1.length)
    {
        listaFinal[posicaoListaFinal] = lista1[idxLista1];
        idxLista1++;
        posicaoListaFinal++;
    }

    while (idxLista2 < lista2.length) // caso tenha elementos que ainda não foram movidos, esse çaõ fara isso
    {
        listaFinal[posicaoListaFinal] = lista2[idxLista2];
        idxLista2++;
        posicaoListaFinal++;
    }


    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));

