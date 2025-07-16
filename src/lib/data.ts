import type { Project, Skill, Experience } from './types';
import { Figma, Framer, Users, Workflow, PenTool, Search, Layout, Smartphone, PenSquare } from 'lucide-react';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skillfort LMS',
    category: 'Learning Management System',
    description: 'A web app for managing online learning, focusing on a clear and usable admin experience.',
    longDescription: `
      <h3>The Problem</h3>
      <p>As part of my internship, I was tasked with designing the administrative side of Skillfort, an online learning platform. The core challenge was creating an intuitive system for admins to manage courses, instructors, and users. The existing process was non-existent, and the client needed a clear, efficient, and scalable dashboard from scratch based on a real-world design brief.</p>

      <h3>My Role & Tools</h3>
      <p>I was the UI/UX Designer for this internship project. My primary tool was <strong>Figma</strong>, which I used for everything from wireframing to high-fidelity mockups.</p>
      
      <h3>Design Process</h3>
      <p>My process followed a structured approach to ensure the final design met both user and business needs:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Understand:</strong> I started by deeply analyzing the design brief and client expectations to understand the required features, like the admin dashboard, course manager, and instructor sections.</li>
        <li><strong>Structure:</strong> I mapped out the user flows for key tasks, such as adding a new course or viewing instructor profiles. This helped clarify the information architecture and ensure a logical layout.</li>
        <li><strong>Sketch & Design:</strong> I moved into Figma to create wireframes, focusing on building a clean and structured layout. I designed the core components, including the main dashboard, course management tabs, and the "add course" flow, ensuring clarity was the top priority.</li>
        <li><strong>Refine:</strong> I refined the high-fidelity designs based on feedback, focusing on creating a visually consistent and easy-to-navigate interface.</li>
      </ol>
      
      <h3>Outcome</h3>
      <p>The result was a usable and clear admin flow that the Skillfort team could implement internally. The project successfully translated a complex set of requirements into a structured and intuitive dashboard design, providing a solid foundation for the platform's administrative functions. The project is still ongoing, with my designs forming the core of the user experience.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'Web App', 'Dashboard', 'Internship'],
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: '2',
    title: 'Muslim Finance App',
    category: 'Fintech Mobile App',
    description: 'A mobile-first fintech app for Muslims to manage finances according to Halal principles.',
    longDescription: `
      <h3>The Problem</h3>
      <p>Many Muslims find it challenging to manage their finances in a way that aligns with their faith, particularly regarding Halal (permissible) transactions and Zakat (charitable) obligations. Existing fintech apps often lack these specific features, creating a gap in the market for a dedicated financial tool for the Muslim community.</p>

      <h3>My Role & Tools</h3>
      <p>As the Product Designer, I was responsible for designing the Minimum Viable Product (MVP) from concept to completion. I used <strong>paper sketches</strong> for initial ideas, <strong>Figma</strong> for wireframes and UI design, and <strong>Notion</strong> for project management and documentation.</p>
      
      <h3>Design Process</h3>
      <p>My approach was focused on understanding the target user and delivering a clean, mobile-first experience:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Understand:</strong> I began by developing user personas to represent the target audience, focusing on their financial habits, goals, and pain points.</li>
        <li><strong>Structure:</strong> I created detailed user flows for core features like money tracking, budgeting, and Zakat calculation to ensure the app's navigation was simple and logical.</li>
        <li><strong>Sketch:</strong> I started with low-fidelity paper sketches to quickly explore different layouts for the mobile interface.</li>
        <li><strong>Design:</strong> Using Figma, I translated the sketches into wireframes and then into a high-fidelity UI. The focus was on a clean, minimalist design that made financial information easy to read and digest.</li>
      </ol>
      
      <h3>Outcome</h3>
      <p>I successfully delivered a completed MVP design for the Muslim Finance App. The final design provided a clear, user-friendly solution for tracking expenses, managing budgets, and calculating Zakat, all within a clean and modern mobile interface. This project demonstrated my ability to handle end-to-end design for a specialized fintech product.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'Mobile App', 'Fintech', 'MVP'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Telecom One-Page Website',
    category: 'Landing Page',
    description: 'A clean and informational one-page website for a telecom company.',
    longDescription: `
      <h3>The Problem</h3>
      <p>A telecom company needed a simple, modern, and effective one-page website to present its services to potential customers. Their goal was to clearly communicate their offerings and provide an easy way for visitors to get in touch, without overwhelming them with information.</p>

      <h3>My Role & Tools</h3>
      <p>As the UI/UX Designer, my role was to design the entire landing page. I used <strong>Figma</strong> for creating wireframes and the final high-fidelity mockup.</p>
      
      <h3>Design Process</h3>
      <p>The process for this project was straightforward and focused on clarity and conversion:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Understand & Structure:</strong> I broke down the required content into key sections: a compelling hero, a clear service breakdown, and a simple contact form.</li>
        <li><strong>Sketch (Wireframe):</strong> I created a simple wireframe in Figma to establish a clean, grid-based layout. This ensured a strong visual hierarchy and guided the user's eye down the page.</li>
        <li><strong>Design:</strong> I developed the final mockup, focusing on a strong visual identity, readable typography, and a prominent call-to-action (CTA) to encourage user engagement.</li>
      </ol>
      
      <h3>Outcome</h3>
      <p>I delivered a final layout and mockup that met all the client's requirements. The design was clean, professional, and structured to guide users logically from the service offerings to the contact section, effectively serving its purpose as an informational and lead-generating landing page.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'UI Design', 'Landing Page', 'Grid Layout'],
    caseStudyUrl: '#',
  },
   {
    id: '4',
    title: 'Yapish Podcast Platform',
    category: 'Personal Project',
    description: 'An MVP concept for a podcast platform targeting a younger audience with a simple, clean UI.',
    longDescription: `
      <h3>The Problem</h3>
      <p>As a personal project, I wanted to address a common frustration I observed among my peers: existing podcast platforms can feel cluttered and unintuitive, especially for new listeners. My goal was to design an MVP for a podcast platform with a simplified user experience tailored to a younger, tech-savvy audience.</p>

      <h3>My Role & Tools</h3>
      <p>As the end-to-end Product Designer, I handled every stage of the project. I used <strong>Notion</strong> for research and planning, <strong>paper sketches</strong> for brainstorming, and <strong>Figma</strong> for wireframes, branding, and the final UI design.</p>
      
      <h3>Design Process</h3>
      <p>I followed my complete design process to bring this personal concept to life:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Understand:</strong> I started with user research to identify what a younger audience wants from a podcast app. Key findings pointed to a need for better discovery features and a cleaner, more visually engaging interface.</li>
        <li><strong>Structure:</strong> I mapped out user flows for discovering new podcasts, playing episodes, and managing a personal library.</li>
        <li><strong>Sketch:</strong> I used paper sketches to quickly iterate on different screen layouts for the mobile app and dashboard.</li>
        <li><strong>Design & Refine:</strong> In Figma, I developed the branding and a full set of UI designs. I focused on a modern aesthetic with clear navigation and an intuitive flow for discovering and listening to content.</li>
      </ol>
      
      <h3>Outcome</h3>
      <p>This ongoing personal project serves as a key piece in my portfolio, showcasing my ability to manage a project from concept to design. The result is a well-researched and thoughtfully designed UI for a podcast platform MVP, demonstrating my skills in user research, branding, and creating a user-centered flow. The UI is currently in progress.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'Personal Project', 'Product Design', 'UI/UX'],
    caseStudyUrl: '#',
  },
   {
    id: '5',
    title: 'Spotify Redesign (Concept)',
    category: 'UI Redesign Concept',
    description: 'A conceptual redesign of the Spotify mobile app, focused on improving navigation and icon clarity.',
    longDescription: `
      <h3>The Problem</h3>
      <p>While Spotify is a leader in music streaming, I identified an opportunity to improve its mobile UI as a personal challenge. Some of the navigation icons felt ambiguous, and the layout could be tweaked for better one-handed usability. This concept project aimed to address those minor but impactful usability issues.</p>

      <h3>My Role & Tools</h3>
      <p>I was the UI/UX Designer for this concept. I used <strong>Figma</strong> to create the redesigned screens and sourced feedback through personal connections and online design communities.</p>
      
      <h3>Design Process</h3>
      <p>My process for this redesign was quick and focused:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Understand:</strong> I conducted informal research and gathered personal feedback to validate my assumption that certain icons were confusing to users.</li>
        <li><strong>Sketch & Design:</strong> I jumped directly into Figma to experiment with UI tweaks. My main focus was on replacing unclear icons with universally understood symbols and improving the clarity of interactive buttons.</li>
        <li><strong>Refine:</strong> I refined the concepts based on the feedback, ensuring the new design felt familiar yet noticeably more intuitive.</li>
      </ol>
      
      <h3>Outcome</h3>
      <p>This concept project demonstrates my critical eye for UI details and my ability to propose thoughtful improvements to an existing, large-scale application. The final redesign mockups showcase a cleaner navigation bar with clearer icons, illustrating my strength in improving user flow clarity and implementing feedback effectively.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'UI Redesign', 'Concept', 'Mobile App'],
    caseStudyUrl: '#',
  },
];

export const skills: Skill[] = [
  { name: 'Clean Layouts', icon: Layout },
  { name: 'User Flow Clarity', icon: Workflow },
  { name: 'Wireframing', icon: PenSquare },
  { name: 'Figma', icon: Figma },
  { name: 'Prototyping', icon: Smartphone },
  { name: 'User Research', icon: Search },
];

export const experiences: Experience[] = [
    {
        role: 'UI/UX Design Intern',
        company: 'Skillfort LMS',
        period: '2024 - Present',
        description: 'Designing the administrative dashboard for an online learning platform, focusing on user flow clarity, layout structure, and implementing features based on a real-world design brief.'
    },
    {
        role: 'Freelance Product Designer',
        company: 'Various Projects',
        period: 'Started Feb 2024',
        description: 'Working on end-to-end design for mobile and web applications, including fintech and informational websites. Responsibilities include user research, wireframing, and high-fidelity UI design.'
    },
];
