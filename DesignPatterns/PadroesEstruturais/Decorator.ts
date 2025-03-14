/**
 * Exemplo de implementação do padrão Decorator utilizando arrow functions e sem classes.
 *
 * Conceito de Decorator:
 * - O padrão Decorator permite adicionar funcionalidades a um objeto dinamicamente, sem alterar sua estrutura original.
 * - Ele envolve o objeto original com um ou mais decoradores que implementam a mesma interface, permitindo a composição de comportamentos.
 * - Esse padrão promove a flexibilidade e o princípio de responsabilidade única, facilitando a extensão de funcionalidades.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `MessageComponent` que possui o método `getMessage`, representando o contrato do objeto.
 * 2. A função `createSimpleMessage` cria um componente simples que retorna uma mensagem.
 * 3. A função `decorateWithExclamation` é um decorador que adiciona pontos de exclamação à mensagem do componente original.
 * 4. A função `decorateWithPrefix` é outro decorador que adiciona um prefixo à mensagem do componente.
 * 5. O cliente pode aplicar um ou mais decoradores de forma encadeada para compor diferentes comportamentos na mensagem.
 */

// Define o tipo para o componente que possui o método getMessage.
type MessageComponent = {
  getMessage: () => string;
};

// Função de fábrica que cria um componente simples retornando uma mensagem.
const createSimpleMessage = (message: string): MessageComponent => ({
  getMessage: () => message
});

// Decorator que adiciona pontos de exclamação à mensagem do componente original.
const decorateWithExclamation = (component: MessageComponent): MessageComponent => ({
  getMessage: () => `${component.getMessage()}!!!`
});

// Decorator que adiciona um prefixo à mensagem do componente original.
const decorateWithPrefix = (component: MessageComponent, prefix: string): MessageComponent => ({
  getMessage: () => `${prefix} ${component.getMessage()}`
});

// Exemplo de utilização:

// Cria um componente simples.
const simpleMessage = createSimpleMessage("Olá, mundo");

// Aplica o decorator que adiciona pontos de exclamação.
const excitedMessage = decorateWithExclamation(simpleMessage);
console.log(excitedMessage.getMessage()); // Saída: "Olá, mundo!!!"

// Aplica o decorator que adiciona um prefixo.
const prefixedMessage = decorateWithPrefix(simpleMessage, "Mensagem:");
console.log(prefixedMessage.getMessage()); // Saída: "Mensagem: Olá, mundo"

// Composição de múltiplos decoradores: primeiro adiciona exclamação, depois prefixo.
const decoratedMessage = decorateWithPrefix(decorateWithExclamation(simpleMessage), "Aviso:");
console.log(decoratedMessage.getMessage()); // Saída: "Aviso: Olá, mundo!!!"