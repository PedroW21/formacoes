let cliente = {
  nome: "Pedro",
  idade: 19,
  cpf: "030.945.341-67", //Meramente Ilustrativo 😆
  email: "pedro@contato.com",
  fones: ["1243-54321", "6776-54321"],
  dependentes: [
    {
      nome: "Ikki Kurogane",
      parentesco: "Primo",
      dataNasc: "13/12/2014",
    },

    {
      nome: "Kaka Junior",
      parentesco: "Irmão",
      dataNasc: "13/12/2004",
    },
  ],

  saldo: 10000,

  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio = "";

for (let dado in cliente) {
  if (typeof cliente[dado] === "object" || typeof cliente[dado] === "function") {
    continue;
  } else {
    relatorio += `${dado} ==>  ${cliente[dado]} \n`;
  }
}

console.log(relatorio);
