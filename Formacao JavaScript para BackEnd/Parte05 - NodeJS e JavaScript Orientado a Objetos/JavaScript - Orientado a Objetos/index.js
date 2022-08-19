import User from "./User.js";
import Admin from "./Admin - Heranca.js";
import Docente from "./Docente.js";

const novoUser = new User("Fabin", "f@f.com", "2000-01-12");
console.log(novoUser.exibirInfos());


function mostrarAdmEDocente()
{
    const novoAdmin = new Admin("Clebin", "c@c.com", "1998-06-08");
    console.log(novoAdmin.criarCurso("Unity", 100));
    console.log(novoAdmin.exibirInfos());
    
    console.log("");
    
    const novoDocente = new Docente("Popeye", "popeye@espinafre.com", "1929-01-17");
    console.log(novoDocente.exibirInfos());
    console.log(novoDocente.aprovarEstudante("Olivia Palito", "Espinafrar"));
}






