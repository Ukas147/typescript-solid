/**
 * Exemplo de implementação do padrão Flyweight utilizando arrow functions e sem classes.
 *
 * Conceito de Flyweight:
 * - O padrão Flyweight é utilizado para minimizar o uso de memória compartilhando partes comuns do estado entre múltiplos objetos.
 * - Ele distingue entre estado intrínseco (compartilhável, imutável) e estado extrínseco (variável, fornecido externamente).
 * - Ao reutilizar objetos que possuem o mesmo estado intrínseco, é possível reduzir significativamente o número de instâncias criadas.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Circle` que representa o objeto Flyweight com um estado intrínseco (cor) e um método `draw`
 *    que utiliza estado extrínseco (posição e tamanho) para desenhar o círculo.
 * 2. A função `createCircle` cria um objeto Circle com a cor definida.
 * 3. O `circleFactory` atua como uma fábrica que gerencia um cache de círculos:
 *    - Se um círculo com a mesma cor já existir, ele é retornado a partir do cache, evitando a criação de uma nova instância.
 *    - Caso contrário, um novo círculo é criado e armazenado no cache.
 * 4. O cliente solicita círculos através do `circleFactory.getCircle` e utiliza o método `draw` para renderizar o círculo,
 *    passando o estado extrínseco (posição e raio) conforme necessário.
 */

// Define o tipo Circle com propriedade intrínseca 'color' e método draw que recebe estado extrínseco.
type Circle = {
  color: string;
  draw: (x: number, y: number, radius: number) => void;
};

// Função que cria um objeto Circle com a cor definida.
const createCircle = (color: string): Circle => ({
  color,
  draw: (x: number, y: number, radius: number) =>
    console.log(`Desenhando círculo: cor=${color}, x=${x}, y=${y}, raio=${radius}`)
});

// Fábrica Flyweight que gerencia o cache de círculos.
const circleFactory = (() => {
  // Cache privado para armazenar círculos por cor.
  const circles: { [color: string]: Circle } = {};

  return {
    // Retorna um círculo do cache se existir, ou cria um novo e armazena.
    getCircle: (color: string): Circle => {
      if (!circles[color]) {
        circles[color] = createCircle(color);
        console.log(`Criando novo círculo com cor ${color}`);
      }
      return circles[color];
    },
    // Retorna a quantidade de instâncias únicas criadas.
    getCount: (): number => Object.keys(circles).length
  };
})();

// Exemplo de utilização do Flyweight:

// Solicita círculos de diferentes cores.
const redCircle1 = circleFactory.getCircle("vermelho");
const redCircle2 = circleFactory.getCircle("vermelho");
const blueCircle = circleFactory.getCircle("azul");

// Utiliza o método draw com estado extrínseco (posição e raio).
redCircle1.draw(10, 20, 5);
redCircle2.draw(15, 25, 10);
blueCircle.draw(30, 40, 8);

// Verifica que círculos da mesma cor são compartilhados.
console.log(`Número de círculos criados: ${circleFactory.getCount()}`); // Deve exibir 2, pois "vermelho" e "azul" são únicos.