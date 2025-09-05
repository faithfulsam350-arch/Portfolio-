
import type { LucideIcon } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string; // Now references content file ID
  imageUrl: string;
  heroImageUrl?: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
  published: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string; // Now references content file ID
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
