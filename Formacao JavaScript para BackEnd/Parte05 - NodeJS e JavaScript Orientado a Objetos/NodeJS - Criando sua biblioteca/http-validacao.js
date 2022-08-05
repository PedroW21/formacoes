import fetch from "node-fetch";

function manejarErros(erro)
{
    throw new Error(erro.message);
}

async function checarStatus(arrayDeURLs)
{
    try
    {
        const arrayStatus = await Promise
        .all(arrayDeURLs
            .map(async url => {
                const res = await fetch(url); // res = response
                return res.status;
        }));
        return arrayStatus;
    }
    catch(erro)
    {
        manejarErros(erro);
    }
}

function gerarArrayDeURLs(arrayDeLinks)
{
    return arrayDeLinks
    .map(objetoLink => Object
        .values(objetoLink).join()); // sempre retorna um array o map :D
}

async function validarURLs(arrayDeLinks)
{
    const links = gerarArrayDeURLs(arrayDeLinks);
    const statusLinks = await checarStatus(links);

    const resultados = arrayDeLinks.map( (objetoLink, indice) => ({
        ...objetoLink, 
        status: statusLinks[indice]
    })) // envolvemos o obj com parenteses pois queremos q a callback retorne um obj

    return resultados;
}

export default validarURLs;