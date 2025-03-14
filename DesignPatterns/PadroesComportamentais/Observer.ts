/**
 * Exemplo de implementação do padrão Observer utilizando arrow functions e sem classes.
 *
 * Conceito de Observer:
 * - O padrão Observer estabelece uma dependência um-para-muitos entre objetos, permitindo que quando um objeto
 *   (o "subject") muda de estado, todos os seus dependentes (os "observers") sejam notificados e atualizados automaticamente.
 * - É útil para cenários onde múltiplas partes de uma aplicação precisam reagir a eventos ou alterações em um objeto central.
 * - Promove o desacoplamento, pois o subject não precisa conhecer os detalhes dos observers, apenas notificar que um evento ocorreu.
 *
 * Como o código funciona:
 * 1. Define-se um tipo `Observer<T>` que representa uma função que recebe um dado (payload) e retorna void.
 * 2. Cria-se um objeto `subject` que mantém uma lista de observers e métodos para:
 *    - `subscribe`: adicionar um observer à lista.
 *    - `unsubscribe`: remover um observer da lista.
 *    - `notify`: notificar todos os observers com um dado (payload).
 * 3. O cliente pode se inscrever (subscribe) para receber notificações e se desinscrever (unsubscribe) quando não desejar mais atualizações.
 * 4. Ao chamar o método `notify`, todos os observers cadastrados são executados com o payload fornecido.
 */

// Define o tipo Observer que recebe um payload do tipo T e retorna void.
type Observer<T> = (payload: T) => void;

// Objeto subject que gerencia os observers e suas notificações.
const subject = {
  // Lista de observers cadastrados.
  observers: [] as Observer<string>[],

  // Método para adicionar um observer à lista.
  subscribe: (observer: Observer<string>) => {
    subject.observers.push(observer);
    console.log("Observer adicionado.");
  },

  // Método para remover um observer da lista.
  unsubscribe: (observer: Observer<string>) => {
    subject.observers = subject.observers.filter((obs) => obs !== observer);
    console.log("Observer removido.");
  },

  // Método para notificar todos os observers com o payload fornecido.
  notify: (payload: string) => {
    console.log(`Notificando observers com: ${payload}`);
    subject.observers.forEach((observer) => observer(payload));
  }
};

// Exemplo de observers: funções que processam a notificação.
const observer1: Observer<string> = (message) => console.log(`Observer 1 recebeu: ${message}`);
const observer2: Observer<string> = (message) => console.log(`Observer 2 recebeu: ${message}`);

// Inscrevendo os observers no subject.
subject.subscribe(observer1);
subject.subscribe(observer2);

// Enviando uma notificação para todos os observers.
subject.notify("Evento importante!");

// Removendo o observer1 e enviando outra notificação.
subject.unsubscribe(observer1);
subject.notify("Outro evento!");