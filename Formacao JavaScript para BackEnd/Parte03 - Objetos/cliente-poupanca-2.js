class Cliente {
    
    constructor(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
  
}

class ClientePoupanca extends Cliente{

    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo) 
            this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

let pierre = new ClientePoupanca("Pierre", "pedro@pedro.com", "44466633311", 100, 250);

console.table(pierre);


pierre.depositar(1500)
pierre.depositarPoupanca(2000);

console.table(pierre);

