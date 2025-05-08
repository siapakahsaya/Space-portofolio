import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Utensils } from 'lucide-react';
import MenuCard from './MenuCard';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'coffee' | 'food'>('coffee');

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Espresso',
      description: 'Our signature blend with notes of chocolate and caramel',
      price: 3.99,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'coffee'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Perfect balance of espresso, steamed milk, and foam',
      price: 4.99,
      image: 'https://images.pexels.com/photos/350478/pexels-photo-350478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'coffee'
    },
    {
      id: 3,
      name: 'Cold Brew',
      description: 'Steeped for 24 hours for a smooth, less acidic flavor',
      price: 5.49,
      image: 'https://images.pexels.com/photos/2615323/pexels-photo-2615323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'coffee'
    },
    {
      id: 4,
      name: 'Mocha Latte',
      description: 'Rich espresso with chocolate and steamed milk',
      price: 5.99,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'coffee'
    },
    {
      id: 5,
      name: 'Avocado Toast',
      description: 'Sourdough bread with smashed avocado, cherry tomatoes, and microgreens',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1656665/pexels-photo-1656665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'food'
    },
    {
      id: 6,
      name: 'Breakfast Sandwich',
      description: 'Egg, bacon, cheese, and arugula on a fresh-baked croissant',
      price: 7.99,
      image: 'https://images.pexels.com/photos/8471966/pexels-photo-8471966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'food'
    },
    {
      id: 7,
      name: 'Quinoa Bowl',
      description: 'Protein-packed bowl with seasonal vegetables and tahini dressing',
      price: 10.99,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'food'
    },
    {
      id: 8,
      name: 'Blueberry Muffin',
      description: 'House-made daily with fresh blueberries and streusel topping',
      price: 4.49,
      image: 'https://images.pexels.com/photos/4686830/pexels-photo-4686830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'food'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="menu" className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Menu
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Carefully crafted drinks and food to satisfy your cravings
          </motion.p>

          {/* Category Tabs */}
          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('coffee')}
              className={`flex items-center px-6 py-3 rounded-full font-medium ${
                activeCategory === 'coffee' 
                  ? 'bg-coffee-dark text-white' 
                  : 'bg-white text-coffee-dark hover:bg-gray-100'
              }`}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Coffee
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('food')}
              className={`flex items-center px-6 py-3 rounded-full font-medium ${
                activeCategory === 'food' 
                  ? 'bg-coffee-dark text-white' 
                  : 'bg-white text-coffee-dark hover:bg-gray-100'
              }`}
            >
              <Utensils className="w-5 h-5 mr-2" />
              Food
            </motion.button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;