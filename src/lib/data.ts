import type { Project, BlogPost, Skill, Experience } from './types';
import { Code, Brush, BarChart, Server, Cloud, Bot, Linkedin, Twitter, Github } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    category: 'Web Development',
    description: 'A cutting-edge e-commerce platform with a focus on user experience.',
    longDescription: 'Project Alpha is a full-stack e-commerce solution built with Next.js, TypeScript, and Stripe. It features a custom CMS for product management, a highly optimized storefront for fast loading times, and a seamless checkout process. The goal was to create a platform that is not only powerful for the business but also intuitive and enjoyable for the customer.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'TypeScript', 'E-commerce', 'Stripe'],
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: '2',
    title: 'Creative Dashboard',
    category: 'UI/UX Design',
    description: 'A sleek and intuitive analytics dashboard for content creators.',
    longDescription: 'The Creative Dashboard was a UI/UX project focused on data visualization and usability. Designed in Figma and built with React, it provides creators with a clear overview of their performance metrics across multiple platforms. The design prioritizes clarity and actionability, helping users make informed decisions based on their data.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'UI/UX', 'React', 'Data Visualization'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'MobileFirst App',
    category: 'Web Development',
    description: 'A progressive web app designed for a seamless mobile experience.',
    longDescription: 'This project was a Progressive Web App (PWA) built to provide a native-app-like experience on the web. It features offline capabilities, push notifications, and a responsive design that adapts perfectly to any screen size. The technology stack includes React, Service Workers, and a Firebase backend.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'PWA', 'Firebase', 'Mobile'],
    caseStudyUrl: '#',
  },
  {
    id: '4',
    title: 'Branding Identity',
    category: 'UI/UX Design',
    description: 'A complete branding package for a new tech startup.',
    longDescription: 'Developed a comprehensive branding identity, including logo design, color palette, typography, and marketing materials. The goal was to create a modern and memorable brand that reflects the startup\'s innovative spirit.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Branding', 'Logo Design', 'Illustration'],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'deep-dive-into-react-hooks',
    title: 'A Deep Dive into React Hooks',
    date: '2024-05-15',
    summary: 'Explore the power and flexibility of React Hooks and how they can simplify your component logic.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Jane Doe',
    content: '<p>React Hooks have revolutionized the way we write components. In this post, we will explore...</p>',
  },
  {
    slug: 'the-art-of-ui-ux-design',
    title: 'The Art of UI/UX Design',
    date: '2024-04-22',
    summary: 'Discover the principles of creating intuitive and beautiful user interfaces that users love.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Jane Doe',
    content: '<p>Good design is about more than just aesthetics. It\'s about creating a seamless and enjoyable experience...</p>',
  },
    {
    slug: 'getting-started-with-genai',
    title: 'Getting Started with Generative AI',
    date: '2024-06-01',
    summary: 'A beginner-friendly guide to understanding and implementing generative AI in your projects.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Jane Doe',
    content: '<p>Generative AI is one of the most exciting fields in technology today. Let\'s break down the basics...</p>',
  },
];

export const skills: Skill[] = [
  { name: 'Frontend', icon: Code },
  { name: 'UI/UX Design', icon: Brush },
  { name: 'Backend', icon: Server },
  { name: 'DevOps', icon: Cloud },
  { name: 'Data Analytics', icon: BarChart },
  { name: 'AI/ML', icon: Bot },
];

export const experiences: Experience[] = [
    {
        role: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2020 - Present',
        description: 'Leading the development of high-performance web applications using React and Next.js. Mentoring junior developers and collaborating with design teams to create pixel-perfect user interfaces.'
    },
    {
        role: 'UI/UX Designer',
        company: 'Creative Minds LLC',
        period: '2018 - 2020',
        description: 'Designed user-centric interfaces for mobile and web applications. Conducted user research, created wireframes and prototypes, and worked closely with developers to ensure faithful implementation.'
    },
    {
        role: 'Junior Web Developer',
        company: 'Web Wizards',
        period: '2016 - 2018',
        description: 'Assisted in the development and maintenance of client websites using HTML, CSS, and JavaScript. Gained foundational experience in web development best practices and version control.'
    }
];

export const socialIcons = [
  { icon: Github, href: SOCIAL_LINKS.github },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
  { icon: Twitter, href: SOCIAL_LINKS.twitter },
]
