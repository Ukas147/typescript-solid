/**
 * ❌ Problemas deste código caso vá para produção:
 *
 * 1️⃣ **Violação do Princípio da Inversão de Dependência (DIP)**:
 *    - A classe `SistemaDeNotificacoes` depende diretamente da implementação `EmailService`, em vez de depender de uma abstração.
 *
 * 2️⃣ **Baixa flexibilidade**:
 *    - Se quisermos adicionar novos tipos de notificações (ex: SMS, WhatsApp), teremos que modificar `SistemaDeNotificacoes`, violando OCP também.
 *
 * 3️⃣ **Dificuldade de Testes**:
 *    - Como `SistemaDeNotificacoes` depende diretamente de `EmailService`, não conseguimos testar o sistema sem enviar e-mails reais.
 */

// class EmailService {
//   enviarEmail(destinatario: string, mensagem: string): void {
//     console.log(`📧 Enviando e-mail para ${destinatario}: ${mensagem}`);
//   }
// }

// // ❌ O sistema depende diretamente de EmailService
// class SistemaDeNotificacoes {
//   private emailService: EmailService;

//   constructor() {
//     this.emailService = new EmailService();
//   }

//   notificar(destinatario: string, mensagem: string): void {
//     this.emailService.enviarEmail(destinatario, mensagem);
//   }
// }

// // 🏡 Testando o sistema (com problema de dependência)
// const sistema = new SistemaDeNotificacoes();
// sistema.notificar("usuario@email.com", "Bem-vindo ao nosso sistema!");

// ✅ Criamos uma interface genérica para notificações
interface Notificador {
  enviar: (destinatario: string, mensagem: string) => void;
}

// ✅ Implementação do serviço de e-mail (agora seguindo a interface)
const EmailService: Notificador = {
  enviar: (destinatario, mensagem) => {
    console.log(`📧 Enviando e-mail para ${destinatario}: ${mensagem}`);
  }
};

// ✅ Implementação do serviço de SMS
const SmsService: Notificador = {
  enviar: (destinatario, mensagem) => {
    console.log(`📱 Enviando SMS para ${destinatario}: ${mensagem}`);
  }
};

// ✅ O sistema de notificações agora depende de uma ABSTRAÇÃO (interface), não de uma implementação concreta!
const SistemaDeNotificacoes = (notificador: Notificador) => ({
  notificar: (destinatario: string, mensagem: string) => {
    notificador.enviar(destinatario, mensagem);
  }
});

// 🏡 Testando o sistema (agora seguindo DIP)
const sistemaEmail = SistemaDeNotificacoes(EmailService);
sistemaEmail.notificar("usuario@email.com", "Bem-vindo ao nosso sistema!");

const sistemaSMS = SistemaDeNotificacoes(SmsService);
sistemaSMS.notificar("11999999999", "Seu código de verificação é 1234");

// ✅ Se quisermos adicionar um novo tipo de notificação (ex: WhatsApp), basta criar uma nova função SEM modificar `SistemaDeNotificacoes`
const WhatsAppService: Notificador = {
  enviar: (destinatario, mensagem) => {
    console.log(`💬 Enviando WhatsApp para ${destinatario}: ${mensagem}`);
  }
};

// 🏡 Testando a nova notificação sem alterar código existente
const sistemaWhatsApp = SistemaDeNotificacoes(WhatsAppService);
sistemaWhatsApp.notificar("11988887777", "Seu pedido foi enviado! 🚀");