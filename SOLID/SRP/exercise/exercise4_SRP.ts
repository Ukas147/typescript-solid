/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio da Responsabilidade Única (SRP)**:
 *    - A função `calcularTotalPedido` faz **três coisas diferentes** ao mesmo tempo:
 *      ✅ Calcula o total do pedido.
 *      ✅ Aplica desconto se houver cupom.
 *      ✅ Exibe o resultado no console.
 *    - Se precisarmos **mudar a forma como o desconto é aplicado**, teremos que modificar essa função, aumentando o risco de quebrar o cálculo do total.
 *
 * 2️⃣ **Dificuldade de reutilização**:
 *    - E se quisermos usar o cálculo do total sem exibir o resultado no console? 
 *      - Teremos que duplicar código ou modificar esta função.
 *    - E se quisermos exibir o total de um jeito diferente (ex: enviar para uma API em vez de `console.log`)? 
 *      - Teremos que modificar esta função, quebrando o SRP novamente.
 *
 * 3️⃣ **Dificuldade de testes unitários**:
 *    - A função mistura **lógica de negócio** (cálculo e desconto) com **efeitos colaterais** (`console.log`).
 *    - Isso dificulta a escrita de **testes unitários**, pois não conseguimos testar separadamente:
 *      - O cálculo do total.
 *      - A aplicação do desconto.
 *      - A exibição do resultado.
 *    - Em ambientes de testes, ter um `console.log` dentro da função pode gerar ruído nos logs e dificultar a depuração.
 *
 * 4️⃣ **Baixa manutenção e escalabilidade**:
 *    - Se a empresa quiser adicionar **outros tipos de desconto** (ex: "FRETEGRATIS", "CASHBACK20"), essa função terá que ser modificada.
 *    - O código não é modular. Ele **não pode ser facilmente expandido** sem modificar a função principal.
 */

//criar uma interface de como será o desconto e uma classe que implementa

// const calcularTotalPedido = (itens: { nome: string; preco: number }[], cupom?: string) => {
//   let total = itens.reduce((soma, item) => soma + item.preco, 0);

//   if (cupom === "DESCONTO10") {
//     total *= 0.9; // Aplica 10% de desconto
//   }

//   console.log(`🛒 O total do pedido é: R$ ${total.toFixed(2)}`);
// };

// // 🏡 Testando a função
// const carrinho = [
//   { nome: "Mouse", preco: 100 },
//   { nome: "Teclado", preco: 200 }
// ];

// calcularTotalPedido(carrinho, "DESCONTO10"); // ❌ Mistura cálculo, desconto e exibição

//==============================================================================
//==============================================================================
//==============================================================================

// interface IDesconto {
//   cupom: string;
//   preco: number
// }

// interface IProduto {
//   nome: string;
//   preco: number
// }

// interface ICarrinho {
//   produtos: IProduto[]
// }

// const produto = ({nome, preco}: IProduto) => ({nome, preco})
// const desconto = ({cupom, preco}: IDesconto) => ({cupom, preco})
// const carrinho = ({produtos}: ICarrinho) => ({produtos})

// const calcularTotalPedido = (itens: [], cupom?: number) => {
//   let total = itens.reduce((soma, item) => soma + item.preco, 0);

//   if (cupom) {
//     total *= cupom; // Aplica 10% de desconto
//   }

//   console.log(`🛒 O total do pedido é: R$ ${total.toFixed(2)}`);
// };

// const produto1 = produto({nome: "mouse", preco: 100})
// const produto2 = produto({nome: "teclado", preco: 200})
// const meu_carrinho = carrinho({produtos: [produto1, produto2]})
// const preco_total = calcularTotalPedido ({itens: meu_carrinho.produtos})

interface IDesconto {
  cupom: string;
  desconto: number; // Agora representa o fator do desconto (ex: 0.1 para 10%)
}

interface IProduto {
  nome: string;
  preco: number;
}

interface ICarrinho {
  produtos: IProduto[];
}

// ✅ Função para criar um produto
const criarProduto = ({ nome, preco }: IProduto) => ({ nome, preco });

// ✅ Função para criar um cupom de desconto
const criarDesconto = ({ cupom, desconto }: IDesconto) => ({ cupom, desconto });

// ✅ Função para criar um carrinho de compras
const criarCarrinho = ({ produtos }: ICarrinho) => ({ produtos });

// ✅ Função para calcular o total do pedido (SEM exibir no console)
const calcularTotalPedido = (itens: IProduto[], desconto?: IDesconto) => {
  let total = itens.reduce((soma, item) => soma + item.preco, 0);

  // Se houver um cupom válido, aplica o desconto
  if (desconto) {
    total *= 1 - desconto.desconto;
  }

  return total;
};

// ✅ Função separada para exibir o total no console
const exibirTotalPedido = (total: number) => {
  console.log(`🛒 O total do pedido é: R$ ${total.toFixed(2)}`);
};

// 🏡 Criando produtos
const produto1 = criarProduto({ nome: "Mouse", preco: 100 });
const produto2 = criarProduto({ nome: "Teclado", preco: 200 });

// 🛒 Criando um carrinho de compras
const meuCarrinho = criarCarrinho({ produtos: [produto1, produto2] });

// 🎟 Criando um cupom de desconto de 10%
const meuDesconto = criarDesconto({ cupom: "DESCONTO10", desconto: 0.1 });

// ✅ Calculando o total com desconto aplicado
const precoTotal = calcularTotalPedido(meuCarrinho.produtos, meuDesconto);

// ✅ Exibindo o total corretamente
exibirTotalPedido(precoTotal);