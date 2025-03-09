/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio Aberto/Fechado (OCP)**:
 *    - A função `processarPagamento` precisa ser **modificada** sempre que um novo método de pagamento for adicionado.
 *    - Se amanhã a empresa decidir incluir **Pix, PayPal, Criptomoeda**, teremos que modificar essa função novamente.
 *
 * 2️⃣ **Alto risco de introduzir bugs**:
 *    - Cada vez que alteramos a estrutura da função, podemos **acidentalmente quebrar a lógica existente**.
 *
 * 3️⃣ **Código difícil de escalar**:
 *    - Se adicionarmos novos métodos de pagamento, essa função ficará enorme e difícil de manter.
 *
 * 4️⃣ **Baixa reutilização**:
 *    - Se quisermos processar pagamentos em outro módulo do sistema, precisamos **copiar e colar código**.
 */

// const processarPagamento = (metodo: string, valor: number) => {
//   if (metodo === "cartao") {
//     console.log(`💳 Pagamento de R$ ${valor.toFixed(2)} processado no cartão.`);
//   } else if (metodo === "boleto") {
//     console.log(`📄 Pagamento de R$ ${valor.toFixed(2)} gerado no boleto.`);
//   } else {
//     throw new Error("❌ Método de pagamento inválido!");
//   }
// };

// // 🏡 Testando a função
// processarPagamento("cartao", 100);
// processarPagamento("boleto", 200);

// ✅ Interface para definir o comportamento de todos os métodos de pagamento
interface MetodoPagamento {
  processar(valor: number): void;
}

// ✅ Implementação do pagamento por cartão
class PagamentoCartao implements MetodoPagamento {
  processar(valor: number): void {
    console.log(`💳 Pagamento de R$ ${valor.toFixed(2)} processado no cartão.`);
  }
}

// ✅ Implementação do pagamento por boleto
class PagamentoBoleto implements MetodoPagamento {
  processar(valor: number): void {
    console.log(`📄 Pagamento de R$ ${valor.toFixed(2)} gerado no boleto.`);
  }
}

// ✅ Classe que gerencia os pagamentos, aberta para extensão
class ProcessadorPagamento {
  private metodoPagamento: MetodoPagamento;

  constructor(metodoPagamento: MetodoPagamento) {
    this.metodoPagamento = metodoPagamento;
  }

  processarPagamento(valor: number): void {
    this.metodoPagamento.processar(valor);
  }
}

// 🏡 Testando o sistema de pagamentos (agora seguindo OCP)
const pagamento1 = new ProcessadorPagamento(new PagamentoCartao());
pagamento1.processarPagamento(100);

const pagamento2 = new ProcessadorPagamento(new PagamentoBoleto());
pagamento2.processarPagamento(200);

// ✅ Se precisarmos adicionar um novo método de pagamento (ex: Pix, PayPal),
// ✅ basta criar uma nova classe SEM modificar nada do código existente!