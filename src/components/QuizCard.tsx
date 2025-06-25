import React, { useState } from 'react';
import { Quiz } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useLanguage();
  
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };
  
  const isCorrect = selectedOption === quiz.correctAnswer;
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{quiz.question}</h3>
      
      <div className="space-y-3 mb-6">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isSubmitted && setSelectedOption(index)}
            disabled={isSubmitted}
            className={`w-full py-3 px-4 rounded-lg text-left transition-all ${
              isSubmitted
                ? index === quiz.correctAnswer
                  ? 'bg-green-100 border border-green-500 text-green-800'
                  : selectedOption === index
                    ? 'bg-red-100 border border-red-500 text-red-800'
                    : 'bg-gray-100 border border-gray-300 text-gray-500'
                : selectedOption === index
                  ? 'bg-blue-100 border border-blue-500 text-blue-800'
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isSubmitted ? (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {isCorrect 
            ? t('correct')
            : `${t('incorrect')} ${quiz.options[quiz.correctAnswer]}`
          }
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
            selectedOption === null
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {t('submit.answer')}
        </button>
      )}
    </div>
  );
};

export default QuizCard;