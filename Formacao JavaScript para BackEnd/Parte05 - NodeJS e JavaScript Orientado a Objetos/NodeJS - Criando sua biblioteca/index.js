import chalk from 'chalk';
import fs from 'fs'; // ESM - ECMAScript module type | fs = file system

function tratarErro(erro)
{
    throw new Error(chalk.red(erro.code, "Arquivo não existe/não encontrado no diretorio"));
}


function pegarArquivo(caminhoDoArquivo)
{
    const encoding = 'utf8';

    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto))) 
    .catch((erro) => tratarErro(erro));

}

let filePath = "./arquivos/texto.md";

pegarArquivo(filePath);