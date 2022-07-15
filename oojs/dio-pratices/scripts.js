class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    getSaldo() {
        return this._saldo;
    }

    setSaldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada!";
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaBancaria extends ContaCorrente {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this.tipo = 'corrente';
        this._cartaoCredito = this.cartaoCredito
    }

    getCartaoCredito() {
        return this._cartaoCredito;
    }

    setCartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}

class ContaBancaria extends ContaPoupanca {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'poupanca';
    }
}

class ContaBancaria extends ContaUniversitaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, saldo);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return "Operação negada!"
        }else{
            this._saldo - valor
        }
    }
}