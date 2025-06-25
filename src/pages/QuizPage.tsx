import React, { useState } from 'react';
import { quizQuestions } from '../data/anatomySystems';
import QuizCard from '../components/QuizCard';
import { useLanguage } from '../contexts/LanguageContext';

const QuizPage: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | 'all'>('all');
  const { t } = useLanguage();
  
  const filteredQuizzes = selectedSystem === 'all' 
    ? quizQuestions 
    : quizQuestions.filter(quiz => quiz.systemId === selectedSystem);
  
  const systems = [
    { id: 'all', name: t('quiz.all.systems') },
    { id: 'skeletal', name: t('systems.skeletal') },
    { id: 'muscular', name: t('systems.muscular') },
    { id: 'nervous', name: t('systems.nervous') },
    { id: 'cardiovascular', name: t('systems.cardiovascular') },
    { id: 'respiratory', name: t('systems.respiratory') },
    { id: 'digestive', name: t('systems.digestive') }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('quiz.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('quiz.subtitle')}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {systems.map(system => (
              <button
                key={system.id}
                onClick={() => setSelectedSystem(system.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSystem === system.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {system.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map(quiz => (
              <QuizCard key={quiz.id} quiz={quiz} />
            ))
          ) : (
            <div className="md:col-span-2 text-center py-16">
              <p className="text-gray-500 text-lg">No quizzes available for this selection.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;