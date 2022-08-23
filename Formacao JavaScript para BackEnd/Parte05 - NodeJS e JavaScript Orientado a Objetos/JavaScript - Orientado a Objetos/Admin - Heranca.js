import User from "./User.js";

class Admin extends User
{
    constructor(nome, email, nasc, role = "admin", ativo = true)
    {
        super(nome, email, nasc, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas)
    {
        return `Curso ${nomeDoCurso} criado com sucesso! Tem ${vagas} vagas.`;
    }
}

export default Admin;