let clienteManeiro = {
    nome: "Pedro",
    idade: 19,
    cpf: "030.945.341-67", //Meramente Ilustrativo 😆
    email: "pedro@contato.com"
}

const chavesConsulta = ["nome", "idade", "cpf", "email"]

console.log(`Então, me confirme se você é o ${clienteManeiro[chavesConsulta[0]]}? \n`); // Um dado

console.log("================ INFORMAÇAO INTERNA ================ \n")

chavesConsulta.forEach(dados => console.log(clienteManeiro[dados])); // Todos os dados