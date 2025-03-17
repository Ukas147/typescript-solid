/*
 * Código ruim: Todos os veículos são forçados a implementar
 * métodos que podem não fazer sentido para eles.
 */
// interface IVehicle {
//   drive(): void;
//   fly(): void;
//   sail(): void;
// }

interface IDrive {
  drive: () => void;
}

interface IFly {
  fly: () => void;
}

interface ISail {
  sail: () => void;
}

const Car: IDrive = {
  drive: () => console.log('Dirigindo um carro...'),
}

const Airplane: IFly = {
  fly: () => console.log('Pilotando um avião...'),
}

const Boat: ISail = {
  sail: () => console.log('Navegando com um barco...'),
}

// class Car implements IVehicle {
//   drive(): void {
//     console.log('Dirigindo um carro...');
//   }

//   fly(): void {
//     throw new Error('Carro não pode voar!');
//   }

//   sail(): void {
//     throw new Error('Carro não pode navegar!');
//   }
// }

// class Airplane implements IVehicle {
//   drive(): void {
//     throw new Error('Avião não pode dirigir como um carro!');
//   }

//   fly(): void {
//     console.log('Pilotando um avião...');
//   }

//   sail(): void {
//     throw new Error('Avião não pode navegar!');
//   }
// }

// class Boat implements IVehicle {
//   drive(): void {
//     throw new Error('Barco não pode dirigir como um carro!');
//   }

//   fly(): void {
//     throw new Error('Barco não pode voar!');
//   }

//   sail(): void {
//     console.log('Navegando com um barco...');
//   }
// }
