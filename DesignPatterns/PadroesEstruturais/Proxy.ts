/**
 * Exemplo de implementação do padrão Proxy utilizando arrow functions e sem classes.
 *
 * Conceito de Proxy:
 * - O padrão Proxy atua como um intermediário para acessar um objeto real (RealSubject), controlando seu acesso e
 *   adicionando funcionalidades adicionais, como controle de acesso, cache ou carregamento tardio (lazy loading).
 * - O Proxy implementa a mesma interface que o objeto real, permitindo que o cliente interaja com ele de forma transparente.
 * - É útil quando o objeto real é pesado ou quando se deseja adicionar comportamentos extras sem modificar o objeto original.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Resource` com o método `request`, representando a interface comum para o objeto real e o proxy.
 * 2. A função `createHeavyResource` simula um objeto pesado, que possui um método `request` para executar uma operação.
 * 3. A função `createResourceProxy` atua como um proxy para o recurso pesado:
 *    - Mantém uma referência privada ao `HeavyResource`, iniciando-a como nula.
 *    - No método `request`, verifica se o `HeavyResource` já foi instanciado. Se não, instancia-o e delega a chamada.
 * 4. O cliente interage com o proxy, que controla a criação e o acesso ao recurso pesado de forma transparente.
 */

// Define o tipo Resource com o método request.
type Resource = {
  request: () => void;
};

// Função que cria um objeto representando um recurso pesado.
const createHeavyResource = (): Resource => ({
  request: () => {
    console.log("Executando operação no recurso pesado.");
  }
});

// Função que cria um proxy para o recurso pesado.
const createResourceProxy = (): Resource => {
  // Variável privada que armazenará a instância do recurso pesado.
  let heavyResource: Resource | null = null;

  return {
    request: () => {
      // Instancia o recurso pesado se ainda não foi criado.
      if (!heavyResource) {
        console.log("Instanciando o recurso pesado...");
        heavyResource = createHeavyResource();
      }
      // Delegar a chamada para o recurso pesado.
      heavyResource.request();
    }
  };
};

// Exemplo de utilização do Proxy:

// Cria o proxy do recurso.
const resourceProxy = createResourceProxy();

// O recurso pesado ainda não foi instanciado.
console.log("Chamando request pela primeira vez:");
resourceProxy.request(); // Instancia e executa a operação no recurso pesado.

// Em chamadas subsequentes, o recurso pesado já está instanciado e é reutilizado.
console.log("Chamando request novamente:");
resourceProxy.request();