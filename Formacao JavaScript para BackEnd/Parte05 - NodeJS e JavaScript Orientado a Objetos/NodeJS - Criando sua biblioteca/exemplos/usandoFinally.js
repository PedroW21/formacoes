import chalk from 'chalk';
import fs from 'fs'; 

function tratarErro(erro)
{
    throw new Error(chalk.red(erro.code, "Arquivo não existe/não encontrado no diretorio"));
}

async function pegarArquivo(caminhoDoArquivo)
{
    const encoding = "utf-8";
    try 
    {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.green(texto));  
    }
    catch(erro) 
    {
        tratarErro(erro);
    }
    finally
    {
        console.log(chalk.yellow("\nOperação finalizada!\n"));
    }
    
}

let filePath = "./arquivos/texto.md";

pegarArquivo(filePath);