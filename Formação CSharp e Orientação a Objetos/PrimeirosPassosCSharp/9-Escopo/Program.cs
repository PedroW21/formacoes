using static System.Console;

WriteLine("Executando Projeto 9 - Aprendendo sobre Escopos\n");

//int idadePierre = 19;
int idadePierre = 17;
int quantidadePessoas = 1;
bool acompanhando = quantidadePessoas > 0;
bool acompanhadoNuevo = true;
string mensagem; // caso eu tirasse daqui (e colocasse nos ifs abaixo, daria erro de escopo)

if(acompanhadoNuevo)
{
    mensagem = "Você está acompanhado";
}
else
{
    mensagem = "Ih rapaz, vai da não, você precisa estar acompanhado";
}

if (idadePierre >= 18 || acompanhando == true)
{
    WriteLine("Pode entrar meu rapaz.");
    WriteLine(mensagem);
}
else
{
    WriteLine("Ih rapaz, vai da não, você é muito jovial pra isso.");
    WriteLine(mensagem);
}