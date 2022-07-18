let cliente = {
    nome: "Pedro",
    idade: 19,
    cpf: "030.945.341-67", //Meramente Ilustrativo 😆
    email: "pedro@contato.com",
    fones: ["1243-54321", "6776-54321"]
}

cliente.dependentes = {
    nome: "Ikki Kurogane",
    parentesto: "Primo",
    dataNasc: "13/12/2014"
}

console.log(cliente)

cliente.dependentes.parentesco = "Primo de 2o Grau";

console.log(cliente);