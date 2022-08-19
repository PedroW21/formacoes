using static System.Console;

WriteLine("Executando Projeto 11 - Calculando o Rendimento de uma Poupança Parte 2\n");


double valorInvestido = 12500;
double rendimentoPoupanca = 0.125 / 12;
double valorRendimento;
double valorPoupanca;

for (int contadorMes = 1; contadorMes <= 12; contadorMes++)
{
    valorPoupanca = valorInvestido;
    valorInvestido *= 1+rendimentoPoupanca;
    valorRendimento = valorInvestido - valorPoupanca;
    WriteLine($"O valor que tem na conta desse mês é R$ {valorPoupanca} e tendo ficado {contadorMes} mes(es) na poupança, gerou R$ {valorRendimento} de rendimento");
}


