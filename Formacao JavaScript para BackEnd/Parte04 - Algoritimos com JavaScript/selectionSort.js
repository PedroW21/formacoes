const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) 
{
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("Posicao atual:", atual);
    console.log("Livro atual:", livroAtual);
    let livroMenorPreco = livros[menor];
    console.log("Livro de menor preço:", livroMenorPreco, "\n");

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);