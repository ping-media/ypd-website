import CvpFeature from "@/components/cvp/CvpFeature";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/mentor-connect/GetStartedModalTrigger";
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
const mentorSteps = [
  {
    id: 1,
    title: "Welcome & Orientation",
    description: [
      "Join Youth Pulse Digital’s Mentor Connect program",
      "Understand the vision: AI + Human mentorship, not traditional EdTech",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Training & Tools",
    description: [
      "Get trained in AI-based mentorship & ethical AI use",
      "Access YPD’s proprietary products, frameworks & resources",
      "Receive device support (laptop/tablet) if required",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Mentorship Delivery",
    description: [
      "Work with students (Grade 5 & above) across streams",
      "Use guided mentorship journeys enriched with AI-driven tools",
      "Focus on career exploration, skill-building & confidence growth",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Engagement & Commitment",
    description: [
      "Work flexibly 12–15 hours per week",
      "Engage students through structured journeys",
      "Operate under NDA for trust & IP protection",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Impact & Growth",
    description: [
      "Earn while delivering measurable student impact",
      "Shape the future of critical thinking, problem solving & innovation",
      "Join a community of educators & industry experts",
    ],
    icon: "/careerverse/s2.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Join the Future of Mentorship with Youth Pulse Digital"
        subheading="Connect students with the right mentors, schedule sessions, track progress, and measure impact, all in one powerful platform."
        ctaComponent={<GetStartedModalTrigger />}
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="/mentor-connect#works"
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
        steps={mentorSteps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 12 L 1.7 32 Q 1.7 37 6.7 37 L 60 37 Q 65 37 65 42 L 65 65 Q 65 70 60 70 L 7 70 Q 2 70 1.7 75 L 1.7 83"
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
