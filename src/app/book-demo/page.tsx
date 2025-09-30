import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/book-demo/GetStartedModalTrigger";
import Hero from "@/components/module/Hero";
import Faq from "@/components/other/Faq";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const demoSteps = [
  {
    id: 1,
    title: "Experience YPD in Action",
    description: [
      "Before deciding, see how YPD can transform learning and upskilling for your organization.",
      "Our demo showcases AI-powered tools that personalize learning journeys and combine Human + AI mentorship to improve outcomes.",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "What You Will See",
    description: [
      "Practical use cases for students, employees, or beneficiaries.",
      "How YPD ensures real impact, not just training hours.",
      "Interactive walkthrough of modules tailored to your sector (Institute / MSME / Govt).",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Demo Session Highlights",
    description: [
      "A 30–45 minute live walkthrough of YPD’s solutions.",
      "Q&A session to address your organization’s specific needs.",
      "Tailored demo focusing on your sector and objectives.",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Why Connect with YPD?",
    description: [
      "Understand how outcome-driven learning can maximize impact for your beneficiaries.",
      "Discover the combination of AI insights and mentorship for effective skill building.",
      "Experience firsthand how YPD’s solutions make upskilling measurable and scalable.",
    ],
    icon: "/careerverse/s4.svg",
  },
];

const page = () => {
  return (
    <>
      <Hero
        heading="Request a Demo and Experience YPD’s Full Suite of Solutions Firsthand"
        subheading="Connect with our team to explore how YPD’s AI-powered tools and outcome-driven training solutions can help your organization, institute, or enterprise deliver measurable impact. Schedule a demo and see our solutions in action."
        ctaComponent={<GetStartedModalTrigger />}
        secondaryCtaLabel="How It Works"
        secondaryCtaHref="/book-demo#works"
        secondaryCtaIcon={
          <BriefcaseBusiness className="h-5 w-5 sm:h-6 sm:w-6" />
        }
      />
      <CvpLiteSteps
        heading="Request a Demo and See YPD Solutions in Action"
        subheading="Book a personalized demo to explore how YPD’s AI-powered tools and mentorship can transform learning, upskilling, and workforce readiness for your organization. Experience firsthand the impact of tailored solutions for institutes, MSMEs, and government programs."
        steps={demoSteps}
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
