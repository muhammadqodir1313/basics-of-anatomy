import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import SystemDetailComponent from '../components/SystemDetail';
import QuizCard from '../components/QuizCard';
import { getAnatomySystems, anatomyDetails, quizQuestions } from '../data/anatomySystems';
import { useLanguage } from '../contexts/LanguageContext';

const SystemDetailPage: React.FC = () => {
  const { systemId } = useParams<{ systemId: string }>();
  const { t } = useLanguage();
  const anatomySystems = getAnatomySystems(t);
  
  const system = anatomySystems.find(s => s.id === systemId);
  const details = anatomyDetails.filter(d => d.systemId === systemId);
  const quizzes = quizQuestions.filter(q => q.systemId === systemId);
  
  if (!system) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">System not found</h2>
          <Link to="/systems" className="text-blue-600 hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            {t('back.to.systems')}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/systems" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" />
          {t('back.to.systems')}
        </Link>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img 
              src={system.imageUrl} 
              alt={system.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{system.title}</h1>
              <p className="text-gray-200 text-lg max-w-3xl">{system.description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Components</h2>
            
            {details.length > 0 ? (
              details.map(detail => (
                <SystemDetailComponent key={detail.id} detail={detail} />
              ))
            ) : (
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center justify-center h-24">
                  <BookOpen className="h-12 w-12 text-gray-300" />
                </div>
                <p className="text-center text-gray-500">Detailed content coming soon.</p>
              </div>
            )}
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('test.knowledge')}</h2>
              
              {quizzes.length > 0 ? (
                quizzes.map(quiz => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))
              ) : (
                <div className="bg-white rounded-xl p-8 shadow-md text-center">
                  <p className="text-gray-500">Quizzes coming soon.</p>
                </div>
              )}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Study Resources</h3>
              <p className="text-gray-600 mb-4">Download additional resources to aid your study of the {system.title}.</p>
              
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
                  >
                    <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      PDF
                    </span>
                    <span className="font-medium">{system.title} - Study Guide</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
                  >
                    <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      PDF
                    </span>
                    <span className="font-medium">{system.title} - Diagrams</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow"
                  >
                    <span className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      PPT
                    </span>
                    <span className="font-medium">{system.title} - Presentation</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemDetailPage;