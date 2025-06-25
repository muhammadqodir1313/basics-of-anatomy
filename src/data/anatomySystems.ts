import { AnatomySystem, AnatomyDetail, Quiz } from '../types';

export const getAnatomySystems = (t: (key: string) => string): AnatomySystem[] => [
  {
    id: 'skeletal',
    title: t('systems.skeletal'),
    description: t('systems.skeletal.desc'),
    imageUrl: 'https://images.pexels.com/photos/3994197/pexels-photo-3994197.jpeg',
    route: '/systems/skeletal'
  },
  {
    id: 'muscular',
    title: t('systems.muscular'),
    description: t('systems.muscular.desc'),
    imageUrl: 'https://images.pexels.com/photos/4062467/pexels-photo-4062467.jpeg',
    route: '/systems/muscular'
  },
  {
    id: 'nervous',
    title: t('systems.nervous'),
    description: t('systems.nervous.desc'),
    imageUrl: 'https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg',
    route: '/systems/nervous'
  },
  {
    id: 'cardiovascular',
    title: t('systems.cardiovascular'),
    description: t('systems.cardiovascular.desc'),
    imageUrl: 'https://images.pexels.com/photos/6303590/pexels-photo-6303590.jpeg',
    route: '/systems/cardiovascular'
  },
  {
    id: 'respiratory',
    title: t('systems.respiratory'),
    description: t('systems.respiratory.desc'),
    imageUrl: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg',
    route: '/systems/respiratory'
  },
  {
    id: 'digestive',
    title: t('systems.digestive'),
    description: t('systems.digestive.desc'),
    imageUrl: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
    route: '/systems/digestive'
  }
];

export const anatomyDetails: AnatomyDetail[] = [
  {
    id: 'skeletal-1',
    systemId: 'skeletal',
    title: 'Bones and Their Functions',
    description: 'The human skeletal system consists of 206 bones that provide structure, protection, and support for the body. Bones also produce blood cells in the bone marrow and store important minerals like calcium and phosphorus.',
    imageUrl: 'https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg',
    facts: [
      'The femur (thigh bone) is the longest and strongest bone in the human body.',
      'The stapes in the middle ear is the smallest bone, measuring only about 3mm.',
      'Babies are born with approximately 300 bones, but many fuse together as they grow.',
      'Bones are constantly being remodeled through a process of resorption and formation.'
    ]
  },
  {
    id: 'muscular-1',
    systemId: 'muscular',
    title: 'Types of Muscles',
    description: 'There are three types of muscle tissue in the human body: skeletal muscle, cardiac muscle, and smooth muscle. Each type has specific functions and characteristics.',
    imageUrl: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg',
    facts: [
      'Skeletal muscles are attached to bones and control voluntary movements.',
      'Cardiac muscle is found only in the heart and contracts without conscious control.',
      'Smooth muscle is found in internal organs and blood vessels.',
      'The human body contains over 600 skeletal muscles.'
    ]
  },
  {
    id: 'nervous-1',
    systemId: 'nervous',
    title: 'Brain and Neural Pathways',
    description: 'The brain is the control center of the nervous system, containing billions of neurons that form complex networks. It processes sensory information, controls movement, and enables higher cognitive functions.',
    imageUrl: 'https://images.pexels.com/photos/935835/pexels-photo-935835.jpeg',
    facts: [
      'The human brain contains approximately 86 billion neurons.',
      'Information travels through neurons at speeds up to 268 mph.',
      'The brain uses about 20% of the body\'s total energy.',
      'The brain continues developing until around age 25.'
    ]
  },
  {
    id: 'cardiovascular-1',
    systemId: 'cardiovascular',
    title: 'Heart Structure and Function',
    description: 'The heart is a muscular organ that pumps blood throughout the body via the circulatory system. It supplies oxygen and nutrients to tissues and removes carbon dioxide and other wastes.',
    imageUrl: 'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg',
    facts: [
      'The average adult heart beats 60-100 times per minute.',
      'The heart pumps about 2,000 gallons of blood each day.',
      'A woman\'s heart beats slightly faster than a man\'s heart.',
      'The heart can continue beating even when separated from the body.'
    ]
  }
];

export const quizQuestions: Quiz[] = [
  {
    id: 'q1',
    systemId: 'skeletal',
    question: 'How many bones are in the adult human body?',
    options: ['106', '186', '206', '306'],
    correctAnswer: 2
  },
  {
    id: 'q2',
    systemId: 'muscular',
    question: 'Which of the following is NOT a type of muscle tissue?',
    options: ['Skeletal muscle', 'Cardiac muscle', 'Smooth muscle', 'Fibrous muscle'],
    correctAnswer: 3
  },
  {
    id: 'q3',
    systemId: 'nervous',
    question: 'Which part of the brain is responsible for maintaining balance and coordination?',
    options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Thalamus'],
    correctAnswer: 1
  },
  {
    id: 'q4',
    systemId: 'cardiovascular',
    question: 'The upper chambers of the heart are called:',
    options: ['Ventricles', 'Atria', 'Valves', 'Arteries'],
    correctAnswer: 1
  }
];