import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnatomySystem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SystemCardProps {
  system: AnatomySystem;
}

const SystemCard: React.FC<SystemCardProps> = ({ system }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={system.imageUrl} 
          alt={system.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{system.title}</h3>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4">{system.description}</p>
        <Link 
          to={system.route} 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          {t('learn.more')} <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default SystemCard;