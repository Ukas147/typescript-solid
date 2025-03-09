const criarContaBancaria = (saldoInicial: number) => {
  let saldo = saldoInicial; // Variável privada

  return {
    depositar: (valor: number) => {
      saldo += valor;
      console.log(`💰 Depósito de R$${valor}. Saldo atual: R$${saldo}`);
    },
    sacar: (valor: number) => {
      if (valor > saldo) {
        console.log("❌ Saldo insuficiente!");
        return;
      }
      saldo -= valor;
      console.log(`💸 Saque de R$${valor}. Saldo atual: R$${saldo}`);
    },
    consultarSaldo: () => {
      console.log(`📊 Saldo atual: R$${saldo}`);
    }
  };
};

// 🏦 Criando conta bancária
const minhaConta = criarContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(300);
minhaConta.consultarSaldo();
// ❌ Não conseguimos acessar saldo diretamente: console.log(minhaConta.saldo); // Erro!