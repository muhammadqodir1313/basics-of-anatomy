import React from 'react';
import { Mail, Phone, MapPin, Users, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Dr. Aziz Rahimov',
      role: 'Founder & Lead Anatomist',
      bio: 'Dr. Rahimov has over 15 years of experience teaching anatomy at medical universities. He founded Anatomiya Asoslari to make quality anatomy education accessible to all students.',
      imagePlaceholder: 'AR'
    },
    {
      name: 'Dr. Sabina Aliyeva',
      role: 'Educational Content Director',
      bio: 'With a PhD in Medical Education, Dr. Aliyeva specializes in creating engaging learning materials that simplify complex anatomical concepts for students at all levels.',
      imagePlaceholder: 'SA'
    },
    {
      name: 'Farkhod Karimov',
      role: 'Interactive Design Specialist',
      bio: 'Farkhod combines his background in medical illustration with digital expertise to create the interactive diagrams and visualizations that bring our content to life.',
      imagePlaceholder: 'FK'
    },
    {
      name: 'Nilufar Rakhimova',
      role: 'Educational Technology Expert',
      bio: 'Nilufar oversees the development of our learning platform, ensuring that educational content is delivered in the most effective and accessible manner.',
      imagePlaceholder: 'NR'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h1>
          <p className="text-lg text-gray-600">
            {t('about.mission')}
          </p>
        </div>
        
        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg" 
                alt="Medical education" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Anatomiya Asoslari was founded in 2022 by a team of passionate medical educators who recognized the need for more accessible, engaging, and interactive anatomy resources.
                </p>
                <p className="mb-4">
                  Traditional anatomy education often relies on dense textbooks and limited laboratory time, making it challenging for many students to develop a thorough understanding of the human body.
                </p>
                <p>
                  Our platform combines clear explanations, high-quality visuals, and interactive elements to create a comprehensive learning experience that caters to different learning styles. We believe that understanding human anatomy should be accessible to everyone, from medical students to curious minds.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">{t('about.values.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Educational Excellence</h3>
              <p className="text-gray-600">
                We are committed to providing scientifically accurate, up-to-date, and comprehensive educational content that adheres to the highest academic standards.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                We believe quality education should be accessible to all. Our platform is designed to be inclusive, with content that accommodates different learning needs and preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new teaching methods and technologies to enhance the learning experience and make complex anatomical concepts easier to understand.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">{t('about.team.title')}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 text-4xl font-bold">{member.imagePlaceholder}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Us */}
        <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('about.contact.title')}</h2>
              <p className="text-gray-600 mb-8">
                Have questions or feedback? We'd love to hear from you. Reach out to our team using any of the methods below.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-gray-600">123 Education Street, Medical District, Tashkent, Uzbekistan</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-3" />
                  <a href="mailto:info@anatomiyaasoslari.uz" className="text-blue-600 hover:underline">
                    info@anatomiyaasoslari.uz
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <a href="tel:+998712345678" className="text-blue-600 hover:underline">
                    +998 71 234 5678
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a message</h3>
              
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;