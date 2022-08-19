using static System.Console;

WriteLine("Executando Projeto 4 - Explorando outros tipos de Variáveis e Realizando Conversões\n");

double salario = 9874.93;

int salarioInteiro = (int)salario; // realizando um casting

WriteLine($"Salário sem centavos: R$ {salarioInteiro}");

// Temos um long que ocupa 64bits, e um short que é 16bits
// Para usar float explicitamente é necessário colocar um f, Ex: float preço = 2.99f;