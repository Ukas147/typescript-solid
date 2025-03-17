/**
 * Exemplo de implementação do padrão Abstract Factory utilizando arrow functions e sem classes.
 *
 * Conceito de Abstract Factory:
 * - O padrão Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes,
 *   sem especificar suas classes concretas.
 * - Ele permite que o cliente utilize fábricas abstratas para criar produtos que se complementam, promovendo o
 *   desacoplamento entre a criação dos produtos e sua utilização.
 *
 * Como o código funciona:
 * 1. Define-se os tipos para os produtos, neste exemplo "Chair" e "Sofa", cada um com um método "describe".
 * 2. São criados dois conjuntos de produtos: móveis modernos e móveis vitorianos, representados por objetos literais.
 * 3. Define-se o tipo "FurnitureFactory", que representa a interface da fábrica abstrata, contendo métodos
 *    para criar uma cadeira e um sofá.
 * 4. São implementadas duas fábricas concretas, "ModernFurnitureFactory" e "VictorianFurnitureFactory", utilizando
 *    arrow functions para retornar os objetos correspondentes.
 * 5. O cliente escolhe uma fábrica concreta e utiliza seus métodos para criar e utilizar os produtos desejados.
 */

// Define os tipos dos produtos com um método 'describe' que retorna uma string
type Chair = { describe: () => string };
type Sofa = { describe: () => string };

// Implementações concretas para móveis modernos
const ModernChair: Chair = {
  describe: () => "Cadeira moderna com design minimalista",
};

const ModernSofa: Sofa = {
  describe: () => "Sofá moderno com linhas retas e conforto elevado",
};

// Implementações concretas para móveis vitorianos
const VictorianChair: Chair = {
  describe: () => "Cadeira vitoriana com entalhes ornamentais",
};

const VictorianSofa: Sofa = {
  describe: () => "Sofá vitoriano com detalhes clássicos e estofamento luxuoso",
};

// Define o tipo para a fábrica abstrata de móveis, com métodos para criar uma cadeira e um sofá
type FurnitureFactory = {
  createChair: () => Chair;
  createSofa: () => Sofa;
};

// Fábrica concreta para móveis modernos utilizando arrow functions
const ModernFurnitureFactory: FurnitureFactory = {
  createChair: () => ModernChair,
  createSofa: () => ModernSofa,
};

// Fábrica concreta para móveis vitorianos utilizando arrow functions
const VictorianFurnitureFactory: FurnitureFactory = {
  createChair: () => VictorianChair,
  createSofa: () => VictorianSofa,
};

// Função de exemplo que utiliza uma fábrica abstrata para criar e descrever os produtos
const useFactory = (factory: FurnitureFactory): void => {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  console.log(chair.describe());
  console.log(sofa.describe());
};

// Exemplo de utilização:

console.log("Móveis Modernos:");
useFactory(ModernFurnitureFactory);

console.log("Móveis Vitorianos:");
useFactory(VictorianFurnitureFactory);