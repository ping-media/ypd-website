import CareersContact from "@/components/careers/CareersContact";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Hero from "@/components/module/Hero";
import Modules from "@/components/module/Modules";
import Faq from "@/components/other/Faq";
import {
  ArrowRight,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  FileText,
  Layers,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Admissions & Enrollment",
    description:
      "Streamline student registration and track applications in real time — no lost forms or paperwork.",
  },
  {
    icon: Layers,
    title: "Timetable Management",
    description:
      "Organize classes, schedules, and resources efficiently to ensure smooth daily operations.",
  },
  {
    icon: BarChart3,
    title: "Exams & Performance",
    description:
      "Manage tests, assessments, and results with ease, providing instant insights on student progress.",
  },
  {
    icon: Brain,
    title: "Reports & Analytics",
    description:
      "Monitor attendance, grades, and overall school activity for full transparency and informed decisions.",
  },
];

const steps = [
  {
    title: "Student Management",
    subtitle:
      "Manage the entire student lifecycle—from enrollment to graduation—in one centralized platform.",
    features: [
      "Online student registration and profiles",
      "Attendance tracking",
      "Academic records and report cards",
      "Automated notifications for parents and students",
      "Activity logs for transparency",
    ],
    buttonText: "Explore Student Module",
    buttonLink: "/student-management",
  },
  {
    title: "Academics & Administration",
    subtitle:
      "Organize classes, schedules, exams, and school operations efficiently in one place.",
    features: [
      "Class and timetable management",
      "Exam creation, scheduling, and results",
      "Teacher and staff management",
      "Fees and resource management",
      "Reports and analytics for informed decisions",
    ],
    buttonText: "Explore Academics Module",
    buttonLink: "/academics-administration",
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
        heading="Simplify and Streamline School Management for Staff, Students, and Administrators"
        subheading="Handle admissions, academics, exams, and reports effortlessly through a single, unified system designed for modern institutions. Gain full control over daily operations, track student progress."
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
        headline="Every School Deserves Its Own Solution"
        subheading="We’ll help design a system that works perfectly for your institution."
      />
      <Faq />
    </>
  );
};

export default page;
