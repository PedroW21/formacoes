import User from "./User.js";

class Admin extends User
{
    constructor(nome, sobrenome, email, nasc, role = "admin", ativo = true)
    {
        super(nome, sobrenome, email, nasc, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas)
    {
        return `Curso ${nomeDoCurso} criado com sucesso! Tem ${vagas} vagas.`;
    }

    exibirInfos()
    {
        return `${this.nome} | ${this.email} | ${this.ativo}`;
    }
}

export default Admin;