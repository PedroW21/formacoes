class User
{
    #nome  // declaração de uma propriedade que deve ser privada
    #sobrenome
    #email
    #nasc
    #role
    #ativo
    constructor(nome, sobrenome, email, nasc, role, ativo = true)
    {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nasc = nasc;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }
    // boas praticas de OO - SOLID / É necessário essa cacetada de get (por causa do Principio da Responsabilidade Unica)
    get nome()
    {
        return this.#nome;
    }

    get sobrenome()
    {
        return this.#sobrenome;
    }

    get email()
    {
        return this.#email;
    }

    get nasc()
    {
        return this.#nasc;
    }

    get role()
    {
        return this.#role;
    }

    get ativo()
    {
        return this.#ativo;
    }

    set nome(novoNome)
    {
        if(novoNome == " ") throw new Error("Nome vazio não é permitido! Insira um nome que não seja vazio");

        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(" ");

        this.#nome = novoNome;
        this.#sobrenome = sobrenome;
    }

    // Deletei o metodo privado pq era so para exemplificar

    exibirInfos()
    {
        return `${this.nome} | ${this.email} | ${this.nasc} | ${this.role} | ${this.ativo}`; // estamos utilizando os getters aqui
    }
}

export default User;