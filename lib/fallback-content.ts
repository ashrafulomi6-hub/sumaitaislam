/**
 * Fallback content used only when the corresponding Sanity document
 * does not exist yet. This lets the site render meaningfully on first
 * deploy, before the client has filled in Sanity Studio. Every value
 * here is overridden the moment a real document is published.
 */

export const fallbackHero = {
  greeting: "Hi, I'm",
  name: 'Sumaita Islam',
  roles: ['Web Designer', 'ML & AI Enthusiast', 'Programming Learner'],
  shortDescription:
    'Passionate about coding, AI, machine learning, and modern web development. Focused on creating elegant digital experiences while continuously learning cutting-edge technologies.',
};

export const fallbackEducation = [
  {
    _id: 'edu-1',
    institution: 'East Delta University',
    degree: 'B.Sc in Computer Science & Engineering',
    startDate: '2023-01-01',
    isOngoing: true,
    grade: '',
  },
  {
    _id: 'edu-2',
    institution: "Bangladesh Mahila Samiti Girls' High School & College",
    degree: 'Higher Secondary Certificate (Science)',
    startDate: '2019-01-01',
    endDate: '2021-12-31',
    grade: '5.00 / 5.00',
  },
  {
    _id: 'edu-3',
    institution: 'Aunkur Society Girls High School',
    degree: 'Secondary School Certificate (Science)',
    startDate: '2017-01-01',
    endDate: '2019-12-31',
    grade: '5.00 / 5.00',
  },
];

export const fallbackSkillCategories = [
  {
    _id: 'skill-frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' },
      { name: 'Bootstrap' }, { name: 'React' }, { name: 'Next.js' }, { name: 'TailwindCSS' },
    ],
  },
  {
    _id: 'skill-programming',
    title: 'Programming',
    skills: [{ name: 'Python' }, { name: 'C++' }],
  },
  {
    _id: 'skill-ml',
    title: 'Machine Learning',
    skills: [
      { name: 'Python' }, { name: 'NumPy' }, { name: 'Pandas' },
      { name: 'Matplotlib' }, { name: 'Seaborn' }, { name: 'Scikit-learn' }, { name: 'Streamlit' },
    ],
  },
  {
    _id: 'skill-other',
    title: 'Other Skills',
    skills: [
      { name: 'Code Debugging' }, { name: 'Code Review' }, { name: 'Git' },
      { name: 'GitHub' }, { name: 'Teamwork' }, { name: 'Problem Solving' },
    ],
  },
];

export const fallbackProjects = [
  {
    _id: 'proj-1',
    title: 'Aytor — Beauty E-Commerce Website',
    summary: 'A modern e-commerce storefront concept for a beauty brand.',
    techStack: [{ name: 'React' }, { name: 'Next.js' }, { name: 'TailwindCSS' }],
  },
  {
    _id: 'proj-2',
    title: 'MY Folio — Personal Portfolio',
    summary: 'An earlier personal portfolio design and build.',
    techStack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }],
  },
  {
    _id: 'proj-3',
    title: 'Bizzency — Corporate Agency Website',
    summary: 'A corporate agency website with a clean, professional layout.',
    techStack: [{ name: 'React' }, { name: 'Bootstrap' }],
  },
  {
    _id: 'proj-4',
    title: 'Note Summary & Quiz Generator',
    summary: 'An AI/ML tool that summarises notes and generates quizzes.',
    techStack: [{ name: 'Python' }, { name: 'Scikit-learn' }, { name: 'Streamlit' }],
  },
  {
    _id: 'proj-5',
    title: 'Code Debug & Reviewer',
    summary: 'A Python tool for debugging and reviewing code.',
    techStack: [{ name: 'Python' }],
  },
];

export const fallbackCertificates = [
  {
    _id: 'cert-1',
    title: 'Responsive Web Design',
    issuer: 'Creative IT Institute',
    issueDate: '2024-07-01',
  },
];

export const fallbackHackathons = [
  {
    _id: 'hack-1',
    title: 'Edu Hackfest',
    role: 'Participant',
  },
];

export const fallbackAchievements = [
  {
    _id: 'ach-1',
    title: 'Merit Scholarship',
    issuer: 'East Delta University',
    value: 'BDT 200,000',
  },
];

export const fallbackSocialLinks = [
  { _id: 'soc-1', platform: 'LinkedIn', url: '#', icon: 'linkedin' },
  { _id: 'soc-2', platform: 'GitHub', url: '#', icon: 'github' },
  { _id: 'soc-3', platform: 'Facebook', url: '#', icon: 'facebook' },
  { _id: 'soc-4', platform: 'Instagram', url: '#', icon: 'instagram' },
  { _id: 'soc-5', platform: 'Twitter', url: '#', icon: 'twitter' },
];

export const fallbackContact = {
  email: 'hello@example.com',
  phone: '',
  address: 'Bangladesh',
  availability: 'Open to opportunities',
};
