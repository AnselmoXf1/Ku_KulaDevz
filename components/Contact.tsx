import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Terminal, Phone, Send, Instagram, Linkedin, Github, CheckCircle, AlertCircle } from 'lucide-react';
import { Translation } from '../types';
import { EMAIL_CONFIG, formatEmailBody, createMailtoLink, createHTMLEmailTemplate, createAdvancedHTMLTemplate } from '../config/email';

interface ContactProps {
  t: Translation['contact'];
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (formData: typeof formData) => {
    const mailtoLink = createMailtoLink(formData);
    
    // Tentar enviar via FormSubmit (serviço gratuito de formulários)
    try {
      console.log('Tentando enviar via FormSubmit...');
      
      const response = await fetch(EMAIL_CONFIG.FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `${EMAIL_CONFIG.EMAIL_TEMPLATE.subject_prefix} ${formData.subject}`,
          _template: 'box',
          _autoresponse: EMAIL_CONFIG.EMAIL_TEMPLATE.auto_response ? EMAIL_CONFIG.EMAIL_TEMPLATE.auto_response_message : undefined,
          _captcha: false,
          _replyto: formData.email
        })
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        const result = await response.json();
        console.log('FormSubmit result:', result);
        
        if (result.success !== false) {
          return { success: true, message: 'Mensagem enviada com sucesso! Responderemos em breve.' };
        }
      }
      
      // Se chegou aqui, FormSubmit não funcionou
      throw new Error('FormSubmit não disponível');
      
    } catch (error) {
      console.log('FormSubmit falhou, usando fallback:', error);
      
      // Tentar ativar FormSubmit automaticamente
      try {
        console.log('Tentando ativar FormSubmit...');
        const activationResponse = await fetch(`https://formsubmit.co/${EMAIL_CONFIG.RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            name: 'Ativação Automática',
            email: 'sistema@kukuladevz.com',
            message: 'Ativação automática do FormSubmit para o sistema de contato.',
            _subject: 'Ativação FormSubmit - Ku Kula Devz'
          })
        });
        
        if (activationResponse.ok) {
          return { success: true, message: 'Sistema ativado! Tente enviar novamente em alguns minutos.' };
        }
      } catch (activationError) {
        console.log('Ativação automática falhou:', activationError);
      }
      
      // Fallback final: usar mailto
      window.open(mailtoLink, '_blank');
      return { success: true, message: 'Cliente de email aberto. Por favor, envie a mensagem manualmente.' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Por favor, preencha todos os campos.');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setStatusMessage('Por favor, insira um email válido.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        
        // Se foi enviado automaticamente, limpar formulário
        if (!result.message.includes('Cliente de email aberto')) {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }
      } else {
        setSubmitStatus('error');
        setStatusMessage('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
      
      // Limpar status após 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g fill="#00A651" fillOpacity="0.03">
              <circle cx="30" cy="30" r="2"/>
            </g>
          </g>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tem uma ideia, um projeto ou quer fazer parte da Ku Kula Devz? 
            Entre em contato conosco. Estamos prontos para inovar juntos.
          </p>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-brand-green/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-900 font-semibold">kukuladevz.team@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-brand-green/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Telefone</p>
                    <p className="text-gray-900 font-semibold">+258 84 546 2448</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-brand-green/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-200">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Localização</p>
                    <p className="text-gray-900 font-semibold">UMUM - Morrumbene, Inhambane</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-medium mb-4">Siga-nos nas redes sociais</p>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-brand-green flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                  >
                    <Instagram size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-brand-green flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-brand-green flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.name}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.email}</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">{t.subject}</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Assunto da mensagem"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">{t.message}</label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                  placeholder="Conte-nos sobre sua ideia ou projeto..."
                  required
                ></textarea>
              </div>
              
              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl flex items-center gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : (
                    <AlertCircle size={20} className="text-red-600" />
                  )}
                  <span className="text-sm font-medium">{statusMessage}</span>
                </motion.div>
              )}
              
              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full font-bold py-4 px-6 rounded-2xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-brand-green hover:bg-green-600 shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t.send}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-green/10 rounded-2xl flex items-center justify-center">
              <Terminal className="text-brand-green w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-900 font-bold text-lg tracking-wider">KU KULA DEVZ</span>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Digital Solutions</p>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Ku Kula Devz. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="/privacidade.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Privacidade</a>
            <a href="/termos.html" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-green transition-colors text-sm font-medium">Termos</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
