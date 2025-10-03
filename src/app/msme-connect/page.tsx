import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/msme-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";
import CvpHero from "@/components/cvp/CvpHero";

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
      <CvpHero
        title="Partner with YPD to Upskill MSME Teams"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD MSME Connect
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            helps MSMEs build a future-ready workforce. From making fresh hires
            workplace-ready to upskilling existing staff, YPD MSME Connect
            focuses on critical thinking, problem-solving, and innovation
            skills, enabling teams to stay competitive and thrive in a dynamic
            market.
          </>
        }
        features={[
          "Upskill employees with employability skills beyond technical know-how",
          "Make fresh hires efficient, responsible, and workplace-ready",
          "Develop critical thinking, problem-solving, and innovation skills in teams",
          "Support MSMEs in building a sustainable, future-ready workforce",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/msme-connect#works"
        secondaryButtonText="How It Works"
        image="/connect/msme.jpg"
        imageAlt="msme connect"
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
            <span className="font-bold">Join YPD MSME Connect</span>
          </>
        }
        subheading="If your enterprise is ready to strengthen its workforce and embrace AI-enabled training, apply now to make your team future-ready."
        ctaText="Apply Now"
        ctaHref="/msme-connect#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
