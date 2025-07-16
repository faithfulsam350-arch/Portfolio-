
import type { Project, Skill, Experience } from './types';
import { Figma, Framer, Users, Workflow, PenTool, Search, Layout, Smartphone, PenSquare } from 'lucide-react';

const designProcessHtml = `
  <div class="my-6 mb-8 rounded-lg overflow-hidden border">
    <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
  </div>
`;

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skillfort LMS',
    category: 'Learning Management System',
    description: 'A web app for managing online learning, focusing on a clear and usable admin experience.',
    longDescription: `
      <p class="text-lg text-muted-foreground">Skillfort LMS is an administrative web application designed to manage an online learning platform. It was created for platform administrators to handle courses, instructors, and users efficiently. The main goal was to build a clear, scalable, and intuitive dashboard that would streamline the entire administrative workflow from the ground up.</p>
      
      <div class="space-y-6 mt-8">
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>As part of my internship, I was tasked with designing the administrative side of Skillfort. The core challenge was creating an intuitive system for admins to manage a complex set of features. The existing process was non-existent, and the client needed a clear, efficient, and scalable dashboard based on a real-world design brief.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>I was the UI/UX Designer for this internship project. My primary tool was <strong>Figma</strong>, which I used for everything from wireframing to high-fidelity mockups.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Design Process</h3>
          <div class="my-6 mb-8 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
          </div>
          <p>My process followed a structured approach to ensure the final design met both user and business needs:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand:</strong> I started by deeply analyzing the design brief and client expectations to understand the required features, like the admin dashboard, course manager, and instructor sections.</li>
            <li><strong>Structure:</strong> I mapped out the user flows for key tasks, such as adding a new course or viewing instructor profiles. This helped clarify the information architecture and ensure a logical layout.</li>
            <li><strong>Sketch & Design:</strong> I moved into Figma to create wireframes, focusing on building a clean and structured layout. I designed the core components, including the main dashboard, course management tabs, and the "add course" flow.</li>
            <li><strong>Refine:</strong> I refined the high-fidelity designs based on feedback, focusing on creating a visually consistent and easy-to-navigate interface.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Outcome</h3>
          <p>The result was a usable and clear admin flow that the Skillfort team could implement internally. The project successfully translated a complex set of requirements into a structured and intuitive dashboard design, providing a solid foundation for the platform's administrative functions. The project is still ongoing, with my designs forming the core of the user experience.</p>
        </div>
      </div>
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
      <p class="text-lg text-muted-foreground">This project is a mobile-first fintech application designed to help Muslims manage their finances in accordance with Halal principles. It is created for individuals in the Muslim community who need a dedicated tool for tracking permissible transactions and calculating Zakat. The main goal was to deliver a clean, user-friendly MVP that simplifies faith-based financial management.</p>

      <div class="space-y-6 mt-8">
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>Many Muslims find it challenging to manage their finances in a way that aligns with their faith, particularly regarding Halal transactions and Zakat obligations. Existing fintech apps often lack these specific features, creating a gap in the market for a dedicated financial tool for the Muslim community.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the Product Designer, I was responsible for designing the Minimum Viable Product (MVP) from concept to completion. I used <strong>paper sketches</strong> for initial ideas, <strong>Figma</strong> for wireframes and UI design, and <strong>Notion</strong> for project management.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Design Process</h3>
          <div class="my-6 mb-8 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
          </div>
          <p>My approach was focused on understanding the target user and delivering a clean, mobile-first experience:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand:</strong> I began by developing user personas to represent the target audience, focusing on their financial habits, goals, and pain points.</li>
            <li><strong>Structure:</strong> I created detailed user flows for core features like money tracking, budgeting, and Zakat calculation to ensure the app's navigation was simple and logical.</li>
            <li><strong>Sketch:</strong> I started with low-fidelity paper sketches to quickly explore different layouts for the mobile interface.</li>
            <li><strong>Design:</strong> Using Figma, I translated the sketches into wireframes and then into a high-fidelity UI. The focus was on a clean, minimalist design.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Outcome</h3>
          <p>I successfully delivered a completed MVP design for the Muslim Finance App. The final design provided a clear, user-friendly solution for tracking expenses, managing budgets, and calculating Zakat, all within a clean and modern mobile interface. This project demonstrated my ability to handle end-to-end design for a specialized fintech product.</p>
        </div>
      </div>
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
      <p class="text-lg text-muted-foreground">This project is a clean and informational one-page website for a telecom company. It was created for potential customers looking for clear, concise information about the company's services. The main goals were to present their offerings in a modern, professional manner and to provide a simple, effective way for visitors to get in touch, ultimately boosting lead generation.</p>
      
      <div class="space-y-6 mt-8">
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>A telecom company needed a simple, modern, and effective one-page website to present its services. Their goal was to clearly communicate their offerings and provide an easy way for visitors to get in touch, without overwhelming them with information.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the UI/UX Designer, my role was to design the entire landing page. I used <strong>Figma</strong> for creating wireframes and the final high-fidelity mockup.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Design Process</h3>
          <div class="my-6 mb-8 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
          </div>
          <p>The process for this project was straightforward and focused on clarity and conversion:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand & Structure:</strong> I broke down the required content into key sections: a compelling hero, a clear service breakdown, and a simple contact form.</li>
            <li><strong>Sketch (Wireframe):</strong> I created a simple wireframe in Figma to establish a clean, grid-based layout. This ensured a strong visual hierarchy.</li>
            <li><strong>Design:</strong> I developed the final mockup, focusing on a strong visual identity, readable typography, and a prominent call-to-action (CTA) to encourage user engagement.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Outcome</h3>
          <p>I delivered a final layout and mockup that met all the client's requirements. The design was clean, professional, and structured to guide users logically from the service offerings to the contact section, effectively serving its purpose as an informational and lead-generating landing page.</p>
        </div>
      </div>
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
      <p class="text-lg text-muted-foreground">Yapish is a personal MVP concept for a podcast platform. It is created for a younger, tech-savvy audience who find existing podcast apps cluttered and unintuitive. The main goal of this project is to design a simplified, visually engaging user experience that makes discovering and listening to podcasts seamless and enjoyable.</p>

      <div class="space-y-6 mt-8">
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>As a personal project, I wanted to address a common frustration I observed among my peers: existing podcast platforms can feel cluttered, especially for new listeners. My goal was to design an MVP for a podcast platform with a simplified user experience tailored to a younger audience.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the end-to-end Product Designer, I handled every stage of the project. I used <strong>Notion</strong> for research and planning, <strong>paper sketches</strong> for brainstorming, and <strong>Figma</strong> for wireframes, branding, and the final UI design.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Design Process</h3>
          <div class="my-6 mb-8 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
          </div>
          <p>I followed my complete design process to bring this personal concept to life:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand:</strong> I started with user research to identify what a younger audience wants from a podcast app. Key findings pointed to a need for better discovery features and a cleaner interface.</li>
            <li><strong>Structure:</strong> I mapped out user flows for discovering new podcasts, playing episodes, and managing a personal library.</li>
            <li><strong>Sketch:</strong> I used paper sketches to quickly iterate on different screen layouts for the mobile app and dashboard.</li>
            <li><strong>Design & Refine:</strong> In Figma, I developed the branding and a full set of UI designs, focusing on a modern aesthetic with clear navigation.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Outcome</h3>
          <p>This ongoing personal project serves as a key piece in my portfolio, showcasing my ability to manage a project from concept to design. The result is a well-researched and thoughtfully designed UI for a podcast platform MVP. The UI is currently in progress.</p>
        </div>
      </div>
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
      <p class="text-lg text-muted-foreground">This is a conceptual UI redesign of the Spotify mobile app. It's a personal project aimed at an existing user base that could benefit from enhanced usability. The main goal was to improve the user experience by refining the navigation, increasing button clarity, and replacing ambiguous icons with more universally understood symbols.</p>

      <div class="space-y-6 mt-8">
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>While Spotify is a leader in music streaming, I identified an opportunity to improve its mobile UI as a personal challenge. Some of the navigation icons felt ambiguous, and the layout could be tweaked for better one-handed usability. This concept project aimed to address those minor but impactful usability issues.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the UI/UX Designer for this concept. I used <strong>Figma</strong> to create the redesigned screens and sourced feedback through personal connections and online design communities.</p>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Design Process</h3>
          <div class="my-6 mb-8 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
          </div>
          <p>My process for this redesign was quick and focused:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand:</strong> I conducted informal research and gathered personal feedback to validate my assumption that certain icons were confusing to users.</li>
            <li><strong>Sketch & Design:</strong> I jumped directly into Figma to experiment with UI tweaks. My main focus was on replacing unclear icons and improving the clarity of interactive buttons.</li>
            <li><strong>Refine:</strong> I refined the concepts based on the feedback, ensuring the new design felt familiar yet noticeably more intuitive.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-headline font-semibold mb-2">Outcome</h3>
          <p>This concept project demonstrates my critical eye for UI details and my ability to propose thoughtful improvements to an existing, large-scale application. The final redesign mockups showcase a cleaner navigation bar with clearer icons, illustrating my strength in improving user flow clarity.</p>
        </div>
      </div>
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
  { name: 'Real Feedback', icon: Users },
  { name: 'Prototyping', icon: Smartphone },
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

export const blogPosts = [
    {
        slug: 'design-thinking-demystified',
        title: 'Design Thinking Demystified',
        date: '2024-05-15',
        summary: 'A beginner\'s guide to the design thinking process and how it can improve your projects.',
        imageUrl: 'https://placehold.co/600x400.png',
        author: 'Faithful Samuel',
        content: `
            <div class="space-y-4">
                <p>Design thinking is a powerful problem-solving approach that puts the user first. It's a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems, and create innovative solutions to prototype and test. This post breaks down the five stages: Empathize, Define, Ideate, Prototype, and Test.</p>
                <h3 class="text-2xl font-headline font-semibold pt-4">1. Empathize</h3>
                <p>The first stage is all about gaining an empathetic understanding of the problem you're trying to solve. This involves consulting experts and immersing yourself in the physical environment to understand the issues and challenges involved.</p>
                <h3 class="text-2xl font-headline font-semibold pt-4">2. Define</h3>
                <p>During the Define stage, you put together the information you have created and gathered during the Empathize stage. You will analyze your observations and synthesize them in order to define the core problems that you and your team have identified up to this point.</p>
                 <h3 class="text-2xl font-headline font-semibold pt-4">3. Ideate</h3>
                <p>During the third stage of the Design Thinking process, designers are ready to start generating ideas. You’ve grown to understand your users and their needs in the Empathize stage, and you’ve analyzed and synthesized your observations in the Define stage, and ended up with a human-centered problem statement.</p>
                 <h3 class="text-2xl font-headline font-semibold pt-4">4. Prototype</h3>
                <p>The design team will now produce a number of inexpensive, scaled down versions of the product or specific features in the product, so they can investigate the problem solutions generated in the previous stage.</p>
                 <h3 class="text-2xl font-headline font-semibold pt-4">5. Test</h3>
                <p>Designers or evaluators rigorously test the complete product using the best solutions identified during the prototyping phase. This is the final stage of the 5 stage-model, but in an iterative process, the results generated during the testing phase are often used to redefine one or more problems and inform the understanding of the users, the conditions of use, how people think, behave, and feel, and to empathise.</p>
            </div>
        `
    },
    {
        slug: 'ux-vs-ui-whats-the-difference',
        title: 'UX vs. UI: What\'s the Difference?',
        date: '2024-06-02',
        summary: 'Clearing up the confusion between User Experience (UX) and User Interface (UI) design.',
        imageUrl: 'https://placehold.co/600x400.png',
        author: 'Faithful Samuel',
        content: `
            <div class="space-y-4">
                <p>It's a common point of confusion for newcomers to the design world. While UX and UI are closely related and often used interchangeably, they refer to different aspects of the design process.</p>
                <h3 class="text-2xl font-headline font-semibold pt-4">User Experience (UX) Design</h3>
                <p>UX design is focused on the overall feel of the experience. It's about how a user interacts with a product and their satisfaction with that interaction. A UX designer is concerned with the entire process of acquiring and integrating a product, including aspects of branding, design, usability, and function. It's about making a product useful, usable, and enjoyable.</p>
                <h3 class="text-2xl font-headline font-semibold pt-4">User Interface (UI) Design</h3>
                <p>UI design, on the other hand, is the process of making interfaces in software or computerized devices with a focus on looks or style. UI designers are responsible for the graphical layout of an application. They decide what the application is going to look like. They choose color schemes, button shapes, and the fonts used for text.</p>
                <h3 class="text-2xl font-headline font-semibold pt-4">How They Work Together</h3>
                <p>A beautiful product that is difficult to use is an example of great UI and poor UX. Conversely, a product that is useful but looks terrible is an example of great UX and poor UI. The two must work together to create a product that is both aesthetically pleasing and efficient to use. UX is the journey, and UI is the destination's appearance.</p>
            </div>
        `
    }
];
