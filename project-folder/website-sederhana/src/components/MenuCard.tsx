import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { name, description, price, image } = item;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-xl text-coffee-dark">{name}</h3>
          <span className="font-medium text-coffee-medium">${price.toFixed(2)}</span>
        </div>
        <p className="text-coffee-medium">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuCard;