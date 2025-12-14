import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';
import { Translation, Partner } from '../types';

interface SponsorsProps {
  t: Translation['sponsors'];
  sponsors: Partner[];
}

const Sponsors: React.FC<SponsorsProps> = ({ t, sponsors }) => {
  const sponsorsList = sponsors.filter(p => p.type === 'sponsor');
  
  return (
    <section id="sponsors" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 flex items-center justify-center gap-3">
            <Heart className="text-red-500" size={40} />
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorsList.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-8 border-2 border-brand-green/20 hover:border-brand-green hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-16 mb-6 flex items-center justify-center bg-brand-green/5 rounded-lg overflow-hidden border border-brand-green/20">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                  {sponsor.name}
                </h3>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {sponsor.description}
                </p>

                {sponsor.website && (
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-green font-medium hover:text-brand-dark transition-colors group/btn"
                  >
                    Visitar Website
                    <ExternalLink size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {sponsorsList.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <Heart className="text-brand-green mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold text-black mb-2">
              Procuramos Patrocinadores
            </h3>
            <p className="text-gray-600">
              Junte-se a nós na missão de transformar Moçambique através da tecnologia.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Sponsors;