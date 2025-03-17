/*
 * Exemplo mais complexo de código em TypeScript que demonstra o
 * Single Responsibility Principle (SRP) usando apenas funções
 * arrow. O código simula o processamento de um pedido de compra,
 * onde cada função tem uma única responsabilidade:
 *
 * - validateOrder: verifica se o pedido e seus itens são válidos.
 * - calculateTotal: calcula o valor total do pedido.
 * - persistOrder: simula salvar o pedido em um "banco de dados".
 * - sendOrderConfirmation: simula o envio de confirmação por e-mail.
 * - logMessage: registra mensagens de log no console.
 * - processOrder: orquestra o fluxo de processamento do pedido.
 */

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  customer: string;
  items: OrderItem[];
}

const validateOrder = (order: Order): boolean => {
  // Verifica se o nome do cliente está presente
  if (!order.customer) {
    return false;
  }
  // Verifica se há pelo menos um item no pedido
  if (!order.items || order.items.length === 0) {
    return false;
  }
  // Verifica se cada item possui quantidade e preço válidos
  for (const item of order.items) {
    if (item.quantity <= 0 || item.price <= 0) {
      return false;
    }
  }
  return true;
};

const calculateTotal = (order: Order): number =>
  // Calcula o total do pedido somando preço * quantidade de cada item
  order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

const persistOrder = (order: Order, total: number): Promise<Order> =>
  // Simula salvar o pedido e retorna uma Promise que resolve com o pedido
  new Promise((resolve) => {
    console.log('Salvando pedido no banco de dados...');
    setTimeout(() => {
      console.log(
        `Pedido ${order.id} salvo com total R$${total.toFixed(2)}`
      );
      resolve(order);
    }, 1000);
  });

const sendOrderConfirmation = (order: Order): Promise<void> =>
  // Simula o envio de um e-mail de confirmação e retorna uma Promise
  new Promise((resolve) => {
    console.log('Enviando confirmação para o cliente...');
    setTimeout(() => {
      console.log(`Confirmação enviada para ${order.customer}`);
      resolve();
    }, 500);
  });

const logMessage = (msg: string): void =>
  // Registra mensagens de log no console
  console.log('Log:', msg);

const processOrder = async (order: Order): Promise<void> => {
  logMessage('Iniciando o processamento do pedido.');
  if (!validateOrder(order)) {
    logMessage('Pedido inválido. Cancelando o processamento.');
    return;
  }
  const total = calculateTotal(order);
  logMessage(`Total do pedido: R$${total.toFixed(2)}`);
  try {
    await persistOrder(order, total);
    await sendOrderConfirmation(order);
    logMessage('Pedido processado com sucesso.');
  } catch (error) {
    logMessage('Erro ao processar o pedido.');
  }
};

const order: Order = {
  id: 101,
  customer: 'Maria Oliveira',
  items: [
    { id: 1, name: 'Camiseta', price: 29.9, quantity: 2 },
    { id: 2, name: 'Calça', price: 99.9, quantity: 1 }
  ]
};

processOrder(order);
