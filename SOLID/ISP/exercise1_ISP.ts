/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio da Segregação de Interfaces (ISP)**:
 *    - A interface `Impressora` obriga TODAS as impressoras a implementarem `escaneia()` e `enviaFax()`, mesmo que nem todas tenham essas funções.
 *
 * 2️⃣ **Alto risco de erro ao implementar novas impressoras**:
 *    - Se uma impressora não tiver suporte a fax, terá que lançar um erro ou implementar um método vazio.
 *
 * 3️⃣ **Código desnecessariamente inchado**:
 *    - Impressoras básicas acabam carregando métodos que nunca usarão.
 *
 * 4️⃣ **Dificuldade de manutenção e testes**:
 *    - O código se torna mais difícil de testar e manter devido à implementação de métodos irrelevantes.
 */

// interface Impressora {
//   imprimir(): void;
//   escanear(): void;
//   enviarFax(): void;
// }

// // ✅ Impressora multifuncional (Tem todas as funções)
// const impressoraMultifuncional: Impressora = {
//   imprimir: () => console.log("🖨️ Impressão realizada!"),
//   escanear: () => console.log("📸 Documento escaneado!"),
//   enviarFax: () => console.log("📠 Fax enviado!"),
// };

// // ❌ Impressora básica é forçada a implementar métodos que não fazem sentido
// const impressoraBasica: Impressora = {
//   imprimir: () => console.log("🖨️ Impressão realizada!"),
//   escanear: () => {
//     throw new Error("❌ Impressora básica não escaneia!");
//   },
//   enviarFax: () => {
//     throw new Error("❌ Impressora básica não envia fax!");
//   },
// };

// // 🏡 Testando as impressoras
// impressoraMultifuncional.imprimir(); // ✅ Correto
// impressoraBasica.imprimir(); // ✅ Correto

// // ❌ Erros porque a impressora básica não deveria ter esses métodos
// impressoraBasica.escanear(); // 🚨 Erro em tempo de execução!
// impressoraBasica.enviarFax(); // 🚨 Erro em tempo de execução!

// ✅ Interface para impressoras que apenas imprimem
interface Impressora {
  imprimir: () => void;
}

// ✅ Interface para impressoras que escaneiam
interface Escaneadora {
  escanear: () => void;
}

// ✅ Interface para impressoras que enviam fax
interface Fax {
  enviarFax: () => void;
}

// ✅ Impressora multifuncional (Tem todas as funções)
const impressoraMultifuncional: Impressora & Escaneadora & Fax = {
  imprimir: () => console.log("🖨️ Impressão realizada!"),
  escanear: () => console.log("📸 Documento escaneado!"),
  enviarFax: () => console.log("📠 Fax enviado!"),
};

// ✅ Impressora básica (Apenas imprime, sem escanear ou fax)
const impressoraBasica: Impressora = {
  imprimir: () => console.log("🖨️ Impressão realizada!"),
};

// 🏡 Testando as impressoras (agora seguindo ISP)
impressoraMultifuncional.imprimir(); // ✅ Correto
impressoraMultifuncional.escanear(); // ✅ Correto
impressoraMultifuncional.enviarFax(); // ✅ Correto

impressoraBasica.imprimir(); // ✅ Correto
// ❌ impressoraBasica.escanear(); // 🚨 Erro! Agora esse método **não existe** em impressora básica
// ❌ impressoraBasica.enviarFax(); // 🚨 Erro! Agora esse método **não existe** em impressora básica