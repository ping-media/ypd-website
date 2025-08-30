import CrpBenefit from "@/components/career-reinvention/crpBenefit";
import Hero from "@/components/career-reinvention/Hero";
import UserSay from "@/components/careerPath/UserSay";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
  {
    id: 2,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c2.png",
  },
  {
    id: 3,
    name: "Courtney Henry",
    text: "The Team Truly Understood My Financial Goals As An Expat. Their Personalized Advice Made Me Feel Confident And Secure About My Future.",
    image: "/about/c1.png",
  },
];
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
      {/*  */}
      {/* SECTION TO ADD (YOUR COMPLETE CR SUITE) */}
      {/*  */}

      <CrpBenefit />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Reinvent?</span>
          </>
        }
        subheading="Let’s start your real journey back to the career you deserve. Powered by Youth Pulse Digital™. Personalized. Practical. Proven."
        ctaText="Enquire Now"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <UserSay
        title="WHAT USERS ACROSS INDIA SAY ABOUT YPD"
        reviews={reviews}
      />
      <Faq faqs={crpFaqs} />
    </>
  );
};

export default page;
