/*
 * 🚨 CÓDIGO RUIM: Viola o princípio LSP porque a classe
 * Penguin herda de Bird, mas não pode voar. Isso quebra
 * a substituição correta de objetos.
 */

// class Bird {
//   fly(): void {
//     console.log('O pássaro está voando!');
//   }
// }

// class Sparrow extends Bird {
//   // Pardais podem voar normalmente
// }

// class Penguin extends Bird {
//   // Pinguins não podem voar, então esse método quebra a substituição
//   fly(): void {
//     throw new Error('Pinguins não podem voar!');
//   }
// }

// // 🧪 Testando o código ruim
// const sparrow = new Sparrow();
// sparrow.fly(); // ✅ Funciona

// const penguin = new Penguin();
// penguin.fly(); // ❌ ERRO! (Pinguins não podem voar)

/*
 * ✅ CÓDIGO CORRIGIDO: Agora respeitamos o LSP!
 * 
 * - Criamos interfaces separadas para "voar" e "andar".
 * - Pássaros que voam implementam "IFlyable".
 * - Pinguins não precisam de um método "fly()", pois só andam.
 */

interface IFlyable {
  fly: () => void;
}

interface IWalkable {
  walk: () => void;
}

/*
 * 🦜 Pardal: Pode voar e andar
 */
const sparrow: IFlyable & IWalkable = {
  fly: () => console.log('O pardal está voando!'),
  walk: () => console.log('O pardal está andando!'),
};

/*
 * 🐧 Pinguim: Só pode andar (não pode voar)
 */
const penguin: IWalkable = {
  walk: () => console.log('O pinguim está andando!'),
};

/*
 * 🔥 Função genérica que faz um pássaro voar (se ele puder voar)
 */
const makeFly = (bird: IFlyable) => {
  bird.fly();
};

/*
 * 🔥 Função genérica que faz um pássaro andar
 */
const makeWalk = (bird: IWalkable) => {
  bird.walk();
};

/*
 * 🧪 Testando o código corrigido
 */
makeFly(sparrow); // ✅ Funciona
makeWalk(sparrow); // ✅ Funciona

makeWalk(penguin); // ✅ Funciona (pinguins podem andar!)

// makeFly(penguin); // ❌ ERRO! (Agora o TypeScript não deixa chamar fly())
