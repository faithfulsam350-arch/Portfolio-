import type { Skill } from '@/lib/types';
import { 
  Figma, 
  Framer, 
  Users, 
  Workflow, 
  PenTool, 
  Search, 
  Layout, 
  Smartphone, 
  PenSquare, 
  Lightbulb, 
  HeartHandshake, 
  Presentation, 
  Clock, 
  CheckSquare, 
  Network 
} from 'lucide-react';

export const technicalSkills: Skill[] = [
  { name: 'UI/UX Design', icon: PenTool },
  { name: 'Prototyping', icon: Smartphone },
  { name: 'Wireframing', icon: Layout },
  { name: 'User Research', icon: Search },
  { name: 'Information Architecture', icon: Network },
  { name: 'Design Systems', icon: PenSquare },
];

export const softSkills: Skill[] = [
  { name: 'Empathy', icon: HeartHandshake },
  { name: 'Collaboration', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Time Management', icon: Clock },
  { name: 'Presentation', icon: Presentation },
  { name: 'Task Management', icon: CheckSquare },
];

export const tools: Skill[] = [
  { name: 'Figma', icon: Figma },
  { name: 'Framer', icon: Framer },
  { name: 'Notion', icon: PenSquare },
  { name: 'Trello', icon: Layout },
];
