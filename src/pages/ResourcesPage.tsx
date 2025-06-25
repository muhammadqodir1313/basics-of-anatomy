import React from 'react';
import { Download, FileText, BookOpen, Image, Video, Film } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    {
      title: 'Complete Anatomy Guide',
      type: 'PDF',
      icon: <FileText className="h-6 w-6" />,
      description: 'Comprehensive guide covering all major body systems with detailed explanations and diagrams.',
      size: '12.5 MB'
    },
    {
      title: 'Skeletal System Diagrams',
      type: 'PDF',
      icon: <Image className="h-6 w-6" />,
      description: 'High-resolution printable diagrams of the human skeletal system with labeled bones and joints.',
      size: '8.2 MB'
    },
    {
      title: 'Muscular System Flashcards',
      type: 'PDF',
      icon: <FileText className="h-6 w-6" />,
      description: 'Printable flashcards for studying major muscle groups, origins, insertions, and functions.',
      size: '5.7 MB'
    },
    {
      title: 'Nervous System Overview',
      type: 'Video',
      icon: <Video className="h-6 w-6" />,
      description: 'Detailed video explanation of the central and peripheral nervous systems, neurons, and nerve impulses.',
      size: '45 min'
    },
    {
      title: 'Heart Anatomy and Function',
      type: 'Video',
      icon: <Video className="h-6 w-6" />,
      description: 'Visual guide to heart chambers, valves, blood flow, and the cardiac cycle.',
      size: '32 min'
    },
    {
      title: 'Respiratory System Animation',
      type: 'Video',
      icon: <Film className="h-6 w-6" />,
      description: 'Animated explanation of the respiratory process, gas exchange, and lung function.',
      size: '28 min'
    },
    {
      title: 'Anatomy Study Planner',
      type: 'PDF',
      icon: <FileText className="h-6 w-6" />,
      description: 'Structured study plan for mastering human anatomy with weekly goals and review exercises.',
      size: '3.4 MB'
    },
    {
      title: 'Complete Quiz Collection',
      type: 'PDF',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Collection of 250+ practice questions covering all body systems with answer explanations.',
      size: '7.1 MB'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('resources.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('resources.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{resource.title}</h3>
                    <p className="text-sm text-gray-500">{resource.type} • {resource.size}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  {t('resources.download')}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Custom Resources</h2>
          <p className="text-gray-600 mb-6">
            Need specific materials for your studies? Let us know what would help you, and our team will try to create and add them to our resource library.
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="resourceType" className="block text-sm font-medium text-gray-700 mb-1">
                Resource Type
              </label>
              <select
                id="resourceType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select resource type</option>
                <option value="pdf">PDF Guide</option>
                <option value="diagrams">Diagrams/Images</option>
                <option value="flashcards">Flashcards</option>
                <option value="video">Video</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Request Details
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe the resource you need..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;