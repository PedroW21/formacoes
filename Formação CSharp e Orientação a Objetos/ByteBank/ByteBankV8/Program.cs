using ByteBankV8;

ContaCorrente conta = new ContaCorrente(001, 123469);

conta.Saldo = 10;
Console.WriteLine(conta.Saldo);

Cliente cliente = new Cliente();
cliente.Nome = "Pierre";
cliente.Cpf = "123.456.789-11";
cliente.Profissao = "Diplomata";

conta.Titular = cliente;

Console.WriteLine(ContaCorrente.TotalDeContasCriadas);