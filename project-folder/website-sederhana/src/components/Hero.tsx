import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
        style={{ height: '120%', top: '-10%' }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Caffeine Culture</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Where every cup tells a story and every bite leaves a memory
          </p>
          <motion.a 
            href="#menu"
            className="btn-primary text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;