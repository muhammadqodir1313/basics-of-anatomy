import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uz' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const translations = {
    uz: {
      // Header
      'nav.home': 'Bosh sahifa',
      'nav.systems': 'Tizimlar',
      'nav.quizzes': 'Testlar',
      'nav.resources': 'Resurslar',
      'nav.about': 'Biz haqimizda',
      'search.placeholder': 'Anatomiyadan qidirish...',

      // Hero
      'hero.title': 'Inson anatomiyasining ajoyib dunyosini kashf eting',
      'hero.subtitle': 'Interaktiv o\'quv resurslari, batafsil tasvirlar va keng qamrovli tushuntirishlar orqali inson tanasining murakkab tizimlarini o\'rganing.',
      'hero.start.exploring': 'O\'rganishni boshlash',
      'hero.test.knowledge': 'Bilimingizni sinab ko\'ring',
      'hero.systems.count': '6+ Tana tizimlari',
      'hero.systems.desc': 'Barcha asosiy anatomik tizimlarning to\'liq qamrovi',
      'hero.interactive.title': 'Interaktiv o\'rganish',
      'hero.interactive.desc': 'Yaxshi eslab qolish uchun mo\'ljallangan dinamik kontent bilan shug\'ullaning',
      'hero.assessment.title': 'O\'z-o\'zini baholash',
      'hero.assessment.desc': 'Testlar bilan bilimingizni sinab ko\'ring va o\'quv materiallarini ko\'rib chiqing',
      'hero.resources.title': 'O\'quv resurslari',
      'hero.resources.desc': 'Doimiy oflayn o\'rganish uchun materiallarni yuklab oling',

      // Systems
      'systems.skeletal': 'Skelet tizimi',
      'systems.skeletal.desc': 'Skelet tizimi tanaga qo\'llab-quvvatlash, himoya va tuzilma beradi. U suyaklar, xaftaga va ligamentlardan iborat.',
      'systems.muscular': 'Mushak tizimi',
      'systems.muscular.desc': 'Mushak tizimi harakatni ta\'minlaydi, holatni saqlaydi va mushaklar qisqarishi va bo\'shashishi orqali issiqlik hosil qiladi.',
      'systems.nervous': 'Nerv tizimi',
      'systems.nervous.desc': 'Nerv tizimi tana uchun boshqaruv markazi bo\'lib, harakatlar va sensorli ma\'lumotlarni muvofiqlashtiradi.',
      'systems.cardiovascular': 'Yurak-qon tomir tizimi',
      'systems.cardiovascular.desc': 'Yurak-qon tomir tizimi yurak va qon tomirlari orqali qon, kislorod va oziq moddalarni butun tanaga aylantirib turadi.',
      'systems.respiratory': 'Nafas olish tizimi',
      'systems.respiratory.desc': 'Nafas olish tizimi nafas olishni ta\'minlaydi, tanaga kislorod olib keladi va karbonat angidridni chiqaradi.',
      'systems.digestive': 'Hazm qilish tizimi',
      'systems.digestive.desc': 'Hazm qilish tizimi ovqatni tana energiya uchun so\'rib olishi va ishlatishi mumkin bo\'lgan oziq moddalarga parchalaydi.',

      // Common
      'learn.more': 'Batafsil',
      'back.to.systems': 'Barcha tizimlarga qaytish',
      'test.knowledge': 'Bilimingizni sinab ko\'ring',
      'submit.answer': 'Javobni yuborish',
      'correct': '✓ To\'g\'ri! Ajoyib.',
      'incorrect': '✗ Noto\'g\'ri. To\'g\'ri javob:',
      'overview': 'Umumiy ma\'lumot',
      'key.facts': 'Asosiy faktlar',

      // Home page
      'home.explore.systems': 'Anatomiya tizimlarini o\'rganing',
      'home.view.all': 'Barcha tizimlarni ko\'rish',
      'home.why.study': 'Nega biz bilan o\'qish kerak',
      'home.comprehensive.title': 'Keng qamrovli kontent',
      'home.comprehensive.desc': 'Bizning materiallarimiz barcha asosiy tana tizimlarini batafsil tushuntirishlar va yuqori sifatli vizuallar bilan qamrab oladi.',
      'home.interactive.title': 'Interaktiv o\'rganish',
      'home.interactive.desc': 'Anatomiyani o\'rganishni amaliy qo\'llash orqali yanada samarali va qiziqarli qiladigan interaktiv resurslarimiz bilan shug\'ullaning.',
      'home.assessment.title': 'O\'z-o\'zini baholash',
      'home.assessment.desc': 'Testlarimiz bilan bilimingizni sinab ko\'ring va materialni samarali o\'zlashtirayotganingizga ishonch hosil qiling.',

      // Footer
      'footer.description': 'Talabalar, o\'qituvchilar va qiziquvchan onglar uchun inson anatomiyasi bo\'yicha keng qamrovli ta\'lim resurslari.',
      'footer.quick.links': 'Tezkor havolalar',
      'footer.learning.resources': 'O\'quv resurslari',
      'footer.contact.us': 'Biz bilan bog\'laning',
      'footer.rights': 'Barcha huquqlar himoyalangan.',
      'footer.privacy': 'Maxfiylik siyosati',
      'footer.terms': 'Foydalanish shartlari',
      'footer.sitemap': 'Sayt xaritasi',

      // About page
      'about.title': 'Anatomiya Asoslari haqida',
      'about.mission': 'Bizning maqsadimiz yuqori sifatli anatomiya ta\'limini qiziqarli, interaktiv kontent orqali barcha talabalarga ochiq qilishdir.',
      'about.story.title': 'Bizning hikoyamiz',
      'about.values.title': 'Bizning qadriyatlarimiz',
      'about.team.title': 'Bizning jamoa',
      'about.contact.title': 'Biz bilan bog\'laning',

      // Quiz page
      'quiz.title': 'Anatomiya bilimingizni sinab ko\'ring',
      'quiz.subtitle': 'Inson anatomiyasini tushunishingizni mustahkamlash uchun ushbu testlar bilan o\'zingizni sinab ko\'ring.',
      'quiz.all.systems': 'Barcha tizimlar',

      // Resources page
      'resources.title': 'O\'quv resurslari',
      'resources.subtitle': 'Inson anatomiyasini tushunishingizni oshirish va o\'qishingizni qo\'llab-quvvatlash uchun ushbu ta\'lim materiallarini yuklab oling.',
      'resources.download': 'Resursni yuklab olish',
    },

    en: {
      // Header
      'nav.home': 'Home',
      'nav.systems': 'Systems',
      'nav.quizzes': 'Quizzes',
      'nav.resources': 'Resources',
      'nav.about': 'About',
      'search.placeholder': 'Search anatomy...',

      // Hero
      'hero.title': 'Discover the Wonders of Human Anatomy',
      'hero.subtitle': 'Explore the intricate systems of the human body through interactive learning resources, detailed illustrations, and comprehensive explanations.',
      'hero.start.exploring': 'Start Exploring',
      'hero.test.knowledge': 'Test Your Knowledge',
      'hero.systems.count': '6+ Body Systems',
      'hero.systems.desc': 'Comprehensive coverage of all major anatomical systems',
      'hero.interactive.title': 'Interactive Learning',
      'hero.interactive.desc': 'Engage with dynamic content designed for better retention',
      'hero.assessment.title': 'Self Assessment',
      'hero.assessment.desc': 'Test your knowledge with quizzes and review materials',
      'hero.resources.title': 'Study Resources',
      'hero.resources.desc': 'Download materials for continued offline learning',

      // Systems
      'systems.skeletal': 'Skeletal System',
      'systems.skeletal.desc': 'The skeletal system provides support, protection, and structure to the body. It consists of bones, cartilage, and ligaments.',
      'systems.muscular': 'Muscular System',
      'systems.muscular.desc': 'The muscular system enables movement, maintains posture, and generates heat through the contraction and relaxation of muscles.',
      'systems.nervous': 'Nervous System',
      'systems.nervous.desc': 'The nervous system serves as the control center for the body, coordinating actions and sensory information.',
      'systems.cardiovascular': 'Cardiovascular System',
      'systems.cardiovascular.desc': 'The cardiovascular system circulates blood, oxygen, and nutrients throughout the body via the heart and blood vessels.',
      'systems.respiratory': 'Respiratory System',
      'systems.respiratory.desc': 'The respiratory system enables breathing, bringing oxygen into the body and removing carbon dioxide.',
      'systems.digestive': 'Digestive System',
      'systems.digestive.desc': 'The digestive system breaks down food into nutrients that the body can absorb and use for energy.',

      // Common
      'learn.more': 'Learn more',
      'back.to.systems': 'Back to All Systems',
      'test.knowledge': 'Test Your Knowledge',
      'submit.answer': 'Submit Answer',
      'correct': '✓ Correct! Well done.',
      'incorrect': '✗ Incorrect. The correct answer is:',
      'overview': 'Overview',
      'key.facts': 'Key Facts',

      // Home page
      'home.explore.systems': 'Explore Anatomy Systems',
      'home.view.all': 'View all systems',
      'home.why.study': 'Why Study With Us',
      'home.comprehensive.title': 'Comprehensive Content',
      'home.comprehensive.desc': 'Our material covers all major body systems with detailed explanations and high-quality visuals to enhance your understanding.',
      'home.interactive.title': 'Interactive Learning',
      'home.interactive.desc': 'Engage with our interactive resources that make learning anatomy more effective and enjoyable through practical application.',
      'home.assessment.title': 'Self Assessment',
      'home.assessment.desc': 'Test your knowledge with our quizzes and track your progress to ensure you\'re mastering the material effectively.',

      // Footer
      'footer.description': 'Comprehensive educational resources about human anatomy for students, educators, and curious minds.',
      'footer.quick.links': 'Quick Links',
      'footer.learning.resources': 'Learning Resources',
      'footer.contact.us': 'Contact Us',
      'footer.rights': 'All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.sitemap': 'Sitemap',

      // About page
      'about.title': 'About Anatomiya Asoslari',
      'about.mission': 'Our mission is to make high-quality anatomy education accessible to all students through engaging, interactive content.',
      'about.story.title': 'Our Story',
      'about.values.title': 'Our Values',
      'about.team.title': 'Meet Our Team',
      'about.contact.title': 'Contact Us',

      // Quiz page
      'quiz.title': 'Test Your Anatomy Knowledge',
      'quiz.subtitle': 'Challenge yourself with these quizzes to reinforce your understanding of human anatomy.',
      'quiz.all.systems': 'All Systems',

      // Resources page
      'resources.title': 'Learning Resources',
      'resources.subtitle': 'Download these educational materials to enhance your understanding of human anatomy and support your studies.',
      'resources.download': 'Download Resource',
    },

    ru: {
      // Header
      'nav.home': 'Главная',
      'nav.systems': 'Системы',
      'nav.quizzes': 'Тесты',
      'nav.resources': 'Ресурсы',
      'nav.about': 'О нас',
      'search.placeholder': 'Поиск по анатомии...',

      // Hero
      'hero.title': 'Откройте чудеса анатомии человека',
      'hero.subtitle': 'Изучайте сложные системы человеческого тела через интерактивные учебные ресурсы, подробные иллюстрации и исчерпывающие объяснения.',
      'hero.start.exploring': 'Начать изучение',
      'hero.test.knowledge': 'Проверить знания',
      'hero.systems.count': '6+ систем тела',
      'hero.systems.desc': 'Полное покрытие всех основных анатомических систем',
      'hero.interactive.title': 'Интерактивное обучение',
      'hero.interactive.desc': 'Взаимодействуйте с динамическим контентом для лучшего запоминания',
      'hero.assessment.title': 'Самооценка',
      'hero.assessment.desc': 'Проверьте свои знания с помощью тестов и обзорных материалов',
      'hero.resources.title': 'Учебные ресурсы',
      'hero.resources.desc': 'Скачайте материалы для продолжения офлайн обучения',

      // Systems
      'systems.skeletal': 'Скелетная система',
      'systems.skeletal.desc': 'Скелетная система обеспечивает поддержку, защиту и структуру тела. Она состоит из костей, хрящей и связок.',
      'systems.muscular': 'Мышечная система',
      'systems.muscular.desc': 'Мышечная система обеспечивает движение, поддерживает осанку и генерирует тепло через сокращение и расслабление мышц.',
      'systems.nervous': 'Нервная система',
      'systems.nervous.desc': 'Нервная система служит центром управления тела, координируя действия и сенсорную информацию.',
      'systems.cardiovascular': 'Сердечно-сосудистая система',
      'systems.cardiovascular.desc': 'Сердечно-сосудистая система циркулирует кровь, кислород и питательные вещества по всему телу через сердце и кровеносные сосуды.',
      'systems.respiratory': 'Дыхательная система',
      'systems.respiratory.desc': 'Дыхательная система обеспечивает дыхание, доставляя кислород в тело и удаляя углекислый газ.',
      'systems.digestive': 'Пищеварительная система',
      'systems.digestive.desc': 'Пищеварительная система расщепляет пищу на питательные вещества, которые тело может поглощать и использовать для энергии.',

      // Common
      'learn.more': 'Подробнее',
      'back.to.systems': 'Назад ко всем системам',
      'test.knowledge': 'Проверить знания',
      'submit.answer': 'Отправить ответ',
      'correct': '✓ Правильно! Отлично.',
      'incorrect': '✗ Неправильно. Правильный ответ:',
      'overview': 'Обзор',
      'key.facts': 'Ключевые факты',

      // Home page
      'home.explore.systems': 'Изучить анатомические системы',
      'home.view.all': 'Посмотреть все системы',
      'home.why.study': 'Почему стоит учиться с нами',
      'home.comprehensive.title': 'Всеобъемлющий контент',
      'home.comprehensive.desc': 'Наш материал охватывает все основные системы тела с подробными объяснениями и высококачественными визуальными материалами.',
      'home.interactive.title': 'Интерактивное обучение',
      'home.interactive.desc': 'Взаимодействуйте с нашими интерактивными ресурсами, которые делают изучение анатомии более эффективным и увлекательным.',
      'home.assessment.title': 'Самооценка',
      'home.assessment.desc': 'Проверьте свои знания с помощью наших тестов и отслеживайте свой прогресс для эффективного освоения материала.',

      // Footer
      'footer.description': 'Всеобъемлющие образовательные ресурсы по анатомии человека для студентов, преподавателей и любознательных умов.',
      'footer.quick.links': 'Быстрые ссылки',
      'footer.learning.resources': 'Учебные ресурсы',
      'footer.contact.us': 'Связаться с нами',
      'footer.rights': 'Все права защищены.',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия использования',
      'footer.sitemap': 'Карта сайта',

      // About page
      'about.title': 'О проекте Anatomiya Asoslari',
      'about.mission': 'Наша миссия - сделать качественное образование по анатомии доступным для всех студентов через увлекательный, интерактивный контент.',
      'about.story.title': 'Наша история',
      'about.values.title': 'Наши ценности',
      'about.team.title': 'Наша команда',
      'about.contact.title': 'Связаться с нами',

      // Quiz page
      'quiz.title': 'Проверьте свои знания анатомии',
      'quiz.subtitle': 'Бросьте себе вызов с этими тестами, чтобы закрепить понимание анатомии человека.',
      'quiz.all.systems': 'Все системы',

      // Resources page
      'resources.title': 'Учебные ресурсы',
      'resources.subtitle': 'Скачайте эти образовательные материалы для улучшения понимания анатомии человека и поддержки ваших исследований.',
      'resources.download': 'Скачать ресурс',
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};