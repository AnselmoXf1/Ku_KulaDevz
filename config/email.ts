// Configuração de Email para Ku Kula Devz
export const EMAIL_CONFIG = {
  // Email oficial da Ku Kula Devz onde você quer receber as mensagens do site
  RECIPIENT_EMAIL: 'kukuladevz.team@gmail.com',
  
  // Configurações do FormSubmit (serviço gratuito)
  FORMSUBMIT_URL: 'https://formsubmit.co/ajax/kukuladevz.team@gmail.com',
  
  // Configurações de template
  EMAIL_TEMPLATE: {
    subject_prefix: '[Ku Kula Devz]',
    template: 'box', // 'basic', 'table' ou 'box'
    auto_response: true, // Enviar resposta automática
    auto_response_message: `
🚀 Obrigado por entrar em contato com a Ku Kula Devz!

Olá! 👋

Recebemos sua mensagem e ficamos muito felizes com seu interesse em nossos projetos e soluções digitais.

📋 O que acontece agora:
• Sua mensagem foi encaminhada para nossa equipe
• Analisaremos seu pedido com atenção
• Responderemos em até 24-48 horas

🎯 Enquanto isso, você pode:
• Conhecer nossos projetos: kukuladevz.com
• Seguir-nos nas redes sociais
• Explorar nossas soluções tecnológicas

💡 Ku Kula Devz - Tecnologia que Transforma
Desenvolvendo soluções digitais inovadoras para Moçambique.

Atenciosamente,
Equipe Ku Kula Devz

---
📧 Esta é uma resposta automática. Por favor, não responda a este email.
    `.trim()
  }
};

// Função para formatar o corpo do email (texto simples para mailto)
export const formatEmailBody = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return `
🚀 NOVA MENSAGEM - KU KULA DEVZ
═══════════════════════════════════════

👤 REMETENTE
Nome: ${formData.name}
Email: ${formData.email}

📋 DETALHES
Assunto: ${formData.subject}
Data: ${new Date().toLocaleString('pt-BR')}

💬 MENSAGEM
${formData.message}

═══════════════════════════════════════
📧 Enviado através do site kukuladevz.com
🔒 Esta mensagem foi enviada de forma segura
  `.trim();
};

// Função para criar template HTML profissional
export const createHTMLEmailTemplate = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const currentDate = new Date().toLocaleString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem - Ku Kula Devz</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #00A651 0%, #00d463 100%); color: white; padding: 30px 20px; text-align: center; }
        .header h1 { font-size: 24px; margin-bottom: 8px; font-weight: 700; }
        .header p { opacity: 0.9; font-size: 14px; }
        .content { padding: 30px; }
        .info-card { background: #f8f9fa; border-left: 4px solid #00A651; padding: 20px; margin: 20px 0; border-radius: 8px; }
        .info-row { display: flex; margin-bottom: 12px; align-items: flex-start; }
        .info-label { font-weight: 600; color: #00A651; min-width: 80px; margin-right: 15px; }
        .info-value { flex: 1; color: #333; }
        .message-box { background: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .message-title { color: #00A651; font-weight: 600; margin-bottom: 15px; font-size: 16px; }
        .message-content { color: #333; line-height: 1.8; white-space: pre-wrap; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; }
        .footer p { color: #6c757d; font-size: 12px; margin-bottom: 5px; }
        .badge { background: #00A651; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, #e9ecef, transparent); margin: 25px 0; }
        .reply-button { display: inline-block; background: #00A651; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 20px; }
        .reply-button:hover { background: #00d463; }
        @media (max-width: 600px) {
            .container { margin: 10px; border-radius: 8px; }
            .content { padding: 20px; }
            .info-row { flex-direction: column; }
            .info-label { margin-bottom: 5px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🚀 Nova Mensagem Recebida</h1>
            <p>Ku Kula Devz - Soluções Digitais</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Status Badge -->
            <div style="text-align: center; margin-bottom: 25px;">
                <span class="badge">✉️ NOVA MENSAGEM</span>
            </div>

            <!-- Sender Information -->
            <div class="info-card">
                <h3 style="color: #00A651; margin-bottom: 15px; font-size: 18px;">👤 Informações do Remetente</h3>
                <div class="info-row">
                    <span class="info-label">Nome:</span>
                    <span class="info-value"><strong>${formData.name}</strong></span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value"><a href="mailto:${formData.email}" style="color: #00A651; text-decoration: none;">${formData.email}</a></span>
                </div>
                <div class="info-row">
                    <span class="info-label">Assunto:</span>
                    <span class="info-value"><strong>${formData.subject}</strong></span>
                </div>
                <div class="info-row">
                    <span class="info-label">Data:</span>
                    <span class="info-value">${currentDate}</span>
                </div>
            </div>

            <div class="divider"></div>

            <!-- Message Content -->
            <div class="message-box">
                <div class="message-title">💬 Mensagem:</div>
                <div class="message-content">${formData.message}</div>
            </div>

            <!-- Quick Reply Button -->
            <div style="text-align: center;">
                <a href="mailto:${formData.email}?subject=Re: ${formData.subject}" class="reply-button">
                    📧 Responder Agora
                </a>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p><strong>📧 Enviado através do site kukuladevz.com</strong></p>
            <p>🔒 Esta mensagem foi enviada de forma segura através do formulário de contato</p>
            <p>🌐 Ku Kula Devz - Tecnologia que Transforma</p>
            <p style="margin-top: 15px; color: #adb5bd;">
                Para responder, clique no botão acima ou responda diretamente a este email
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

// Função para criar link mailto como fallback
export const createMailtoLink = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const emailBody = formatEmailBody(formData);
  const subject = `${EMAIL_CONFIG.EMAIL_TEMPLATE.subject_prefix} ${formData.subject}`;
  
  return `mailto:${EMAIL_CONFIG.RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
};

// Template HTML avançado com mais informações
export const createAdvancedHTMLTemplate = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const messageId = `MSG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const priority = formData.subject.toLowerCase().includes('urgente') ? 'ALTA' : 'NORMAL';

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📧 Nova Mensagem - Ku Kula Devz</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #2d3748; background: #f7fafc; }
        .email-container { max-width: 650px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #00A651 0%, #38a169 50%, #00d463 100%); color: white; padding: 40px 30px; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; top: -50%; right: -50%; width: 200%; height: 200%; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>') repeat; animation: float 20s infinite linear; }
        .header-content { position: relative; z-index: 2; text-align: center; }
        .header h1 { font-size: 28px; font-weight: 800; margin-bottom: 8px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .header p { opacity: 0.95; font-size: 16px; font-weight: 500; }
        .priority-badge { display: inline-block; background: ${priority === 'ALTA' ? '#e53e3e' : '#38a169'}; color: white; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; margin: 20px 0 10px; text-transform: uppercase; }
        .content { padding: 40px 30px; }
        .message-id { text-align: center; color: #718096; font-size: 12px; font-family: monospace; margin-bottom: 30px; background: #f7fafc; padding: 8px; border-radius: 6px; }
        .info-section { background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 12px; padding: 25px; margin: 25px 0; border-left: 5px solid #00A651; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .info-title { color: #00A651; font-size: 18px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .info-item { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; }
        .info-label { font-size: 12px; color: #718096; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .info-value { font-size: 14px; color: #2d3748; font-weight: 600; }
        .message-section { background: white; border: 2px solid #e2e8f0; border-radius: 12px; padding: 25px; margin: 25px 0; position: relative; }
        .message-section::before { content: '💬'; position: absolute; top: -15px; left: 20px; background: white; padding: 0 10px; font-size: 20px; }
        .message-title { color: #2d3748; font-size: 16px; font-weight: 700; margin-bottom: 15px; }
        .message-content { color: #4a5568; line-height: 1.8; white-space: pre-wrap; font-size: 15px; }
        .action-buttons { text-align: center; margin: 30px 0; }
        .btn { display: inline-block; padding: 14px 28px; margin: 0 10px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; transition: all 0.3s ease; }
        .btn-primary { background: linear-gradient(135deg, #00A651, #38a169); color: white; box-shadow: 0 4px 15px rgba(0, 166, 81, 0.3); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 166, 81, 0.4); }
        .btn-secondary { background: #edf2f7; color: #4a5568; border: 2px solid #e2e8f0; }
        .stats-section { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 25px 0; }
        .stat-item { text-align: center; background: #f7fafc; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0; }
        .stat-number { font-size: 24px; font-weight: 800; color: #00A651; }
        .stat-label { font-size: 12px; color: #718096; text-transform: uppercase; font-weight: 600; }
        .footer { background: #2d3748; color: #a0aec0; padding: 30px; text-align: center; }
        .footer-logo { font-size: 20px; font-weight: 800; color: #00A651; margin-bottom: 15px; }
        .footer p { font-size: 13px; margin-bottom: 8px; }
        .footer-links { margin-top: 20px; }
        .footer-links a { color: #00A651; text-decoration: none; margin: 0 15px; font-weight: 500; }
        @keyframes float { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @media (max-width: 600px) {
            .email-container { margin: 0; }
            .content, .header { padding: 25px 20px; }
            .info-grid, .stats-section { grid-template-columns: 1fr; }
            .btn { display: block; margin: 10px 0; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="header-content">
                <h1>📧 Nova Mensagem Recebida</h1>
                <p>Ku Kula Devz - Soluções Digitais Inovadoras</p>
                <div class="priority-badge">Prioridade: ${priority}</div>
            </div>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Message ID -->
            <div class="message-id">
                ID da Mensagem: ${messageId}
            </div>

            <!-- Sender Information -->
            <div class="info-section">
                <div class="info-title">
                    👤 Informações do Remetente
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Nome Completo</div>
                        <div class="info-value">${formData.name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email de Contato</div>
                        <div class="info-value">${formData.email}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Assunto</div>
                        <div class="info-value">${formData.subject}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Data e Hora</div>
                        <div class="info-value">${formattedDate}</div>
                    </div>
                </div>
            </div>

            <!-- Message Content -->
            <div class="message-section">
                <div class="message-title">Conteúdo da Mensagem</div>
                <div class="message-content">${formData.message}</div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <a href="mailto:${formData.email}?subject=Re: ${formData.subject}&body=Olá ${formData.name},%0D%0A%0D%0AObrigado por entrar em contato conosco!%0D%0A%0D%0A" class="btn btn-primary">
                    📧 Responder Agora
                </a>
                <a href="mailto:${formData.email}" class="btn btn-secondary">
                    ✉️ Novo Email
                </a>
            </div>

            <!-- Quick Stats -->
            <div class="stats-section">
                <div class="stat-item">
                    <div class="stat-number">${formData.message.length}</div>
                    <div class="stat-label">Caracteres</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${formData.message.split(' ').length}</div>
                    <div class="stat-label">Palavras</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${priority}</div>
                    <div class="stat-label">Prioridade</div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-logo">KU KULA DEVZ</div>
            <p><strong>📧 Enviado através do formulário de contato do site</strong></p>
            <p>🔒 Mensagem enviada de forma segura e criptografada</p>
            <p>🌐 kukuladevz.com - Tecnologia que Transforma Moçambique</p>
            
            <div class="footer-links">
                <a href="mailto:${formData.email}">Responder</a>
                <a href="https://kukuladevz.com">Visitar Site</a>
                <a href="mailto:kukuladevz.team@gmail.com">Contato Direto</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 11px; opacity: 0.7;">
                Este email foi gerado automaticamente pelo sistema de contato da Ku Kula Devz.<br>
                Para responder, use os botões acima ou responda diretamente a este email.
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
};