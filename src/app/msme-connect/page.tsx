import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/msme-connect/GetStartedModalTrigger";
import Hero from "@/components/module/Hero";
import Faq from "@/components/other/Faq";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  FileText,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Job Posting & Tracking",
    description:
      "Publish openings quickly and track applications in real time — no lost CVs or messy email trails.",
  },
  {
    icon: Layers,
    title: "Smart Shortlisting",
    description:
      "Evaluate applicants with structured criteria, ensuring only the best-fit profiles move forward.",
  },
  {
    icon: BarChart3,
    title: "Schedule & Feedback",
    description:
      "Automate interview slots, reminders, and feedback sharing to speed up decision-making.",
  },
  {
    icon: Brain,
    title: "Activity Log",
    description:
      "Every action — from posting a role to sending an offer — is tracked for full visibility and compliance.",
  },
];
const msmeSteps = [
  {
    id: 1,
    title: "Why MSME Connect?",
    description: [
      "MSMEs often struggle with fresh hires lacking workplace readiness and the need for ongoing staff upskilling.",
      "YPD MSME Connect helps you upskill employees, make fresh hires efficient and workplace-ready, foster critical thinking & problem-solving, and build a future-ready workforce.",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "What YPD Offers MSMEs",
    description: [
      "Comprehensive training in employability, adaptability, digital literacy, and workplace behavior.",
      "Onboarding programs for fresh hires, workshops on problem-solving & innovation, intrapreneurship frameworks, and AI-enabled tools for scalable, effective learning.",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Who Can Join?",
    description: [
      "Micro, small, and mid-sized enterprises in any sector",
      "MSMEs looking to make their workforce more professional and future-ready",
      "Founders and HR leaders wanting to bridge the gap between academic skills and workplace demands",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Flexible Commitment & Model",
    description: [
      "Choose programs that fit your enterprise’s size and needs",
      "Engagement hours are lightweight but high-impact",
      "Support for both online delivery and blended learning formats",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Why Partner with YPD?",
    description: [
      "Reduce time and cost spent on training fresh hires",
      "Improve productivity, responsibility, and ownership in teams",
      "Create a culture of innovation and problem-solving in your enterprise",
      "Position your business as a future-ready MSME in a changing economy",
    ],
    icon: "/careerverse/s1.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Partner with YPD to Upskill MSME Teams"
        subheading="Guide employees with practical insights, conduct training sessions, and help build critical skills, innovation, and workplace readiness for a future-ready workforce."
        ctaComponent={<GetStartedModalTrigger />}
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="/msme-connect#works"
        secondaryCtaIcon={
          <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
        }
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Decisions"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <CvpLiteSteps
        heading="Empowering MSMEs with Skilled and Future-Ready Teams"
        subheading="YPD MSME Connect equips enterprises with practical employability training, onboarding programs, and AI-supported learning tools to build a productive, innovative, and future-ready workforce."
        steps={msmeSteps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 11 L 1.7 37 Q 1.7 40 4.7 40 L 62 40 Q 65 40 65 43 L 65 69 Q 65 72 62 72 L 4.7 72 Q 1.7 72 1.7 75 L 1.7 81"
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Learn More About YPD</span>
          </>
        }
        subheading="Discover our vision, mission, and how we are reshaping mentorship by blending human expertise with AI-powered tools."
        ctaText="Explore About Us"
        ctaHref="/about"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq />
    </>
  );
};

export default page;
