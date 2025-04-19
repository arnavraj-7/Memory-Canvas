import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Card = ({ card }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-900 gap-y-2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-72 min-h-80">
      <img src={card.img} alt={card.title} className="h-50 w-full object-cover shadow-md" />
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{card.title}</h2>
      <p className="text-gray-700 dark:text-gray-400 text-sm font-light text-center">{card.description}</p>
     
    </div>
  );
};

export default Card;