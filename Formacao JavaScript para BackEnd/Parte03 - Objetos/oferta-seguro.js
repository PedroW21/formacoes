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
  
  
  function ofereceSeguro(objeto) {
    
    let procuraDependentes = Object.keys(objeto); //lista as "chaves" do objeto
  
    if (procuraDependentes.includes("dependentes"))    // Retorna true ou false
      {
  
      console.log(`Oferta de Seguro de Vida para ${objeto.nome}`);
    } else {
      console.log(`O Sr(a) ${objeto.nome} não tem dependentes!!!`);
    }
  }
  
  // Outros metodos: Object.entries / Object.values
  
  ofereceSeguro(cliente);
  
  
  