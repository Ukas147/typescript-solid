/**
 * Exemplo de implementação do padrão Adapter utilizando arrow functions e sem classes.
 *
 * Conceito de Adapter:
 * - O padrão Adapter permite que interfaces incompatíveis trabalhem juntas, convertendo a interface de um objeto
 *   (Adaptee) em outra interface (Target) que o cliente espera.
 * - Ele é útil quando você quer integrar sistemas ou componentes que possuem interfaces diferentes sem alterar suas implementações.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Target` que representa a interface que o cliente espera, contendo o método `request`.
 * 2. Cria-se um objeto `adaptee` que possui uma interface incompatível, com o método `specificRequest`.
 * 3. Implementa-se um `adapter` que, utilizando arrow functions, traduz a chamada do método `request`
 *    para a chamada do método `specificRequest` do adaptee, ajustando o formato da resposta se necessário.
 * 4. O cliente utiliza o adapter chamando o método `request`, sem se preocupar com os detalhes da interface do adaptee.
 */

// Interface que o cliente espera (Target)
type Target = {
  request: () => string;
};

// Adaptee: objeto com uma interface incompatível, que precisa ser adaptado
const adaptee = {
  // Método com interface específica que não é compatível com o Target
  specificRequest: (): string => "Resposta do adaptee em formato específico"
};

// Adapter: converte a interface do adaptee para a interface Target utilizando arrow functions
const adapter: Target = {
  request: () => {
    // Chama o método do adaptee e adapta o resultado, se necessário.
    const result = adaptee.specificRequest();
    return `Adapter traduzido: ${result}`;
  }
};

// Utilização do Adapter pelo cliente
console.log(adapter.request());
// Saída esperada: "Adapter traduzido: Resposta do adaptee em formato específico"