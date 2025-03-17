/**
 * 🚀 CÓDIGO USANDO HERANÇA FUNCIONAL EM TYPESCRIPT 🚀
 * =======================================================
 *
 * 🔥 O que este código faz?
 *  - Este exemplo simula um **sistema de veículos**, onde cada tipo de veículo (Carro) pode ter funcionalidades específicas, mas ainda compartilha comportamentos comuns.
 *  - Utiliza **Herança Funcional** para que o carro herde comportamentos da função `criarVeiculo`, mas adicione suas próprias funcionalidades.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Herança Funcional**: Em vez de usar **classes**, usamos **funções puras** e o operador spread (`...`) para combinar comportamentos. `criarCarro` herda de `criarVeiculo` e adiciona novos métodos, como `buzinar()`.
 * 2️⃣ **Composição**: A herança é feita por **composição**, onde a função `criarCarro` **completa a funcionalidade de `criarVeiculo`** sem modificá-la diretamente.
 * 3️⃣ **Funções Puras**: Todas as funções usadas são puras e retornam objetos com comportamentos específicos, sem alterar o estado fora do escopo da função.
 * 4️⃣ **Modularidade e Reusabilidade**: A criação de um `veiculo` com a função `criarVeiculo` pode ser reutilizada em diferentes tipos de veículos, mantendo o código modular e flexível.
 *
 * 💡 O que torna este código interessante?
 *  - **Herança funcional** sem o uso de classes, aproveitando a simplicidade e a flexibilidade das funções em TypeScript.
 *  - O **método `ligar`** é herdado e pode ser reutilizado em outros tipos de veículos.
 *  - É possível **adicionar novos tipos de veículos** (como motos, caminhões, etc.) facilmente, sem alterar a função `criarVeiculo`.
 *
 * 🎯 O objetivo é mostrar como aplicar **herança funcional** de forma simples e eficaz, sem recorrer a classes.
 */

/// Função base para criar um veículo (Superclasse funcional)
const criarVeiculo = (marca: string, modelo: string) => ({
  marca,
  modelo,
  ligar: () => console.log(`🚗 O ${marca} ${modelo} está ligado!`)
});

/// Função que herda de `criarVeiculo` para criar um carro (Subclasse funcional)
const criarCarro = (marca: string, modelo: string, portas: number) => ({
  ...criarVeiculo(marca, modelo), // 🔥 Herança funcional!
  portas,
  buzinar: () => console.log("🔊 BEEP BEEP!")
});

/// 🏎️ Criando um carro
const meuCarro = criarCarro("Toyota", "Corolla", 4);
meuCarro.ligar(); // 🚗 O Toyota Corolla está ligado!
meuCarro.buzinar(); // 🔊 BEEP BEEP!