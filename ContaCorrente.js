export class contaCorrente {
    agencia;
    cliente;
    static contador = 0;
    _saldo = 0;


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }
    }
    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        contaCorrente.contador = contaCorrente.contador + 1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}