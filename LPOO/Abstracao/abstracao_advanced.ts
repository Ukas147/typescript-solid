/**
 * 🚀 CÓDIGO AVANÇADO USANDO ABSTRAÇÃO EM TYPESCRIPT 🚀
 * ======================================================
 *
 * 🔥 O que este código faz?
 *  - Simula um **sistema de processamento de pedidos** em um restaurante, onde 
 * os pedidos podem ser de diferentes tipos de comida.
 *  - Utiliza **Abstração** para esconder detalhes da implementação do processamento
 *  de pedidos, permitindo que a interface seja simples e flexível.
 *  - Faz uso de **funções puras** e **closures** para criar uma estrutura desacoplada 
 * e modular.
 *
 * 🔍 Principais conceitos aplicados:
 *
 * 1️⃣ **Abstração** → A implementação do tipo de pedido (Pizza, Sushi, Hambúrguer)
 *  é ocultada, e só os métodos `preparar` e `finalizar` são expostos.
 * 2️⃣ **Funções Puras** → Cada tipo de pedido é tratado como uma função separada, 
 * e o estado é mantido de forma isolada e segura.
 * 3️⃣ **Interfaces e Tipos Dinâmicos** → A interface `Pedido` define os métodos 
 * comuns que todos os pedidos devem ter, permitindo que novos tipos de pedidos 
 * sejam adicionados sem modificar o código existente.
 * 4️⃣ **Composição sobre Herança** → Cada tipo de pedido é composto por funções 
 * que podem ser reutilizadas em diferentes contextos, sem a necessidade de herança.
 * 5️⃣ **Simplicidade e Flexibilidade** → O sistema é altamente flexível, permitindo 
 * facilmente adicionar novos tipos de pedidos sem modificar a estrutura do código existente.
 *
 * 💡 O que torna este código difícil de entender?
 *  - Usa **funções puras e closures**, criando um sistema de abstração sem classes.
 *  - A criação de novos tipos de pedidos pode ser feita de maneira modular e sem 
 * interrupção no fluxo de código, o que pode ser difícil de seguir.
 *  - A **abstração** feita através da interface `Pedido` esconde a complexidade 
 * de cada tipo de pedido.
 *
 * 🎯 O objetivo é mostrar como aplicar **Abstração Funcional** em TypeScript sem classes!
 */

/// **Interface comum para todos os tipos de pedidos**
interface Pedido {
  preparar: () => void;
  finalizar: () => void;
}

/// **Função para criar pedidos de pizza**
const criarPizza = (sabor: string): Pedido => ({
  preparar: () => console.log(`🍕 Preparando pizza de sabor: ${sabor}`),
  finalizar: () => console.log(`🍕 Pizza de sabor ${sabor} finalizada e pronta para entrega!`)
});

/// **Função para criar pedidos de sushi**
const criarSushi = (tipo: string): Pedido => ({
  preparar: () => console.log(`🍣 Preparando sushi tipo: ${tipo}`),
  finalizar: () => console.log(`🍣 Sushi do tipo ${tipo} finalizado e pronto para entrega!`)
});

/// **Função para criar pedidos de hambúrguer**
const criarHamburguer = (ingredientes: string[]): Pedido => ({
  preparar: () => console.log(`🍔 Preparando hambúrguer com: ${ingredientes.join(", ")}`),
  finalizar: () => console.log(`🍔 Hambúrguer com ${ingredientes.join(", ")} finalizado e pronto para entrega!`)
});

/// **Função que lida com o processamento de pedidos de forma abstrata**
const processarPedido = (pedido: Pedido) => {
  pedido.preparar();
  pedido.finalizar();
};

/// 🏡 Testando o sistema de pedidos com diferentes tipos
const pizza = criarPizza("Mussarela");
const sushi = criarSushi("Salmon");
const hamburguer = criarHamburguer(["Carne", "Queijo", "Alface", "Tomate"]);

processarPedido(pizza);    // 🍕 Preparando pizza de sabor: Mussarela 🍕 Pizza de sabor Mussarela finalizada e pronta para entrega!
processarPedido(sushi);   // 🍣 Preparando sushi tipo: Salmon 🍣 Sushi do tipo Salmon finalizado e pronto para entrega!
processarPedido(hamburguer); // 🍔 Preparando hambúrguer com: Carne, Queijo, Alface, Tomate 🍔 Hambúrguer com Carne, Queijo, Alface, Tomate finalizado e pronto para entrega!