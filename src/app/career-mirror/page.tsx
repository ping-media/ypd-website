import CvpHero from "@/components/cvp/CvpHero";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Faq from "@/components/other/Faq";
import { ArrowRight, Bell, Calendar, CreditCard, FileText } from "lucide-react";
import { pricingData } from "@/components/pricing/prices";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpSteps from "@/components/other/steps/CvpSteps";
import Modules from "@/components/module/Modules";

const cmFaqs = [
  {
    question: "Is this AI or human?",
    answer:
      "Both. YPD AI Coaches adapt and contextualize; Human Mentors validate and guide.",
  },
  {
    question: "Can I pick any role?",
    answer:
      "Yes — from government jobs in Tier2 towns to AI roles in Tier1 metros, retail careers in Tier3, or emerging services in Tier4 cities.",
  },
  {
    question: "How do I know this is accurate?",
    answer:
      "Insights come from YPD’s proprietary Indian Industry → Role mappings and human mentor validation.",
  },
  {
    question: "Is this useful if I am from a Tier3 or Tier4 town?",
    answer:
      "Absolutely. Sessions are designed to consider your local opportunities (banking, government, small business, MSMEs) and connect them to national/emerging sectors (IT, healthcare, logistics).",
  },
  {
    question: "Will mentors understand language/cultural context?",
    answer:
      "Yes. Sessions are available in English, Hindi, and Hinglish, ensuring relatable guidance across India.",
  },
  {
    question: "Can this help for government and PSU careers?",
    answer:
      "Yes. Discussions can include UPSC/SSC/PSU pathways, mapped against emerging digital governance and smart city roles.",
  },
  {
    question: "What about vocational/skill-based paths in Tier2/3 towns?",
    answer:
      "YPD sessions cover MSMEs, service industries, healthcare support, logistics, and trades—aligned to growth in local economies.",
  },
  {
    question: "When will I get the report?",
    answer: "Within 24-48 hours of your session.",
  },
  {
    question: "What if I need more?",
    answer:
      "Book another session or progress into YPD’s structured programs (CVP, CareerVerse, Aptitude Trainer, Reboot Navigator).",
  },
];
const features = [
  {
    icon: FileText,
    title: "Dual Power Guidance",
    description:
      "AI Coach + Human Mentor for contextual, adaptive & validated answers.",
  },
  {
    icon: Calendar,
    title: "Industry → Role Insights",
    description:
      "From legacy paths to emerging roles, get actionable career insights.",
  },
  {
    icon: CreditCard,
    title: "Personalized Sessions",
    description:
      "Sessions adapt to your stage, questions, and background for maximum relevance.",
  },
  {
    icon: Bell,
    title: "Speed Report",
    description:
      "Report delivered in 24 hours, ready to share or reflect upon.",
  },
];
const topicsYouCanBring = [
  {
    id: 1,
    title: "Tech & Digital",
    description: "AI Engineer, Cybersecurity Analyst, Data Scientist",
  },
  {
    id: 2,
    title: "Business",
    description: "Business Analyst, Product Manager, Strategy Consultant",
  },
  {
    id: 3,
    title: "Creative",
    description: "Film Director, Fashion Designer, Digital Content Strategist",
  },
  {
    id: 4,
    title: "Emerging",
    description:
      "Climate Risk Analyst, Renewable Energy Engineer, Quantum Specialist",
  },
  {
    id: 5,
    title: "Other Roles",
    description:
      "Additional opportunities across diverse sectors and career functions",
  },
];
const steps = [
  {
    title: "Inside Your Report",
    features: [
      "Industry Snapshot → sector → subroles → employer types",
      "Role Evolution → legacy → current → emerging",
      "Fit Analysis → strengths, risks, opportunities",
      "Learning Plan → skills, certifications, projects",
      "Hiring Compass → patterns, employer expectations, portfolios",
      "Interview Preparation → actionable tips & best practices",
      "Action List → 5–10 clear steps",
    ],
  },
  {
    title: "Connect to Bigger Journeys",
    features: [
      "CVP Lite/Advance → structured pathway mapping",
      "CareerVerse → immersive role simulations",
      "Aptitude Trainer → learn global context aptitudes",
      "Reboot Navigator → micro-entrepreneurial pathway focus",
      "Counseling Guru → guided counseling journeys India track",
      "Reinvention Guru → structured midcareer coaching",
      "Global Navigator → plan global study/work paths",
      "Mentor Guidance → personalized suggestion for best progression",
    ],
  },
];

const page = () => {
  const cmPricing = pricingData["Career Mirror™"];
  return (
    <>
      <CvpHero
        title="One session. Real clarity. Human & AI synergy."
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Career Mirror™
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            Gives Real clarity in one session. Human & AI powered mentoring for
            students and early professionals.
          </>
        }
        description={
          "Guided by highly trained YPD AI Career Coaches and validated by human mentors, eachsession gives you hypercontextualized, personalized advice—plus a report you can act on within 24 hours."
        }
        features={[
          "Students (Class 11–UG) exploring career roles",
          "Graduates & freshers comparing options and preparing for employability",
          "Early professionals planning pivots, upskilling, or sector shifts",
        ]}
        imageAlt="Career Mirror"
        buttonText="Book Pro 30 mins"
        buttonLink="/career-mirror?pro"
        secondaryButtonText="Book Premium 60 mins"
        secondaryButtonLink="/career-mirror?premium"
        image="/career-mirror/hero.jpg"
        secondaryExternal={true}
      />
      <CvpFeature
        heading="Built to Work With Your Systems"
        features={features}
      />
      <CvpSteps
        steps={topicsYouCanBring}
        heading="Explore Career Paths You Can Bring"
        subheading="From Tech to Creative, Business to Emerging roles — see the possibilities across industries and functions."
      />
      <CvpPricing
        currency="INR"
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
        plans={cmPricing.plans["one-time"] ?? []}
        footerText="Bulk Discounts for Colleges & NGOs. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <Modules
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready for Real Clarity?</span>
          </>
        }
        subheading="One session with YPD Career Mirror™ gives you hyper-contextualized guidance from AI-powered career coaches, validated by human mentors. Walk away with a personalized report and clear next steps within 24 hours."
        ctaText="Apply Now"
        ctaHref="/career-mirror"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={cmFaqs} />
    </>
  );
};

export default page;
