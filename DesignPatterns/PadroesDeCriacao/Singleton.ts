/**
 * Exemplo de implementação do padrão Singleton utilizando IIFE e closures.
 *
 * Conceito de Singleton:
 * - O padrão Singleton garante que um objeto tenha apenas uma única instância ao longo da aplicação.
 * - Ele fornece um ponto global de acesso a essa instância.
 * - É útil para cenários onde um recurso compartilhado (como configurações, conexões de banco de dados, ou gerenciadores de estado) 
 *   deve ser acessado de forma única e consistente.
 *
 * Como o código funciona:
 * 1. Uma IIFE (Immediately Invoked Function Expression) é usada para criar um escopo privado.
 * 2. Dentro desse escopo, a variável `instance` é declarada para armazenar a instância única do objeto.
 * 3. A função `createInstance` é responsável por criar e retornar um objeto com os métodos e propriedades desejados.
 * 4. O objeto retornado pela IIFE expõe o método `getInstance`:
 *    - Este método verifica se a instância já existe.
 *    - Se não existir, chama `createInstance` para criar a instância.
 *    - Se já existir, retorna a instância previamente criada.
 * 5. Assim, qualquer chamada a `singleton.getInstance()` retornará a mesma instância, garantindo o comportamento de Singleton.
 */

// Módulo Singleton definido com IIFE
const singleton = (() => {
  // Variável privada que armazenará a instância única do objeto
  let instance: { exibirMensagem: () => void } | null = null;

  // Função privada que cria a instância do objeto Singleton
  const createInstance = () => {
    return {
      // Método do objeto que exibe uma mensagem no console
      exibirMensagem: () => {
        console.log("Singleton: Esta é a única instância!");
      }
    };
  }

  return {
    // Método público para obter a instância única
    getInstance: () => {
      // Se a instância ainda não foi criada, cria uma nova instância
      if (!instance) {
        instance = createInstance();
      }
      // Retorna a instância existente
      return instance;
    }
  };
})();

// Utilização do Singleton:
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

// Chama o método para exibir uma mensagem
instance1.exibirMensagem();

// Verifica se ambas as variáveis apontam para a mesma instância (deveria ser true)
console.log(instance1 === instance2); // true