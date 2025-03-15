/**
 * 🚀 CÓDIGO AVANÇADO USANDO HERANÇA EM TYPESCRIPT 🚀
 * ======================================================
 *
 * 🔥 O que este código faz?
 *  - Simula um **sistema de veículos**, onde cada tipo de veículo tem funcionalidades específicas.
 *  - Usa **Herança + Composição** para permitir que os veículos herdem comportamentos comuns.
 *  - Evita o uso de classes, usando **funções puras e Object.assign()** para criar herança dinâmica.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Herança Funcional** → `criarCarro`, `criarMoto` e `criarCaminhao` compartilham funcionalidades de `criarVeiculo`.
 * 2️⃣ **Composição sobre Herança** → Em vez de usar classes, criamos **módulos reutilizáveis** (`criarVeiculo`, `criarTurbo`, etc.).
 * 3️⃣ **Alta Abstração** → Os veículos são criados dinamicamente, combinando apenas os módulos necessários.
 * 4️⃣ **Polimorfismo Implícito** → Cada veículo pode ter métodos diferentes, sem precisar sobrescrever explicitamente.
 * 5️⃣ **Evita Herança Profunda** → O código é desacoplado e permite fácil modificação sem alterar a estrutura central.
 *
 * 💡 O que torna este código difícil de entender?
 *  - Usa **herança dinâmica com composição**, fugindo da estrutura tradicional de classes.
 *  - Faz **uso avançado de Object.assign()** para criar objetos híbridos que combinam múltiplos comportamentos.
 *  - **Cada veículo tem diferentes métodos disponíveis**, dependendo das funções que herdou.
 *
 * 🎯 O objetivo é mostrar como aplicar **Herança Avançada** em TypeScript sem classes!
 */

/// **Módulo base para qualquer veículo** (Superclasse funcional)
const criarVeiculo = (marca: string, modelo: string) => ({
  marca,
  modelo,
  ligar: () => console.log(`🚗 O ${marca} ${modelo} está ligado!`),
  desligar: () => console.log(`🛑 O ${marca} ${modelo} está desligado.`),
});

/// **Módulo extra para veículos esportivos** (Turbo)
const criarTurbo = () => ({
  ativarTurbo: () => console.log("🔥 Turbo ativado!"),
});

/// **Módulo extra para veículos de carga** (Carga pesada)
const criarCargaPesada = (capacidade: number) => ({
  carregar: () => console.log(`📦 Carga de até ${capacidade}kg adicionada ao veículo.`),
});

/// **Criando diferentes tipos de veículos a partir da "superclasse"**
const criarCarro = (marca: string, modelo: string) =>
  Object.assign({}, criarVeiculo(marca, modelo), criarTurbo());

const criarMoto = (marca: string, modelo: string) =>
  Object.assign({}, criarVeiculo(marca, modelo)); // Motos não têm turbo por padrão

const criarCaminhao = (marca: string, modelo: string, capacidade: number) =>
  Object.assign({}, criarVeiculo(marca, modelo), criarCargaPesada(capacidade));

/// 🔥 Criando diferentes tipos de veículos
const meuCarro = criarCarro("Toyota", "Supra");
const minhaMoto = criarMoto("Honda", "CBR 600RR");
const meuCaminhao = criarCaminhao("Volvo", "FH16", 20000);

/// 🏎️ Testando os veículos
meuCarro.ligar();
meuCarro.ativarTurbo(); // 🚀 Só carros têm turbo
meuCarro.desligar();

minhaMoto.ligar();
minhaMoto.desligar();
// ❌ minhaMoto.ativarTurbo(); // Erro! Motos não têm turbo.

meuCaminhao.ligar();
meuCaminhao.carregar(); // 🚛 Só caminhões têm função de carga
meuCaminhao.desligar();