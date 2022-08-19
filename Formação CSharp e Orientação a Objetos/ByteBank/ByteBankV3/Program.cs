
ContaCorrente contaGabriel = new ContaCorrente();

contaGabriel.titular = "Gabriel";
contaGabriel.agencia = 003;
contaGabriel.numero = 399599;


ContaCorrente contaFernanda = new ContaCorrente();

contaGabriel.titular = "Fernanda";
contaGabriel.agencia = 003;
contaGabriel.numero = 499699;

int val1 = 3;
int val2 = 3;

Console.WriteLine($"Comparação por referencia: {contaFernanda == contaGabriel}");
Console.WriteLine($"Comparação por valor: {val1 == val2}");