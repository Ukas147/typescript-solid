/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio Aberto/Fechado (OCP)**:
 *    - A função `calcularFrete` precisa ser **modificada** sempre que um novo tipo de entrega for adicionado.
 *    - Se amanhã a empresa decidir incluir **frete expresso, internacional, entrega no mesmo dia**, teremos que modificar essa função novamente.
 *
 * 2️⃣ **Alto risco de introduzir bugs**:
 *    - Cada vez que alteramos a estrutura da função, podemos **acidentalmente quebrar a lógica existente**.
 *
 * 3️⃣ **Código difícil de escalar**:
 *    - Se adicionarmos novos tipos de frete, essa função ficará enorme e difícil de manter.
 *
 * 4️⃣ **Baixa reutilização**:
 *    - Se quisermos calcular o frete em outro contexto (ex: outro módulo do sistema), precisamos **copiar e colar código**.
 */

// const calcularFrete = (tipoEntrega: string, peso: number) => {
//   if (tipoEntrega === "padrão") {
//     return peso * 5; // R$5 por kg
//   } else if (tipoEntrega === "expressa") {
//     return peso * 10; // R$10 por kg
//   } else if (tipoEntrega === "internacional") {
//     return peso * 20; // R$20 por kg
//   } else {
//     throw new Error("❌ Tipo de entrega inválido!");
//   }
// };

// // 🏡 Testando a função
// console.log(`🚚 Frete padrão: R$ ${calcularFrete("padrão", 2)}`);
// console.log(`⚡ Frete expresso: R$ ${calcularFrete("expressa", 2)}`);
// console.log(`🌍 Frete internacional: R$ ${calcularFrete("internacional", 2)}`);

// ✅ Interface para definir o comportamento de todos os cálculos de frete
interface Frete {
  calcular(peso: number): number;
}

// ✅ Implementação do frete padrão
class FretePadrao implements Frete {
  calcular(peso: number): number {
    return peso * 5; // R$5 por kg
  }
}

// ✅ Implementação do frete expresso
class FreteExpresso implements Frete {
  calcular(peso: number): number {
    return peso * 10; // R$10 por kg
  }
}

// ✅ Implementação do frete internacional
class FreteInternacional implements Frete {
  calcular(peso: number): number {
    return peso * 20; // R$20 por kg
  }
}

// ✅ Classe que gerencia o cálculo do frete, aberta para extensão
class CalculadoraFrete {
  private estrategiaFrete: Frete;

  constructor(estrategiaFrete: Frete) {
    this.estrategiaFrete = estrategiaFrete;
  }

  calcularFrete(peso: number): number {
    return this.estrategiaFrete.calcular(peso);
  }
}

// 🏡 Testando o sistema de fretes (agora seguindo OCP)
const pedido1 = new CalculadoraFrete(new FretePadrao());
console.log(`🚚 Frete padrão: R$ ${pedido1.calcularFrete(2)}`);

const pedido2 = new CalculadoraFrete(new FreteExpresso());
console.log(`⚡ Frete expresso: R$ ${pedido2.calcularFrete(2)}`);

const pedido3 = new CalculadoraFrete(new FreteInternacional());
console.log(`🌍 Frete internacional: R$ ${pedido3.calcularFrete(2)}`);

// ✅ Se precisarmos adicionar um novo tipo de frete, basta criar uma nova classe sem modificar nada do código existente.