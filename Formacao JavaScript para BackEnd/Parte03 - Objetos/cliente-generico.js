function cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;

  this.depositar = function (valor) {
    return this.saldo += valor;
  };
}


const Pierre = new cliente("Pierre Danté", "00199769107", "pierre@contato.com", "10000");

console.table(Pierre);
