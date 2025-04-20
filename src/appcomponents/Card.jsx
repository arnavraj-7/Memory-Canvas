import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Card = ({ card }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 gap-y-3 rounded-lg overflow-hidden shadow-xl dark:shadow-blue-900/30 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-blue-700/40 w-72 min-h-80 border border-gray-100 dark:border-gray-700">
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={card.img} 
          alt={card.title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-blue-300 mb-2">{card.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
};

export default Card;