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

    #montaObjUser()
    {
        return ({
            nome: this.#nome,
            email: this.#email,
            nasc: this.#nasc,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos()
    {
        const objUser = this.#montaObjUser();
        return `${objUser.nome} | ${objUser.email} | ${objUser.nasc} | ${objUser.role} | ${objUser.ativo}`;
    }
}

export default User;