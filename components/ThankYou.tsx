import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Mail } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="text-brand-green" size={40} />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Mensagem Enviada!
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Obrigado por entrar em contato conosco! Recebemos sua mensagem e responderemos em breve.
        </p>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg mb-8">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-brand-green" size={20} />
            <div className="text-left">
              <p className="text-sm font-medium">Responderemos em</p>
              <p className="text-lg font-bold text-brand-green">24-48 horas</p>
            </div>
          </div>
        </div>

        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ArrowLeft size={20} />
          Voltar ao Site
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ThankYou;