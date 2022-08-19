using static System.Console;

WriteLine("Executando Projeto 13 - Fazendo um For encadeado\n");

for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
{
    for (int contadorColuna = 0; contadorColuna < 10; contadorColuna++)
    {
        Write("*");
        if (contadorColuna >= contadorLinha) break;
    }
    WriteLine();
}

// Outra forma de fazer

for (int contadorLinha = 0; contadorLinha < 10; contadorLinha++)
{
    for (int contadorColuna = 0; contadorColuna <= contadorLinha; contadorColuna++)
    {
        Write("*");
    }
    WriteLine();
}