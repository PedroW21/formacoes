let alunos = ["Joao", "Juliana", "Caio", "Ana", "Matheus", "Tobias", "Arnaldo"];

let mediaAlunos = [10, 8.9, 9, 6.5, 7, 5, 8];

const listaNotasEAlunos = [alunos, mediaAlunos];

// Antigo metodo
// console.log(` Olá!!! ${listaNotasEAlunos[0][0]} sua nota foi ${listaNotasEAlunos[1][0]} e com isso você passou de ano!`);

verificaPassouAno = (nomeDoAluno) => {

    if(listaNotasEAlunos[0].includes(nomeDoAluno)) {
        
        let indiceElemento = listaNotasEAlunos[0].indexOf(nomeDoAluno);

        if(listaNotasEAlunos[1][indiceElemento] >= 6) {
            return "Olá " + listaNotasEAlunos[0][indiceElemento] + "!!! você passou de ano, parabéns!! Sua nota foi: " + listaNotasEAlunos[1][indiceElemento];
        }
        else {
            return "Olá " + listaNotasEAlunos[0][indiceElemento] + "!!! vocẽ não passou de ano =(, mas não se preocupe, procure a secretaria para ver se pode ficar de dependência!! A sua nota foi: " + listaNotasEAlunos[1][indiceElemento];
        }
    }
    else {
        return "Aluno não encontrado!!"
    }

}

console.log(verificaPassouAno("Tobias"));