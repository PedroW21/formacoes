using static System.Console;

WriteLine("Executando Projeto 8 - Aprendendo sobre Condicionais Parte 2\n");

//int idadePierre = 19;
int idadePierre = 17;

int quantidadePessoas = 1;

bool acompanhando = quantidadePessoas > 0;

if (idadePierre >= 18 || acompanhando == true)
{
    WriteLine("Pode entrar meu rapaz.");
}
else
{
    WriteLine("Ih rapaz, vai da não, você é muito jovial pra isso e não esta acompanhado.");
}