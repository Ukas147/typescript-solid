// // ❌ Função que formata e também armazena o usuário no banco de dados (violação de SRP)
// const salvarUsuario = (nome: string) => {
//   const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
//   console.log(`💾 Salvando usuário no banco de dados: ${nomeFormatado}`);
// };

// // 🏡 Testando a função
// salvarUsuario("carlos"); // ❌ Mistura formatação e persistência de dados

//==============================================================================
//==============================================================================
//==============================================================================

// const usuario = (nome: string) => ({nome})
// const formatarUsuario = (nome: string) => {
//   return nome.charAt(0).toUpperCase() + nome.slice(1)
// }
// const exibirNomeFormatado = (nomeFormatado: string) => {
//   console.log(`💾 Salvando usuário no banco de dados: ${nomeFormatado}`);
// }

// const usuario1 = usuario("Alex")
// const formatarNme = formatarUsuario(usuario1.nome)
// const exibirNme = exibirNomeFormatado(formatarNme)

//==============================================================================
//==============================================================================
//==============================================================================

// ✅ Função para criar um objeto usuário (única responsabilidade: armazenar dados)
const criarUsuario = (nome: string) => ({ nome });

// ✅ Função separada apenas para formatar o nome
const formatarNome = (nome: string) => nome.charAt(0).toUpperCase() + nome.slice(1);

// ✅ Função separada apenas para simular o salvamento no banco de dados
const salvarNoBanco = (nome: string) => {
  console.log(`💾 Salvando usuário no banco de dados: ${nome}`);
};

// 🏡 Criando um usuário
const usuario1 = criarUsuario("alex");

// ✅ Formatando o nome antes de salvar
const nomeFormatado = formatarNome(usuario1.nome);

// ✅ Salvando o nome formatado no banco
salvarNoBanco(nomeFormatado);
