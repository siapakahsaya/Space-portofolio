import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the passion behind our coffee and culinary creations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Barista making coffee" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-coffee-dark">A Decade of Dedication</h3>
            <p className="text-coffee-medium leading-relaxed">
              Founded in 2013, Caffeine Culture began as a small corner café with a big dream: to serve the highest quality coffee in an environment that feels like home.
            </p>
            <p className="text-coffee-medium leading-relaxed">
              Our beans are ethically sourced from sustainable farms around the world, carefully selected for their unique flavor profiles, and roasted in small batches to ensure perfect results every time.
            </p>
            <p className="text-coffee-medium leading-relaxed">
              Beyond our coffee, we take pride in our handcrafted food menu, featuring locally sourced ingredients transformed into delicious meals and pastries that complement our beverages.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#menu" className="btn-primary inline-block mt-4">Explore Our Menu</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;