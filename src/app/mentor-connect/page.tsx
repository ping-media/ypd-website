import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import Hero from "@/components/module/Hero";
import {
  // ArrowRight,
  Bell,
  BriefcaseBusiness,
  Calendar,
  CreditCard,
  FileText,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Smart Session Unlock",
    description: [
      "You register and book your session (₹1499 – ₹3999 depending on stream & depth)",
      "Session is unlocked via secure Session ID & assigned mentor",
    ],

    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Guided Profile Lock",
    description: [
      "Mentor validates your academic background, preferences & goals",
      "You upload docs: Class 10/12 marksheets, JEE/CUET scores, resume, portfolio, etc",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Role Fit & Stream Mapping",
    description: [
      "Mentor helps you confirm role goal, stream, UG/PG program preferences",
      "YPD’s AI activates the matching capsule logic behind the scenes",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Career Discovery & College Matching",
    description: [
      "You explore top colleges, entrance likelihood, budget fit, scholarship chances",
      "Get ranking comparisons, ROI analysis, safety insights, and alternate career plans",
    ],

    icon: "/careerverse/s1.svg",
  },
  {
    id: 5,
    title: "Final Report Generation",
    description: [
      "Locked stream + career role, Top 5 college shortlist",
      "Cut-offs, funding plan, skill gaps, upskilling path, Admissions checklist",
    ],

    icon: "/careerverse/s4.svg",
  },
  {
    id: 6,
    title: "Summary & Revisit Access",
    description: ["Full session summary PDF", "Access your account anytime"],
    icon: "/careerverse/s2.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Join the Future of Mentorship with Youth Pulse Digital"
        subheading="Connect students with the right mentors, schedule sessions, track progress, and measure impact, all in one powerful platform."
        ctaLabel="Get Started"
        ctaHref="/coming-soon"
        ctaIcon={<Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />}
        secondaryCtaHref="/coming-soon"
        secondaryCtaIcon={
          <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        secondaryCtaLabel="Apply Now"
      />
      <CvpLiteSteps
        heading="How it Works"
        subheading="We don’t reveal the full backend flow. But here’s what makes Counseling Guru™ unlike anything else."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 10 L 1.7 32 Q 1.7 37 6.7 37 L 60 37 Q 65 37 65 42 L 65 65 Q 65 70 60 70 L 7 70 Q 2 70 1.7 75 L 1.7 89"
      />
    </>
  );
};

export default page;
