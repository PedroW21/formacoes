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
}

const novoDocente = new Docente("Popeye", "popeye@espinafre.com", "1929-01-17");

// console.log(novoDocente);
// console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovarEstudante("Olivia Palito", "Espinafrar"));

export default Docente;