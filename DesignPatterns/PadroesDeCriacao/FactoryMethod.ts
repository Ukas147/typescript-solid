/**
 * Exemplo de implementação do padrão Factory Method utilizando arrow functions e sem classes.
 *
 * Conceito de Factory Method:
 * - O Factory Method é um padrão de projeto criacional que define uma interface para criar objetos,
 *   mas delega a responsabilidade de instanciar objetos para funções ou "fábricas".
 * - Ao invés de instanciar objetos diretamente com construtores, a criação é centralizada em um método que
 *   decide qual objeto criar com base em parâmetros fornecidos.
 * - Isso promove o desacoplamento, pois o cliente não precisa conhecer os detalhes das implementações concretas.
 *
 * Como o código funciona:
 * 1. Define-se um tipo `Product` que representa o contrato para os produtos, com um método `operation`.
 * 2. São criadas duas implementações concretas (Produto A e Produto B) usando objetos literais com arrow functions.
 * 3. É definida uma função `factoryMethod` (também uma arrow function) que recebe um parâmetro para decidir qual produto retornar.
 * 4. O cliente utiliza a `factoryMethod` para obter o produto desejado sem precisar conhecer sua implementação.
 */

// Define o tipo que representa um produto, com um método operation que retorna uma string
type Product = {
  operation: () => string;
};

// Implementação concreta do Produto A utilizando objeto literal e arrow function
const ConcreteProductA: Product = {
  operation: () => "Resultado do Produto A",
};

// Implementação concreta do Produto B utilizando objeto literal e arrow function
const ConcreteProductB: Product = {
  operation: () => "Resultado do Produto B",
};

// Define os tipos possíveis para os produtos, para facilitar a seleção na fábrica
type ProductType = "A" | "B";

// Função Factory Method como arrow function que cria e retorna o produto com base no tipo fornecido
const factoryMethod = (type: ProductType): Product =>
  type === "A" ? ConcreteProductA : ConcreteProductB;

// Utilização da Factory Method para criar produtos sem acoplamento à implementação concreta

// Cria uma instância do Produto A
const productA = factoryMethod("A");

// Cria uma instância do Produto B
const productB = factoryMethod("B");

// Executa o método operation dos produtos criados e exibe os resultados
console.log(productA.operation()); // "Resultado do Produto A"
console.log(productB.operation()); // "Resultado do Produto B"