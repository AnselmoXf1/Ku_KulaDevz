import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Translation, Partner } from '../types';

interface PartnersProps {
  t: Translation['partners'];
  partners: Partner[];
}

const Partners: React.FC<PartnersProps> = ({ t, partners }) => {
  const partnersList = partners.filter(p => p.type === 'partner');
  
  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnersList.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl p-10 border border-gray-200 hover:border-brand-green/30 hover:shadow-xl transition-all duration-300 min-h-[400px]"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-48 h-24 mb-8 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden hover:bg-gray-100 transition-colors">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain hover:scale-125 transition-transform duration-300"
                    style={{ transform: 'scale(1.2)' }}
                  />
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-brand-green transition-colors">
                  {partner.name}
                </h3>
                
                <div className="flex-grow"></div>
                
                <p className="text-gray-600 mb-6 text-sm leading-relaxed mt-auto">
                  {partner.description}
                </p>

                {partner.website && (
                  <a 
                    href={partner.website}
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
      </div>
    </section>
  );
};

export default Partners;