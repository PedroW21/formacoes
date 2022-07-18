
const cpfs = ["12345678911", "98765432100", "99988822233"];

clienteManeiro = {
    nome: "Pedro",
    idade: 19,
    cpf: "030.945.341-67", //Meramente Ilustrativo 😆
    email: "pedro@contato.com"
}

console.log(`Olá! ${clienteManeiro.nome}! Poderia me confirmar seus dados? (`);

console.log("=============&=============");

console.log(`Sua idade é ${clienteManeiro.idade}? \nSeu CPF é ${clienteManeiro.cpf.substring(0, 3)}? Por segurança, mostramos somente os 3 primeiros) \nSeu email é ${clienteManeiro.email}?`);

