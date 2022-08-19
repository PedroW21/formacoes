using ByteBankV6;
public class ContaCorrente
{
    public Cliente titular;
    public int agencia;
    public int numero;
    private double saldo = 100;

    public void SetSaldo(double saldo)
    {
        if (saldo < 0) return;
       
        this.saldo += saldo;
        
    }

    public double GetSaldo()
    {
        return saldo;
    }

    public bool Sacar(double valor)
    {
        if (saldo < valor) return false;
        
        saldo -= valor;
        return true;
    
    }

    public void Depositar(double valor)
    {
        saldo += valor;
    }

    public bool Transferir(double valor, ContaCorrente contaDestino)
    {
        if(saldo < valor) return false;
       
        saldo -= valor;
        contaDestino.Depositar(valor);
        return true;
    }
}

