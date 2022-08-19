using static System.Console;

WriteLine("Executando Projeto 12 - Calculando o Rendimento de longo prazo\n");

double valorInvestido = 10000;
double fatorRendimento = (0.125 / 12) +1;

for (int contadorAno = 0; contadorAno < 5; contadorAno++)
{
    for (int contadorMes = 0; contadorMes < 12; contadorMes++)
    {
        valorInvestido *= fatorRendimento;
    }
    fatorRendimento += 0.001;
}

WriteLine($"Ao termino do investimento você tera R$ {valorInvestido}");
