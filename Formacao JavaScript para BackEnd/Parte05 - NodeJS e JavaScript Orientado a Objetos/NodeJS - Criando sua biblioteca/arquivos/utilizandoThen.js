import chalk from 'chalk';
import fs from 'fs'; // ESM - ECMAScript module type | fs = file system

function tratarErro(erro)
{
    throw new Error(chalk.red(erro.code, "Arquivo não existe/não encontrado no diretorio"));
}

// refatorando a função de pegarArquivo que pode ser achada em tratamentoDeErros.js

function pegarArquivo(caminhoDoArquivo)
{
    const encoding = 'utf8';

    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto))) // o then recebe o produto da promessa (faça x e entao (depois de processar tudo que anteriomente foi pedido) depois faça o y)
    .catch((erro) => tratarErro(erro));

}

let filePath = "./arquivos/texto.md";

pegarArquivo(filePath);