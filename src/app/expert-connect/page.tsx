import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/expert-connect/GetStartedModalTrigger";
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
const expertSteps = [
  {
    id: 1,
    title: "Welcome Industry Leaders",
    description: [
      "Hear directly from YPD about the vision and purpose of Industry Expert Connect",
      "Understand how your expertise helps bridge the employability gap for students",
      "Learn how to guide students with practical insights and innovation mindset",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Your Role as an Industry Expert",
    description: [
      "Dedicate a few hours per month for live sessions/webinars",
      "Share knowledge, trends, and stories from your industry",
      "Interact with students in a real, relatable, and grounded way",
      "Support learners in building critical thinking, problem solving & innovation skills",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Training & Support from YPD",
    description: [
      "Receive training & orientation in AI-supported delivery and student engagement",
      "Get access to YPD’s digital tools & platforms for seamless session delivery",
      "Guidance in structuring your session for maximum student impact",
      "Fair remuneration for each session delivered",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Flexible Commitment",
    description: [
      "Contribute 2–4 hours per month for structured webinars or guest sessions",
      "Sessions are virtual-first — participate from anywhere",
      "Focus on impact over hours; your lived expertise benefits students most",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Why Join Expert Connect?",
    description: [
      "Make a real difference for aspiring candidates at the grassroots level",
      "Influence the next generation’s career choices with practical insights",
      "Be part of a pioneering education movement blending industry and AI-powered learning",
      "Gain recognition as a thought leader shaping India’s future workforce",
    ],
    icon: "/careerverse/s1.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Become an Industry Expert with Youth Pulse Digital"
        subheading="Share your real-world experience, guide students across grades 9–PG, conduct live sessions/webinars, and shape the next generation’s skills, mindset, and career choices."
        ctaComponent={<GetStartedModalTrigger />}
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="/expert-connect#works"
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
        heading="Empower the Next Generation with Your Expertise"
        subheading="Collaborate with Youth Pulse Digital to guide students through hyper-personalized journeys that blend your expertise with AI innovation."
        steps={expertSteps}
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
