/**
 * 🚀 CÓDIGO AVANÇADO USANDO ENCAPSULAMENTO EM TYPESCRIPT 🚀
 * ======================================================
 *
 * 🔥 O que este código faz?
 *  - Simula um **sistema bancário**, onde cada conta possui saldo privado.
 *  - Usa **Encapsulamento** para proteger o saldo da conta, impedindo acesso externo direto.
 *  - Garante que **as operações só podem ser feitas através de métodos seguros**.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Encapsulamento com Closures** → O saldo da conta é mantido dentro da função e não pode ser acessado externamente.
 * 2️⃣ **Métodos Públicos e Privados** → Apenas `depositar()`, `sacar()` e `consultarSaldo()` podem modificar ou exibir o saldo.
 * 3️⃣ **Segurança e Proteção de Dados** → Nenhuma outra parte do código pode modificar diretamente o saldo da conta.
 * 4️⃣ **Evita Mutação Externa** → Como o saldo é privado, ele só pode ser alterado por funções controladas.
 * 5️⃣ **Uso de Funções Puramente Funcionais** → Todas as operações acontecem dentro da closure, garantindo imutabilidade fora dela.
 *
 * 💡 O que torna este código difícil de entender?
 *  - Usa **closures avançadas** para criar variáveis privadas sem classes.
 *  - Não há objetos expostos diretamente, apenas funções que interagem com um estado interno escondido.
 *  - O saldo da conta não pode ser acessado nem modificado sem passar pelos métodos corretos.
 *
 * 🎯 O objetivo é mostrar como aplicar **Encapsulamento Avançado** em TypeScript sem classes!
 */

/// **Criando um sistema de conta bancária totalmente encapsulado**
const criarContaBancaria = (saldoInicial: number) => {
  let saldo = saldoInicial; // 🔒 Variável privada, inacessível fora da função

  return {
    depositar: (valor: number) => {
      if (valor <= 0) return console.log("❌ Depósito inválido!");
      saldo += valor;
      console.log(`💰 Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: R$${saldo.toFixed(2)}`);
    },
    sacar: (valor: number) => {
      if (valor > saldo) return console.log("❌ Saldo insuficiente!");
      saldo -= valor;
      console.log(`💸 Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${saldo.toFixed(2)}`);
    },
    consultarSaldo: () => {
      console.log(`📊 Saldo atual: R$${saldo.toFixed(2)}`);
    }
  };
};

/// 🔥 Criando uma conta bancária
const minhaConta = criarContaBancaria(1000);

/// 🏦 Testando operações bancárias
minhaConta.depositar(500);
minhaConta.sacar(300);
minhaConta.consultarSaldo();

// ❌ Tentativa de acessar saldo diretamente (não funciona)
// console.log(minhaConta.saldo); // Erro! Não é possível acessar `saldo` diretamente.