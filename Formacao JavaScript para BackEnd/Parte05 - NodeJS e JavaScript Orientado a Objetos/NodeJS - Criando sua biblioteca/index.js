import chalk from 'chalk';
import fs from 'fs'; 

function extrairLinks(texto)
{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;

    const arrayResultados = [];
    let temp;

    while((temp = regex.exec(texto)) !== null) // quando a variavel temp for vazia (ou seja, não ter mais atribuições da regex.exec (fim das ocorrencias))
    {
        arrayResultados.push({[temp[1]] : temp[2]}); // aqui empurra um obj em que se tem o grupo 1 e 2 da regex (que queriamos) | PS: a chave do está entre "[]" pois só assim que o JS entenderá que queremos utilizar isso como sua chave
    }

    return arrayResultados;
}

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
        console.log(extrairLinks(texto));   
    }
    catch(erro) 
    {
        tratarErro(erro);
    }
    
}

//let filePath = "./arquivos/texto1.md";

//pegarArquivo(filePath);

export default pegarArquivo;