/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio de Substituição de Liskov (LSP)**:
 *    - A classe `FuncionarioPJ` herda `receberBeneficios`, mas esse método **não faz sentido para um PJ**.
 *    - Se um código genérico tentar chamar `receberBeneficios()` em um `FuncionarioPJ`, ele lançará um erro!
 *
 * 2️⃣ **Baixa segurança e risco de erros em tempo de execução**:
 *    - Se a empresa adicionar outro tipo de funcionário, pode esquecer de sobrescrever o método, causando falhas.
 *
 * 3️⃣ **Código não é confiável para reutilização**:
 *    - O sistema deveria ser capaz de tratar **todos os funcionários da mesma forma** sem precisar verificar o tipo.
 */

// class Funcionario {
//   constructor(protected nome: string, protected salario: number) {}

//   calcularSalario(): number {
//     return this.salario;
//   }

//   receberBeneficios(): void {
//     console.log(`💰 ${this.nome} recebeu benefícios.`);
//   }
// }

// class FuncionarioCLT extends Funcionario {
//   constructor(nome: string, salario: number) {
//     super(nome, salario);
//   }
// }

// class FuncionarioPJ extends Funcionario {
//   constructor(nome: string, salario: number) {
//     super(nome, salario);
//   }

//   // ❌ Erro! Um FuncionárioPJ não deveria ter esse método
//   receberBeneficios(): void {
//     throw new Error(`❌ ${this.nome} não recebe benefícios!`);
//   }
// }

// // 🏡 Testando o sistema de funcionários (com problema)
// const clt = new FuncionarioCLT("Carlos", 5000);
// const pj = new FuncionarioPJ("Ana", 7000);

// clt.receberBeneficios(); // ✅ Correto
// pj.receberBeneficios(); // ❌ ERRO! Esse método não deveria existir em PJ

// ✅ Interface para funcionários que recebem apenas salário
interface Funcionario {
  nome: string;
  calcularSalario: () => number;
}

// ✅ Interface para funcionários que também recebem benefícios
interface Beneficiavel {
  receberBeneficios: () => void;
}

// ✅ Função para criar um funcionário genérico
const criarFuncionario = (nome: string, salario: number): Funcionario => ({
  nome,
  calcularSalario: () => salario,
});

// ✅ Função para criar um funcionário CLT (recebe salário + benefícios)
const criarFuncionarioCLT = (nome: string, salario: number): Funcionario & Beneficiavel => ({
  ...criarFuncionario(nome, salario),
  receberBeneficios: () => console.log(`💰 ${nome} recebeu benefícios.`),
});

// ✅ Função para criar um funcionário PJ (somente salário)
const criarFuncionarioPJ = (nome: string, salario: number): Funcionario => criarFuncionario(nome, salario);

// 🏡 Testando o sistema de funcionários (agora seguindo LSP)
const clt = criarFuncionarioCLT("Carlos", 5000);
const pj = criarFuncionarioPJ("Ana", 7000);

console.log(`📊 Salário de ${clt.nome}: R$ ${clt.calcularSalario()}`);
clt.receberBeneficios(); // ✅ Correto

console.log(`📊 Salário de ${pj.nome}: R$ ${pj.calcularSalario()}`);
// ❌ pj.receberBeneficios(); // Agora esse erro **NÃO ACONTECE MAIS** porque PJ não tem esse método!
