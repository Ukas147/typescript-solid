/**
 * Exemplo de implementação do padrão Strategy utilizando arrow functions e sem classes.
 *
 * Conceito de Strategy:
 * - O padrão Strategy define uma família de algoritmos intercambiáveis, encapsulando cada um deles.
 * - Permite que o comportamento de um objeto seja alterado em tempo de execução, escolhendo o algoritmo (estratégia)
 *   apropriado para a situação.
 * - Facilita a manutenção e a extensão, eliminando condicionais complexas no código, já que cada estratégia é implementada separadamente.
 *
 * Como o código funciona:
 * 1. Define-se um tipo Strategy, que representa uma função que recebe um número e retorna um número.
 * 2. São implementadas duas estratégias concretas:
 *    - addTenStrategy: adiciona 10 ao valor recebido.
 *    - multiplyByTwoStrategy: multiplica o valor por 2.
 * 3. Cria-se um contexto (strategyContext) que mantém a estratégia atual e expõe métodos para:
 *    - setStrategy: alterar a estratégia atual.
 *    - execute: executar a estratégia atual com um dado valor.
 * 4. O cliente pode alternar a estratégia dinamicamente e obter o resultado do algoritmo definido pela estratégia atual.
 */

// Tipo Strategy: função que recebe um número e retorna um número.
type Strategy = (value: number) => number;

// Estratégia concreta: adiciona 10 ao valor.
const addTenStrategy: Strategy = (value) => value + 10;

// Estratégia concreta: multiplica o valor por 2.
const multiplyByTwoStrategy: Strategy = (value) => value * 2;

// Contexto que gerencia a estratégia atual usando arrow functions e IIFE para encapsular o estado.
const strategyContext = (() => {
  // Estratégia inicial definida como addTenStrategy.
  let currentStrategy: Strategy = addTenStrategy;

  return {
    // Método para alterar a estratégia atual.
    setStrategy: (strategy: Strategy): void => {
      currentStrategy = strategy;
      console.log("Estratégia alterada.");
    },
    // Método para executar a estratégia atual com o valor fornecido.
    execute: (value: number): number => {
      const result = currentStrategy(value);
      console.log(`Executando estratégia com valor ${value}: Resultado = ${result}`);
      return result;
    }
  };
})();

// Exemplo de utilização do Strategy:

// Executa a estratégia inicial (addTenStrategy) com o valor 5: espera-se 15.
strategyContext.execute(5); // Saída: Executando estratégia com valor 5: Resultado = 15

// Altera a estratégia para multiplyByTwoStrategy.
strategyContext.setStrategy(multiplyByTwoStrategy);

// Executa a nova estratégia com o valor 5: espera-se 10.
strategyContext.execute(5); // Saída: Executando estratégia com valor 5: Resultado = 10