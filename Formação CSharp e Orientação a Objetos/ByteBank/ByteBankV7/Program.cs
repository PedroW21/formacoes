using ByteBankV7;

ContaCorrente conta = new ContaCorrente();

conta.Saldo = 10;
Console.WriteLine(conta.Saldo);

Cliente cliente = new Cliente();
cliente.Nome = "Pierre";
cliente.Cpf = "123.456.789-11";
cliente.Profissao = "Diplomata";

conta.Titular = cliente;

Console.WriteLine(conta.Titular);
Console.WriteLine(conta.Saldo);