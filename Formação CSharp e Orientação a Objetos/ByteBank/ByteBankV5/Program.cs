using ByteBankV5;

Cliente pierre = new Cliente();

pierre.nome = "Pierre";
pierre.profissao = "Diplomata";
pierre.cpf = "123456789";

ContaCorrente conta = new ContaCorrente();

conta.titular = pierre;
conta.saldo = 1000;
conta.agencia = 001;
conta.numero = 43124;

Console.WriteLine(pierre.nome);
Console.WriteLine(conta.titular.nome);