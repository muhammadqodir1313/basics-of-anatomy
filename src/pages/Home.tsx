import React from 'react';
import Hero from '../components/Hero';
import SystemCard from '../components/SystemCard';
import { getAnatomySystems } from '../data/anatomySystems';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const anatomySystems = getAnatomySystems(t);
  
  // Show only the first 3 systems on home page
  const featuredSystems = anatomySystems.slice(0, 3);
  
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Systems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('home.explore.systems')}</h2>
            <Link 
              to="/systems" 
              className="inline-flex items-center text-blue-600 font-medium mt-4 md:mt-0 hover:text-blue-800 transition-colors"
            >
              {t('home.view.all')} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSystems.map(system => (
              <SystemCard key={system.id} system={system} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Study With Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">{t('home.why.study')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.comprehensive.title')}</h3>
              <p className="text-gray-600">
                {t('home.comprehensive.desc')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.interactive.title')}</h3>
              <p className="text-gray-600">
                {t('home.interactive.desc')}
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.assessment.title')}</h3>
              <p className="text-gray-600">
                {t('home.assessment.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Student Testimonials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Alisher Sadirov</h4>
                  <p className="text-sm text-gray-500">Medical Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "This website has been an invaluable resource for my medical studies. The clear illustrations and explanations helped me grasp complex anatomical concepts."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">MK</span>
                </div>
                <div>
                  <h4 className="font-semibold">Malika Karimova</h4>
                  <p className="text-sm text-gray-500">Nursing Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The interactive quizzes helped me prepare for my exams. I appreciate how the content is structured to make learning progressive and engaging."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">BT</span>
                </div>
                <div>
                  <h4 className="font-semibold">Botir Toshmatov</h4>
                  <p className="text-sm text-gray-500">Biology Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I recommend this resource to all my students. The quality of content and presentation makes teaching anatomy much more effective."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Master Human Anatomy?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Dive into our comprehensive resources and start your journey to understanding the amazing human body.
          </p>
          <Link 
            to="/systems" 
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Learning Now <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;