const nomes = ["Samuel", "Gustavo", "Gio", "Ana"];

// Funções callbacks so recebem como parametro uma função, exemplo abaixo

// mostraNomes = nome => console.log(nome); 

nomes.forEach(mostraNomes);

function mostraNomes (nome) {
    console.log(nome)
}

mostraNomes();