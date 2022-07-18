let nomes = ["Trevor Belmont", "Yuji Itadori", "Kamado Tanjiro", "Lord Meliodas", "Monkey D. Luffy", "Edward Newgate"];
let nivelDePoder = [7.6, 7, 7.9, 9.4, 7.7, 8, 10];

let maisTreinamento = nomes.filter((aluno, indice) => nivelDePoder[indice] < 8);

console.log(`Lhes faltam ódio: ${maisTreinamento}`);