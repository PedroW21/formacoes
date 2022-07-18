let alunos = ["Aaron", "Abel", "Abelardo", "Abigail", "Abílio", "Abner"];

let mediaAlunos = [10, 8.9, 9, 6.5, 7, 5];

const alunosEMedias= [alunos, mediaAlunos];

const exibeNomeNota = (nomeDoAluno)  => {
    if (alunosEMedias[0].includes(nomeDoAluno)) {
        let indice = alunosEMedias[0].indexOf(nomeDoAluno)

        return alunosEMedias[0][indice] + " sua media é " + alunosEMedias[1][indice];
    }
    else{
        return "Aluno não encontrado!";
    }
}

console.log(exibeNomeNota("Abílio"));

// Includes = retorna booleano
// indexOf = retorna o numero da posição do elemento no array