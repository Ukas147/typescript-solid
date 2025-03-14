/**
 * Exemplo de implementação do padrão Builder utilizando arrow functions e sem classes.
 *
 * Conceito de Builder:
 * - O padrão Builder permite a construção passo a passo de objetos complexos.
 * - Ele separa a criação do objeto de sua representação, possibilitando que o mesmo processo de construção
 *   produza diferentes representações.
 * - É ideal para cenários onde um objeto possui diversas configurações ou parâmetros opcionais.
 *
 * Como o código funciona:
 * 1. Define-se um tipo `Pizza` que representa o produto final a ser construído.
 * 2. Implementa-se a função `createPizzaBuilder` que retorna um objeto builder.
 * 3. O builder possui métodos implementados como arrow functions para configurar as propriedades da pizza:
 *    - `setDough` para definir o tipo de massa.
 *    - `setSauce` para definir o molho.
 *    - `addTopping` para adicionar um topping.
 * 4. Cada método retorna o próprio builder para permitir o encadeamento (method chaining).
 * 5. O método `build` retorna o objeto final (a pizza construída) e reseta o estado interno para novas construções.
 * 6. O cliente utiliza o builder para montar a pizza de forma fluida e intuitiva.
 */

// Define o tipo do produto final, neste caso uma Pizza com propriedades opcionais.
type Pizza = {
  dough?: string;
  sauce?: string;
  toppings: string[];
};

// Função que cria e retorna um builder para montar uma Pizza.
// O builder possui métodos para configurar a pizza e construir o objeto final.
const createPizzaBuilder = (): {
  setDough: (dough: string) => ReturnType<typeof createPizzaBuilder>;
  setSauce: (sauce: string) => ReturnType<typeof createPizzaBuilder>;
  addTopping: (topping: string) => ReturnType<typeof createPizzaBuilder>;
  build: () => Pizza;
} => {
  // Estado interno do builder que guarda a pizza em construção.
  let pizza: Pizza = { toppings: [] };

  // Objeto builder com métodos implementados como arrow functions.
  const builder = {
    setDough: (dough: string) => {
      pizza.dough = dough;
      return builder;
    },
    setSauce: (sauce: string) => {
      pizza.sauce = sauce;
      return builder;
    },
    addTopping: (topping: string) => {
      pizza.toppings.push(topping);
      return builder;
    },
    build: () => {
      // Cria uma cópia da pizza construída para evitar referências indesejadas.
      const builtPizza = { ...pizza };
      // Reseta o estado interno para permitir a construção de uma nova pizza.
      pizza = { toppings: [] };
      return builtPizza;
    }
  };

  return builder;
};

// Exemplo de utilização do builder para construir uma pizza.
const myPizza = createPizzaBuilder()
  .setDough("Massa Fina")
  .setSauce("Molho de Tomate")
  .addTopping("Queijo")
  .addTopping("Pepperoni")
  .build();

console.log(myPizza);
// Saída esperada:
// {
//   dough: "Massa Fina",
//   sauce: "Molho de Tomate",
//   toppings: ["Queijo", "Pepperoni"]
// }