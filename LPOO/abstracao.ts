// Interface genérica para abstração
interface Usuario {
  nome: string;
  autenticar: () => void;
}

// Função que cria um usuário
const criarUsuario = (nome: string): Usuario => ({
  nome,
  autenticar: () => console.log(`🔑 ${nome} autenticado com sucesso!`)
});

// 🏡 Criando usuários sem se preocupar com detalhes internos
const usuario1 = criarUsuario("Carlos");
const usuario2 = criarUsuario("Ana");

usuario1.autenticar(); // 🔑 Carlos autenticado com sucesso!
usuario2.autenticar(); // 🔑 Ana autenticado com sucesso!