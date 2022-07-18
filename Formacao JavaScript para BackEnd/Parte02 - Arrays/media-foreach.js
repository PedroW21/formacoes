let notas = [6.5, 8.9, 5.9 , 9];

let notasSomadas = 0;


//callback 

notas.forEach(notas => {
    notasSomadas += notas;
})

calcMedia = notasSomadas / notas.length;

console.log(calcMedia);

// Foreach não retorna nenhum dado