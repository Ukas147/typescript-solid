/*
 * Exemplo de código TypeScript que demonstra o
 * Single Responsibility Principle (SRP). Cada
 * função tem uma única responsabilidade:
 *
 * - validateUser: valida os dados do usuário.
 * - saveUser: simula salvar os dados.
 * - logMessage: registra mensagens no console.
 *
 * O fluxo processUser usa essas funções de forma
 * independente para processar um usuário.
 */

interface User {
  id: number;
  name: string;
  email: string;
}

const validateUser = (user: User): boolean => {
  if (!user.name || !user.email) {
    return false;
  }
  return true;
};

const saveUser = (user: User): void => {
  // Simula a persistência dos dados
  console.log('Salvando usuário:', user);
};

const logMessage = (msg: string): void => {
  console.log('Log:', msg);
};

const processUser = (user: User): void => {
  if (!validateUser(user)) {
    logMessage('Dados do usuário inválidos.');
    return;
  }
  saveUser(user);
  logMessage('Usuário processado com sucesso.');
};

const user: User = {
  id: 1,
  name: 'João Silva',
  email: 'joao.silva@example.com'
};

processUser(user);