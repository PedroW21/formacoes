import chalk from 'chalk';
import fs from 'fs'; // ESM - ECMAScript module type | fs = file system

function pegarArquivo(caminhoDoArquivo)
{
    const encoding = "utf-8";

    fs.readFile(caminhoDoArquivo, encoding, (_, texto) => { // ignorando o erro por enquanto
        console.log(chalk.yellow(texto));
    });
}

pegarArquivo("./arquivos/texto1.md");
