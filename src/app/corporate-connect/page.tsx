import CvpHero from "@/components/cvp/CvpHero";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/corporate-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

const CorporateSteps = [
  {
    id: 1,
    title: "Why Corporate Connect?",
    description: [
      "Corporates often struggle to create lasting CSR impact.",
      "YPD Corporate Connect helps companies invest in measurable upskilling programs, turning CSR funds into career clarity, employability skills, and future-ready youth.",
    ],
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "What YPD Offers Corporates",
    description: [
      "Tailored CVP & CRP programs aligned to SDG goals and employability benchmarks",
      "Reports and dashboards showing skills gained, youth placed, and impact",
      "Delivery across Tier 2–4 regions where employability gaps are highest",
      "AI + Human mentorship for contextual, personalized learning",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Who Can Join?",
    description: [
      "Small & mid-sized corporates seeking high-ROI CSR impact",
      "Companies wanting stronger employability pipelines",
      "CSR, HR, and L&D leaders looking for measurable skill outcomes",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Commitment & Model",
    description: [
      "Flexible partnership models based on size and budgets",
      "Minimal engagement hours; YPD handles full delivery",
      "Regular impact reports and review sessions with CSR teams",
    ],
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Why Partner with YPD?",
    description: [
      "Ensure CSR funds build youth employability and empowerment",
      "Partner with a mission-driven EdTech startup leveraging AI + Human synergy",
      "Transparent reporting for audits and CSR disclosures",
      "Create a lasting legacy of future-ready youth and stronger communities",
    ],
    icon: "/careerverse/s1.svg",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Empower Youth with Corporate Connect"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Youth Pulse Digital
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            partners with corporates to create lasting CSR impact. Direct part
            of your CSR budget into measurable upskilling programs for
            underserved youth, building career clarity, employability skills,
            and future-readiness through Career Vision Program™ (CVP) and
            Career Reinvention Program™ (CRP).
          </>
        }
        features={[
          "Channel CSR budgets into real, measurable youth upskilling programs",
          "Build career clarity and employability skills for underserved youth",
          "Ensure future-readiness through Career Vision Program™ (CVP) and Career Reinvention Program™ (CRP)",
          "Create lasting social impact while aligning with corporate CSR mandates",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/corporate-connect#works"
        secondaryButtonText="How It Works"
        image="/global-navigator/hero.png"
        imageAlt="corporate connect"
      />

      <CvpLiteSteps
        heading="Building Future-Ready Institutes with AI and Mentorship"
        subheading="YPD Institute Connect empowers schools and colleges with AI-driven learning tools, teacher training, and industry mentorship to prepare students with critical future skills."
        steps={CorporateSteps}
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
            <span className="font-bold">Join Corporate Connect™</span>
          </>
        }
        subheading="If your organization is ready to invest CSR budgets meaningfully, YPD invites you to join Corporate Connect™. Apply now and transform CSR into lasting career impact."
        ctaText="Apply Now"
        ctaHref="/corporate-connect/#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
