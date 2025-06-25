import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Anatomiya Asoslari</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/systems" className="text-gray-400 hover:text-white transition-colors">{t('nav.systems')}</Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-400 hover:text-white transition-colors">{t('nav.quizzes')}</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">{t('nav.resources')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.learning.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/systems/skeletal" className="text-gray-400 hover:text-white transition-colors">{t('systems.skeletal')}</Link>
              </li>
              <li>
                <Link to="/systems/muscular" className="text-gray-400 hover:text-white transition-colors">{t('systems.muscular')}</Link>
              </li>
              <li>
                <Link to="/systems/nervous" className="text-gray-400 hover:text-white transition-colors">{t('systems.nervous')}</Link>
              </li>
              <li>
                <Link to="/systems/cardiovascular" className="text-gray-400 hover:text-white transition-colors">{t('systems.cardiovascular')}</Link>
              </li>
              <li>
                <Link to="/systems/respiratory" className="text-gray-400 hover:text-white transition-colors">{t('systems.respiratory')}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.us')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">123 Education Street, Medical District, Tashkent</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:info@anatomiyaasoslari.uz" className="text-gray-400 hover:text-white transition-colors">
                  info@anatomiyaasoslari.uz
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+998712345678" className="text-gray-400 hover:text-white transition-colors">
                  +998 71 234 5678
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Anatomiya Asoslari. {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;