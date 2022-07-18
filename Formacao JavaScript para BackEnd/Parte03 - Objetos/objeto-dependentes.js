let cliente = {
    nome: "Pedro",
    idade: 19,
    cpf: "030.945.341-67", //Meramente Ilustrativo 😆
    email: "pedro@contato.com",
    fones: ["1243-54321", "6776-54321"],
    dependentes: [{
        nome: "Ikki Kurogane",
        parentesco: "Primo",
        dataNasc: "13/12/2014"
    }]
}

console.log(cliente)

cliente.dependentes.push({
    nome: "Kaka Junior",
    parentesco: "Irmão",
    dataNasc: "13/12/2004"
})

console.log(cliente)


let maisNovo = cliente.dependentes.filter(filhoNovo => filhoNovo.dataNasc === "13/12/2004");

console.log(maisNovo[0].nome);