const clientes = [
  {
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
  },
  {
    nome: "Marie",
    idade: 21,
    cpf: "884.045.391-77", //Meramente Ilustrativo 😆
    email: "marie@contato.com",
    fones: ["1243-54321", "6776-54321"],
    dependentes: [
      {
        nome: "Kodashi Kashinkoji",
        parentesco: "filho",
        dataNasc: "29/02/2007",
      },

      {
        nome: "Tanjiro Yusuke",
        parentesco: "Irmão",
        dataNasc: "28/08/2005",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

console.table(listaDependentes);
