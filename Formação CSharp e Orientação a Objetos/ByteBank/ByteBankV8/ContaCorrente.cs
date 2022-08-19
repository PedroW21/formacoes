using ByteBankV8;

public class ContaCorrente
{
    public Cliente Titular  { get; set; }

    public static int TotalDeContasCriadas { get; private set; }    // static - algo compartilhado da classe para todos os objs (e somente pertence a classe)

    private int _agencia;

    public int Agencia
    {
        get
        {
            return Agencia;
        }
        set
        {
            if (value <= 0) return;
            _agencia = value;
        }
    }
    public int Numero { get; set; }

    private double _saldo = 100;

    public double Saldo
    {
        get
        {
            return _saldo;
        }
        set
        {
            if (value < 0) return;

            _saldo += value;
        }
    }

    public ContaCorrente(int agencia, int numero) // isso é um construtor
    {
        Agencia = agencia;
        Numero = numero;

        TotalDeContasCriadas++;
    }

    public bool Sacar(double valor)
    {
        if (_saldo < valor) return false;
        
        _saldo -= valor;
        return true;
    
    }

    public void Depositar(double valor)
    {
        _saldo += valor;
    }

    public bool Transferir(double valor, ContaCorrente contaDestino)
    {
        if(_saldo < valor) return false;
       
        _saldo -= valor;
        contaDestino.Depositar(valor);
        return true;
    }
}

