
import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  heroImageUrl?: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string;
  author: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};
