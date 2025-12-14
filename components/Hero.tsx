import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Translation } from '../types';

interface HeroProps {
  t: Translation['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="#00A651" fillOpacity="0.05">
            <polygon points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/>
          </g>
        </svg>
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-6 px-6 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-mono shadow-lg"
        >
          Ku Kula Devz
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
        >
          {t.title.split(' ').map((word, i) => (
             <span key={i} className={i === t.title.split(' ').length - 1 ? "text-brand-green" : ""}>{word} </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 bg-brand-green hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-brand-green/25 hover:shadow-xl hover:shadow-brand-green/30 flex items-center justify-center gap-2 transform hover:scale-105"
          >
            {t.ctaPrimary}
            <ArrowRight size={20} />
          </a>
          <a
            href="#team"
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 hover:border-brand-green text-gray-900 hover:text-brand-green font-bold rounded-2xl transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
