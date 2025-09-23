import CareersContact from "@/components/careers/CareersContact";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Hero from "@/components/module/Hero";
import Modules from "@/components/module/Modules";
import Faq from "@/components/other/Faq";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Calendar,
  CreditCard,
  FileText,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Unified Admissions",
    description:
      "Manage inquiries, applications, and enrollments in one seamless flow.",
  },
  {
    icon: Calendar,
    title: "Smart Testing",
    description:
      "Automate exam scheduling, conduct assessments, and publish results instantly.",
  },
  {
    icon: CreditCard,
    title: "Integrated Fee Management",
    description:
      "Simplify payments with invoicing, tracking, and secure online transactions.",
  },
  {
    icon: Bell,
    title: "Reports & Notifications",
    description:
      "Generate detailed reports and send real-time updates to students, parents, and staff.",
  },
];

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
        heading="End-to-End Admissions and Testing, All in One Place"
        subheading="Simplify applications, manage assessments, track fees, and keep every student, parent, and staff member connected through one integrated platform."
        ctaLabel="Apply for Admission Module"
        ctaHref="/coming-soon"
        ctaIcon={<Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />}
        secondaryCtaHref="/coming-soon"
        secondaryCtaIcon={
          <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        secondaryCtaLabel="Apply for Hiring Module"
      />

      <CvpFeature
        heading="Key Features That Empower Your Career Decisions"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
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
        ctaText="Inquire For Any Module"
        ctaHref="/coming-soon"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <CareersContact
        headline="Still Searching for the Right Exam?"
        subheading="Tell us your goal, we’ll guide you to the most relevant resources for your journey."
      />
      <Faq />
    </>
  );
};

export default page;
