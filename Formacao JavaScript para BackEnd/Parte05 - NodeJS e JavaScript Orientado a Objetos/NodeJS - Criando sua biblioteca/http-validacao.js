function gerarArrayDeURLs(arrayDeLinks)
{
    return arrayDeLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validarURLs(arrayDeLinks)
{
    return gerarArrayDeURLs(arrayDeLinks);
}

export default validarURLs;