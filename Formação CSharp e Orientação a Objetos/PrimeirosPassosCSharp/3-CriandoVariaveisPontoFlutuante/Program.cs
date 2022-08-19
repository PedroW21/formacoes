using static System.Console;

WriteLine("Executando Projeto 3 - Criando Variáveis ponto flutuantes\n");

double salario = 5734.23;

double imposto = 0.225;

double salarioLiquido = salario - (salario * imposto);

WriteLine($"O meu salário bruto é: R$ {salario} mas infelizmente a Receita Federal 'recolhe' {imposto*100}% disso, no final me sobra R$ {salarioLiquido}");