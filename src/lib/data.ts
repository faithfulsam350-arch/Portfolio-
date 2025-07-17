
import type { Project, Skill, Experience } from './types';
import { Figma, Framer, Users, Workflow, PenTool, Search, Layout, Smartphone, PenSquare } from 'lucide-react';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skillfort LMS',
    category: 'Learning Management System',
    description: 'A web app for managing online learning, focusing on a clear and usable admin experience.',
    longDescription: `
      <p class="text-lg text-muted-foreground">Skillfort LMS is an administrative web application designed to manage an online learning platform. It was created for platform administrators to handle courses, instructors, and users efficiently. The main goal was to build a clear, scalable, and intuitive dashboard that would streamline the entire administrative workflow from the ground up.</p>
      
      <div class="space-y-8 mt-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>As part of my internship, I was tasked with designing the administrative side of Skillfort. The core challenge was creating an intuitive system for admins to manage a complex set of features. The existing process was non-existent, and the client needed a clear, efficient, and scalable dashboard based on a real-world design brief.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>I was the UI/UX Designer for this internship project. My primary tool was <strong>Figma</strong>, which I used for everything from wireframing to high-fidelity mockups.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="my-6 mb-12 rounded-lg overflow-hidden border mt-9">
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
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>I conducted informal interviews with 3 potential users (administrators and instructors) to understand their needs.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-9">
            <div class="bg-muted/40 border rounded-lg p-6" >
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What are the biggest challenges you face when managing courses and users on a learning platform?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What features in an admin dashboard would save you the most time?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>How important is a clean, uncluttered interface for your daily tasks?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Users were often frustrated with cluttered interfaces and too many clicks to perform simple tasks.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>A centralized dashboard with key metrics (like new users and course completions) was highly desired.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Easy navigation between course, user, and instructor management was a top priority.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">User Personas</h3>
          <p>Based on the user research, I developed a user persona to guide the design process. This persona represents the typical administrator who would use the platform, helping to keep their needs and goals at the forefront of every design decision.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="User Persona" class="w-full" data-ai-hint="user persona graphic" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sitemap" class="w-full" data-ai-hint="sitemap diagram" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sketches" class="w-full" data-ai-hint="design sketches" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Wireframes" class="w-full" data-ai-hint="wireframe ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Final UI Design" class="w-full" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="mt-9 rounded-lg overflow-hidden border aspect-video">
            <video class="w-full" controls poster="https://placehold.co/800x450.png" data-ai-hint="prototype video screen recording">
              <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
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

      <div class="space-y-8 mt-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>Many Muslims find it challenging to manage their finances in a way that aligns with their faith, particularly regarding Halal transactions and Zakat obligations. Existing fintech apps often lack these specific features, creating a gap in the market for a dedicated financial tool for the Muslim community.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the Product Designer, I was responsible for designing the Minimum Viable Product (MVP) from concept to completion. I used <strong>paper sketches</strong> for initial ideas, <strong>Figma</strong> for wireframes and UI design, and <strong>Notion</strong> for project management.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="my-6 mb-12 rounded-lg overflow-hidden border mt-9">
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
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>I interviewed 3 individuals from the target demographic to gather insights into their financial habits and needs.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-9">
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>How do you currently track your expenses and calculate Zakat?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What are the biggest pain points in managing your finances in a Halal way?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What features would you most want to see in a finance app designed for Muslims?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Many users rely on manual methods like spreadsheets for Zakat calculation, which can be complex and error-prone.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>There is a strong desire for an all-in-one app that handles both general expense tracking and faith-specific needs.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Simplicity and trustworthiness were repeatedly mentioned as crucial factors.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">User Personas</h3>
          <p>To ensure the design was deeply rooted in user needs, I created a persona that synthesized the research findings. This persona, "Aisha," a young professional, helped focus the design on creating a simple, trustworthy, and all-in-one financial tool for the Muslim community.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="User Persona" class="w-full" data-ai-hint="user persona graphic" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sitemap" class="w-full" data-ai-hint="sitemap diagram" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sketches" class="w-full" data-ai-hint="design sketches" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Wireframes" class="w-full" data-ai-hint="wireframe ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Final UI Design" class="w-full" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="mt-9 rounded-lg overflow-hidden border aspect-video">
            <video class="w-full" controls poster="https://placehold.co/800x450.png" data-ai-hint="prototype video screen recording">
              <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
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
      
      <div class="space-y-8 mt-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>A telecom company needed a simple, modern, and effective one-page website to present its services. Their goal was to clearly communicate their offerings and provide an easy way for visitors to get in touch, without overwhelming them with information.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the UI/UX Designer, my role was to design the entire landing page. I used <strong>Figma</strong> for creating wireframes and the final high-fidelity mockup.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="my-6 mb-12 rounded-lg overflow-hidden border mt-9">
                <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full" data-ai-hint="design process flowchart" />
            </div>
          <p>The process for this project was straightforward and focused on clarity and conversion:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Understand & Structure:</strong> I broke down the required content into key sections: a compelling hero, a clear service breakdown, and a simple contact form.</li>
            <li><strong>Sketch (Wireframe):</strong> I created a simple wireframe in Figma to establish a clean, a grid-based layout. This ensured a strong visual hierarchy.</li>
            <li><strong>Design:</strong> I developed the final mockup, focusing on a strong visual identity, readable typography, and a prominent call-to-action (CTA) to encourage user engagement.</li>
          </ul>
        </div>
         <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>Given the project's simplicity, formal user research was minimal. Instead, I focused on stakeholder interviews (3 key team members) to align on the primary goals.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-9">
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What is the single most important action a visitor should take on this page?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Who is our primary audience, and what information is most critical to them?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What tone should the website convey: modern, corporate, friendly?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>The primary goal was lead generation through the contact form.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>The audience needed to quickly understand the core services without getting lost in technical jargon.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>A modern and professional, yet approachable, design was the desired direction.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">User Personas</h3>
          <p>From the stakeholder interviews, I created a persona for a typical customer: a small business owner looking for reliable telecom services. This persona helped ensure the language was clear, the value proposition was direct, and the contact process was as simple as possible.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="User Persona" class="w-full" data-ai-hint="user persona graphic" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sitemap" class="w-full" data-ai-hint="sitemap diagram" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sketches" class="w-full" data-ai-hint="design sketches" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Wireframes" class="w-full" data-ai-hint="wireframe ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Final UI Design" class="w-full" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="mt-9 rounded-lg overflow-hidden border aspect-video">
            <video class="w-full" controls poster="https://placehold.co/800x450.png" data-ai-hint="prototype video screen recording">
              <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
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

      <div class="space-y-8 mt-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>As a personal project, I wanted to address a common frustration I observed among my peers: existing podcast platforms can feel cluttered, especially for new listeners. My goal was to design an MVP for a podcast platform with a simplified user experience tailored to a younger audience.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the end-to-end Product Designer, I handled every stage of the project. I used <strong>Notion</strong> for research and planning, <strong>paper sketches</strong> for brainstorming, and <strong>Figma</strong> for wireframes, branding, and the final UI design.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="my-6 mb-12 rounded-lg overflow-hidden border mt-9">
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
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>I spoke with 3 friends who are regular podcast listeners to understand their habits and frustrations.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-9">
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>How do you typically find new podcasts to listen to?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What is the most confusing or cluttered part of your current podcast app?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>If you could change one thing about your podcast app, what would it be?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                     <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Podcast discovery is often overwhelming. Users want better, more personalized recommendations.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Users disliked apps that mixed music and podcasts too aggressively.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>A simple, clean interface for the player and library was a top request.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">User Personas</h3>
          <p>The research led to the creation of a user persona for "Alex," a college student who listens to podcasts to learn new things but is frustrated with cluttered apps. This persona was a constant reminder to prioritize simplicity, discovery, and a clean visual design throughout the project.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="User Persona" class="w-full" data-ai-hint="user persona graphic" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sitemap" class="w-full" data-ai-hint="sitemap diagram" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sketches" class="w-full" data-ai-hint="design sketches" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Wireframes" class="w-full" data-ai-hint="wireframe ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Final UI Design" class="w-full" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="mt-9 rounded-lg overflow-hidden border aspect-video">
            <video class="w-full" controls poster="https://placehold.co/800x450.png" data-ai-hint="prototype video screen recording">
              <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
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

      <div class="space-y-8 mt-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>While Spotify is a leader in music streaming, I identified an opportunity to improve its mobile UI as a personal challenge. Some of the navigation icons felt ambiguous, and the layout could be tweaked for better one-handed usability. This concept project aimed to address those minor but impactful usability issues.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">My Role & Tools</h3>
          <p>As the UI/UX Designer for this concept. I used <strong>Figma</strong> to create the redesigned screens and sourced feedback through personal connections and online design communities.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="my-6 mb-12 rounded-lg overflow-hidden border mt-9">
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
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>I conducted informal usability tests with 3 long-time Spotify users, asking them to perform specific tasks.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-9">
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Without thinking too hard, what do you expect this icon to do?" (pointing to ambiguous icons).</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Can you quickly find your list of liked songs?"</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Is there anything about the main navigation that feels confusing?"</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border rounded-lg p-6">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Users confirmed that certain icons, particularly for the library and search functions, were not immediately clear.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>The distinction between the 'Home' and 'Search' tabs was sometimes a point of confusion.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>All users expressed a desire for clearer, more explicit iconography in the navigation bar.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">User Personas</h3>
          <p>Even for a concept project, thinking about the user is key. I created a simple persona for a long-time Spotify power user who values efficiency. This helped me focus on making small, targeted changes that would improve their experience without disrupting their existing mental model of the app.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="User Persona" class="w-full" data-ai-hint="user persona graphic" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sitemap" class="w-full" data-ai-hint="sitemap diagram" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Sketches" class="w-full" data-ai-hint="design sketches" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Wireframes" class="w-full" data-ai-hint="wireframe ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="mt-9 rounded-lg overflow-hidden border">
            <img src="https://placehold.co/800x400.png" alt="Final UI Design" class="w-full" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="mt-9 rounded-lg overflow-hidden border aspect-video">
            <video class="w-full" controls poster="https://placehold.co/800x450.png" data-ai-hint="prototype video screen recording">
              <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
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

    



