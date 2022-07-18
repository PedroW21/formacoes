// Calcular Média Padrao

/*
let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(media) */

// Metodo Array


// const notas = [10, 6.5, 8, 7.5];

// let media = (notas[0]-notas[3] / notas.length);

// console.log(media)

// Exercicio Final do Curso

const notas = [10, 6.5, 8, 7.5];
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media);