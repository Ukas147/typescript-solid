/**
 * 🚀 CÓDIGO AVANÇADO USANDO POLIMORFISMO EM TYPESCRIPT 🚀
 * ======================================================
 *
 * 🔥 O que este código faz?
 *  - Implementa um **sistema de pedidos de comida** com diferentes formas de pagamento.
 *  - Usa **Polimorfismo** para permitir que diferentes métodos de pagamento implementem o mesmo método `pagar()`, mas com comportamento diferente.
 *  - Simula uma **API modular e escalável**, onde podemos adicionar novos métodos de pagamento sem modificar o código existente.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Polimorfismo** → Cada método de pagamento (`Cartao`, `Pix`, `Criptomoeda`) implementa `pagar()` de forma diferente.
 * 2️⃣ **Interfaces** → Criamos uma interface `Pagamento` para garantir que todos os métodos tenham `pagar()`.
 * 3️⃣ **Factories + Funções Puras** → Criamos funções que retornam objetos dinâmicos sem precisar de classes.
 * 4️⃣ **Alta Abstração** → O sistema de pedidos não sabe como o pagamento é feito, apenas chama `pagar()`, tornando-o desacoplado.
 * 5️⃣ **Execução Assíncrona + Promises** → O pagamento pode simular tempos diferentes de processamento.
 *
 * 💡 O que torna este código difícil de entender?
 *  - Não usa classes, mas sim **funções puras e composição**, fugindo da estrutura OOP tradicional.
 *  - Usa **tipagem avançada** e manipulação dinâmica de objetos.
 *  - Implementa **factory functions** que retornam diferentes estratégias de pagamento dinamicamente.
 *  - Faz **uso de `setTimeout()` para simular atrasos** em certos métodos de pagamento.
 *
 * 🎯 O objetivo é mostrar como aplicar **Polimorfismo Avançado** em TypeScript sem classes!
 */

/// Interface genérica para garantir que todo método de pagamento tenha um `pagar()`
interface Pagamento {
  pagar: (valor: number) => Promise<void>;
}

/// Criamos diferentes métodos de pagamento usando **arrow functions + polimorfismo**
const PagamentoCartao: Pagamento = {
  pagar: (valor) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(`💳 Pagamento de R$${valor.toFixed(2)} processado no Cartão.`);
        resolve();
      }, 2000); // Simula tempo de processamento
    }),
};

const PagamentoPix: Pagamento = {
  pagar: (valor) =>
    new Promise((resolve) => {
      console.log(`⚡ Pagamento instantâneo de R$${valor.toFixed(2)} via Pix.`);
      resolve();
    }),
};

const PagamentoCripto: Pagamento = {
  pagar: (valor) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(`🪙 Pagamento de R$${valor.toFixed(2)} confirmado via Criptomoeda.`);
        resolve();
      }, 5000); // Simula maior tempo de processamento
    }),
};

/// **Factory Function** que retorna um método de pagamento dinamicamente
const selecionarMetodoPagamento = (metodo: "cartao" | "pix" | "cripto"): Pagamento => {
  const metodos: Record<string, Pagamento> = {
    cartao: PagamentoCartao,
    pix: PagamentoPix,
    cripto: PagamentoCripto,
  };
  return metodos[metodo] ?? (() => { throw new Error("Método de pagamento inválido!"); })();
};

/// **Simulação de um Pedido**, onde o pagamento pode ser feito com qualquer método
const processarPedido = async (valor: number, metodo: "cartao" | "pix" | "cripto") => {
  console.log(`🛒 Processando pedido no valor de R$${valor.toFixed(2)}...`);
  
  const pagamento = selecionarMetodoPagamento(metodo);
  
  await pagamento.pagar(valor);
  
  console.log(`✅ Pedido finalizado com sucesso!\n`);
};

/// 🔥 Testando diferentes formas de pagamento assincronamente
(async () => {
  await processarPedido(100, "cartao");
  await processarPedido(250, "pix");
  await processarPedido(5000, "cripto");
})();