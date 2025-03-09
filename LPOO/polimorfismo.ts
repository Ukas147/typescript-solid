// Interface de polimorfismo
interface Pagamento {
  pagar: (valor: number) => void;
}

// Implementações diferentes
const PagamentoCartao: Pagamento = {
  pagar: (valor) => console.log(`💳 Pagando R$${valor} no cartão.`)
};

const PagamentoPix: Pagamento = {
  pagar: (valor) => console.log(`⚡ Pagando R$${valor} via Pix.`)
};

const PagamentoBoleto: Pagamento = {
  pagar: (valor) => console.log(`📄 Gerando boleto de R$${valor}.`)
};

// Função que recebe qualquer tipo de pagamento (polimorfismo)
const processarPagamento = (metodo: Pagamento, valor: number) => {
  metodo.pagar(valor);
};

// 🏦 Testando pagamentos
processarPagamento(PagamentoCartao, 100);
processarPagamento(PagamentoPix, 200);
processarPagamento(PagamentoBoleto, 300);