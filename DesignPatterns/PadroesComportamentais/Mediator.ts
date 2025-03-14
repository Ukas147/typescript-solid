/**
 * Exemplo de implementação do padrão Mediator utilizando arrow functions e sem classes.
 *
 * Conceito de Mediator:
 * - O padrão Mediator define um objeto que encapsula como um conjunto de objetos interage.
 * - Ele promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros,
 *   permitindo que sua comunicação seja mediada por um objeto central.
 * - É útil para organizar a comunicação entre componentes em sistemas complexos, facilitando a manutenção e a escalabilidade.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Mediator` com métodos para registrar colegas e enviar mensagens.
 * 2. Define-se o tipo `Colleague` que representa os participantes que se comunicam através do Mediator,
 *    com métodos para enviar e receber mensagens.
 * 3. A função `createMediator` cria um mediator que gerencia uma lista de colegas e encaminha mensagens
 *    para todos os colegas registrados, exceto o remetente.
 * 4. A função `createColleague` cria um participante (colleague) que utiliza o mediator para enviar mensagens.
 * 5. O cliente cria o mediator e os colegas, registra os colegas no mediator e envia mensagens,
 *    permitindo a comunicação entre eles sem dependências diretas.
 */

// Define o tipo Mediator com métodos para registrar colegas e enviar mensagens.
type Mediator = {
  register: (colleague: Colleague) => void;
  send: (message: string, sender: Colleague) => void;
};

// Define o tipo Colleague com métodos para enviar e receber mensagens.
type Colleague = {
  name: string;
  send: (message: string) => void;
  receive: (message: string, senderName: string) => void;
};

// Função de fábrica para criar um Mediator.
const createMediator = (): Mediator => {
  let colleagues: Colleague[] = [];
  return {
    register: (colleague: Colleague) => {
      colleagues.push(colleague);
    },
    send: (message: string, sender: Colleague) => {
      colleagues.forEach((colleague) => {
        if (colleague !== sender) {
          colleague.receive(message, sender.name);
        }
      });
    }
  };
};

// Função de fábrica para criar um Colleague que utiliza um Mediator para enviar mensagens.
const createColleague = (name: string, mediator: Mediator): Colleague => {
  const colleague: Colleague = {
    name,
    send: (message: string) => {
      console.log(`${name} enviou: ${message}`);
      mediator.send(message, colleague);
    },
    receive: (message: string, senderName: string) => {
      console.log(`${name} recebeu de ${senderName}: ${message}`);
    }
  };
  return colleague;
};

// Exemplo de utilização do padrão Mediator:

// Cria o mediator.
const chatMediator = createMediator();

// Cria os colegas participantes do chat.
const alice = createColleague("Alice", chatMediator);
const bob = createColleague("Bob", chatMediator);
const charlie = createColleague("Charlie", chatMediator);

// Registra os colegas no mediator.
chatMediator.register(alice);
chatMediator.register(bob);
chatMediator.register(charlie);

// Envia mensagens através do mediator.
alice.send("Olá a todos!");
bob.send("Oi, Alice!");
charlie.send("Bom dia, pessoal!");