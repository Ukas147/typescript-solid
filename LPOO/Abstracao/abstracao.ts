/**
 * 🚀 CÓDIGO USANDO ABSTRAÇÃO EM TYPESCRIPT 🚀
 * =======================================================
 *
 * 🔥 O que este código faz?
 *  - Este exemplo demonstra **abstração** em TypeScript usando **funções puras**
 * e **interfaces**.
 *  - A função `criarUsuario` gera objetos do tipo `Usuario` com o método `autenticar()`.
 *  - A **interface `Usuario`** define a estrutura para criar usuários, mas a 
 * implementação de como a autenticação ocorre está abstraída dentro da função.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Abstração**: A interface `Usuario` esconde a implementação de como a autenticação 
 * é realizada, oferecendo apenas a assinatura do método `autenticar`.
 * 2️⃣ **Funções Puras**: A função `criarUsuario` cria e retorna um objeto com métodos 
 * sem causar efeitos colaterais externos. A autenticação é realizada dentro do método, 
 * sem alterar nenhum estado fora do objeto.
 * 3️⃣ **Interface**: A interface `Usuario` define a estrutura do objeto, ou seja, que 
 * todo "usuário" precisa ter `nome` e `autenticar()`. Isso garante que o sistema 
 * pode criar usuários de forma padronizada.
 * 4️⃣ **Desacoplamento**: O código é desacoplado da implementação específica da 
 * autenticação. A função `criarUsuario` pode ser modificada para mudar como a autenticação 
 * é realizada, sem afetar o resto do sistema.
 *
 * 💡 O que torna este código interessante?
 *  - A abstração da autenticação permite que você mude como a autenticação funciona 
 * no futuro sem precisar alterar o resto do código que usa o usuário.
 *  - O código também é simples, modular e fácil de manter.
 *  - Permite criar facilmente novos usuários sem se preocupar com detalhes da implementação.
 *
 * 🎯 O objetivo é mostrar como usar **abstração** em TypeScript com **interfaces** e **funções**.
 */

/// **Interface que define a estrutura de um usuário**
interface Usuario {
  nome: string;
  autenticar: () => void;
}

/// **Função para criar um usuário**
const criarUsuario = (nome: string): Usuario => ({
  nome,
  autenticar: () => console.log(`🔑 ${nome} autenticado com sucesso!`),
});

/// 🏡 Criando usuários sem se preocupar com detalhes internos
const usuario1 = criarUsuario('Carlos');
const usuario2 = criarUsuario("Ana");

usuario1.autenticar(); // 🔑 Carlos autenticado com sucesso!
usuario2.autenticar(); // 🔑 Ana autenticado com sucesso!
