/**
 * Exemplo de implementação do padrão Facade utilizando arrow functions e sem classes.
 *
 * Conceito de Facade:
 * - O padrão Facade fornece uma interface simples e unificada para um conjunto de interfaces complexas de um subsistema.
 * - Ele oculta a complexidade dos subsistemas, permitindo que o cliente interaja com o sistema de forma simplificada.
 * - Facilita o uso e a integração dos componentes do sistema, promovendo o desacoplamento entre o cliente e os subsistemas.
 *
 * Como o código funciona:
 * 1. São definidos três subsistemas que representam partes de um sistema de home theater:
 *    - Sistema de áudio: com métodos para ligar e ajustar o volume.
 *    - Sistema de vídeo: com métodos para ligar e ajustar o brilho.
 *    - Reprodutor de mídia: com método para reproduzir uma mídia.
 * 2. Cada subsistema é implementado como um objeto literal com arrow functions.
 * 3. O objeto `homeTheaterFacade` atua como uma fachada, encapsulando a lógica para iniciar e desligar o sistema,
 *    chamando os métodos dos subsistemas na ordem correta.
 * 4. O cliente utiliza a fachada para controlar o sistema de home theater sem precisar conhecer os detalhes dos subsistemas.
 */

// Subsistema 1: Sistema de áudio
const audioSystem = {
  turnOn: () => console.log("Sistema de áudio ligado"),
  setVolume: (volume: number) => console.log(`Volume do áudio ajustado para ${volume}`)
};

// Subsistema 2: Sistema de vídeo
const videoSystem = {
  turnOn: () => console.log("Sistema de vídeo ligado"),
  setBrightness: (level: number) => console.log(`Brilho do vídeo ajustado para ${level}`)
};

// Subsistema 3: Reprodutor de mídia
const mediaPlayer = {
  play: (media: string) => console.log(`Reproduzindo: ${media}`)
};

// Facade: Simplifica a interação com os subsistemas do home theater
const homeTheaterFacade = {
  // Método para iniciar o sistema de home theater com configurações padrão
  start: () => {
    console.log("Inicializando o sistema de home theater...");
    audioSystem.turnOn();
    audioSystem.setVolume(20);
    videoSystem.turnOn();
    videoSystem.setBrightness(70);
    mediaPlayer.play("Filme de ação");
    console.log("Sistema de home theater iniciado com sucesso!");
  },
  // Método para desligar o sistema de home theater
  shutdown: () => {
    console.log("Desligando o sistema de home theater...");
    console.log("Sistema de home theater desligado.");
  }
};

// Utilização do Facade pelo cliente
homeTheaterFacade.start();
homeTheaterFacade.shutdown();