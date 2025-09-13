import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Hero from "@/components/module/Hero";
import Modules from "@/components/module/Modules";
import Faq from "@/components/other/Faq";
import { ArrowRight, BriefcaseBusiness, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Admission & Test Module",
    subtitle:
      "From applications to assessments, manage the entire student journey in one place.",
    features: [
      "Admission Module",
      "Online application management",
      "Smart test scheduling & results",
      "Fees Management",
      "Activity Log",
      "Automated notifications & reports",
    ],
    buttonText: "Inquire Now",
    buttonLink: "/coming-soon",
  },
  {
    title: "Hiring Module",
    subtitle:
      "Recruit smarter with streamlined workflows that bring the best talent to your organization.",
    features: [
      "Job posting & application tracking",
      "Candidate evaluation & shortlisting",
      "Interview scheduling & feedback",
      "Activity Log",
      "User Management",
    ],
    buttonText: "Inquire Now",
    buttonLink: "/coming-soon",
  },
];
const audience = [
  {
    id: 1,
    title: "Speed up your workflows",
    description:
      "Automate routine tasks and save hours every week, so you can focus on what really matters.",
    icon: "/cvplite/r1.svg",
    image: "/module/1.png",
  },
  {
    id: 2,
    title: "Secure & reliable system",
    description:
      "Your data is protected with enterprise-grade security and uptime you can always count on.",
    icon: "/cvplite/r2.svg",
    image: "/module/2.png",
  },
  {
    id: 3,
    title: "Scalable for your needs",
    description:
      "Whether you’re starting small or expanding globally, our modules grow with your organization.",
    icon: "/cvplite/r3.svg",
    image: "/module/3.png",
  },
];
const page = () => {
  return (
    <>
      <Hero
        heading="Powerful Modules to Simplify Your Workflows"
        subheading="Choose the right tool for your needs whether it’s managing admissions & tests or streamlining hiring. Get started today."
        ctaLabel="Apply for Admission Module"
        ctaHref="/coming-soon"
        ctaIcon={<Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />}
        secondaryCtaHref="/coming-soon"
        secondaryCtaIcon={
          <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        secondaryCtaLabel="Apply for Hiring Module"
      />
      <Modules
        heading="How it Works"
        subheading="The UPSC Mentor™ is a structured, AI-powered preparation journey covering Prelims, Mains, and Interview stages. It blends syllabus mastery, real-time performance analytics, and role-based personality readiness to help aspirants approach the exam with precision, clarity, and officer-like confidence. Here’s a glimpse of your guided experience:"
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpLiteWorks
        heading="Built for Growth, Designed for Ease"
        subheading="Our modules combine simplicity and power helping you focus on results, not manual work."
        audience={audience}
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Get Started?</span>
          </>
        }
        subheading="Select the module that fits your needs and apply today. Our team will guide you through setup."
        ctaText="Enquire For Any Module"
        ctaHref="/coming-soon"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq />
    </>
  );
};

export default page;
