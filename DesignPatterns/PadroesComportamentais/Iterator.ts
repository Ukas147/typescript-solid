/**
 * Exemplo de implementação do padrão Iterator utilizando arrow functions e sem classes.
 *
 * Conceito de Iterator:
 * - O padrão Iterator permite percorrer os elementos de uma coleção sem expor sua estrutura interna.
 * - Ele fornece uma interface comum para acessar os elementos de um objeto iterável sequencialmente.
 * - Esse padrão é útil para abstrair a forma de iteração sobre coleções, tornando o código mais flexível e desacoplado.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Iterator<T>` que possui o método `next` para obter o próximo elemento da coleção.
 * 2. A função `createIterator` recebe uma coleção (array) e retorna um objeto iterator que implementa o método `next`.
 * 3. O método `next` retorna um objeto contendo:
 *    - `value`: o próximo elemento da coleção ou `null` se não houver mais elementos.
 *    - `done`: um booleano indicando se a iteração foi concluída.
 * 4. O cliente utiliza o iterator para percorrer todos os elementos da coleção de forma sequencial.
 */

// Define o tipo Iterator com um método next que retorna um objeto com value e done.
type Iterator<T> = {
  next: () => { value: T | null; done: boolean };
};

// Função de fábrica que cria um iterator para uma coleção (array) usando arrow functions.
const createIterator = <T>(collection: T[]): Iterator<T> => {
  let index = 0;
  return {
    next: () =>
      index < collection.length
        ? { value: collection[index++], done: false }
        : { value: null, done: true }
  };
};

// Exemplo de utilização do Iterator:

// Cria uma coleção de números.
const numbers = [10, 20, 30, 40, 50];

// Cria um iterator para a coleção.
const iterator = createIterator(numbers);

// Itera sobre a coleção utilizando o iterator.
let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Imprime cada número da coleção.
  result = iterator.next();
}