/*
 * 🚨 CÓDIGO RUIM: Viola o princípio OCP porque a classe
 * PaymentProcessor precisa ser modificada sempre que 
 * um novo método de pagamento for adicionado.
 */

interface PaymentMethod {
  process(amount: number): void;
}

const creditCard: PaymentMethod = {
  process(amount: number): void {
    console.log(`Pagamento de R$${amount} processado no cartão.`);
  }
};

const paypal: PaymentMethod = {
  process(amount: number): void {
    console.log(`Pagamento de R$${amount} processado via PayPal.`);
  }
};

const pix: PaymentMethod = {
  process(amount: number): void {
    console.log(`Pagamento de R$${amount} processado via PIX.`);
  }
}

const paymentMethods: Record<string, PaymentMethod> = {
  creditCard, paypal, pix
};

const processPayment = (paymentMethod: string, amount: number): void => {
  const method = paymentMethods[paymentMethod];
  if (!method) {
    throw new Error('Método de pagamento inválido!');
  }
  method.process(amount);
}

// 🧪 Testando o código bom
processPayment('creditCard', 100);
processPayment('paypal', 50);
processPayment('pix', 200);


// class PaymentProcessor {
//   process(paymentMethod: string, amount: number): void {
//     if (paymentMethod === 'creditCard') {
//       console.log(`Pagamento de R$${amount} processado no cartão.`);
//     } else if (paymentMethod === 'paypal') {
//       console.log(`Pagamento de R$${amount} processado via PayPal.`);
//     } else if (paymentMethod === 'pix') {
//       console.log(`Pagamento de R$${amount} processado via PIX.`);
//     } else {
//       throw new Error('Método de pagamento inválido!');
//     }
//   }
// }

// // 🧪 Testando o código ruim
// const processor = new PaymentProcessor();
// processor.process('creditCard', 100);
// processor.process('paypal', 50);
// processor.process('pix', 200);