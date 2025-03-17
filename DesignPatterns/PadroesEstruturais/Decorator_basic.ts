// Define o tipo para o componente que possui o método getMessage.
type MessageComponent = {
  getMessage: () => string;
};

// Função de fábrica que cria um componente simples retornando uma mensagem.
const createSimpleMessage = (message: string): MessageComponent => ({
  getMessage: () => message
});

// Decorator que adiciona pontos de exclamação à mensagem do componente original.
const decorateWithExclamation = (
  component: MessageComponent
): MessageComponent => ({
  getMessage: () => `${component.getMessage()}!!!`
});

// Decorator que adiciona um prefixo à mensagem do componente original.
const decorateWithPrefix = (
  component: MessageComponent,
  prefix: string
): MessageComponent => ({
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
const decoratedMessage = decorateWithPrefix(
  decorateWithExclamation(simpleMessage),
  "Aviso:"
);
console.log(decoratedMessage.getMessage()); // Saída: "Aviso: Olá, mundo!!!"