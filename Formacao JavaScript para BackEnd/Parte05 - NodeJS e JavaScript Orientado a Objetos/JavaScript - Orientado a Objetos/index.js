import User from "./User.js";
import Admin from "./Admin - Heranca.js";
import Docente from "./Docente.js";

//const novoUser = new User("Fabin","Da Vila", "f@f.com", "2000-01-12");

const novoAdmin = new Admin("Clebin", "Alves", "c@c.com", "1998-06-08");
console.log(novoAdmin.exibirInfos());

//const novoDocente = new Docente("Popeye", "popeye@espinafre.com", "1929-01-17");

function gettersESetters()
{
    //novoUser.nome = "Fabin Carlao Da Vila";
    //console.log(novoUser.sobrenome);

    //console.log(novoAdmin.nome); // sitnaxe para chamar com o getter (parece que estamos acessando a propriedade direto, mas estamos é usando o getter)
    //novoAdmin.nome = "Ricardão";
    //console.log(novoAdmin.nome); // mesma coisa do getter, parece que estamos acessando direto a propriedade e trocando, mas estamos usando o setter

    //testando o setter no erro

    //novoAdmin.nome = " ";
    //console.log(novoAdmin.nome); 
}

function criarCursoAdm()
{
    const novoAdmin = new Admin("Clebin", "c@c.com", "1998-06-08");
    console.log(novoAdmin.criarCurso("Unity", 100));
    console.log(novoAdmin.exibirInfos());
}

function aprovarEstudanteDocente()
{
    console.log(novoDocente.exibirInfos());
    console.log(novoDocente.aprovarEstudante("Olivia Palito", "Espinafrar"));
}


