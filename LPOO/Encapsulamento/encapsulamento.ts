/**
 * 🚀 CÓDIGO USANDO ENCAPSULAMENTO EM TYPESCRIPT COM FUNÇÕES PURAS 🚀
 * ==============================================================
*
* 🔥 O que este código faz?
*  - Este exemplo demonstra o conceito de **encapsulamento** em TypeScript, utilizando 
* **funções puras** e **closures**.
*  - A função `criarContaBancaria` cria um objeto com métodos para **depositar**, 
* **sacar** e **consultar saldo**, enquanto o **saldo** da conta é mantido privado.
*
* 🔍 Principais conceitos aplicados:
*
* 1️⃣ **Encapsulamento**: O saldo da conta é **privado** e não pode ser acessado 
* diretamente de fora da função. Ele só pode ser alterado através dos métodos 
* `depositar`, `sacar` e `consultarSaldo`.
* 2️⃣ **Funções Puras e Closures**: A função `criarContaBancaria` retorna um objeto 
* que contém as funções `depositar`, `sacar` e `consultarSaldo`. Estas funções 
* têm acesso ao **saldo privado** através do mecanismo de **closure**.
* 3️⃣ **Segurança e Proteção de Dados**: A variável `saldo` é **inacessível diretamente**
*  de fora do escopo da função, garantindo que o saldo só seja alterado de maneira controlada.
* 4️⃣ **Desacoplamento**: O código está desacoplado da implementação específica 
* da conta bancária. A forma como o saldo é mantido ou atualizado pode ser alterada
*  sem afetar o restante do sistema.
*
* 💡 O que torna este código interessante?
*  - A utilização de **closures** permite a criação de variáveis privadas, sem 
* a necessidade de usar **classes**.
*  - O saldo da conta é mantido seguro e não pode ser acessado ou alterado diretamente 
* de fora da função.
*  - A abstração das operações bancárias permite que o sistema seja estendido e
*  modificado facilmente.
*
* 🎯 O objetivo é mostrar como **encapsular** e **proteger dados internos** em 
* TypeScript sem a necessidade de classes.
*/

/// Função que cria uma conta bancária, com saldo privado

// 🏦 Criando conta bancária
const criarContaBancaria = (saldoInicial: number) => {
  let saldo = saldoInicial; // Variável privada, não acessível diretamente
  
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

const minhaConta = criarContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(300);
minhaConta.consultarSaldo();
// ❌ Não conseguimos acessar saldo diretamente: console.log(minhaConta.saldo); // Erro!