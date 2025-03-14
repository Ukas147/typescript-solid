/**
 * Exemplo de implementação do padrão Prototype utilizando arrow functions e sem classes.
 *
 * Conceito de Prototype:
 * - O padrão Prototype permite criar novos objetos copiando (clonando) um objeto já existente, chamado de protótipo.
 * - É útil quando a criação de um objeto do zero é complexa ou custosa, permitindo reutilizar um objeto já configurado.
 * - A clonagem facilita a criação de objetos semelhantes sem depender de construtores específicos.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Prototype` que representa um objeto com propriedades (neste exemplo, `field1` e `field2`)
 *    e um método `clone` que retorna uma nova cópia do objeto.
 * 2. A função `createPrototype` atua como uma fábrica que cria objetos do tipo `Prototype`.
 * 3. O método `clone` é implementado como uma arrow function que utiliza a própria função `createPrototype`
 *    para retornar uma nova instância com os mesmos valores do objeto original.
 * 4. O cliente pode criar um objeto protótipo e, a partir dele, gerar clones independentes.
 */

type Prototype = {
  field1: string;
  field2: number;
  clone: () => Prototype;
};

// Função de fábrica para criar um objeto do tipo Prototype.
// Usa uma variável 'prototype' declarada com let para permitir que o método clone faça referência a ela.
const createPrototype = (field1: string, field2: number): Prototype => {
  let prototype: Prototype = {
    field1,
    field2,
    // O método clone retorna um novo objeto criado com os mesmos valores dos campos.
    clone: () => createPrototype(prototype.field1, prototype.field2)
  };
  return prototype;
};

// Exemplo de utilização do Prototype:

// Cria um objeto original com valores iniciais.
const original = createPrototype("Original", 42);
console.log("Original:", original);

// Cria um clone do objeto original.
const clone = original.clone();
console.log("Clone:", clone);

// Modifica o clone para demonstrar que ele é independente do objeto original.
clone.field1 = "Modificado";
clone.field2 = 100;
console.log("Após modificação:");
console.log("Original:", original);
console.log("Clone:", clone);