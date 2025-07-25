import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImage1 from '@/assets/hero-construction-1.jpg';
import heroImage2 from '@/assets/hero-construction-2.jpg';
import heroImage3 from '@/assets/hero-construction-3.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.1
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary-dark/70 to-accent/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CLTECH S.A.
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-light mb-8 text-accent-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construyendo el futuro de la Patagonia.
          </motion.h2>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="hidden md:block text-l leading-relaxed mb-8">
              Con más de dos décadas de experiencia en el sector de la construcción, 
              CLTECH S.A. se ha consolidado como una empresa líder en obras civiles,  
              comerciales, industriales y de infraestructura en la Patagonia Argentina.
              Ofrecemos soluciones integrales con la más alta calidad y compromiso.
            </p>

            <p className="text-m md:hidden leading-relaxed mb-8">
              Con más de 20 años de experiencia en el sector de la construcción, 
              CLTECH S.A. se ha consolidado como una empresa líder en obras civiles,  
              comerciales e industriales.
            </p>
            
            <motion.button 
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-construction hover:shadow-lg hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conoce Nuestros Servicios
            </motion.button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;