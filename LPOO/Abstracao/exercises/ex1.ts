// // Sistema de Pagamento (Versão Ruim)

// // 1. Pagamento com Cartão de Crédito
// const processCreditCardPayment = (amount: number) => {
//   console.log(`Pagamento de R$${amount} processado com Cartão de Crédito.`);
// };

// // 2. Pagamento com Boleto
// const processBoletoPayment = (amount: number) => {
//   console.log(`Pagamento de R$${amount} processado com Boleto.`);
// };

// // 3. Pagamento com Transferência Bancária
// const processBankTransferPayment = (amount: number) => {
//   console.log(`Pagamento de R$${amount} processado com Transferência Bancária.`);
// };

// // 4. Função principal que processa os pagamentos (sem abstração)
// const processPayment = (paymentType: string, amount: number) => {
//   if (paymentType === "creditCard") {
//       processCreditCardPayment(amount);
//   } else if (paymentType === "boleto") {
//       processBoletoPayment(amount);
//   } else if (paymentType === "bankTransfer") {
//       processBankTransferPayment(amount);
//   } else {
//       console.log("Tipo de pagamento inválido.");
//   }
// };

// // Testando
// processPayment("creditCard", 100);        // Cartão de Crédito
// processPayment("boleto", 200);            // Boleto
// processPayment("bankTransfer", 300);      // Transferência Bancária
// processPayment("paypal", 400);            // Tipo de pagamento inválido

//=========================================================================
//fazer com que a função procecssPayment receba uma instancia
//que tenha a mesma interface

// interface PaymentMethod {
//   paymentMethod: string;
//   amount: number;
// }

// const pagamentoBoleto: PaymentMethod = {
//   paymentMethod: "boleto",
//   amount: 10,
// }

// const pagamentoCartao: PaymentMethod = {
//   paymentMethod: "cartao",
//   amount: 10,
// }

// const pagamentoPix: PaymentMethod = {
//   paymentMethod: "pix",
//   amount: 10,
// }

// const processPayment: PaymentMethod = {
//   pagar: (paymentMethod, amount) => {
//     console.log(`pagamento de ${amount} com o método ${paymentMethod} realizado com sucesso`)
//   }
// }

// const pagarPix = processPayment(pagamentoPix)

// 1. Definir uma interface para o tipo de pagamento
interface PaymentMethod {
  paymentMethod: string;
  amount: number;
  pagar: () => void;
}

// 2. Implementação de pagamento via Boleto
const pagamentoBoleto: PaymentMethod = {
  paymentMethod: "boleto",
  amount: 10,
  pagar() {
    console.log(`Pagamento de R$${this.amount} com o método ${this.paymentMethod} realizado com sucesso.`);
  }
}

// 3. Implementação de pagamento via Cartão
const pagamentoCartao: PaymentMethod = {
  paymentMethod: "cartao",
  amount: 10,
  pagar() {
    console.log(`Pagamento de R$${this.amount} com o método ${this.paymentMethod} realizado com sucesso.`);
  }
}

// 4. Implementação de pagamento via Pix
const pagamentoPix: PaymentMethod = {
  paymentMethod: "pix",
  amount: 10,
  pagar() {
    console.log(`Pagamento de R$${this.amount} com o método ${this.paymentMethod} realizado com sucesso.`);
  }
}

// 5. Função para processar o pagamento, sem precisar saber o método
const processPayment = (payment: PaymentMethod) => {
  payment.pagar();
}

// Testando os pagamentos
processPayment(pagamentoBoleto);  // Pagamento com Boleto
processPayment(pagamentoCartao);  // Pagamento com Cartão
processPayment(pagamentoPix);     // Pagamento com Pix

