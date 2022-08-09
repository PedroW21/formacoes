class User
{
    constructor(nome, email, nasc, role, ativo = true)
    {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
        this.role = role || "estudante";
        this.ativo = ativo;
    }

    exibirInfos()
    {
        return `${this.nome} | ${this.email}`;
    }
}

const novoUser = new User("Fabin", "f@f.com", "2000-01-12");

console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser)); //true
