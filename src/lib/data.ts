import type { Project, Skill, Experience } from './types';
import { Figma, Framer, Users, BrainCircuit, PenTool, Search } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Alpha',
    category: 'E-commerce Platform',
    description: 'A cutting-edge e-commerce platform with a focus on user experience.',
    longDescription: `
      <h3>The Challenge</h3>
      <p>The existing e-commerce landscape for high-end electronics was cluttered with confusing interfaces and slow checkout processes, leading to high cart abandonment rates. Our client, a premium electronics retailer, needed a new platform that not only showcased their products beautifully but also provided a seamless and trustworthy shopping experience.</p>
      
      <h3>My Role</h3>
      <p>As the lead UI/UX designer, I was responsible for the end-to-end design process. This included user research, creating user personas and journey maps, developing wireframes and high-fidelity prototypes, conducting usability testing, and collaborating closely with the development team to ensure a pixel-perfect implementation.</p>
      
      <h3>The Process</h3>
      <p><strong>1. Discovery & Research:</strong> We started with comprehensive market research and user interviews to understand the pain points of online electronic shoppers. We discovered a key need for detailed product information, clear comparisons, and a fast, secure checkout.</p>
      <p><strong>2. Ideation & Wireframing:</strong> Based on our research, we sketched out user flows and created low-fidelity wireframes. This allowed us to quickly iterate on the information architecture and layout before committing to visual details. We focused on a clean, grid-based layout that prioritized product imagery and key specifications.</p>
      <p><strong>3. Design & Prototyping:</strong> I developed a sleek, modern UI with a dark theme that made the product visuals pop. Using Figma, I created a component-based design system for consistency. High-fidelity interactive prototypes were built to simulate the entire shopping experience, from browsing to checkout.</p>
      <p><strong>4. Testing & Iteration:</strong> We conducted several rounds of usability testing with our interactive prototypes. Feedback from users led to key improvements, such as a persistent shopping cart and a simplified multi-step checkout process that significantly reduced friction.</p>

      <h3>The Outcome</h3>
      <p>The new platform, Project Alpha, launched to rave reviews. Key metrics after the first three months showed a <strong>40% decrease in cart abandonment</strong>, a <strong>25% increase in conversion rates</strong>, and a significant improvement in user satisfaction scores. The intuitive design empowered customers to make informed decisions with confidence, establishing a new standard for online electronics retail.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'User Research', 'Prototyping', 'E-commerce'],
    liveUrl: '#',
    caseStudyUrl: '#',
  },
  {
    id: '2',
    title: 'Creative Dashboard',
    category: 'Data Visualization',
    description: 'A sleek and intuitive analytics dashboard for content creators.',
    longDescription: `
      <h3>The Challenge</h3>
      <p>Content creators are often overwhelmed with data from multiple platforms (YouTube, Instagram, Twitter, etc.), making it difficult to gauge overall performance and make strategic decisions. They needed a centralized dashboard that would aggregate their data and present it in a clear, actionable way.</p>
      
      <h3>My Role</h3>
      <p>I was the sole UI/UX designer on this project. My responsibilities included conducting user interviews with creators, defining the product's feature set, designing the information architecture, and creating a visually engaging and intuitive interface from wireframes to final mockups.</p>
      
      <h3>The Process</h3>
      <p><strong>1. Understanding the User:</strong> I interviewed 15 content creators to identify their primary goals and frustrations with analytics. The key takeaway was the need for simplicity and context. They didn't just want numbers; they wanted to know what those numbers meant for their growth.</p>
      <p><strong>2. Structuring the Data:</strong> I focused on a modular, card-based layout that would allow for customization. I designed a "main overview" section for at-a-glance metrics and platform-specific sections for deeper dives. The data hierarchy was designed to surface the most critical information first.</p>
      <p><strong>3. Visual Design:</strong> The aesthetic goal was "clean, modern, and inspiring." I used a bold, dark theme with vibrant accent colors for data visualizations to make charts and graphs easy to read and visually appealing. I established clear typographic scales and spacing rules to ensure a consistent and polished look.</p>

      <h3>The Outcome</h3>
      <p>The Creative Dashboard successfully simplified analytics for its users. In user testing, creators were able to identify key trends <strong>60% faster</strong> than with their previous methods. The dashboard received praise for its intuitive design and for turning complex data into a motivating and easy-to-understand tool for growth.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'UI/UX', 'React', 'Data Visualization'],
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'MobileFirst Banking App',
    category: 'Mobile App',
    description: 'A progressive web app designed for a seamless mobile experience.',
    longDescription: `
      <h3>The Challenge</h3>
      <p>Traditional banking apps are often clunky, slow, and difficult to navigate, causing frustration for users trying to perform simple tasks like checking balances or transferring money. A forward-thinking financial institution wanted to create a mobile banking app that felt as intuitive and delightful to use as modern social media apps.</p>
      
      <h3>My Role</h3>
      <p>As part of a small design team, I focused on the core user flows for transfers and payments. I conducted competitive analysis, created detailed wireframes and prototypes, and worked on the visual design and interaction patterns for these key features.</p>
      
      <h3>The Process</h3>
      <p><strong>1. Deconstructing the Flow:</strong> I started by mapping out every step of a typical money transfer process in existing apps, identifying areas of friction. The goal was to reduce the number of steps and simplify the required inputs.</p>
      <p><strong>2. Prototyping and Testing:</strong> I built several interactive prototypes in Framer to test different approaches. One key innovation was a "drag-and-drop" interface for transfers between accounts, which tested exceptionally well with users for its speed and intuitive feel.</p>
      <p><strong>3. Micro-interactions:</strong> To make the experience feel fluid and responsive, I designed subtle micro-interactions, such as animated feedback on button taps and smooth screen transitions. These small details contributed to a more polished and high-quality feel.</p>
      
      <h3>The Outcome</h3>
      <p>The redesigned transfer flow was a huge success. Usability testing showed a <strong>75% reduction in task completion time</strong> compared to the bank's previous app. The MobileFirst app has since been adopted by over a million users, with App Store reviews frequently praising its "simplicity" and "ease of use," directly validating our user-centered design approach.</p>
    `,
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Figma', 'PWA', 'Mobile-First', 'UX Design'],
    caseStudyUrl: '#',
  },
];

export const skills: Skill[] = [
  { name: 'UI Design', icon: PenTool },
  { name: 'UX Research', icon: Search },
  { name: 'Prototyping', icon: Framer },
  { name: 'Design Systems', icon: Figma },
  { name: 'User Testing', icon: Users },
  { name: 'Design Thinking', icon: BrainCircuit },
];

export const experiences: Experience[] = [
    {
        role: 'Senior UI/UX Designer',
        company: 'Innovatech',
        period: '2020 - Present',
        description: 'Leading design on flagship products, conducting user research, and building a comprehensive design system to ensure consistency and speed across all platforms.'
    },
    {
        role: 'Product Designer',
        company: 'Creative Minds LLC',
        period: '2018 - 2020',
        description: 'Designed user-centric interfaces for mobile and web applications. Conducted user research, created wireframes and prototypes, and worked closely with developers to ensure faithful implementation.'
    },
    {
        role: 'Junior UX Designer',
        company: 'Web Wizards',
        period: '2016 - 2018',
        description: 'Assisted in user research, usability testing, and creating wireframes for various client websites. Gained foundational experience in UX principles and design tools.'
    }
];
