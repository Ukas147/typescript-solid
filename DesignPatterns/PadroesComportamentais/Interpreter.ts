/**
 * Exemplo de implementação do padrão Interpreter utilizando arrow functions e sem classes.
 *
 * Conceito de Interpreter:
 * - O padrão Interpreter é utilizado para definir uma gramática para uma linguagem e interpretar sentenças dessa linguagem.
 * - Ele representa expressões como uma árvore de interpretação, onde cada nó é responsável por interpretar uma parte da expressão.
 * - É útil para construir interpretadores de linguagens específicas, como calculadoras ou processadores de expressões.
 *
 * Como o código funciona:
 * 1. Define-se o tipo 'Expression' como uma função que retorna um número, representando uma expressão aritmética.
 * 2. São implementadas funções que atuam como nós da árvore de interpretação:
 *    - 'createNumber': cria uma expressão que retorna um número literal.
 *    - 'createAddition': cria uma expressão que representa a soma de duas expressões.
 *    - 'createSubtraction': cria uma expressão que representa a subtração entre duas expressões.
 * 3. O cliente compõe uma árvore de interpretação utilizando essas funções.
 * 4. Ao chamar a função resultante, a árvore é avaliada recursivamente, retornando o resultado da expressão.
 */

// Define o tipo Expression como uma função que retorna um número.
type Expression = () => number;

// Cria uma expressão que representa um número literal.
const createNumber = (value: number): Expression => () => value;

// Cria uma expressão que representa a soma de duas expressões.
const createAddition = (left: Expression, right: Expression): Expression => () => left() + right();

// Cria uma expressão que representa a subtração de duas expressões.
const createSubtraction = (left: Expression, right: Expression): Expression => () => left() - right();

// Exemplo de utilização:
// Representa a expressão: (5 + 10) - 3
const expression = createSubtraction(
  createAddition(
    createNumber(5),
    createNumber(10)
  ),
  createNumber(3)
);

// Avalia a expressão e imprime o resultado.
console.log(`Resultado da expressão: ${expression()}`); // Saída esperada: 12