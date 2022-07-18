let notas = [10, 9, 8, 7, 6];

let notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota) // ++ antes pois é necessário primeiro somar para depois retornar nota (if ternario)

console.log(notasAtualizadas);

// O map retorna valores