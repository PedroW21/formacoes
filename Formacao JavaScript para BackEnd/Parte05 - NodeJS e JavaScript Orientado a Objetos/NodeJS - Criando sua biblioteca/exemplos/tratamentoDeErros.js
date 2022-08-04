import chalk from 'chalk';
import fs from 'fs'; // ESM - ECMAScript module type | fs = file system

function tratarErro(erro)
{
    throw new Error(chalk.red(erro.code, "Arquivo não existe no diretorio"));
}

function pegarArquivo(caminhoDoArquivo)
{
    const encoding = "utf-8";

    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        
        if(erro) tratarErro(erro);

        console.log(chalk.yellow(texto));
    });
}

pegarArquivo("./arquivos/texto1.md");
