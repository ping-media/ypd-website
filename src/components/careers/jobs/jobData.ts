import { Job } from "./JobList";

export interface JobDetails extends Job {
  salary: string;
  experience: string;
  jobType: string;
  postedDate: string;
  tags: string[];
  description: string;
  aboutRole: string;
  responsibilities: string[];
  whyYPD: string;
  mustHave: string[];
  niceToHave: string[];
  perks: {
    title: string;
    description: string;
  }[];
}

export const jobs: JobDetails[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    location: "India, Bengaluru",
    flexibility: "Full Time",
    role: "Designer",
    slug: "ui-ux-designer",
    salary: "50k – 60k / Year",
    experience: "2 years",
    jobType: "Full Time",
    postedDate: "Posted 1 day ago",
    tags: ["Designer", "UI / UX Designer", "Creative Work", "UX Researcher"],
    description:
      "As a UI/UX Designer at YPD, you'll craft experiences that millions of young people connect with every day. From brainstorming fresh ideas to building sleek prototypes, your design skills will help us inspire the next digital generation.",
    aboutRole:
      "At YPD, we're building digital experiences that connect with the youth pulse. As a UI/UX Designer, you'll shape intuitive, engaging, and modern interfaces that inspire millions. You'll bring creativity, structure, and empathy to every design decision.",
    responsibilities: [
      "You'll get to Design wireframes, interactive prototypes, and polished UI mockups.",
      "Co-create with developers and marketers to bring ideas to life.",
      "You'll collaborate on Ensure seamless user experience with usability testing and feedback loops.",
      "Maintain and evolve YPD's design system for consistency and efficiency.",
    ],
    whyYPD:
      "YPD (Youth Pulse Digital™) blends creativity, iconoclastic thinking, and a youth-first mindset. We build digital experiences that resonate, inspire, and drive the future.",
    mustHave: [
      "Portfolio showcasing UI/UX work with strong visual storytelling.",
      "Proficiency in Figma, Adobe XD, or Sketch.",
      "Solid understanding of interaction design, typography, and color theory.",
    ],
    niceToHave: [
      "Basic animation or motion design skills.",
      "Familiarity with front-end basics like HTML/CSS.",
      "Previous experience building or maintaining design systems.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Work from where you feel the most inspired. Whether it's remote, hybrid, or on-site, we give you the freedom to balance life and work seamlessly.",
      },
      {
        title: "Learning & Growth Budget",
        description:
          "Access to company-sponsored courses, mentorships, and workshops that fuel your skills and creativity.",
      },
      {
        title: "Creative Freedom",
        description:
          "Your ideas won't just sit in a notebook. We encourage experimentation, bold thinking, and turning vision into reality.",
      },
      {
        title: "Fun Culture & Team Bonding",
        description:
          "From casual Fridays to team retreats and virtual hangouts we make sure work feels engaging – not exhausting.",
      },
      {
        title: "Impactful Work",
        description:
          "You'll be shaping digital experiences that reach and inspire youth globally. Real work that makes a difference.",
      },
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "India, Mumbai",
    flexibility: "Remote",
    role: "Developer",
    slug: "frontend-developer",
    salary: "70k – 85k / Year",
    experience: "3 years",
    jobType: "Full Time",
    postedDate: "Posted 3 days ago",
    tags: ["Developer", "React", "JavaScript", "Frontend", "TypeScript"],
    description:
      "Join our development team as a Frontend Developer and build cutting-edge web applications that engage youth worldwide. You'll work with modern technologies and contribute to products that reach millions of users daily.",
    aboutRole:
      "As a Frontend Developer at YPD, you'll be responsible for creating responsive, performant, and accessible web applications. You'll collaborate closely with designers and backend developers to deliver exceptional user experiences that resonate with our young audience.",
    responsibilities: [
      "Develop and maintain responsive web applications using React and TypeScript.",
      "Collaborate with UI/UX designers to implement pixel-perfect designs.",
      "Optimize applications for maximum speed and scalability.",
      "Write clean, maintainable code with comprehensive test coverage.",
      "Participate in code reviews and mentor junior developers.",
    ],
    whyYPD:
      "YPD (Youth Pulse Digital™) blends creativity, iconoclastic thinking, and a youth-first mindset. We build digital experiences that resonate, inspire, and drive the future.",
    mustHave: [
      "Strong proficiency in React, JavaScript, and TypeScript.",
      "Experience with modern CSS frameworks and preprocessors.",
      "Knowledge of state management libraries (Redux, Zustand).",
      "Understanding of RESTful APIs and GraphQL.",
    ],
    niceToHave: [
      "Experience with Next.js or other React frameworks.",
      "Knowledge of testing frameworks (Jest, React Testing Library).",
      "Familiarity with CI/CD pipelines and deployment processes.",
      "Understanding of accessibility standards (WCAG).",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Work from where you feel the most inspired. Whether it's remote, hybrid, or on-site, we give you the freedom to balance life and work seamlessly.",
      },
      {
        title: "Learning & Growth Budget",
        description:
          "Access to company-sponsored courses, mentorships, and workshops that fuel your skills and creativity.",
      },
      {
        title: "Tech Stack Freedom",
        description:
          "Work with cutting-edge technologies and have a say in the tools and frameworks we use for our projects.",
      },
      {
        title: "Fun Culture & Team Bonding",
        description:
          "From casual Fridays to team retreats and virtual hangouts we make sure work feels engaging – not exhausting.",
      },
      {
        title: "Impactful Work",
        description:
          "Your code will power platforms that reach and inspire youth globally. Build something that truly makes a difference.",
      },
    ],
  },
  {
    id: 3,
    title: "Content Marketing Specialist",
    location: "India, Delhi",
    flexibility: "Hybrid",
    role: "Marketing",
    slug: "content-marketing-specialist",
    salary: "45k – 55k / Year",
    experience: "1-2 years",
    jobType: "Full Time",
    postedDate: "Posted 1 week ago",
    tags: ["Marketing", "Content Creation", "Social Media", "SEO", "Copywriting"],
    description:
      "Drive YPD's content strategy and create compelling narratives that resonate with Gen Z and millennials. You'll craft stories, manage social campaigns, and help build our brand voice across multiple digital platforms.",
    aboutRole:
      "As a Content Marketing Specialist at YPD, you'll be the voice behind our brand. You'll create engaging content across various channels, develop marketing campaigns, and help us connect authentically with young audiences through storytelling.",
    responsibilities: [
      "Create engaging content for social media, blogs, and marketing campaigns.",
      "Develop and execute content calendars across multiple platforms.",
      "Collaborate with design and product teams to create cohesive campaigns.",
      "Analyze content performance and optimize based on data insights.",
      "Stay updated with trending topics and youth culture to inform content strategy.",
    ],
    whyYPD:
      "YPD (Youth Pulse Digital™) blends creativity, iconoclastic thinking, and a youth-first mindset. We build digital experiences that resonate, inspire, and drive the future.",
    mustHave: [
      "Strong writing and storytelling skills with a portfolio of content work.",
      "Understanding of social media platforms and their best practices.",
      "Basic knowledge of SEO and content optimization.",
      "Experience with content management systems and social media tools.",
    ],
    niceToHave: [
      "Experience with video content creation and editing.",
      "Knowledge of influencer marketing and brand partnerships.",
      "Familiarity with analytics tools (Google Analytics, social insights).",
      "Understanding of paid social media advertising.",
    ],
    perks: [
      {
        title: "Flexible Work Culture",
        description:
          "Work from where you feel the most inspired. Whether it's remote, hybrid, or on-site, we give you the freedom to balance life and work seamlessly.",
      },
      {
        title: "Learning & Growth Budget",
        description:
          "Access to company-sponsored courses, mentorships, and workshops that fuel your skills and creativity.",
      },
      {
        title: "Creative Freedom",
        description:
          "Your ideas won't just sit in a notebook. We encourage experimentation, bold thinking, and turning vision into reality.",
      },
      {
        title: "Industry Networking",
        description:
          "Connect with influencers, content creators, and marketing professionals through our extensive network and events.",
      },
      {
        title: "Impactful Work",
        description:
          "Create content that shapes conversations and influences youth culture on a global scale.",
      },
    ],
  },
];
