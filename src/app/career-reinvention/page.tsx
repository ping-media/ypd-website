import Hero from "@/components/career-reinvention/Hero";
import CvpVideo from "@/components/cvp/CvpVideo";
import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";

const crpFaqs = [
  {
    question: "What is the Career Reinvention Program™?",
    answer:
      "It’s YPD’s guided suite that helps fresh graduates, and professionals start or rebuild their careers using Aptitude Trainer, Reboot Navigator, and Reinvention Guru.",
  },
  {
    question: "Who should use the Career Reinvention Program™?",
    answer:
      "Freshers, anyone facing job loss, career stagnation, toxic workplaces, or planning a restart after a break.",
  },
  {
    question: "What is the Aptitude Trainer?",
    answer:
      "A self-serve system to build essential aptitudes, reflection skills, and decision-making strength.",
  },
  {
    question: "What is the Reboot Navigator?",
    answer:
      "An AI mentor that uses industry capsules, reflection tasks, and scenario coaching to help you manage bias, stress, or stuck roles.",
  },
  {
    question: "What is the Reinvention Guru?",
    answer:
      "A structured re-entry and transition mentor for professionals seeking new confidence, upskilling, or career shifts.",
  },
  {
    question: "How is this different from coaching classes or workshops?",
    answer:
      "Unlike generic sessions, YPD CRP gives you personalized, adaptive, AI-guided tasks with real-world context, not just theory.",
  },
  {
    question: "How long does the journey take?",
    answer: "From 2 weeks to 3 months, depending on the track chosen.",
  },
  {
    question: "Do I get a report or feedback?",
    answer: "Yes. Every journey gives you a structured outcome & summaries.",
  },
  {
    question: "Can mid-career professionals also join?",
    answer:
      "Yes. CRP is designed to help both early and mid-career professionals adapt, restart, and grow.",
  },
  {
    question: "Is it available in India-first context?",
    answer:
      "Yes. All modules are designed for Indian learners, workplaces, and cultural realities, but globally relevant too.",
  },
];

const page = () => {
  return (
    <>
      <Hero />
      {/*  */}
      {/* SECTION TO ADD (CRP SECTION) */}
      {/*  */}
      <CvpVideo
        heading="Step Into the Career Reinvention Program™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your strengths, map career paths, and make smarter choices."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <WhyCvpLite
        heading="Why Career Reinvention Matters More Than Ever"
        subheading="From career roadblocks to breakthrough opportunities here’s how YPD helps you turn setbacks into a fresh start."
        avoidTitle=" The Real Struggles"
        experienceTitle="How YPD CRP™ Helps"
        avoid={[
          "Placed under a PIP or worried about job loss?",
          "Stuck in same role with no growth or visibility?",
          "Restarting after a career break or family break?",
          "Working in toxic workplaces or unfair bias?",
          "Feeling lost, undervalued, or directionless?",
          "Unsure how to shift industries or try freelancing?",
        ]}
        experience={[
          "Aptitude Trainer → Builds required aptitudes with guided practice.",
          "Reboot Navigator → AI Mentor with industry-specific capsules & real-like scenario coaching.",
          "Reinvention Guru → Tailored restart strategies, confidence coaching, structured re-entry plan.",
          "Reboot Navigator → Reflective tasks + Role Specific mapped skills for better situation handling.",
          "Aptitude Trainer + Guru → Mindset Coaching + Scenario   playbooks for clarity.",
          "Navigator + Guru → Coaches for Core Skills, Role   Cluster Skills, real scenario training.",
        ]}
        ctaText="Try the Career Verse™"
        ctaLink="/#"
      />
      <Faq faqs={crpFaqs} />
    </>
  );
};

export default page;
