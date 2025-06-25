import React from 'react';
import SystemCard from '../components/SystemCard';
import { getAnatomySystems } from '../data/anatomySystems';
import { useLanguage } from '../contexts/LanguageContext';

const SystemsPage: React.FC = () => {
  const { t } = useLanguage();
  const anatomySystems = getAnatomySystems(t);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Human Anatomy Systems</h1>
          <p className="text-lg text-gray-600">
            Explore the major systems of the human body. Each system plays a vital role in maintaining homeostasis and overall health.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anatomySystems.map(system => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemsPage;