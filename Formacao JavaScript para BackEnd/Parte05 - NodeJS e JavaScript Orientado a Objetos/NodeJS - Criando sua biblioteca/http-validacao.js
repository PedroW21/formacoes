import fetch from "node-fetch";

async function checarStatus(arrayDeURLs)
{
    const arrayStatus = await Promise.all(arrayDeURLs.map(async url => {
        const res = await fetch(url); // res = response
        return res.status;
    }));
    return arrayStatus;
}

function gerarArrayDeURLs(arrayDeLinks)
{
    return arrayDeLinks.map(objetoLink => Object.values(objetoLink).join()); // sempre retorna um array o map :D
}

async function validarURLs(arrayDeLinks)
{
    const links = gerarArrayDeURLs(arrayDeLinks);
    const statusLinks = await checarStatus(links);

    return statusLinks;
}

export default validarURLs;