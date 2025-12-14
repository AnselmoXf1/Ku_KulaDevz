import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { Translation, Member } from '../types';

interface TeamProps {
  t: Translation['team'];
  members: Member[];
}

const Team: React.FC<TeamProps> = ({ t, members }) => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-brand-green pl-4">
                {t.title}
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-brand-green/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-lg group-hover:bg-brand-green/40 transition-all"></div>
                <div className="w-full h-full rounded-full overflow-hidden border-3 border-brand-green relative z-10 hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center 25%',
                      transform: 'scale(1.1)'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=10b981&color=fff&size=200`;
                    }}
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-gray-900 font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-brand-green text-xs font-mono mb-2">{member.year}</p>
                <div className="h-px w-full bg-gray-200 my-3"></div>
                <p className="text-gray-700 text-sm font-medium mb-2 min-h-[40px]">{member.role}</p>
                <p className="text-gray-500 text-xs mb-4 line-clamp-2">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-green transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.instagram && (
                    <a 
                      href={member.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-brand-green transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
