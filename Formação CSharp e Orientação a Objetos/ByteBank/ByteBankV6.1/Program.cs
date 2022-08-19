using ByteBankV6Sub1;

ContaCorrente conta = new ContaCorrente();

conta.Saldo = 10;
Console.WriteLine(conta.Saldo);

Cliente cliente = new Cliente();
cliente.nome = "Pierre";
cliente.cpf = "123.456.789-11";
cliente.profissao = "Diplomata";

conta.Titular = cliente;

Console.WriteLine(conta.Titular);
Console.WriteLine(conta.Saldo);