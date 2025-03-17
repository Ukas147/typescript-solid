/**
 * Exemplo de implementação do padrão Visitor utilizando arrow functions e sem classes.
 *
 * Conceito de Visitor:
 * - O padrão Visitor permite separar um algoritmo dos objetos sobre os quais ele opera.
 * - Com esse padrão, novas operações podem ser adicionadas sem modificar os objetos da estrutura.
 * - Ele promove o princípio aberto/fechado, permitindo a extensão de funcionalidades sem alterar os elementos.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Visitor` que especifica métodos para visitar cada tipo concreto de elemento.
 * 2. Cada elemento (ElementA e ElementB) possui um método `accept` que recebe um visitor e delega a chamada
 *    para o método específico de visitação do visitor.
 * 3. São criadas funções de fábrica (createElementA e createElementB) para gerar os elementos sem utilizar classes.
 * 4. O objeto `visitor` implementa as operações específicas para cada tipo de elemento.
 * 5. O cliente itera sobre os elementos e chama o método `accept` de cada um, permitindo que o visitor execute
 *    a operação apropriada para cada elemento.
 */

// Define o tipo Visitor com métodos para cada tipo de elemento
type Visitor = {
  visitElementA: (element: ElementA) => void;
  visitElementB: (element: ElementB) => void;
};

// Define o tipo base Element com o método accept para receber um Visitor
type Element = {
  accept: (visitor: Visitor) => void;
};

// Define o tipo ElementA com uma propriedade específica 'name'
type ElementA = Element & {
  name: string;
};

// Define o tipo ElementB com uma propriedade específica 'value'
type ElementB = Element & {
  value: number;
};

// Função para criar um ElementA utilizando arrow function
const createElementA = (name: string): ElementA => {
  const element: ElementA = {
    name,
    accept: (visitor: Visitor) => visitor.visitElementA(element)
  };
  return element;
};

// Função para criar um ElementB utilizando arrow function
const createElementB = (value: number): ElementB => {
  const element: ElementB = {
    value,
    accept: (visitor: Visitor) => visitor.visitElementB(element)
  };
  return element;
};

// Implementação do Visitor utilizando arrow functions
const visitor: Visitor = {
  visitElementA: (element: ElementA) => console.log(`Visitor: ElementA com nome "${element.name}" visitado.`),
  visitElementB: (element: ElementB) => console.log(`Visitor: ElementB com valor ${element.value} visitado.`)
};

// Criação de uma coleção de elementos
const elements: Element[] = [
  createElementA("Exemplo A"),
  createElementB(123),
  createElementA("Outro A"),
  createElementB(456)
];

// O cliente itera sobre os elementos e utiliza o visitor para processá-los
elements.forEach(element => element.accept(visitor));