import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  courses: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}