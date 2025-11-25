import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Shield, 
  Brain 
} from 'lucide-react';
import { 
  SkillCategory, 
  ExperienceItem, 
  EducationItem, 
  CertificateItem, 
  ProjectItem, 
  NavItem 
} from './types';

import negusfitImage from '@/assets/images/negusfit.png';
import habitImage from '@/assets/images/habit.png';
import habeshaReads from '@/assets/images/habeshsa.png';
import safeethiopia from '@/assets/images/safeethiopia.png';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Back-End Development',
    icon: Server,
    skills: ['Python', 'Django', 'Node.js', 'Express.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Front-End Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'Tailwind CSS'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    title: 'Tools & DevOps',
    icon: Terminal,
    skills: ['Git & GitHub', 'Docker', 'Odoo', 'Linux', 'Postman'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Ministry of Planning and Development Ethiopia',
    role: 'Junior Intern Full-Stack Developer',
    period: 'Jul 2024 – Present', // Adjusted from 2025 based on logical timeline
    description: [
      'Developed and maintained scalable government systems using Python and Django.',
      'Implemented robust RESTful APIs to facilitate seamless communication between front-end and back-end services.',
      'Collaborated with cross-functional teams to integrate secure authentication and authorization protocols.',
      'Utilized Git for version control, ensuring clean codebases and efficient team collaboration.',
    ],
    techStack: ['Django', 'Python', 'PostgreSQL', 'React', 'Git'],
  },
];

export const EDUCATION: EducationItem = {
  institution: 'ACT American College of Technology',
  degree: 'Bachelor of Science, Computer Science',
  period: '2021 – 2024',
  courses: ['JavaScript', 'SQL Server', 'Web Development', 'Cybersecurity', 'Data Structures', 'Algorithms'],
};

export const CERTIFICATIONS: CertificateItem[] = [
  { title: 'Machine Learning', issuer: 'Coursera' },
  { title: 'Meta Front-End Developer', issuer: 'Coursera' },
  { title: 'Cybersecurity for Everyone', issuer: 'Coursera' },
  { title: 'AI For Everyone', issuer: 'Coursera' },
  { title: 'Intro to Cybersecurity', issuer: 'ACT Academy' },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'NegusFit',
    description: 'is a modern, mobile-first fitness and wellness platform designed to make health accessible, culturally relevant, and deeply personal. We bridge the gap between modern training science and local cultural contexts, featuring culturally specific nutrition planning, inclusive workout routines, and a supportive community that treats you like royalty.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap', 'React', 'Tailwind', 'Vite'],
    image: negusfitImage,
    githubUrl: 'https://negus-fit.vercel.app/',
  },
  {
    title: 'HabitMint',
    description: 'A responsive, high-performance dashboard for visualizing complex datasets, featuring interactive charts and real-time updates.',
    tags: ['React', 'Tailwind CSS', 'Recharts', 'TypeScript'],
    image: habitImage,
    githubUrl: 'https://habit-mint-nine.vercel.app/',
  },
  {
    title: 'HabeshaReads',
    description: 'A community for lovers of novels, poetry, and history from the Horn of Africa. Rate, review, and discuss the canon.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    image: habeshaReads,
    githubUrl: 'https://teret.vercel.app/',
  },
  {
    title: 'Safe Ethiopia Defensive Driving',
    description: 'Equipping drivers in Addis Ababa with expert defensive driving techniques. Reduce accidents, lower costs, and ensure safety for your fleet and family.',
    tags: ['Python', 'Django', 'Jquery', 'Restful api','Apex Charts', 'Git'],
    image: safeethiopia,
    githubUrl: 'https://safe-ethiopia-defensive-driving.vercel.app/',
  },
];
