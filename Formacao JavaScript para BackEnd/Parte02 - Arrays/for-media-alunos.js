
let notas = [6.5, 8.9, 5.9 , 9];

let notasSomadas = 0;

for(i= 0; i<notas.length; i++) {
    notasSomadas += notas[i]; 
}

let mediaNotas = notasSomadas /notas.length;

console.log(mediaNotas.toFixed(1));

//notas[i] = ele que acessa o array baseado no index do for (começa em 0);