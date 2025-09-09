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
      "Maintain and evolve YPD’s design system for consistency and efficiency.",
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
          "Work from where you feel the most inspired. Whether it’s remote, hybrid, or on-site, we give you the freedom to balance life and work seamlessly.",
      },
      {
        title: "Learning & Growth Budget",
        description:
          "Access to company-sponsored courses, mentorships, and workshops that fuel your skills and creativity.",
      },
      {
        title: "Creative Freedom",
        description:
          "Your ideas won’t just sit in a notebook. We encourage experimentation, bold thinking, and turning vision into reality.",
      },
      {
        title: "Fun Culture & Team Bonding",
        description:
          "From casual Fridays to team retreats and virtual hangouts we make sure work feels engaging – not exhausting.",
      },
      {
        title: "Impactful Work",
        description:
          "You’ll be shaping digital experiences that reach and inspire youth globally. Real work that makes a difference.",
      },
    ],
  },
];
