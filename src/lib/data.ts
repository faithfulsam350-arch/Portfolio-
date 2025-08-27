
import type { Project, Skill, Experience, BlogPost } from './types';
import { Figma, Framer, Users, Workflow, PenTool, Search, Layout, Smartphone, PenSquare, Lightbulb, HeartHandshake, Presentation, Clock, CheckSquare, Network } from 'lucide-react';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Skillfort LMS',
    category: 'Learning Management System',
    description: 'A web app for managing online learning, focusing on a clear and usable admin experience.',
    longDescription: `
      <div class="space-y-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>Skillfort LMS is an administrative web application designed to manage an online learning platform. It was created for platform administrators to handle courses, instructors, and users efficiently. The main goal was to build a clear, scalable, and intuitive dashboard that would streamline the entire administrative workflow from the ground up. As part of my internship, I was tasked with designing the administrative side of Skillfort. The core challenge was creating an intuitive system for admins to manage a complex set of features. The existing process was non-existent, and the client needed a clear, efficient, and scalable dashboard based on a real-world design brief.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Problem Statement</h3>
          <p>Platform administrators lacked a centralized or efficient system to manage courses, instructors, and users. The existing process was non-existent, requiring a new dashboard to be designed from the ground up that was clear, scalable, and intuitive enough to handle a complex set of features.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 mb-6">
 <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full rounded-lg" data-ai-hint="design process flowchart"/>
            </div>
          <p class="mt-6">My process followed a structured approach to ensure the final design met both user and business needs:</p>
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
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col" >
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What are the biggest challenges you face when managing courses and users on a learning platform?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What features in an admin dashboard would save you the most time?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>How important is a clean, uncluttered interface for your daily tasks?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
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
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="User Persona" class="w-full rounded-lg" data-ai-hint="user persona graphic"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sitemap" class="w-full rounded-lg" style="margin: 20px 0px" data-ai-hint="sitemap diagram"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sketches" class="w-full rounded-lg" data-ai-hint="design sketches"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Wireframes" class="w-full rounded-lg" data-ai-hint="wireframe ui"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Final UI Design" class="w-full rounded-lg" data-ai-hint="ui design dashboard"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 aspect-video">
            <video class="w-full rounded-lg" controls poster="https://placehold.co/800x450.png" style="margin:20px 0px" data-ai-hint="prototype video screen recording"/>
 <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
          <p>The result was a usable and clear admin flow that the Skillfort team could implement internally. The project successfully translated a complex set of requirements into a structured and intuitive dashboard design, providing a solid foundation for the platform's administrative functions. The project is still ongoing, with my designs forming the core of the user experience.</p>
        </div>
        <div>
            <h3 class="text-3xl font-headline font-semibold mb-2" style="margin: 20px 0px">Future Improvements</h3>
            <p>The next steps would involve conducting usability testing with the interactive prototype to gather feedback from real administrators. This feedback would be crucial for refining the UI, validating the user flows, and identifying any new features that could further enhance the admin experience.</p>
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
    title: 'Muslim Finance Website',
    category: 'Fintech landing page',
    description: 'A landing page for a fintech service helping Muslims manage their finances according to Halal principles.',
    longDescription: `
      <div class="space-y-8" style="text-align: justify">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>This project involved designing the landing page for a fintech service built to help Muslims manage their finances in accordance with Halal principles. The landing page serves as the first point of interaction with the brand, introducing the platform’s value, building trust, and guiding users to take action. While the platform draws inspiration from Halal financial principles, it is designed to be inclusive and useful for anyone seeking transparent and values-driven money management.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Problem Statement</h3>
          <p>Many Muslims struggle to find financial tools that align with Islamic principles. While this product offers Halal-compliant financial management, the service needed a landing page that clearly communicates its value, builds trust, and encourages users to explore further.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 mb-6">
 <img src="/Lariba design process.png" alt="Design Process Diagram" class="w-full rounded-lg" data-ai-hint="design process flowchart"/>
            </div>
          <p class="mt-6">I followed a structured process to create this project:</p>
          <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Discover:</strong> Researched and explored user needs and expectations.</li>
            <li><strong>Define:</strong> Narrowed down insights to clearly identify the core problem.</li>
            <li><strong>Ideate:</strong> Brainstormed and explored possible solutions through sketches and concepts.</li>
            <li><strong>Design:</strong> Translated ideas into wireframes, a final UI design, and an interactive prototype.</li>
          </ul>
        </div>
         <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Research Methodology</h3>
          <h4 class="text-xl font-semibold mt-4 mb-2">User Research</h4>
          <p>To design the landing page, I conducted interviews with 5 participants (Muslims aged 20–30) to understand their first impressions and expectations from an Islamic finance product landing page. The goal was to learn what type of content, tone, and design would build trust and encourage sign-ups.</p>
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What do you expect to see first when you land on a Muslim finance website?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What information helps you quickly trust that a platform is authentic and Shariah-compliant?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What would motivate you to scroll further or take action (e.g., sign up, learn more)?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Participants wanted a clear headline that immediately highlights Shariah compliance.</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Users valued visual cues of trust (Islamic symbolism, certifications, or community focus).</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Simple explanations of benefits and transparency encouraged them to continue exploring the page.</span></div>
                </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>This sitemap visually outlines how users will navigate through the website, ensuring a clear and intuitive user flow.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-9 mb-9">
            <img src="/lariba pageflow.png" alt="Sitemap" class="w-full rounded-lg" style="margin: 20px 0px" data-ai-hint="sitemap diagram"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="/lariba wireframe.png" style="margin: 20px 0px" alt="Wireframes" class="w-full rounded-lg" data-ai-hint="wireframe ui" />
</div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
            <img src="/lariba desktop full ui.png" style="margin: 20px 0px" alt="Final UI Design" class="w-full rounded-lg" data-ai-hint="ui design dashboard" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Mobile View</h3>
          <p>To ensure accessibility and usability across devices, I designed a responsive mobile version of the application. This view adapts seamlessly to smaller screens while maintaining clarity, functionality, and a smooth user experience.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
            <img src="/lariba mobile.png" style="margin: 20px 0px" alt="Mobile View" class="w-full rounded-lg" data-ai-hint="mobile ui" />
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 aspect-video">
            <video class="w-full rounded-lg" controls poster="https://placehold.co/800x450.png" style="margin:20px 0px" data-ai-hint="prototype video screen recording">
              <source src="/lariba-prototype.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
          <p>I successfully delivered a completed MVP design for the Muslim Finance App. The final design provided a clear, user-friendly solution for tracking expenses, managing budgets, and calculating Zakat, all within a clean and modern mobile interface. This project demonstrated my ability to handle end-to-end design for a specialized fintech product.</p>
        </div>
        <div>
            <h3 class="text-3xl font-headline font-semibold mb-2" style="margin: 20px 0px">Future Improvements</h3>
            <p>For future iterations, I plan to incorporate features like investment tracking for Halal stocks and educational content on Islamic finance. Gathering user feedback on the MVP will be the first step to guide the product roadmap and ensure it continues to meet the community's needs.</p>
        </div>
      </div>
    `,
    imageUrl: '/lariba hero.png',
    tags: ['Figma', 'Fintech', 'Landing Page', 'Web Design'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'Telecom One-Page Website',
    category: 'Landing Page',
    description: 'A clean and informational one-page website for a telecom company.',
    longDescription: `
      <div class="space-y-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>This project is a clean and informational one-page website for a telecom company. It was created for potential customers looking for clear, concise information about the company's services. The main goals were to present their offerings in a modern, professional manner and to provide a simple, effective way for visitors to get in touch, ultimately boosting lead generation. A telecom company needed a simple, modern, and effective one-page website to present its services. Their goal was to clearly communicate their offerings and provide an easy way for visitors to get in touch, without overwhelming them with information.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Problem Statement</h3>
          <p>A telecom company needed a simple, modern, and effective one-page website to present its services. Their goal was to clearly communicate their offerings and provide an easy way for visitors to get in touch, without overwhelming them with information.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 mb-6">
 <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full rounded-lg" data-ai-hint="design process flowchart"/>
            </div>
          <p class="mt-6">The process for this project was straightforward and focused on clarity and conversion:</p>
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
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What is the single most important action a visitor should take on this page?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>Who is our primary audience, and what information is most critical to them?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What tone should the website convey: modern, corporate, friendly?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
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
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="User Persona" class="w-full rounded-lg" data-ai-hint="user persona graphic"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sitemap" class="w-full rounded-lg" style="margin: 20px 0px" data-ai-hint="sitemap diagram"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sketches" class="w-full rounded-lg" data-ai-hint="design sketches"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Wireframes" class="w-full rounded-lg" data-ai-hint="wireframe ui"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Final UI Design" class="w-full rounded-lg" data-ai-hint="ui design dashboard"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 aspect-video">
            <video class="w-full rounded-lg" controls poster="https://placehold.co/800x450.png" style="margin:20px 0px" data-ai-hint="prototype video screen recording"/>
 <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
          <p>I delivered a final layout and mockup that met all the client's requirements. The design was clean, professional, and structured to guide users logically from the service offerings to the contact section, effectively serving its purpose as an informational and lead-generating landing page.</p>
        </div>
        <div>
            <h3 class="text-3xl font-headline font-semibold mb-2" style="margin: 20px 0px">Future Improvements</h3>
            <p>Moving forward, the website could be enhanced with analytics tracking to monitor user engagement and conversion rates on the contact form. A/B testing different headlines and call-to-action buttons could also help optimize the page for even better lead generation results.</p>
        </div>
      </div>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'UI Design', 'Landing Page', 'Grid Layout'],
    caseStudyUrl: '#',
  },
   {
    id: '4',
    title: 'Yapish Podcast App',
    category: 'Mobile App',
    description: 'An MVP concept for a podcast platform targeting a younger audience with a simple, clean UI.',
    longDescription: `
      <div class="space-y-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>Yapish is a personal MVP concept for a podcast platform. It is created for a younger, tech-savvy audience who find existing podcast apps cluttered and unintuitive. The main goal of this project is to design a simplified, visually engaging user experience that makes discovering and listening to podcasts seamless and enjoyable. As a personal project, I wanted to address a common frustration I observed among my peers: existing podcast platforms can feel cluttered, especially for new listeners. My goal was to design an MVP for a podcast platform with a simplified user experience tailored to a younger audience.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Problem Statement</h3>
          <p>Existing podcast platforms can feel cluttered and overwhelming, especially for new listeners. The goal of this personal project was to design an MVP for a podcast app with a simplified user experience tailored to a younger audience, focusing on easy discovery and a clean interface.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 mb-6">
 <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full rounded-lg" data-ai-hint="design process flowchart"/>
            </div>
          <p class="mt-6">I followed my complete design process to bring this personal concept to life:</p>
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
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>How do you typically find new podcasts to listen to?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>What is the most confusing or cluttered part of your current podcast app?</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>If you could change one thing about your podcast app, what would it be?</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
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
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="User Persona" class="w-full rounded-lg" data-ai-hint="user persona graphic"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sitemap" class="w-full rounded-lg" style="margin: 20px 0px" data-ai-hint="sitemap diagram"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sketches" class="w-full rounded-lg" data-ai-hint="design sketches"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Wireframes" class="w-full rounded-lg" data-ai-hint="wireframe ui"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Final UI Design" class="w-full rounded-lg" data-ai-hint="ui design dashboard"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 aspect-video">
            <video class="w-full rounded-lg" controls poster="https://placehold.co/800x450.png" style="margin:20px 0px" data-ai-hint="prototype video screen recording"/>
 <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
          <p>This ongoing personal project serves as a key piece in my portfolio, showcasing my ability to manage a project from concept to design. The result is a well-researched and thoughtfully designed UI for a podcast platform MVP. The UI is currently in progress.</p>
        </div>
        <div>
            <h3 class="text-3xl font-headline font-semibold mb-2" style="margin: 20px 0px">Future Improvements</h3>
            <p>Future development would focus on building out a recommendation engine based on listening history and user preferences. I would also explore social features, such as sharing clips or episodes with friends, to increase engagement and discoverability.</p>
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
      <div class="space-y-8">
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Project Overview</h3>
          <p>This is a conceptual UI redesign of the Spotify mobile app. It's a personal project aimed at an existing user base that could benefit from enhanced usability. The main goal was to improve the user experience by refining the navigation, increasing button clarity, and replacing ambiguous icons with more universally understood symbols. While Spotify is a leader in music streaming, I identified an opportunity to improve its mobile UI as a personal challenge. Some of the navigation icons felt ambiguous, and the layout could be tweaked for better one-handed usability. This concept project aimed to address those minor but impactful usability issues.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Problem Statement</h3>
          <p>While Spotify is a leader in music streaming, I identified an opportunity to improve its mobile UI as a personal challenge. Some of the navigation icons felt ambiguous, and the layout could be tweaked for better one-handed usability. This concept project aimed to address those minor but impactful usability issues.</p>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Design Process</h3>
           <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 mb-6">
 <img src="https://placehold.co/800x250.png" alt="Design Process Diagram" class="w-full rounded-lg" data-ai-hint="design process flowchart"/>
            </div>
          <p class="mt-6">My process for this redesign was quick and focused:</p>
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
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path><path d="M12 20v-3"></path></svg>
                    Key Questions
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Without thinking too hard, what do you expect this icon to do?" (pointing to ambiguous icons).</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Can you quickly find your list of liked songs?"</span></div>
                    <div class="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-2 mt-1 shrink-0"><path d="m9 18 6-6-6-6"/></svg><span>"Is there anything about the main navigation that feels confusing?"</span></div>
                </div>
            </div>
            <div class="bg-muted/40 border-2 border-muted-foreground/30 rounded-lg p-6 flex flex-col">
                <h5 class="text-lg font-semibold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary"><path d="M20.92 14.65A10 10 0 1 1 10 3.08a10 10 0 0 1 10.92 11.57Z"></path><path d="m13 11-2-5-6 3 3 5 2-5Z"></path><path d="m14 20-3-5 5-2 1 4-3 3Z"></path></svg>
                    Key Findings
                </h5>
                <div class="space-y-2 text-sm text-muted-foreground flex-grow">
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
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="User Persona" class="w-full rounded-lg" data-ai-hint="user persona graphic"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sitemap</h3>
          <p>A sitemap was created to define the information architecture and ensure a logical and intuitive user flow. This visual blueprint helped organize the content and features in a way that aligns with user expectations and administrative tasks.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sitemap" class="w-full rounded-lg" style="margin: 20px 0px" data-ai-hint="sitemap diagram"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Sketch</h3>
          <p>The sketching phase is where ideas take their first visual form. It's a quick, low-fidelity way to explore different layouts and user flows without getting bogged down in details. This step is crucial for iterating on concepts rapidly and building a solid foundation before moving to digital wireframes.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Sketches" class="w-full rounded-lg" data-ai-hint="design sketches"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Wireframes</h3>
          <p>After sketching, I translate the concepts into digital wireframes. This step focuses on layout, structure, and user flow without the distraction of colors or typography, ensuring the core functionality is solid before moving to high-fidelity design.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Wireframes" class="w-full rounded-lg" data-ai-hint="wireframe ui"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Final UI Design</h3>
          <p>After iterating through sketches and wireframes, I moved to high-fidelity design in Figma. This phase focused on creating a visually polished, consistent, and user-friendly interface that brings the product's branding and functionality to life.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Final UI Design" class="w-full rounded-lg" data-ai-hint="ui design dashboard"/>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Prototype</h3>
          <p>To demonstrate the application's interactivity and user flow, I created a click-through prototype. This allows stakeholders to experience the design firsthand, providing a clearer understanding of the final product's behavior and usability.</p>
          <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 mt-6 aspect-video">
            <video class="w-full rounded-lg" controls poster="https://placehold.co/800x450.png" style="margin:20px 0px" data-ai-hint="prototype video screen recording"/>
 <!-- Add a <source> tag here with your video file -->
            </video>
          </div>
        </div>
        <div>
          <h3 class="text-3xl font-headline font-semibold mb-2">Outcome</h3>
          <p>As a conceptual exercise, the project was a success. It allowed me to practice my UI analysis and redesign skills on a real-world product. The final designs offer a subtle but meaningful improvement to the user experience by prioritizing clarity and ease of navigation.</p>
        </div>
        <div>
            <h3 class="text-3xl font-headline font-semibold mb-2" style="margin: 20px 0px">Future Improvements</h3>
            <p>If this were a real project, the next step would be to conduct A/B testing with the redesigned screens against the current Spotify UI. This would provide quantitative data to validate whether the changes led to faster task completion and higher user satisfaction.</p>
        </div>
      </div>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'Concept', 'UI/UX Redesign', 'Mobile App'],
    caseStudyUrl: '#',
  },
];


export const blogPosts: BlogPost[] = [
  {
    slug: 'the-art-of-user-centric-design',
    title: 'The Art of User-Centric Design',
    date: '2024-05-15',
    summary: 'Discover how putting users at the center of your design process can lead to more successful and engaging products.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Faithful Samuel',
    content: `
      <p>User-centric design is more than just a buzzword; it's a philosophy that places the user at the heart of the design process. It involves understanding their needs, behaviors, and motivations to create products that are not only functional but also enjoyable to use. In this post, we'll explore the key principles of user-centric design and how you can apply them to your own projects.</p>
      
      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">Understanding Your Users</h2>
      <p>The first step in user-centric design is to gain a deep understanding of your target audience. This involves conducting user research, such as interviews, surveys, and usability testing, to gather insights into their goals and pain points. By developing user personas and mapping out their journeys, you can create a clear picture of who you're designing for and what they need to succeed.</p>
      
      <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 my-8">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="User research" class="w-full rounded-lg" data-ai-hint="user research"/>
      </div>
      
      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">Iterative Design and Prototyping</h2>
      <p>User-centric design is an iterative process. It involves creating prototypes, testing them with users, and refining the design based on their feedback. This cycle of building, testing, and learning ensures that the final product is a true reflection of users' needs and expectations. By involving users throughout the design process, you can avoid costly mistakes and create a product that truly resonates with your audience.</p>
      
      <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-8">
        "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
      </blockquote>
      
      <p>Ultimately, the goal of user-centric design is to create a seamless and intuitive experience that empowers users to achieve their goals. By focusing on their needs and involving them in the design process, you can create products that are not only successful but also a joy to use.</p>
    `
  },
    {
    slug: 'design-trends-for-2024',
    title: 'Top 5 Design Trends to Watch in 2024',
    date: '2024-04-22',
    summary: 'From AI-driven design to nostalgic interfaces, we explore the top design trends that are shaping the digital landscape this year.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Faithful Samuel',
    content: `
      <p>The world of design is constantly evolving, and 2024 is no exception. This year, we're seeing a fascinating blend of futuristic technology and nostalgic aesthetics. In this post, we'll dive into the top 5 design trends that are making waves and how you can incorporate them into your work.</p>
      
      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">1. AI-Driven Design</h2>
      <p>Artificial intelligence is no longer just a futuristic concept; it's a powerful tool for designers. From generating unique color palettes to creating complex layouts, AI is streamlining the creative process and opening up new possibilities. Expect to see more AI-powered design tools that assist with everything from image generation to user flow optimization.</p>
      
      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">2. Bolder, More Expressive Typography</h2>
      <p>Typography is taking center stage, with designers opting for bold, expressive fonts that make a statement. This trend is all about personality and grabbing the user's attention. Think oversized headlines, custom typefaces, and a playful approach to text that blurs the line between reading and seeing.</p>
      
      <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 my-8">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Expressive typography" class="w-full rounded-lg" data-ai-hint="bold typography" />
      </div>

      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">3. Nostalgic Interfaces (Y2K Revival)</h2>
      <p>The Y2K aesthetic is back, but with a modern twist. Designers are drawing inspiration from the early 2000s, incorporating elements like glossy buttons, pixelated icons, and vibrant, almost-garish color schemes. It's a fun, playful trend that taps into a collective sense of nostalgia for a simpler digital age.</p>

      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">4. Immersive 3D Graphics</h2>
      <p>Thanks to advancements in browser technology, 3D graphics are becoming more accessible and integrated into web design. From interactive product models to abstract animated backgrounds, 3D elements add depth and a sense of realism that makes digital experiences more engaging and memorable.</p>

      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">5. A Focus on Accessibility and Inclusivity</h2>
      <p>Perhaps the most important trend is the growing emphasis on designing for everyone. This means creating experiences that are accessible to people with disabilities, considering factors like color contrast, screen reader compatibility, and keyboard navigation. Inclusive design is not just a trend; it's a fundamental principle of good design.</p>
    `
  },
  {
    slug: 'the-power-of-prototyping',
    title: 'Why Prototyping is a Designer\'s Superpower',
    date: '2024-03-10',
    summary: 'Learn how prototyping can save time, reduce risk, and lead to better products by allowing you to test ideas before committing to code.',
    imageUrl: 'https://placehold.co/600x400.png',
    author: 'Faithful Samuel',
    content: `
      <p>In the fast-paced world of product development, it can be tempting to jump straight from idea to implementation. However, skipping the prototyping phase is a risky move. Prototyping is a designer's superpower, allowing you to test, refine, and validate your ideas before a single line of code is written.</p>
      
      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">What is a Prototype?</h2>
      <p>A prototype is a preliminary model of your product that allows you to test its functionality and user flow. Prototypes can range from simple paper sketches (low-fidelity) to interactive digital mockups (high-fidelity). The goal is to create a tangible representation of your idea that can be tested with users and stakeholders.</p>
      
      <div class="rounded-lg overflow-hidden border-2 border-muted-foreground/30 my-8">
 <img src="https://placehold.co/800x400.png" style="margin: 20px 0px" alt="Prototyping" class="w-full rounded-lg" data-ai-hint="ui prototype"/>
      </div>

      <h2 class="text-3xl font-headline font-semibold mt-8 mb-4">The Benefits of Prototyping</h2>
      <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
        <li><strong>Early Feedback:</strong> Prototyping allows you to get feedback from users and stakeholders early in the design process, when changes are still easy and inexpensive to make.</li>
        <li><strong>Risk Reduction:</strong> By testing your ideas before development, you can identify potential usability issues and design flaws, reducing the risk of building the wrong product.</li>
        <li><strong>Improved Collaboration:</strong> A prototype provides a common ground for designers, developers, and product managers to discuss and refine ideas, leading to better alignment and a more cohesive final product.</li>
        <li><strong>Faster Iteration:</strong> It's much quicker to iterate on a prototype than it is to make changes to a fully coded product. This allows you to explore more ideas and arrive at a better solution faster.</li>
      </ul>
      
      <p class="mt-6">Ultimately, prototyping is an essential part of the design process. It bridges the gap between imagination and reality, enabling you to create products that are not only innovative but also intuitive and user-friendly. So, the next time you have a great idea, don't rush to build it. Prototype it first.</p>
    `
  }
];


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
    { name: 'Webflow', icon: Workflow },
];


export const experiences: Experience[] = [
  {
    role: 'Product Designer Intern',
    company: 'SkillFort',
    period: '2023',
    description: 'Designed an administrative web application for an LMS from scratch, focusing on user flow, information architecture, and creating a scalable and intuitive dashboard.'
  },
  {
    role: 'Product Designer',
    company: 'Muslim Finance App',
    period: '2023 - Present',
    description: 'Led the end-to-end design of an MVP for a fintech app, including user research, wireframing, UI design, and prototyping to create a user-friendly financial management tool.'
  },
  {
    role: 'UI/UX Designer',
    company: 'Yapish - Personal Project',
    period: '2024 - Present',
    description: 'Developing a podcast platform concept with a focus on simplified UX, branding, and a clean interface to address the cluttered experience of existing apps.'
  },
];
