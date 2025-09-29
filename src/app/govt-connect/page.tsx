import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/govt-connect/GetStartedModalTrigger";
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
const govtSteps = [
  {
    id: 1,
    title: "Why Govt Connect?",
    description: [
      "Government programs often follow one-size-fits-all models, lack personalization, and struggle to deliver measurable outcomes.",
      "Govt Connect uses AI + human mentorship to create personalized journeys, emphasize critical thinking.",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "What YPD Offers Govt Partners",
    description: [
      "Tailored employability & entrepreneurship modules aligned with government schemes.",
      "AI-driven gap analysis and personalized training.",
      "Scalable mentorship and access to Industry Expert & Mentor Connect.",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Who Can Join?",
    description: [
      "Government departments and skill development missions.",
      "State- and district-level training agencies.",
      "Public-private partnerships and NGOs funded by government skilling budgets.",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Why Partner with YPD?",
    description: [
      "Ensure funds translate into real outcomes for candidates.",
      "Deliver localized, effective, and scalable training.",
      "Reach Tier 2–4 learners and build a future-ready workforce aligned with India’s growth.",
    ],
    icon: "/careerverse/s4.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Partner with YPD to Deliver Effective Government Skilling Programs"
        subheading="Design and implement outcome-focused training, leverage AI-driven insights, and provide mentorship to ensure measurable impact and future-ready beneficiaries across regions."
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
        heading="Empowering Government Programs with Outcome-Driven Training"
        subheading="YPD Govt Connect helps government bodies deliver personalized, scalable, and accountable skilling initiatives for students, jobseekers, and micro-entrepreneurs using AI-supported tools and mentorship."
        steps={govtSteps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 17 L 1.7 54 Q 2 56 4 56 L 63 56 Q 65 56 65 58 L 65 83"
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
