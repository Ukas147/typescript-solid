// // ❌ Esta função mistura cálculo e exibição, violando SRP
// const calcularPrecoTotal = (preco: number, imposto: number) => {
//   const total = preco + preco * imposto;
//   console.log(`💰 O preço total com imposto é: R$ ${total.toFixed(2)}`);
// };

// // 🏡 Testando a função
// calcularPrecoTotal(100, 0.2); // ❌ Mistura lógica de cálculo e exibição

//==============================================================================
//==============================================================================
//==============================================================================

// const criarPreco = (preco: number) => ({ preco })
// const criarImposto = (imposto: number) => ({ imposto })

// const calcularPrecoTotal = (preco: number, imposto: number) => {
//   const total = preco + preco * imposto;
//   console.log(`💰 O preço total com imposto é: R$ ${total.toFixed(2)}`);
// };

// const preco1 = criarPreco(100)
// const imposto1 = criarImposto(0.2)
// const impostos = calcularPrecoTotal(preco1, imposto1)

//==============================================================================
//==============================================================================
//==============================================================================

// ✅ Função para criar um objeto de preço
const criarPreco = (preco: number) => ({ preco });

// ✅ Função para criar um objeto de imposto
const criarImposto = (imposto: number) => ({ imposto });

// ✅ Função apenas para calcular o preço total (SEM console.log)
const calcularPrecoTotal = (preco: number, imposto: number) => {
  return preco + preco * imposto;
};

// ✅ Função separada apenas para exibir o resultado
const exibirPrecoTotal = (total: number) => {
  console.log(`💰 O preço total com imposto é: R$ ${total.toFixed(2)}`);
};

// 🏡 Criando valores
const preco1 = criarPreco(100);
const imposto1 = criarImposto(0.2);

// ✅ Pegamos os valores corretos e calculamos
const total = calcularPrecoTotal(preco1.preco, imposto1.imposto);

// ✅ Exibimos o resultado separadamente
exibirPrecoTotal(total);
