/**
 * Exemplo de implementação do padrão Composite utilizando arrow functions e sem classes.
 *
 * Conceito de Composite:
 * - O padrão Composite permite compor objetos em estruturas de árvore para representar hierarquias parte-todo.
 * - Com ele, clientes podem tratar objetos individuais (folhas) e composições de objetos (composite) de forma uniforme.
 * - É útil para representar estruturas hierárquicas, como sistemas de arquivos, menus ou componentes gráficos.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `Component` que representa o contrato comum para os componentes da árvore, com o método `operation`.
 * 2. São implementados dois tipos de componentes:
 *    - `Leaf`: representa um componente indivisível que não possui filhos.
 *    - `Composite`: representa um componente composto que pode ter filhos e agrega os resultados das operações dos mesmos.
 * 3. Ambos implementam o método `operation`. No `Composite`, este método itera sobre seus filhos e agrega seus resultados.
 * 4. O cliente pode tratar folhas e composites de forma uniforme, chamando o método `operation` sem se preocupar com a estrutura.
 */

// Define o tipo Component com o método operation que retorna uma string.
type Component = {
  name: string;
  operation: () => string;
};

// Função para criar um Leaf (folha) que implementa o Component.
const createLeaf = (name: string): Component => ({
  name,
  operation: () => `Leaf: ${name}`
});

// Função para criar um Composite (composto) que implementa o Component e pode ter filhos.
// Além do método operation, o composite expõe métodos para gerenciar seus filhos: add, remove e getChildren.
const createComposite = (name: string): Component & {
  add: (component: Component) => void;
  remove: (component: Component) => void;
  getChildren: () => Component[];
} => {
  let children: Component[] = [];
  return {
    name,
    // O método operation do composite chama a operação de todos os seus filhos e agrega os resultados.
    operation: () => {
      const childResults = children.map(child => child.operation()).join(" + ");
      return `Composite: ${name} [${childResults}]`;
    },
    // Adiciona um componente à lista de filhos.
    add: (component: Component) => {
      children.push(component);
    },
    // Remove um componente da lista de filhos.
    remove: (component: Component) => {
      children = children.filter(child => child !== component);
    },
    // Retorna a lista de filhos.
    getChildren: () => children
  };
};

// Exemplo de utilização do padrão Composite:

// Cria folhas.
const leaf1 = createLeaf("Leaf 1");
const leaf2 = createLeaf("Leaf 2");
const leaf3 = createLeaf("Leaf 3");

// Cria composites.
const composite1 = createComposite("Composite 1");
const composite2 = createComposite("Composite 2");

// Adiciona folhas ao composite1.
composite1.add(leaf1);
composite1.add(leaf2);

// Adiciona o composite1 e uma folha ao composite2.
composite2.add(composite1);
composite2.add(leaf3);

// Executa a operação no composite2, que agrega os resultados de seus componentes (leafs e composites).
console.log(composite2.operation());
// Exemplo de saída:
// Composite: Composite 2 [Composite: Composite 1 [Leaf: Leaf 1 + Leaf: Leaf 2] + Leaf: Leaf 3]