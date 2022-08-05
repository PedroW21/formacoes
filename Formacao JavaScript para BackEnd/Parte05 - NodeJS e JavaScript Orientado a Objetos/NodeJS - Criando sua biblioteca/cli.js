import chalk from 'chalk';
import pegarArquivo from "./index.js";
import validarURLs from "./http-validacao.js";

const caminho = process.argv;

async function processarTexto(caminhoDoArquivo)
{
    const resultado = await pegarArquivo(caminhoDoArquivo[2]);

    if(caminhoDoArquivo[3] === "validar") 
    {
        console.log(chalk.yellow("Links Validados"), validarURLs(resultado));
    }
    else 
    {
        console.log(chalk.yellow("Lista de Links"), resultado);
    }
}

processarTexto(caminho);