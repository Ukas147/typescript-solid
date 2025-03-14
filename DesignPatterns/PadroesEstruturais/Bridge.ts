/**
 * Exemplo de implementação do padrão Bridge utilizando arrow functions e sem classes.
 *
 * Conceito de Bridge:
 * - O padrão Bridge separa a abstração da sua implementação, permitindo que ambas variem independentemente.
 * - Ele divide o sistema em duas hierarquias: a abstração (por exemplo, um controle remoto) e a implementação (por exemplo, um dispositivo eletrônico).
 * - O cliente interage com a abstração, que delega as operações para a implementação, possibilitando a troca dinâmica de dispositivos sem alterar a interface do controle.
 *
 * Como o código funciona:
 * 1. Define-se o tipo Device, que representa a interface dos dispositivos com métodos para ligar, desligar, verificar o estado e obter o status.
 * 2. São criadas funções de fábrica para dispositivos concretos, como TV e Rádio, cada uma encapsulando seu estado interno.
 * 3. Define-se uma função de fábrica createRemote que cria a abstração (controle remoto) para controlar um dispositivo.
 * 4. O Remote expõe métodos como togglePower e getDeviceStatus, que delegam as chamadas ao Device.
 * 5. O cliente utiliza o Remote para controlar diferentes dispositivos sem precisar conhecer os detalhes da implementação.
 */

// Define o tipo Device com os métodos para controlar o dispositivo.
type Device = {
  isPoweredOn: () => boolean;
  turnOn: () => void;
  turnOff: () => void;
  getStatus: () => string;
};

// Função de fábrica para criar uma TV.
const createTV = (): Device => {
  let power = false;
  return {
    isPoweredOn: () => power,
    turnOn: () => {
      power = true;
      console.log("TV está ligada.");
    },
    turnOff: () => {
      power = false;
      console.log("TV está desligada.");
    },
    getStatus: () => `TV está ${power ? "ligada" : "desligada"}.`
  };
};

// Função de fábrica para criar um Rádio.
const createRadio = (): Device => {
  let power = false;
  return {
    isPoweredOn: () => power,
    turnOn: () => {
      power = true;
      console.log("Rádio está ligado.");
    },
    turnOff: () => {
      power = false;
      console.log("Rádio está desligado.");
    },
    getStatus: () => `Rádio está ${power ? "ligado" : "desligado"}.`
  };
};

// Função de fábrica para criar um controle remoto (abstração) que opera um Device.
const createRemote = (device: Device) => ({
  // Alterna o estado de energia do dispositivo.
  togglePower: () => device.isPoweredOn() ? device.turnOff() : device.turnOn(),
  // Retorna o status atual do dispositivo.
  getDeviceStatus: () => device.getStatus()
});

// Exemplo de utilização:

// Controle de uma TV via Remote.
const tv = createTV();
const tvRemote = createRemote(tv);

console.log(tvRemote.getDeviceStatus()); // TV está desligada.
tvRemote.togglePower();                  // Liga a TV.
console.log(tvRemote.getDeviceStatus()); // TV está ligada.
tvRemote.togglePower();                  // Desliga a TV.

// Controle de um Rádio via Remote.
const radio = createRadio();
const radioRemote = createRemote(radio);

console.log(radioRemote.getDeviceStatus()); // Rádio está desligado.
radioRemote.togglePower();                  // Liga o Rádio.
console.log(radioRemote.getDeviceStatus()); // Rádio está ligado.
radioRemote.togglePower();                  // Desliga o Rádio.