using static System.Console;

WriteLine("Executando Projeto 10 - Calculando o Rendimento de uma Poupança\n");


double valorInvestido = 12500;
double rendimentoPoupanca = 0.125 / 12;
int contadorMes = 1;
double valorRendimento;
double valorPoupanca;

while(contadorMes <= 12)
{
    valorPoupanca = valorInvestido;
    valorInvestido = valorInvestido + valorInvestido * rendimentoPoupanca;
    valorRendimento = valorInvestido - valorPoupanca;
    WriteLine($"O valor que tem na conta desse mês é R$ {valorPoupanca} e tendo ficado {contadorMes} mes(es) na poupança, gerou R$ {valorRendimento} de rendimento");
    contadorMes++;
}

