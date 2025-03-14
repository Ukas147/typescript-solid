/**
 * Exemplo de implementação do padrão Memento utilizando arrow functions e sem classes.
 *
 * Conceito de Memento:
 * - O padrão Memento captura e armazena o estado interno de um objeto (Originator) sem violar seu encapsulamento,
 *   permitindo que ele seja restaurado posteriormente para esse estado.
 * - Ele é composto por três partes:
 *   1. Originator: o objeto cujo estado pode ser salvo e restaurado.
 *   2. Memento: o objeto que armazena o estado interno do Originator.
 *   3. Caretaker: gerencia os mementos, possibilitando o salvamento e a restauração do estado.
 *
 * Como o código funciona:
 * 1. Define-se o tipo `EditorState` que representa o estado interno do editor (neste caso, apenas o conteúdo).
 * 2. A função `createEditor` atua como o Originator, oferecendo métodos para:
 *    - Atualizar o conteúdo (setContent).
 *    - Criar um memento (createMemento) que armazena o estado atual.
 *    - Restaurar o estado a partir de um memento (restore).
 *    - Obter o conteúdo atual (getContent).
 * 3. A função `createCaretaker` atua como o Caretaker, gerenciando uma lista de mementos.
 * 4. O cliente utiliza o editor para modificar seu estado, salvar mementos no caretaker e restaurar estados anteriores conforme necessário.
 */

// Define o tipo que representa o estado interno do editor.
type EditorState = {
  content: string;
};

// Função de fábrica que cria o Editor (Originator).
const createEditor = (): {
  setContent: (newContent: string) => void;
  createMemento: () => EditorState;
  restore: (memento: EditorState) => void;
  getContent: () => string;
} => {
  let content = "";
  return {
    // Atualiza o conteúdo do editor.
    setContent: (newContent: string) => {
      content = newContent;
      console.log(`Editor: Conteúdo atualizado para: "${content}"`);
    },
    // Cria e retorna um memento com o estado atual.
    createMemento: () => {
      console.log("Editor: Criando memento...");
      return { content };
    },
    // Restaura o estado do editor a partir do memento fornecido.
    restore: (memento: EditorState) => {
      content = memento.content;
      console.log(`Editor: Estado restaurado para: "${content}"`);
    },
    // Retorna o conteúdo atual do editor.
    getContent: () => content
  };
};

// Função de fábrica que cria o Caretaker para gerenciar os mementos.
const createCaretaker = () => {
  let mementos: EditorState[] = [];
  return {
    // Salva um memento.
    save: (memento: EditorState) => {
      mementos.push(memento);
      console.log("Caretaker: Memento salvo.");
    },
    // Retorna o memento no índice especificado, ou null se não existir.
    get: (index: number): EditorState | null => mementos[index] || null,
    // Retorna o último memento salvo, ou null se nenhum existir.
    getLast: (): EditorState | null => mementos[mementos.length - 1] || null,
    // Lista todos os mementos salvos.
    list: () => mementos
  };
};

// Exemplo de utilização do padrão Memento:

// Cria o editor (Originator) e o caretaker.
const editor = createEditor();
const caretaker = createCaretaker();

// Atualiza o conteúdo do editor e salva o estado (memento) no caretaker.
editor.setContent("Primeira versão");
caretaker.save(editor.createMemento());

editor.setContent("Segunda versão");
caretaker.save(editor.createMemento());

editor.setContent("Terceira versão");

// Exibe o conteúdo atual.
console.log(`Conteúdo atual: "${editor.getContent()}"`);

// Restaura o estado para a segunda versão utilizando o memento salvo.
const secondMemento = caretaker.get(1);
if (secondMemento) {
  editor.restore(secondMemento);
}

// Exibe o conteúdo após a restauração.
console.log(`Conteúdo restaurado: "${editor.getContent()}"`);