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

class EmailService {
  enviarEmail(destinatario: string, mensagem: string): void {
    console.log(`📧 Enviando e-mail para ${destinatario}: ${mensagem}`);
  }
}

// ❌ O sistema depende diretamente de EmailService
class SistemaDeNotificacoes {
  private emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  notificar(destinatario: string, mensagem: string): void {
    this.emailService.enviarEmail(destinatario, mensagem);
  }
}

// 🏡 Testando o sistema (com problema de dependência)
const sistema = new SistemaDeNotificacoes();
sistema.notificar("usuario@email.com", "Bem-vindo ao nosso sistema!");