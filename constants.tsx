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
    title: 'Government Portal System',
    description: 'A comprehensive digital platform for managing departmental resources and public announcements, built with Django and PostgreSQL.',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    image: 'https://picsum.photos/800/600?random=1',
    githubUrl: '#',
  },
  {
    title: 'Analytical Dashboard UI',
    description: 'A responsive, high-performance dashboard for visualizing complex datasets, featuring interactive charts and real-time updates.',
    tags: ['React', 'Tailwind CSS', 'Recharts', 'TypeScript'],
    image: 'https://picsum.photos/800/600?random=2',
    githubUrl: '#',
  },
  {
    title: 'Microservice REST API',
    description: 'A scalable backend architecture designed to handle high-concurrency requests, decoupled into independent deployable services.',
    tags: ['Node.js', 'Express', 'Docker', 'MongoDB'],
    image: 'https://picsum.photos/800/600?random=3',
    githubUrl: '#',
  },
  {
    title: 'Auth Platform',
    description: 'A secure, full-stack authentication system supporting OAuth2, JWT strategies, and multi-factor authentication flows.',
    tags: ['Python', 'Django Rest Framework', 'React', 'Redux'],
    image: 'https://picsum.photos/800/600?random=4',
    githubUrl: '#',
  },
];