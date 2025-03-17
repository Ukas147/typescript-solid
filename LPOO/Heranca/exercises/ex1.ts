// // Código ruim: repetição de código sem usar herança

// const dog = {
//   type: "dog",
//   sound: "bark",
//   makeSound: () => {
//     console.log("O cachorro faz " + dog.sound);
//   },
//   move: () => {
//     console.log("O cachorro corre!");
//   }
// };

// const cat = {
//   type: "cat",
//   sound: "meow",
//   makeSound: () => {
//     console.log("O gato faz " + cat.sound);
//   },
//   move: () => {
//     console.log("O gato pula!");
//   }
// };

// const bird = {
//   type: "bird",
//   sound: "chirp",
//   makeSound: () => {
//     console.log("O pássaro faz " + bird.sound);
//   },
//   move: () => {
//     console.log("O pássaro voa!");
//   }
// };

// // Testando cada animal
// dog.makeSound();   // O cachorro faz bark
// dog.move();        // O cachorro corre!

// cat.makeSound();   // O gato faz meow
// cat.move();        // O gato pula!

// bird.makeSound();  // O pássaro faz chirp
// bird.move();       // O pássaro voa!

// 1. Definindo a abstração com funções
const createAnimal = (type: string, sound: string) => {
  return {
    type,
    sound,
    makeSound: () => {
      console.log(`${type} faz ${sound}`);
    },
    move: () => {
      console.log(`${type} se move!`);
    }
  };
};

// 2. Criando os animais com a função `createAnimal`
const dog = createAnimal("cachorro", "bark");
const cat = createAnimal("gato", "meow");
const bird = createAnimal("pássaro", "chirp");

// 3. Sobrescrevendo o método move para cada animal de forma específica
dog.move = () => {
  console.log("O cachorro corre!");
};

cat.move = () => {
  console.log("O gato pula!");
};

bird.move = () => {
  console.log("O pássaro voa!");
};

// 4. Testando os animais
dog.makeSound();  // O cachorro faz bark
dog.move();       // O cachorro corre!

cat.makeSound();  // O gato faz meow
cat.move();       // O gato pula!

bird.makeSound(); // O pássaro faz chirp
bird.move();      // O pássaro voa!