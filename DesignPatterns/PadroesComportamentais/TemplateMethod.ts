/**
 * Exemplo de implementação do padrão Template Method utilizando arrow functions e sem classes.
 *
 * Conceito de Template Method:
 * - O padrão Template Method define o esqueleto de um algoritmo em uma função, deixando alguns passos a serem
 *   implementados por funções específicas.
 * - Isso permite que a estrutura geral do algoritmo permaneça inalterada enquanto os detalhes de cada etapa podem variar.
 * - O cliente fornece as implementações concretas dos passos, possibilitando a reutilização da lógica do algoritmo.
 *
 * Como o código funciona:
 * 1. É definida a função `templateMethod`, que recebe um objeto com os passos do algoritmo:
 *    - `preStep`: etapa inicial.
 *    - `mainStep`: etapa principal.
 *    - `postStep`: etapa final.
 *    - `hook` (opcional): etapa extra que pode ser executada se fornecida.
 * 2. A função `templateMethod` retorna uma nova função que, ao ser executada, chama os passos na ordem definida.
 * 3. São criadas duas implementações concretas do template:
 *    - `prepareCoffee`: prepara um café com um hook opcional para adicionar açúcar.
 *    - `prepareTea`: prepara um chá sem hook.
 * 4. O cliente executa a função retornada para executar o algoritmo na ordem definida.
 */

// Função Template Method que recebe um objeto com os passos do algoritmo e retorna uma função que executa esses passos
const templateMethod = (steps: { 
  preStep: () => void, 
  mainStep: () => void, 
  postStep: () => void, 
  hook?: () => void 
}) => () => {
  // Executa o passo inicial
  steps.preStep();
  // Executa o passo principal
  steps.mainStep();
  // Executa o hook opcional, se fornecido
  steps.hook && steps.hook();
  // Executa o passo final
  steps.postStep();
};

// Implementação concreta do Template Method para preparar um café
const prepareCoffee = templateMethod({
  preStep: () => console.log("Fervendo água..."),
  mainStep: () => console.log("Preparando o café..."),
  hook: () => console.log("Adicionando açúcar opcional..."),
  postStep: () => console.log("Servindo o café.")
});

// Implementação concreta do Template Method para preparar um chá (sem hook opcional)
const prepareTea = templateMethod({
  preStep: () => console.log("Fervendo água..."),
  mainStep: () => console.log("Preparando o chá..."),
  postStep: () => console.log("Servindo o chá.")
});

// Execução dos templates:

console.log("Preparando Café:");
prepareCoffee();
// Saída esperada:
// Fervendo água...
// Preparando o café...
// Adicionando açúcar opcional...
// Servindo o café.

console.log("-----");

console.log("Preparando Chá:");
prepareTea();
// Saída esperada:
// Fervendo água...
// Preparando o chá...
// Servindo o chá.