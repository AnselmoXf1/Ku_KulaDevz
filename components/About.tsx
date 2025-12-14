import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target } from 'lucide-react';
import { Translation } from '../types';
import { useCountAnimation } from '../hooks/useCountAnimation';

interface AboutProps {
  t: Translation['about'];
  stats: Translation['stats'];
}

const About: React.FC<AboutProps> = ({ t, stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const prizeCount = useCountAnimation({ end: 150, duration: 2500, isVisible });
  const memberCount = useCountAnimation({ end: 8, duration: 1500, isVisible });
  const projectCount = useCountAnimation({ end: 5, duration: 1000, isVisible });

  const statItems = [
    { label: 'Meticais em Prêmios', value: `+${prizeCount} mil`, color: 'text-brand-green' },
    { label: stats.members, value: memberCount.toString(), color: 'text-blue-500' },
    { label: stats.projects, value: projectCount.toString(), color: 'text-purple-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-brand-green pl-4">
              {t.title}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t.description}
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-green/10 rounded-lg border border-brand-green/20 text-brand-green">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Missão</h3>
                  <p className="text-gray-600 text-sm">{t.mission}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-blue-500">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Visão</h3>
                  <p className="text-gray-600 text-sm">{t.vision}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-purple-500">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">Valores</h3>
                  <p className="text-gray-600 text-sm">{t.values}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="relative">
             {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-2 gap-4">
                {/* Simulated Image Grid */}
                <div className="space-y-4 mt-8">
                    <img 
                        src="/images/awards/premio-1.jpg" 
                        alt="Prêmio recebido pela equipe" 
                        className="rounded-2xl shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://picsum.photos/400/500?random=20";
                        }}
                    />
                </div>
                <div className="space-y-4">
                    <motion.div 
                        className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        onViewportEnter={() => setIsVisible(true)}
                    >
                        <p className="text-3xl font-bold text-brand-green">+{prizeCount} mil</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-2">Meticais em Prêmios</p>
                    </motion.div>
                    <img 
                        src="/images/awards/premio-2.jpg" 
                        alt="Cerimônia de premiação" 
                        className="rounded-2xl shadow-lg border border-gray-200 hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://picsum.photos/400/400?random=21";
                        }}
                    />
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
