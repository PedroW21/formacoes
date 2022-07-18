function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = (valor) => {
    return (this.saldo += valor);
  };
}

clientePoupanca = function (nome, cpf, email, saldo, saldoPoupanca) {
  cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoupanca = saldoPoupanca;
};

const vitao = new clientePoupanca(
  "Victor",
  "23498765431",
  "vitao@tutanota.com",
  10000,
  10.98547936
);

console.table(vitao);

clientePoupanca.prototype.depositarPoupanca = function (valor) {  // Define uum novo comportamento para o objeto "mãe (não raiz)"
    this.saldoPoupanca += valor;
}

vitao.depositarPoupanca(0.1)

console.table(vitao);

