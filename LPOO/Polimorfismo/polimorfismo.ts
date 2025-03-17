/**
 * 🚀 CÓDIGO USANDO POLIMORFISMO EM TYPESCRIPT 🚀
 * =======================================================
 *
 * 🔥 O que este código faz?
 *  - Este exemplo demonstra **polimorfismo** em TypeScript usando **interfaces** e **funções puras**.
 *  - A interface `Pagamento` define um comportamento comum para diferentes métodos de pagamento, mas cada tipo de pagamento (`PagamentoCartao`, `PagamentoPix`, `PagamentoBoleto`) tem sua própria implementação de como o pagamento é realizado.
 *  - A função `processarPagamento` é capaz de **processar qualquer tipo de pagamento**, sem saber os detalhes de cada um, apenas chamando o método `pagar`.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Polimorfismo**: A interface `Pagamento` define a assinatura do método `pagar`, mas cada implementação concreta (`PagamentoCartao`, `PagamentoPix`, `PagamentoBoleto`) define como esse pagamento é realizado.
 * 2️⃣ **Interface**: A interface `Pagamento` define um contrato comum para todos os métodos de pagamento, garantindo que todos sigam a mesma estrutura.
 * 3️⃣ **Funções Puras**: Cada implementação de pagamento é uma **função pura**, ou seja, ela executa uma ação sem efeitos colaterais ou dependências externas.
 * 4️⃣ **Desacoplamento**: A função `processarPagamento` está desacoplada da implementação dos pagamentos, permitindo a flexibilidade de adicionar novos tipos de pagamento sem modificar o código existente.
 *
 * 💡 O que torna este código interessante?
 *  - O sistema pode **processar qualquer tipo de pagamento** sem precisar saber os detalhes de implementação de cada um.
 *  - O código é facilmente **extensível**: adicionar um novo método de pagamento (como `PagamentoPaypal`) não exige mudanças no código que já existe.
 *  - A interface **garante que todos os tipos de pagamento implementem o método `pagar`** de maneira consistente.
 *
 * 🎯 O objetivo é mostrar como aplicar **polimorfismo** em TypeScript com **interfaces** e **funções puras**.
 */

/// **Interface comum para todos os métodos de pagamento**
interface Pagamento {
  pagar: (valor: number) => void;
}

/// **Implementações diferentes de pagamentos**
const PagamentoCartao: Pagamento = {
  pagar: (valor) => console.log(`💳 Pagando R$${valor} no cartão.`)
};

const PagamentoPix: Pagamento = {
  pagar: (valor) => console.log(`⚡ Pagando R$${valor} via Pix.`)
};

const PagamentoBoleto: Pagamento = {
  pagar: (valor) => console.log(`📄 Gerando boleto de R$${valor}.`)
};

/// **Função que recebe qualquer tipo de pagamento (polimorfismo)**
const processarPagamento = (metodo: Pagamento, valor: number) => {
  metodo.pagar(valor);
};

// 🏦 Testando pagamentos
processarPagamento(PagamentoCartao, 100);
processarPagamento(PagamentoPix, 200);
processarPagamento(PagamentoBoleto, 300);