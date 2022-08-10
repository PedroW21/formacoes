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

const novoAdmin = new Admin("Clebin", "c@c.com", "1998-06-08");
//console.log(novoAdmin.criarCurso("Unity", 100));
//console.log(novoAdmin);
//console.log(novoAdmin.exibirInfos());

export default Admin;