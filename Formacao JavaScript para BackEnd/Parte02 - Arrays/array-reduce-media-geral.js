const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6 ,5 ,8 ,9 ,5 ,6];
const salaPython = [7, 3.8, 8, 9.2];

function mediaEscola (todasNotas) {
    let somaNotas = todasNotas.reduce((guardaValores, valorAtual)=>  valorAtual + guardaValores,0);
    return somaNotas / todasNotas.length;
    
}

console.log(`A média das salas são: ${mediaEscola(salaJS)}, ${mediaEscola(salaJava)}, ${mediaEscola(salaPython)}, sendo respectivamente das seguintes turmas: JS, Java e Python`)


