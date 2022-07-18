class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

let victor = new Cliente("Victor", "victor@tutan.com", "44466633311", 10);

console.table(victor);