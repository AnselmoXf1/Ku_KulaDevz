# 🧪 Como Testar o Sistema de Email

## 📋 Checklist de Teste

### ✅ Teste 1: Formulário Básico
1. Acesse o site
2. Vá para a seção "Contato"
3. Preencha todos os campos:
   - **Nome**: Seu Nome
   - **Email**: seu@email.com
   - **Assunto**: Teste do Sistema
   - **Mensagem**: Esta é uma mensagem de teste
4. Clique em "Enviar Mensagem"
5. Verifique se aparece "Mensagem enviada com sucesso!"

### ✅ Teste 2: Validação de Campos
1. Tente enviar com campos vazios
2. Deve aparecer: "Por favor, preencha todos os campos"
3. Tente com email inválido (ex: "email-inválido")
4. Deve aparecer: "Por favor, insira um email válido"

### ✅ Teste 3: Estados Visuais
1. Preencha o formulário
2. Clique em "Enviar"
3. Observe:
   - Botão muda para "Enviando..." com spinner
   - Botão fica desabilitado
   - Após envio, aparece mensagem de sucesso
   - Formulário limpa automaticamente

### ✅ Teste 4: Recebimento do Email
1. Envie uma mensagem de teste
2. Verifique a caixa de entrada da empresa: `kukuladevz@umum.ac.mz`
3. Verifique também a pasta de spam
4. O email deve ter o formato:

```
Assunto: [Ku Kula Devz] Teste do Sistema

NOVA MENSAGEM DO SITE KU KULA DEVZ
=====================================

Nome: Seu Nome
Email: seu@email.com
Assunto: Teste do Sistema

Mensagem:
Esta é uma mensagem de teste

=====================================
Enviado em: 13/12/2024 15:30:25
```

## 🔧 Configuração Inicial (Primeira Vez)

### Passo 1: Ativar FormSubmit
1. Envie a primeira mensagem de teste
2. Você receberá um email de confirmação do FormSubmit
3. Clique no link para ativar o serviço
4. Após ativação, teste novamente

### Passo 2: Verificar Configurações
1. Abra `config/email.ts`
2. Confirme se o email está correto
3. Ajuste as configurações se necessário

## 🚨 Cenários de Fallback

### Teste A: FormSubmit Indisponível
1. Desconecte da internet
2. Tente enviar uma mensagem
3. Deve abrir o cliente de email com a mensagem pré-preenchida

### Teste B: Erro de Rede
1. Se FormSubmit falhar por qualquer motivo
2. O sistema automaticamente abre mailto
3. Usuário pode enviar manualmente

## 📱 Teste em Dispositivos

### Desktop
- [ ] Chrome
- [ ] Firefox  
- [ ] Safari
- [ ] Edge

### Mobile
- [ ] Chrome Mobile
- [ ] Safari Mobile
- [ ] Samsung Internet

## ✅ Resultado Esperado

Após todos os testes, você deve:
1. ✅ Receber emails no `kukuladevz@umum.ac.mz`
2. ✅ Ver todas as validações funcionando
3. ✅ Ter fallback funcionando (mailto)
4. ✅ Interface responsiva em todos os dispositivos

## 🎯 Mensagem de Teste Sugerida

```
Nome: Teste Sistema
Email: teste@gmail.com
Assunto: Verificação do Sistema de Email
Mensagem: Este é um teste para verificar se o sistema de email está funcionando corretamente. Se você receber esta mensagem, tudo está configurado perfeitamente!
```

## 📞 Suporte

Se algo não funcionar:
1. Verifique o console do navegador (F12)
2. Confirme se ativou o FormSubmit
3. Teste o fallback (mailto)
4. Verifique a pasta de spam

O sistema foi projetado para ser robusto - mesmo se uma parte falhar, a mensagem sempre chegará até você!