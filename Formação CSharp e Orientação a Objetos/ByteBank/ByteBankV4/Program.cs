ContaCorrente contaPierre = new ContaCorrente();

contaPierre.titular = "Pierre";
contaPierre.saldo = 1000.33;
Console.WriteLine(contaPierre.saldo);

bool resultadoSaque = contaPierre.Sacar(0.33) ;

//contaPierre.Sacar(1);

Console.WriteLine($"O seu saldo é: {contaPierre.saldo}");
Console.WriteLine(resultadoSaque);

contaPierre.Depositar(2500);
Console.WriteLine($"O seu saldo é: {contaPierre.saldo}");

ContaCorrente contaJuliana = new ContaCorrente();

contaJuliana.titular = "Juliana";
Console.WriteLine("Saldo da Juliana: " + contaJuliana.saldo);

bool resultadoTransferencia = contaPierre.Transferir(800, contaJuliana);

Console.WriteLine("Resultado da transferencia: " + resultadoTransferencia);
Console.WriteLine("Saldo do Pierre: " + contaPierre.saldo);
Console.WriteLine("Saldo da Juliana: " + contaJuliana.saldo);


