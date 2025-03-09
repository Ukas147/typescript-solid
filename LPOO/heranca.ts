// Função base (Superclasse)
const criarVeiculo = (marca: string, modelo: string) => ({
  marca,
  modelo,
  ligar: () => console.log(`🚗 O ${marca} ${modelo} está ligado!`)
});

// Função que herda de criarVeiculo (Subclasse)
const criarCarro = (marca: string, modelo: string, portas: number) => ({
  ...criarVeiculo(marca, modelo), // 🔥 Herança funcional!
  portas,
  buzinar: () => console.log("🔊 BEEP BEEP!")
});

// 🏎️ Criando um carro
const meuCarro = criarCarro("Toyota", "Corolla", 4);
meuCarro.ligar(); // 🚗 O Toyota Corolla está ligado!
meuCarro.buzinar(); // 🔊 BEEP BEEP!