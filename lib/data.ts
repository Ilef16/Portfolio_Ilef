// ============================================================
// PORTFOLIO DATA — typed, centralised
// ============================================================

export type Lang = 'fr' | 'en'

// ── Education ───────────────────────────────────────────────
export interface EducationItem {
  period: string
  titleFr: string
  titleEn: string
  schoolFr: string
  schoolEn: string
  descFr: string
  descEn: string
  tags: string[]
}

export const education: EducationItem[] = [
  {
    period: '2022 — 2025',
    titleFr: 'Cycle Ingénieur en Génie Informatique',
    titleEn: 'Computer Engineering Degree',
    schoolFr: 'Institut International de Technologie (IIT) — Sfax, Tunisie',
    schoolEn: 'International Institute of Technology (IIT) — Sfax, Tunisia',
    descFr: "Formation axée sur le développement logiciel, l'IA, la science des données, le DevOps et la gestion de projets.",
    descEn: 'Program focused on software development, AI, data science, DevOps and project management.',
    tags: ['Machine Learning', 'Deep Learning', 'Big Data', 'DevOps', 'Web & Mobile', 'IT Security'],
  },
  {
    period: '2019 — 2022',
    titleFr: 'Licence Informatique de Gestion — Business Intelligence',
    titleEn: 'BSc Management IT — Business Intelligence',
    schoolFr: "Institut Supérieur d'Administration des Affaires (ISAAS) — Sfax",
    schoolEn: 'Higher Institute of Business Administration (ISAAS) — Sfax',
    descFr: "Formation orientée analyse décisionnelle, bases de données et développement d'applications de gestion.",
    descEn: 'Program oriented towards decision-making analysis, databases and management application development.',
    tags: ['Business Intelligence', 'Data Warehousing', 'SQL Server', 'VB.NET', 'ASP.NET'],
  },
  {
    period: '2019',
    titleFr: 'Baccalauréat en Sciences Expérimentales',
    titleEn: 'High School Diploma — Experimental Sciences',
    schoolFr: 'Lycée Mahmoud Magdish (LMM) — Sfax, Tunisie',
    schoolEn: 'Mahmoud Magdish High School (LMM) — Sfax, Tunisia',
    descFr: 'Base solide en mathématiques, physique et sciences naturelles.',
    descEn: 'Strong foundation in mathematics, physics and natural sciences.',
    tags: ['Experimental Sciences', 'Mathematics', 'Physics'],
  },
]

// ── Extra training ───────────────────────────────────────────
export interface TrainingItem {
  titleFr: string
  titleEn: string
  institutionFr: string
  institutionEn: string
}

export const training: TrainingItem[] = [
  {
    titleFr: 'Leadership & Communication',
    titleEn: 'Leadership & Communication',
    institutionFr: 'Faculté des Sciences Économiques et de Gestion de Sfax',
    institutionEn: 'Faculty of Economics and Management — Sfax',
  },
  {
    titleFr: 'Public Speaking',
    titleEn: 'Public Speaking',
    institutionFr: "Institut Supérieur d'Administration des Affaires de Sfax",
    institutionEn: 'Higher Institute of Business Administration — Sfax',
  },
  {
    titleFr: 'Digital Marketing',
    titleEn: 'Digital Marketing',
    institutionFr: 'Institut Polytechnique Privé des Sciences Avancées de Sfax',
    institutionEn: 'Private Polytechnic Institute of Advanced Sciences — Sfax',
  },
]

// ── Experience ───────────────────────────────────────────────
export interface ExperienceItem {
  period: string
  titleFr: string
  titleEn: string
  company: string
  bulletsFr: string[]
  bulletsEn: string[]
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: 'Juillet 2025 — Octobre 2025',
    titleFr: 'Développeur Freelance',
    titleEn: 'Freelance Developer',
    company: 'Projet Freelance',
    bulletsFr: [
      "Développement d'une application de pointage web pour la gestion des présences en temps réel.",
      "Conception d'une API REST sécurisée (JWT) avec documentation Swagger.",
    ],
    bulletsEn: [
      'Development of a web time-tracking application for real-time attendance management.',
      'Design of a secure REST API (JWT) with Swagger documentation.',
    ],
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'JWT', 'Swagger'],
  },
  {
    period: 'Février 2025 — Juin 2025',
    titleFr: "Projet de Fin d'Études (PFE)",
    titleEn: 'Final Year Project (FYP)',
    company: 'Zetabox — Sfax',
    bulletsFr: [
      "Conception de deux plateformes : gestion de projets avec suivi des KPI's et dashboard dirigeants.",
      "Intégration d'un chatbot IA pour l'aide à la décision.",
    ],
    bulletsEn: [
      "Design of two platforms: project management with KPI tracking and executive dashboard.",
      'Integration of an AI chatbot for decision support.',
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Python', 'AI', 'TypeScript', 'Jest'],
  },
  {
    period: 'Août 2024',
    titleFr: "Stage d'Été",
    titleEn: 'Summer Internship',
    company: 'EDI Solutions — Sfax',
    bulletsFr: [
      "Développement d'un système de gestion des employés et des demandes avec rôles RH, manager et employé.",
      'Workflow complet incluant authentification, validation et suivi des demandes.',
    ],
    bulletsEn: [
      'Development of an employee and request management system with HR, manager and employee roles.',
      'Complete workflow including authentication, validation and request tracking.',
    ],
    tags: ['React.js', 'Node.js'],
  },
  {
    period: 'Janvier 2024 — Juin 2024',
    titleFr: "Projet de Fin d'Année",
    titleEn: 'End-of-Year Project',
    company: 'Rec-Inov — Sfax',
    bulletsFr: [
      "Développement d'un système de détection des émotions pour assister l'évaluation des candidats lors des entretiens.",
    ],
    bulletsEn: [
      'Development of an emotion detection system to assist candidate evaluation during interviews.',
    ],
    tags: ['MERN', 'Flask', 'Python', 'MongoDB', 'scikit-learn', 'TensorFlow'],
  },
  {
    period: 'Juin 2023 — Juillet 2023',
    titleFr: "Stage d'Été",
    titleEn: 'Summer Internship',
    company: 'CapitAll — Sfax',
    bulletsFr: [
      "Développement d'une solution web de centralisation et gestion des opérations des petites entreprises.",
    ],
    bulletsEn: [
      'Development of a web solution for centralizing and managing small business operations.',
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    period: 'Février 2022 — Juin 2022',
    titleFr: "Projet de Fin d'Études (Licence)",
    titleEn: 'Bachelor Final Year Project',
    company: 'ASM — Sfax',
    bulletsFr: ["Développement d'une plateforme pour la réservation des ressources dans une entreprise."],
    bulletsEn: ['Development of a resource reservation platform for a company.'],
    tags: ['VB.NET', 'DevExpress', 'SQL Server', 'LUNA'],
  },
]

// ── Skills ───────────────────────────────────────────────────
export interface SkillCategory {
  titleFr: string
  titleEn: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    titleFr: 'Langages de Programmation',
    titleEn: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C#', 'VB.NET', 'PHP', 'Node.js'],
  },
  {
    titleFr: 'Frameworks & Bibliothèques',
    titleEn: 'Frameworks & Libraries',
    items: ['Next.js', 'React.js', 'Angular', 'Vue.js', 'Spring Boot', 'Laravel', 'Flask', 'ASP.NET', 'Flutter'],
  },
  {
    titleFr: 'Data Science & IA',
    titleEn: 'Data Science & AI',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'pandas', 'numpy'],
  },
  {
    titleFr: 'Bases de Données',
    titleEn: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'SQL Server', 'SSMS', 'PL/SQL'],
  },
  {
    titleFr: 'DevOps & Outils',
    titleEn: 'DevOps & Tools',
    items: ['Docker', 'Git', 'Jenkins', 'Postman', 'Swagger', 'Jira'],
  },
  {
    titleFr: 'Qualité & Tests',
    titleEn: 'Quality & Testing',
    items: ['Jest', 'Selenium', 'Tests fonctionnels', 'Tests automatisés', 'Tests de performance'],
  },
]

export interface SoftSkill {
  labelFr: string
  labelEn: string
}

export const softSkills: SoftSkill[] = [
  { labelFr: 'Travail en équipe', labelEn: 'Teamwork' },
  { labelFr: 'Communication', labelEn: 'Communication' },
  { labelFr: 'Créativité', labelEn: 'Creativity' },
  { labelFr: "Esprit d'analyse", labelEn: 'Analytical Mind' },
  { labelFr: 'Gestion de projet', labelEn: 'Project Management' },
]

export const languages = [
  { flag: 'AR', nameFr: 'Arabe', nameEn: 'Arabic', levelFr: 'Natif', levelEn: 'Native', pct: 100 },
  { flag: '🇫🇷', nameFr: 'Français', nameEn: 'French', levelFr: 'Courant', levelEn: 'Fluent', pct: 90 },
  { flag: '🇬🇧', nameFr: 'Anglais', nameEn: 'English', levelFr: 'Courant', levelEn: 'Fluent', pct: 85 },
]

// ── Certifications ───────────────────────────────────────────
export interface Certification {
  titleFr: string
  titleEn: string
  issuer: string
  year: string
}

export const certifications: Certification[] = [
  { titleFr: 'Building AI Agents with Google ADK', titleEn: 'Building AI Agents with Google ADK', issuer: 'DataCamp', year: '2026' },
  { titleFr: 'Certificat Big Data Engineer', titleEn: 'Big Data Engineer Certificate', issuer: 'IBM', year: '2024' },
  { titleFr: 'IA générative avec les modèles de diffusion', titleEn: 'Generative AI with Diffusion Models', issuer: 'NVIDIA', year: '2024' },
  { titleFr: 'Artificial Intelligence', titleEn: 'Artificial Intelligence', issuer: 'Certiport', year: '2024' },
]

// ── Tech Logo Map ────────────────────────────────────────────
export const techLogoMap: Record<string, string> = {
  // Programming Languages
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'Python':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'Java':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'C':          'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'C#':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  'VB.NET':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'PHP':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  'Node.js':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  // Frameworks & Libraries
  'Next.js':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
  'React.js':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Angular':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
  'Vue.js':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  'Laravel':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  'Flask':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
  'ASP.NET':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
  'Flutter':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  // Data Science & AI
  'TensorFlow':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
  'PyTorch':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
  'Keras':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
  'pandas':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  'numpy':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  // Databases
  'PostgreSQL':  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  'MySQL':       'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  'MongoDB':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  'Oracle':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  // DevOps & Tools
  'Docker':      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  'Git':         'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  'Jenkins':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
  'Postman':     'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  'Jira':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
  // Testing
  'Jest':        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  'Selenium':    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
}

// ── Associations ────────────────────────────────────────────
export interface AssociationItem {
  nameFr: string
  nameEn: string
  period: string
  roleFr: string
  roleEn: string
  descFr?: string
  descEn?: string
  emoji?: string
}

export const associations: AssociationItem[] = [
  {
    nameFr: 'Scout Tunisien',
    nameEn: 'Tunisian Scout',
    period: '2011 — 2025',
    roleFr: 'Membre',
    roleEn: 'Member',
    descFr: "Engagement bénévole au sein du mouvement scout tunisien pendant 14 ans. Développement du leadership, de la solidarité et du travail en équipe.",
    descEn: "Volunteer involvement in the Tunisian Scout movement for 14 years. Development of leadership, solidarity, and teamwork.",
    emoji: '⚜️',
  },
  {
    nameFr: 'Club Python',
    nameEn: 'Python Club',
    period: '2024',
    roleFr: 'Membre',
    roleEn: 'Member',
    descFr: "Participation aux activités du club Python : ateliers de programmation, partage de projets et veille technologique.",
    descEn: "Participation in Python club activities: coding workshops, project sharing, and tech watch.",
    emoji: '🐍',
  },
  {
    nameFr: 'Club MTC',
    nameEn: 'MTC Club',
    period: '2023',
    roleFr: 'Membre',
    roleEn: 'Member',
    descFr: "Membre actif du club MTC, axé sur les technologies et l'innovation numérique.",
    descEn: "Active member of the MTC club, focused on technology and digital innovation.",
    emoji: '💡',
  },
]

// ── Projects ─────────────────────────────────────────────────
export interface Project {
  titleFr: string
  titleEn: string
  descFr: string
  descEn: string
  tags: string[]
}

export const projects: Project[] = [
  {
    titleFr: 'Plateforme de Gestion des Cours en Ligne',
    titleEn: 'Online Course Management Platform',
    descFr: "Plateforme web interactive permettant l'inscription des apprenants, la gestion des contenus et le suivi de la progression.",
    descEn: 'Interactive web platform for learner registration, content management and progress tracking.',
    tags: ['ASP.NET', 'SSMS', 'SQL Server'],
  },
  {
    titleFr: "Classification d'Images & Génération de Légendes",
    titleEn: 'Image Classification & Caption Generation',
    descFr: 'Modèle IA sous PyTorch pour classifier des images et générer des légendes. Architectures ResNet, EfficientNet et ViT.',
    descEn: 'AI model under PyTorch to classify images and generate captions. ResNet, EfficientNet and ViT architectures.',
    tags: ['PyTorch', 'TensorFlow', 'NLTK', 'ResNet', 'ViT', 'MSCOCO'],
  },
  {
    titleFr: 'Site Web Full-Stack avec Base de Données',
    titleEn: 'Full-Stack Website with Database',
    descFr: 'Site web connecté à une base de données avec formulaires utilisateurs et administrateurs.',
    descEn: 'Website connected to a database with user and admin forms.',
    tags: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
  },
  {
    titleFr: 'Application Desktop Java',
    titleEn: 'Java Desktop Application',
    descFr: 'Application Java sous Eclipse connectée à Oracle. Modélisation UML complète.',
    descEn: 'Java application under Eclipse connected to Oracle. Full UML modeling.',
    tags: ['Java', 'Eclipse', 'Oracle', 'UML'],
  },
  {
    titleFr: 'Application Desktop VB.NET',
    titleEn: 'VB.NET Desktop Application',
    descFr: 'Application de gestion en VB.NET avec modélisation UML et base de données MySQL.',
    descEn: 'Management application in VB.NET with UML modeling and MySQL database.',
    tags: ['VB.NET', 'MySQL', 'UML'],
  },
  {
    titleFr: 'Portfolio Personnel',
    titleEn: 'Personal Portfolio',
    descFr: 'Portfolio web professionnel multi-pages avec dark/light mode, traduction FR/EN, construit en Next.js + TypeScript.',
    descEn: 'Professional multi-page web portfolio with dark/light mode, FR/EN translation, built with Next.js + TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive'],
  },
]
