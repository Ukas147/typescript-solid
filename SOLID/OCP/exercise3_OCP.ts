/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio Aberto/Fechado (OCP)**:
 *    - A função `enviarNotificacao` precisa ser **modificada** sempre que um novo tipo de notificação for adicionado.
 *    - Se amanhã a empresa decidir incluir **WhatsApp, SMS, Push Notification**, teremos que modificar essa função novamente.
 *
 * 2️⃣ **Alto risco de introduzir bugs**:
 *    - Cada vez que alteramos a estrutura da função, podemos **acidentalmente quebrar a lógica existente**.
 *
 * 3️⃣ **Código difícil de escalar**:
 *    - Se adicionarmos novos tipos de notificação, essa função ficará enorme e difícil de manter.
 *
 * 4️⃣ **Baixa reutilização**:
 *    - Se quisermos enviar notificações em outro módulo do sistema, precisamos **copiar e colar código**.
 */

// const enviarNotificacao = (tipo: string, mensagem: string) => {
//   if (tipo === "email") {
//     console.log(`📧 Enviando e-mail: ${mensagem}`);
//   } else if (tipo === "sms") {
//     console.log(`📱 Enviando SMS: ${mensagem}`);
//   } else {
//     throw new Error("❌ Tipo de notificação inválido!");
//   }
// };

// // 🏡 Testando a função
// enviarNotificacao("email", "Bem-vindo ao nosso sistema!");
// enviarNotificacao("sms", "Seu código de verificação é 1234");

// ✅ Funções para cada tipo de notificação
const notificarEmail = (mensagem: string) => console.log(`📧 Enviando e-mail: ${mensagem}`);
const notificarSMS = (mensagem: string) => console.log(`📱 Enviando SMS: ${mensagem}`);

// ✅ Objeto que mapeia os tipos de notificação disponíveis
const notificadores: Record<string, (mensagem: string) => void> = {
  email: notificarEmail,
  sms: notificarSMS,
};

// ✅ Função genérica que usa o objeto para chamar o método correto
const enviarNotificacao = (tipo: string, mensagem: string) => {
  const metodo = notificadores[tipo];

  if (!metodo) {
    throw new Error("❌ Tipo de notificação inválido!");
  }

  metodo(mensagem);
};

// 🏡 Testando a função (Agora seguindo OCP)
enviarNotificacao("email", "Bem-vindo ao nosso sistema!");
enviarNotificacao("sms", "Seu código de verificação é 1234");

// ✅ Se precisarmos adicionar um novo tipo de notificação, basta adicionar uma função ao objeto `notificadores`
const notificarWhatsApp = (mensagem: string) => console.log(`💬 Enviando WhatsApp: ${mensagem}`);
notificadores["whatsapp"] = notificarWhatsApp;

// 🏡 Testando o novo tipo de notificação sem modificar a função principal
enviarNotificacao("whatsapp", "Seu pedido foi enviado! 🚀");