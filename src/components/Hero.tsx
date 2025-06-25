import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825550/pexels-photo-3825550.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/systems" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-blue-700 shadow-lg hover:shadow-xl"
              >
                {t('hero.start.exploring')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/quizzes" 
                className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-blue-50"
              >
                {t('hero.test.knowledge')}
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-4 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg" 
              alt="Human Anatomy" 
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{t('hero.systems.count')}</h3>
            <p className="text-gray-600">{t('hero.systems.desc')}</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{t('hero.interactive.title')}</h3>
            <p className="text-gray-600">{t('hero.interactive.desc')}</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{t('hero.assessment.title')}</h3>
            <p className="text-gray-600">{t('hero.assessment.desc')}</p>
          </div>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform">
            <h3 className="font-bold text-lg mb-2 text-gray-900">{t('hero.resources.title')}</h3>
            <p className="text-gray-600">{t('hero.resources.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;