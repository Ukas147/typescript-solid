/**
 * Exemplo de implementação do padrão Chain of Responsibility utilizando arrow functions e sem classes.
 *
 * Conceito de Chain of Responsibility:
 * - O padrão Chain of Responsibility permite que uma requisição seja processada por uma cadeia de manipuladores (handlers),
 *   onde cada um decide se trata a requisição ou a repassa para o próximo manipulador.
 * - Isso promove o desacoplamento, pois o remetente da requisição não precisa saber qual objeto a processará.
 * - É útil para cenários como validação, processamento de eventos ou roteamento de requisições.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Request` que representa a requisição com um tipo e um payload.
 * 2. Cada handler é criado por meio da função `createHandler`, que recebe:
 *    - Um predicado (função) para verificar se o handler pode processar a requisição.
 *    - Uma ação (função) que processa a requisição caso o predicado retorne verdadeiro.
 * 3. Cada handler possui um método `handle` para processar a requisição e um método `setNext` para encadear o próximo handler.
 * 4. O cliente envia uma requisição para o primeiro handler da cadeia, e cada handler decide se processa ou repassa para o próximo.
 */

// Define o tipo Request com propriedades para identificar o tipo e o payload da requisição.
type Request = {
  type: string;
  payload: any;
};

// Define o tipo Handler com os métodos handle e setNext.
type Handler = {
  handle: (request: Request) => string | null;
  setNext: (handler: Handler) => Handler;
};

// Função de fábrica que cria um handler.
// Recebe um predicado para identificar se a requisição pode ser processada e uma ação para processar a requisição.
const createHandler = (
  predicate: (req: Request) => boolean,
  action: (req: Request) => string
): Handler => {
  let nextHandler: Handler | null = null;
  return {
    // Método para processar a requisição.
    handle: (request: Request): string | null => {
      if (predicate(request)) {
        // Se o predicado for verdadeiro, processa a requisição com a ação definida.
        return action(request);
      } else if (nextHandler) {
        // Se não puder processar, repassa a requisição para o próximo handler.
        return nextHandler.handle(request);
      } else {
        // Caso não haja handler capaz de processar, retorna null.
        return null;
      }
    },
    // Método para definir o próximo handler na cadeia.
    setNext: (handler: Handler): Handler => {
      nextHandler = handler;
      return handler;
    }
  };
};

// Criação de handlers específicos para processar diferentes tipos de requisições.
const handlerA = createHandler(
  (req) => req.type === "A",
  (req) => `Handler A processou o payload: ${req.payload}`
);

const handlerB = createHandler(
  (req) => req.type === "B",
  (req) => `Handler B processou o payload: ${req.payload}`
);

const handlerC = createHandler(
  (req) => req.type === "C",
  (req) => `Handler C processou o payload: ${req.payload}`
);

// Encadeia os handlers: handlerA -> handlerB -> handlerC
handlerA.setNext(handlerB).setNext(handlerC);

// Exemplos de requisições para testar a cadeia.
const requestA: Request = { type: "A", payload: "Dados para A" };
const requestB: Request = { type: "B", payload: "Dados para B" };
const requestC: Request = { type: "C", payload: "Dados para C" };
const requestD: Request = { type: "D", payload: "Dados para D" };

// Processamento das requisições através da cadeia.
console.log(handlerA.handle(requestA)); // Saída: "Handler A processou o payload: Dados para A"
console.log(handlerA.handle(requestB)); // Saída: "Handler B processou o payload: Dados para B"
console.log(handlerA.handle(requestC)); // Saída: "Handler C processou o payload: Dados para C"
console.log(handlerA.handle(requestD)); // Saída: null (nenhum handler processou a requisição)