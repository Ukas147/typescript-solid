/**
 * Exemplo de implementação do padrão Command utilizando arrow functions e sem classes.
 *
 * Conceito de Command:
 * - O padrão Command encapsula uma requisição em um objeto, permitindo parametrizar clientes com diferentes operações,
 *   enfileirar ou logar as requisições, e oferecer suporte a operações de desfazer (undo).
 * - Ele desacopla o objeto que invoca a operação daquele que realmente a executa, tornando os comandos intercambiáveis.
 * - É útil em cenários como controles remotos, sistemas de menu, ou qualquer situação que exija a separação entre o
 *   pedido de uma ação e sua execução.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Command` que possui um método `execute` para realizar a ação.
 * 2. Cria-se um objeto `light` que simula uma lâmpada com métodos `on` e `off`.
 * 3. São criados dois comandos concretos: 
 *    - `lightOnCommand`: encapsula a ação de ligar a lâmpada.
 *    - `lightOffCommand`: encapsula a ação de desligar a lâmpada.
 * 4. Um invoker, representado pelo `remoteControl`, permite configurar e executar um comando.
 * 5. O cliente configura o comando desejado no invoker e o aciona, que delega a operação ao comando configurado.
 */

// Define o tipo Command com o método execute.
type Command = {
  execute: () => void;
};

// Objeto que simula uma lâmpada com métodos para ligar e desligar.
const light = {
  on: () => console.log("Lâmpada ligada."),
  off: () => console.log("Lâmpada desligada.")
};

// Comando que encapsula a ação de ligar a lâmpada.
const lightOnCommand = (lightRef: typeof light): Command => ({
  execute: () => lightRef.on()
});

// Comando que encapsula a ação de desligar a lâmpada.
const lightOffCommand = (lightRef: typeof light): Command => ({
  execute: () => lightRef.off()
});

// Invoker: objeto que permite configurar e executar um comando.
const createRemoteControl = () => {
  let currentCommand: Command | null = null;
  return {
    // Configura o comando a ser executado.
    setCommand: (command: Command) => {
      currentCommand = command;
    },
    // Executa o comando configurado.
    pressButton: () => {
      currentCommand?.execute();
    }
  };
};

// Exemplo de utilização:

// Cria um controle remoto.
const remoteControl = createRemoteControl();

// Configura o comando para ligar a lâmpada e executa-o.
remoteControl.setCommand(lightOnCommand(light));
remoteControl.pressButton(); // Saída: "Lâmpada ligada."

// Configura o comando para desligar a lâmpada e executa-o.
remoteControl.setCommand(lightOffCommand(light));
remoteControl.pressButton(); // Saída: "Lâmpada desligada."