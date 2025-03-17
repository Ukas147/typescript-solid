// // Código ruim: sem abstração, fazendo uso de controle condicional

// // 1. Definindo as variáveis de transporte de forma rígida
// const car = {
//   type: "car",
//   move: () => {
//     console.log("Dirigindo o carro...");
//   }
// };

// const bike = {
//   type: "bike",
//   move: () => {
//     console.log("Pedalando a bicicleta...");
//   }
// };

// const airplane = {
//   type: "airplane",
//   move: () => {
//     console.log("Voando com o avião...");
//   }
// };

// // 2. Função para iniciar a jornada, mas é bem rígida e difícil de expandir
// const startJourney = (transport: any) => {
//   if (transport.type === "car") {
//     transport.move();
//   } else if (transport.type === "bike") {
//     transport.move();
//   } else if (transport.type === "airplane") {
//     transport.move();
//   } else {
//     console.log("Tipo de transporte não reconhecido.");
//   }
// };

// // Testando os transportes
// startJourney(car);        // Dirigindo o carro...
// startJourney(bike);       // Pedalando a bicicleta...
// startJourney(airplane);   // Voando com o avião...

interface ITransport {
  type: string;
  move: () => void
}

const startJourney = (transport: ITransport) => {
  return transport.move()
};


const car: ITransport = {
  type: "car",
  move: () => {
    console.log("Dirigindo o carro...");
  }
};

const bike: ITransport = {
  type: "bike",
  move: () => {
    console.log("Pedalando a bicicleta...");
  }
};

const airplane: ITransport = {
  type: "airplane",
  move: () => {
    console.log("Voando com o avião...");
  }
};

startJourney(car)
startJourney(bike)
startJourney(airplane)