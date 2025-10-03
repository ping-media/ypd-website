import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/book-demo/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";
import CvpHero from "@/components/cvp/CvpHero";

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
      <CvpHero
        title="See Learning and Upskilling Like Never Before"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Experience the YPD Difference
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            Take a closer look at how YPD transforms learning and workforce
            upskilling. Our demo sessions are designed to show you the real
            impact of our unique blend of AI-driven tools and human mentorship,
            helping your organization achieve measurable results.
          </>
        }
        features={[
          "How YPD’s AI-powered tools personalize learning journeys",
          "The role of Human + AI mentorship in improving outcomes",
          "Practical use cases for students, employees, or beneficiaries",
          "How YPD ensures real impact, not just training hours",
        ]}
        ctaComponent={<GetStartedModalTrigger label="Book Your Demo" />}
        secondaryButtonLink="/book-demo#works"
        secondaryButtonText="How It Works"
        image="/connect/demo.jpg"
        imageAlt="book a demo"
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
            <span className="font-bold">Schedule a Personalized Demo</span>
          </>
        }
        subheading="Have questions or want to learn more? Give us your query and our team will get in touch to schedule a personalized demo for you."
        ctaText="Get Started"
        ctaHref="/book-demo#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
