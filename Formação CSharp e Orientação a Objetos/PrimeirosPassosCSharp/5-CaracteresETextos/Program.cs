using static System.Console;

WriteLine("Executando Projeto 5 - Caracteres e Textos\n");

//character
// Se eu usasse aspas duplas daria erro pois deixaria de ser entendido como char e sim como um texto
char primeraLetra = 'P';
WriteLine($"Letra: {primeraLetra}");

primeraLetra = (char)(primeraLetra + 1); // Tabela ASCII

WriteLine($"Letra feita o casting: {primeraLetra}\n");

// String - tipo usado para representação de texto

string nome = "Pierre Werner";

WriteLine($"Nome: {nome}");

string biografia = @"
- Nasceu em 1869
- Lutou em várias guerras
- Virou primeiro ministro
";

WriteLine($"Biografia de {nome}:\n {biografia}");


