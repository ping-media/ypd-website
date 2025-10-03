import CvpHero from "@/components/cvp/CvpHero";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import GetStartedModalTrigger from "@/components/govt-connect/GetStartedModalTrigger";
import Faq from "@/components/other/Faq";
import { ArrowRight } from "lucide-react";

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
      <CvpHero
        title="Partner with YPD to Deliver Effective Government Skilling Programs"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD Govt Connect
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            brings a new-age AI + Human mentorship model to government skilling
            programs. It creates hyper-personalized training journeys, focuses
            on critical thinking, problem solving, and innovation, and ensures
            successful implementation even in Tier 2–4 cities and rural belts
            using AI-powered tools to measure progress and ensure
            accountability.
          </>
        }
        features={[
          "Creates hyper-personalized training journeys for students, jobseekers, and micro-entrepreneurs",
          "Focuses on critical thinking, problem solving, and innovation, not just theory",
          "Ensures implementation success, even in Tier 2–4 cities and rural belts",
          "Uses AI-powered tools to measure progress and ensure accountability",
        ]}
        ctaComponent={<GetStartedModalTrigger />}
        secondaryButtonLink="/govt-connect#works"
        secondaryButtonText="How It Works"
        image="/connect/govt.jpg"
        imageAlt="government connect"
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
            <span className="font-bold">Join YPD Govt Connect</span>
          </>
        }
        subheading="If your organization is looking to transform skilling initiatives into measurable employability outcomes, apply now to make every rupee of training spend count."
        ctaText="Apply Now"
        ctaHref="/govt-connect#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq />
    </>
  );
};

export default page;
