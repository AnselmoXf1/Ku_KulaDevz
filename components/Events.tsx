import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Translation } from '../types';
import ImageModal from './ImageModal';

interface EventsProps {
  t: Translation['events'];
}

const Events: React.FC<EventsProps> = ({ t }) => {
    const allImages = [
        { src: "/images/events/grupo-equipe-completa.jpg", category: "equipe", year: "2024" },
        { src: "/images/events/IMG-20251125-WA0030.jpg", category: "evento", year: "2024" },
        { src: "/images/events/IMG-20251206-WA0201.jpg", category: "evento", year: "2024" },
        { src: "/images/events/IMG-20251206-WA0208(1).jpg", category: "evento", year: "2024" },
        { src: "/images/events/mpc-vitoria.jpg", category: "premio", year: "2024" },
        { src: "/images/events/recepcao-pela-umum.jpg", category: "evento", year: "2024" },
        { src: "/images/events/recepcao2.jpg", category: "evento", year: "2024" },
        { src: "/images/events/recepcao3.jpg", category: "evento", year: "2024" },
        { src: "/images/events/venedores.jpg", category: "premio", year: "2024" },
    ];

    const [selectedFilter, setSelectedFilter] = useState('todos');
    
    const filteredImages = selectedFilter === 'todos' 
        ? allImages 
        : allImages.filter(img => img.category === selectedFilter);
    
    const images = filteredImages.map(img => img.src);

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

  return (
    <section id="events" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t.title}</h2>
        
        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {[
              { key: 'todos', label: 'Todos' },
              { key: 'equipe', label: 'Equipe' },
              { key: 'evento', label: 'Eventos' },
              { key: 'premio', label: 'Prêmios' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedFilter(filter.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedFilter === filter.key
                    ? 'bg-brand-green text-white shadow-md'
                    : 'text-gray-600 hover:text-brand-green hover:bg-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {images.map((src, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => openModal(i)}
                >
                    <img 
                        src={src} 
                        alt="Event gallery" 
                        className="w-full h-full object-cover hover:opacity-80 transition-all duration-300"
                        style={{ 
                            transform: 'scale(1.05)',
                            objectPosition: (i === 1 || i === 3 || i === 4) ? 'center 30%' : 'center center'
                        }}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://picsum.photos/400/300?random=${30 + i}`;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-white text-xs font-mono">Jovem Criativo 2024</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          images={images}
          currentIndex={currentImageIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      </div>
    </section>
  );
};

export default Events;
