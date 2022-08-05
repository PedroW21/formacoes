import pegarArquivo from "../index.js";

const arrayResult = [ 
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe("pegaArquivo::", () => { 
    it("deve ser uma função", () => {
        expect(typeof pegarArquivo).toBe("function"); // toBe - compara tipos primitivos
    });

    it("deve retornar array com resultados", async () => {
        const resultado = await pegarArquivo("C:/Users/Pedro Verner/Desktop/Formacoes e Bootcamps/formacoes/Formacao JavaScript para BackEnd/Parte05 - NodeJS e JavaScript Orientado a Objetos/NodeJS - Criando sua biblioteca/test/arquivos/texto1.md");
        expect(resultado).toEqual(arrayResult); // compara uma estrutura de dados
    });

 });
