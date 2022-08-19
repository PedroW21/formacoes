using static System.Console;

WriteLine("Executando Projeto 7 - Aprendendo sobre Condicionais\n");

//int idadePierre = 19;
int idadePierre = 17;

int acompanhando = 2;

if (idadePierre >= 18)
{
    WriteLine("Parabéns! Agora pode ver filmes de terror.");
}
else
{
    if (acompanhando != 0)
    {
        WriteLine("Alguém veio pra te segurar no colo se você se assustar é? Hmm, pode entrar.");
    }
    else
    {
        WriteLine("Ih rapaz, vai da não, você é muito jovial pra isso.");
    }
}