class User
{
    #nome  // declaração de uma propriedade que deve ser privada
    #email
    #nasc
    #role
    #ativo
    constructor(nome, email, nasc, role, ativo = true)
    {
        this.#nome = nome;
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
        this.#nome = novoNome;
    }

    // Deletei o metodo privado pq era so para exemplificar

    exibirInfos()
    {
        return `${objUser.nome} | ${objUser.email} | ${objUser.nasc} | ${objUser.role} | ${objUser.ativo}`;
    }
}

export default User;