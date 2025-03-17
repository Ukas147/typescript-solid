// // ❌ Função que calcula a idade e também exibe o resultado (violação de SRP)
// const calcularIdade = (anoNascimento: number) => {
//   const anoAtual = new Date().getFullYear();
//   const idade = anoAtual - anoNascimento;
//   console.log(`🎂 A idade da pessoa é: ${idade} anos`);
// };

// // 🏡 Testando a função
// calcularIdade(1995); // ❌ Mistura lógica de cálculo e exibição

//==============================================================================
//==============================================================================
//==============================================================================

// ❌ Função que calcula a idade e também exibe o resultado (violação de SRP)
const calcularIdade = (anoNascimento: number) => {
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  return idade
};

const exibirIdade = (idade: number) => {
  console.log(`🎂 A idade da pessoa é: ${idade} anos`);
}

// 🏡 Testando a função
const idade = calcularIdade(1995); // ❌ Mistura lógica de cálculo e exibição
exibirIdade(idade)