import User from "./User.js";

class Docente extends User
{
    constructor(nome, email, nasc, role="docente", ativo=true)
    {
        super(nome, email, nasc, role, ativo);
    }

    aprovarEstudante(estudante, curso)
    {
        return `Estudante ${estudante} aprovado(a) no curso ${curso}.`;
    }

    exibirInfos()
    {
        return `${this.nome} | ${this.email} |  ${this.role} | ${this.ativo}`;
    }
}

export default Docente;