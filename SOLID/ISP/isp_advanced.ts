/*
 * Exemplo avançado do princípio de Segregação de Interfaces (ISP)
 * em TypeScript, aplicando um contexto realista de uma grande 
 * empresa de transportes. 
 *
 * Problema: Diferentes tipos de veículos precisam ser usados
 * para diferentes propósitos (entrega terrestre, aérea e marítima).
 *
 * Solução: Criamos interfaces específicas para cada tipo de veículo,
 * garantindo que cada função implemente apenas os métodos necessários.
 * Isso evita código desnecessário e melhora a manutenção do sistema.
 */

interface IDrivable {
  drive: (distance: number) => void;
  refuel: (amount: number) => void;
}

interface IFlyable {
  fly: (distance: number) => void;
  performSafetyCheck: () => boolean;
}

interface ISailable {
  sail: (distance: number) => void;
  anchor: () => void;
}

/*
 * 🚗 Implementação para Caminhão de Entrega Terrestre
 */
const deliveryTruck: IDrivable = {
  drive: (distance) =>
    console.log(`Caminhão dirigindo ${distance} km.`),

  refuel: (amount) =>
    console.log(`Reabastecendo o caminhão com ${amount} litros.`),
};

/*
 * ✈️ Implementação para Avião de Carga
 */
const cargoPlane: IFlyable = {
  fly: (distance) =>
    console.log(`Avião de carga voando ${distance} km.`),

  performSafetyCheck: () => {
    console.log('Checando segurança do avião...');
    return true;
  },
};

/*
 * 🚢 Implementação para Navio de Transporte Marítimo
 */
const cargoShip: ISailable = {
  sail: (distance) =>
    console.log(`Navio navegando ${distance} km.`),

  anchor: () => console.log('Navio ancorado com sucesso.'),
};

/*
 * 🚀 Implementação para Drone Autônomo (capaz de dirigir e voar)
 */
const autonomousDrone: IDrivable & IFlyable = {
  drive: (distance) =>
    console.log(`Drone dirigindo no solo por ${distance} km.`),

  refuel: (amount) =>
    console.log(`Carregando bateria do drone com ${amount} kWh.`),

  fly: (distance) =>
    console.log(`Drone voando ${distance} km.`),

  performSafetyCheck: () => {
    console.log('Verificando sistemas do drone...');
    return true;
  },
};

/*
 * 🔥 Gerenciador de Transporte que pode operar qualquer veículo
 */
const TransportManager = {
  operateDrivable: (vehicle: IDrivable, distance: number): void => {
    vehicle.drive(distance);
    vehicle.refuel(50);
  },

  operateFlyable: (vehicle: IFlyable, distance: number): void => {
    if (vehicle.performSafetyCheck()) {
      vehicle.fly(distance);
    } else {
      console.log('Falha na checagem de segurança!');
    }
  },

  operateSailable: (vehicle: ISailable, distance: number): void => {
    vehicle.sail(distance);
    vehicle.anchor();
  },
};

/*
 * 📦 Simulação de transporte em grande escala
 */
TransportManager.operateDrivable(deliveryTruck, 300);
TransportManager.operateFlyable(cargoPlane, 1000);
TransportManager.operateSailable(cargoShip, 500);
TransportManager.operateDrivable(autonomousDrone, 20);
TransportManager.operateFlyable(autonomousDrone, 50);