import React, { useState } from 'react';
import { AnatomyDetail } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SystemDetailProps {
  detail: AnatomyDetail;
}

const SystemDetail: React.FC<SystemDetailProps> = ({ detail }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
      <div className="relative h-64 sm:h-80 md:h-96">
        <img 
          src={detail.imageUrl} 
          alt={detail.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{detail.title}</h2>
        </div>
      </div>
      
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('overview')}
          </button>
          <button
            onClick={() => setActiveTab('facts')}
            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'facts'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {t('key.facts')}
          </button>
        </nav>
      </div>
      
      <div className="p-6">
        {activeTab === 'overview' ? (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">{detail.description}</p>
          </div>
        ) : (
          <ul className="space-y-3">
            {detail.facts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 mt-0.5 font-semibold text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700">{fact}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SystemDetail;