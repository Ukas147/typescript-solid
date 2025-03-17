// Código ruim: repetição de código sem usar herança

// Círculo
// const circle = {
//   type: "círculo",
//   radius: 5,
//   calculateArea: () => {
//     return Math.PI * circle.radius * circle.radius; // fórmula da área do círculo
//   }
// };

// Retângulo
// const rectangle = {
//   type: "retângulo",
//   width: 4,
//   height: 6,
//   calculateArea: () => {
//     return rectangle.width * rectangle.height; // fórmula da área do retângulo
//   }
// };

// // Quadrado
// const square = {
//   type: "quadrado",
//   side: 4,
//   calculateArea: () => {
//     return square.side * square.side; // fórmula da área do quadrado
//   }
// };

// // Testando os cálculos de área
// console.log(`Área do ${circle.type}:`, circle.calculateArea());  // 78.54
// console.log(`Área do ${rectangle.type}:`, rectangle.calculateArea());  // 24
// console.log(`Área do ${square.type}:`, square.calculateArea());  // 16

// interface FormaGeometrica {
//   type: string;
//   side: number
// }

// const circulo: FormaGeometrica = {
//   type: "circulo",
//   side: 2
// }

// const triangulo: FormaGeometrica = {
//   type: "triangulo",
//   side: 3
// }

// const quadrado: FormaGeometrica = {
//   type: "quadrado",
//   side: 4
// }

// const calcularArea = (forma: FormaGeometrica) => {
//   return forma.width * forma.height;
// }

// Função base para criar formas geométricas
const createShape = (type: string) => {
  return {
    type,
    calcularArea: () => 0,  // Método genérico de cálculo de área (pode ser sobrescrito)
  };
};

// Função para criar um círculo
const createCircle = (radius: number) => {
  const circle = createShape("círculo"); // Criando a forma base
  circle.calcularArea = () => Math.PI * radius * radius; // Sobrescrevendo calcularArea
  return circle;
};

// Função para criar um triângulo
const createTriangle = (base: number, altura: number) => {
  const triangle = createShape("triângulo"); // Criando a forma base
  triangle.calcularArea = () => (base * altura) / 2; // Sobrescrevendo calcularArea
  return triangle;
};

// Função para criar um quadrado
const createSquare = (side: number) => {
  const square = createShape("quadrado"); // Criando a forma base
  square.calcularArea = () => side * side; // Sobrescrevendo calcularArea
  return square;
};

// Criando instâncias das formas
const circulo = createCircle(2); // Raio 2
const triangulo = createTriangle(3, 4); // Base 3, Altura 4
const quadrado = createSquare(4); // Lado 4

// Testando os cálculos de área
console.log(`Área do ${circulo.type}:`, circulo.calcularArea());  // 12.566370614359172
console.log(`Área do ${triangulo.type}:`, triangulo.calcularArea());  // 6
console.log(`Área do ${quadrado.type}:`, quadrado.calcularArea());  // 16
