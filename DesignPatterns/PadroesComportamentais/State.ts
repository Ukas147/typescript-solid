/**
 * Exemplo de implementação do padrão State utilizando arrow functions e sem classes.
 *
 * Conceito de State:
 * - O padrão State permite que um objeto altere seu comportamento quando seu estado interno muda,
 *   fazendo com que pareça ter mudado de classe.
 * - Ele encapsula os comportamentos específicos de cada estado em objetos separados (estados concretos),
 *   permitindo que o objeto (contexto) delegue as ações para o estado atual.
 * - Isso promove um código mais organizado e de fácil manutenção, evitando condicionais complexas.
 *
 * Como o código funciona:
 * 1. Define-se os tipos `State` e `StateContext` para representar o contrato dos estados e o contexto que permite
 *    a mudança de estado.
 * 2. São implementados dois estados concretos: `pausedState` e `playingState`, cada um com comportamentos específicos
 *    para as operações `play` e `pause`.
 *    - Em `pausedState`, ao pressionar "play", o estado muda para "playing".
 *    - Em `playingState`, ao pressionar "pause", o estado muda para "paused".
 * 3. O objeto `player` representa o contexto que mantém o estado atual e expõe métodos (`pressPlay` e `pressPause`)
 *    para delegar as operações ao estado atual.
 * 4. Cada método do estado recebe um objeto `context` com a função `setState`, que permite alterar o estado do contexto.
 */

// Define o tipo que representa o contexto necessário para alteração de estado.
type StateContext = {
  setState: (state: State) => void;
};

// Define o tipo de um estado com os métodos play e pause.
type State = {
  play: (context: StateContext) => void;
  pause: (context: StateContext) => void;
};

// Estado quando o player está pausado.
const pausedState: State = {
  play: (context) => {
    console.log("Reproduzindo música...");
    // Ao pressionar play, muda para o estado playing.
    context.setState(playingState);
  },
  pause: () => console.log("O player já está pausado.")
};

// Estado quando o player está reproduzindo.
const playingState: State = {
  play: () => console.log("A música já está em reprodução."),
  pause: (context) => {
    console.log("Pausando música...");
    // Ao pressionar pause, muda para o estado paused.
    context.setState(pausedState);
  }
};

// Contexto do player que mantém o estado atual e expõe métodos para interagir com ele.
const player = (() => {
  // Estado inicial do player.
  let currentState: State = pausedState;

  // Função para atualizar o estado do player.
  const setState = (state: State): void => {
    currentState = state;
    console.log(`Estado alterado para: ${state === playingState ? "Playing" : "Paused"}`);
  };

  // Interface pública do player, utilizando arrow functions para delegar as operações ao estado atual.
  return {
    pressPlay: () => currentState.play({ setState }),
    pressPause: () => currentState.pause({ setState }),
    // Método para retornar o estado atual em forma de string.
    getState: (): string => (currentState === playingState ? "Playing" : "Paused")
  };
})();

// Exemplo de utilização do padrão State:

console.log(`Estado inicial: ${player.getState()}`); // Deve exibir "Paused"
player.pressPlay();    // Transição de "Paused" para "Playing"
console.log(`Estado atual: ${player.getState()}`);   // Deve exibir "Playing"
player.pressPlay();    // Já está "Playing", não há mudança de estado
player.pressPause();   // Transição de "Playing" para "Paused"
console.log(`Estado final: ${player.getState()}`);     // Deve exibir "Paused"