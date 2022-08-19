using ByteBank;
using ByteBank.Funcionarios;
using ByteBank.Sistemas;

//CalcularBonificacao();

UsarSistema();

static void UsarSistema()
{
    SistemaInterno sistemaInterno = new SistemaInterno();

    Diretor andre = new Diretor(4500, "333.222.111-99");
    andre.Nome = "Andre";
    andre.Senha = "123";

    GerenteDeConta steffany = new GerenteDeConta(4800, "999.333.444-11");
    steffany.Nome = "Steffany";
    steffany.Senha = "abc";

    ParceiroComercial parceiroA = new ParceiroComercial();
    parceiroA.Senha = "321";

    sistemaInterno.Logar(andre, "123");
    sistemaInterno.Logar(steffany, "abc");
    sistemaInterno.Logar(parceiroA, "321");


}

static void CalcularBonificacao()
{
    GerenciadorBonificacao gerenciadorBonificacao = new GerenciadorBonificacao();

    Designer pierre = new Designer(3000 ,"123.456.789.11");
    pierre.Nome = "Pierre";

    Diretor hugo = new Diretor(5000, "987.654.321-12");
    hugo.Nome = "Hugo";

    Auxiliar jefferson = new Auxiliar(2000, "887.664.553-13");
    jefferson.Nome = "Jefferson";

    GerenteDeConta carol = new GerenteDeConta(4000, "119.228.337-14");
    carol.Nome = "Carol";

    Desenvolvedor alessandro = new Desenvolvedor("878.969.353-15");
    alessandro.Nome = "Alessandro";

    gerenciadorBonificacao.Registrar(pierre);
    gerenciadorBonificacao.Registrar(hugo);
    gerenciadorBonificacao.Registrar(jefferson);
    gerenciadorBonificacao.Registrar(carol);
    gerenciadorBonificacao.Registrar(alessandro);

    Console.WriteLine("Total de bonificações do mês: " + gerenciadorBonificacao.GetTotalBonificacao());

}