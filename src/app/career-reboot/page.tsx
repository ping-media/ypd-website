// import CrCards from "@/components/career-reboot/CrCards";
import CrSteps from "@/components/career-reboot/CrSteps";
// import Vs from "@/components/career-reboot/Vs";
import CvpCta from "@/components/cvp/CvpCta";
import CvpFeedback from "@/components/cvp/CvpFeedback";
import CvpHero from "@/components/cvp/CvpHero";
import CvpImpact from "@/components/cvp/CvpImpact";
// import CvpInside from "@/components/cvp/CvpInside";
import CvpJourney from "@/components/cvp/CvpJourney";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpRealworld from "@/components/cvp/CvpRealworld";
import CvpSecurity from "@/components/cvp/CvpSecurity";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
// import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";
import CvpSteps from "@/components/other/steps/CvpSteps";
import { Zap, ArrowRight, UserPlus } from "lucide-react";
// import {
//   Lightbulb,
//   Compass,
//   File,
//   Venus,
//   PersonStanding,
//   GraduationCap,
// } from "lucide-react";
// import { FileText } from "lucide-react";
import { pricingData } from "@/components/pricing/prices";

// const insideData = [
//   {
//     icon: FileText,
//     title: "Workplace Scenarios",
//     description: "Late reporting, difficult boss, SOP issues",
//   },
//   {
//     icon: Lightbulb,
//     title: "Customer Handling",
//     description: "Angry client, refund call, shop delay",
//   },
//   {
//     icon: Compass,
//     title: "Emotional Capsules",
//     description: "Burnout, confidence, work-life balance",
//   },
//   {
//     icon: File,
//     title: "Digital Capsules",
//     description: "Google tools, email, time tracking",
//   },
//   {
//     icon: Venus,
//     title: "Women-Specific ",
//     description: "Gaps, family bias, restart fears",
//   },
//   {
//     icon: PersonStanding,
//     title: "Freelancer Focus",
//     description: "Payment delays, negotiation, self-pitching",
//   },
// ];
const steps = [
  {
    id: 1,
    title: "Scenario Capsules",
    description:
      "Real-world simulations: customer calls, team tasks, shop floor issues, delivery challenges",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Skill Unlocking",
    description: "Emotional Handling, Digital Readiness, Workplace Skills",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Progress Dashboard",
    description: "Track growth, unlock new capsules, build soft skills",
    icon: "/careerverse/s3.svg",
  },
];
// const crData = [
//   {
//     icon: FileText,
//     title: "18+ Role Clusters",
//     description:
//       "Master diverse job skills through realistic, scenario-based training capsules.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Emotional Scenarios",
//     description: "Practice handling workplace emotions with guided Scenarios",
//   },
//   {
//     icon: Compass,
//     title: "Track via Progress Tracker",
//     description: "See real-time skill progress and completion milestones.",
//   },
//   {
//     icon: File,
//     title: "Get Completion Certificate (Lite & Pro only)",
//     description:
//       "Earn a shareable certificate after finishing all assigned capsules.",
//   },
//   {
//     icon: GraduationCap,
//     title: "AI Reflection + Journal (Pro only)",
//     description: "Receive AI Feedback and maintain a personal growth journal.",
//   },
// ];

const audience = [
  {
    id: 1,
    title: "Mid-Career Professionals",
    description:
      "Stuck in the same role for years? We help you reimagine your path with targeted upskilling and industry-ready strategies.",
    icon: "/cvplite/r1.svg",
    image: "/career-reboot/1.png",
  },
  {
    id: 2,
    title: "Early-Career Professionals Seeking Change",
    description:
      "In your first 3–5 years of work and feeling the fit isn’t right? We guide you to roles that align with your strengths and ambitions.",
    icon: "/cvplite/r2.svg",
    image: "/career-reboot/2.png",
  },
  {
    id: 3,
    title: "Professionals Returning After a Break",
    description:
      "Re-enter the workforce with updated skills, renewed confidence, and a clear market re-entry plan.",
    icon: "/cvplite/r3.svg",
    image: "/career-reboot/3.png",
  },
  {
    id: 4,
    title: "Freelancers & Gig Workers",
    description:
      "Expand your service offerings, pivot to high-demand areas, and build long-term stability.",
    icon: "/cvplite/r5.svg",
    image: "/career-reboot/4.png",
  },
  {
    id: 5,
    title: "Field & Support Staff",
    description:
      "Move into supervisory, client-facing, or technical roles with a structured skill growth roadmap.",
    icon: "/cvplite/r4.svg",
    image: "/career-reboot/5.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "20+ years of combined experience in career transitions, upskilling, and industry placements.",
  },
  {
    id: "02",
    text: "AI-powered guidance mapped to live job market trends and skill demand.",
  },
  {
    id: "03",
    text: "Actionable feedback. Practical roadmaps. Measurable results.",
  },
];
const useCases = [
  {
    id: 1,
    title: " Career Direction Unclear",
    quote: `“I’m not sure where my current skills fit in today’s market.”`,
    description:
      "Reboot Navigator gives a skill-to-role cluster specific skills in your identified industries and guides you through real scenario based learning.",
    icon: "/cvplite/r1.svg",
    image: "/career-reboot/r1.jpg",
  },
  {
    id: 2,
    title: "Skill Gaps Blocking Progress",
    quote: `“I keep getting interviews but never the offer.”`,
    description:
      "The Career Navigator delivers targeted capsules — from industry tools to workplace communication — ensuring you close the exact gaps holding you back.",
    icon: "/cvplite/r2.svg",
    image: "/career-reboot/r2.jpg",
  },
  {
    id: 3,
    title: "Industry in Decline",
    quote: `“My sector is shrinking, I need a future-proof path.”`,
    description:
      "AI-powered market mapping, emerging sectors and growing niches, along with bridge skills to help you transition without starting over.",
    icon: "/cvplite/r3.svg",
    image: "/career-reboot/r3.jpg",
  },
  {
    id: 4,
    title: "Confidence Rebuild Needed",
    quote: `“After a break, I don’t know if I’m still competitive.”`,
    description:
      "The Career Navigator simulations with mentor feedback restores confidence and sharpen decision-making for high-stakes workplace scenarios.",
    icon: "/cvplite/r4.svg",
    image: "/career-reboot/r4.jpg",
  },
];
const numbersteps = [
  {
    id: 1,
    title: "Select Free / Lite / Pro",
    description:
      "Pick your subscription and unlock matching features for your career reboot journey.",
  },
  {
    id: 2,
    title: "Choose your Job Role Cluster",
    description:
      "Select an Role Cluster to access sector-specific training capsules.",
  },
  {
    id: 3,
    title: "Start your Capsule Training",
    description:
      "Begin interactive, scenario-based learning with real-world skill challenges",
  },
  {
    id: 4,
    title: "Get AI Reflection + Progress Badge",
    description:
      "Receive AI feedback and earn badges as you complete skill levels.",
  },
  {
    id: 5,
    title: "Retry, Reflect & Improve",
    description:
      "Revisit weak areas, retry capsules, and strengthen your core and role skills.",
  },
];

const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Vikram Sethi",
    education: "Operations Manager, Pune",
    text: (
      <>
        &quot;I was stuck in the same role for 3 years.{" "}
        {highlight(
          "Reboot Navigator showed me employability skills and gave me a fresh understanding.",
        )}
        &quot;
      </>
    ),
    image: "/career-reboot/re1.jpg",
  },
  {
    id: 2,
    name: "Ritu Malhotra",
    education: "Teacher, Indore",
    text: (
      <>
        &quot;The structured skill tasks helped me realise my strengths beyond
        my current job.{" "}
        {highlight("Now I’m preparing for a role in digital marketing.")}&quot;
      </>
    ),
    image: "/career-reboot/re2.jpg",
  },
  {
    id: 3,
    name: "Aakash Nair",
    education: "Sales Executive, Kochi",
    text: (
      <>
        &quot;Reboot Navigator broke my career confusion into simple steps.{" "}
        {highlight("The Core skills gave me clarity on what was missing.")}
        &quot;
      </>
    ),
    image: "/career-reboot/re3.jpg",
  },
  {
    id: 4,
    name: "Shalini Verma",
    education: "HR Specialist, Noida",
    text: (
      <>
        &quot;I didn’t want random advice.{" "}
        {highlight(
          "This program gave me a 3-month action plan that felt practical and achievable.",
        )}
        &quot;
      </>
    ),
    image: "/career-reboot/re4.jpg",
  },
  {
    id: 5,
    name: "Prakash Yadav",
    education: "Accountant, Varanasi",
    text: (
      <>
        &quot;As a Tier-3 city professional, I thought options were limited.{" "}
        {highlight(
          "Reboot Navigator opened new thoughts I can pursue remotely.",
        )}
        &quot;
      </>
    ),
    image: "/career-reboot/re5.jpg",
  },
  {
    id: 6,
    name: "Farheen Khan",
    education: "Customer Service, Hyderabad",
    text: (
      <>
        &quot;The combination of reflection + AI mentor feedback gave me
        confidence{" "}
        {highlight("to shift careers without fear of starting over.")}&quot;
      </>
    ),
    image: "/career-reboot/re6.jpg",
  },
];

const crFaqs = [
  {
    question: "Is this better than generic career coaching?",
    answer:
      "Depends. If you want flexible, AI-backed, and industry-aligned guidance with actionable transition roadmaps, this is unmatched.",
  },
  {
    question: "Can I switch industries with this?",
    answer:
      "Yes. We assess transferable skills and design a realistic path for shifting to your target sector.",
  },
  {
    question: "Can I get feedback from an industry expert?",
    answer:
      "Yes. Alongside AI-driven insights, you can opt for sessions with real mentors who understand your field.",
  },
  {
    question: "Does this work on mobile?",
    answer:
      "Absolutely. Access all tools, assessments, and reports on any device, anytime.",
  },
  {
    question: "Will I get a personalized reboot plan?",
    answer:
      "Yes. You’ll receive a detailed, step-by-step transition plan tailored to your goals and timeline.",
  },
  {
    question: "Can employers view my readiness report?",
    answer: "Only if you choose to share it. The report is yours to control.",
  },
  {
    question: "Is this based on real market data?",
    answer:
      "Yes. It uses live job market insights, skill demand trends, and verified industry pathways.",
  },
  {
    question: "Is this useful if I’m already employed?",
    answer:
      "Definitely. It’s designed to help you move up, switch roles, or future-proof your career.",
  },
  {
    question: "What if I need advanced coaching after this?",
    answer:
      "We offer premium mentorship add-ons for deeper, role-specific transition guidance.",
  },
];

const page = () => {
  const crPricing = pricingData["Reboot Navigator™"];

  return (
    <>
      <CvpHero
        title="Real Skills. Real Scenarios. Real Change."
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Reboot Navigator™
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            A job-readiness mentor for India’s next-gen workforce
          </>
        }
        features={[
          "Built for 10th pass to graduates",
          "Covers 18+ job clusters office, retail, field, digital",
          "For first-job seekers, career re-starters & freelancers",
        ]}
        buttonText="Start Free"
        buttonLink="/career-reboot"
        secondaryButtonText="See How It Works"
        secondaryButtonLink="/career-reboot/#work"
        image="/career-reboot/hero.png"
        imageAlt="mission ssb"
      />
      <CvpVideo
        heading="What is Reboot Navigator?"
        subheading="See how this AI mentor prepares you for real-world work challenges."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      {/* hidden as per req */}
      {/* <CvpInside
        heading="What You’ll Learn"
        subheading="In just one structured session, you’ll explore:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      /> */}
      <CvpLiteWorks
        heading="Who is this for?"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal — it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/career-reboot"
        ctaSubtext="Hindi + Simple English  • Mobile Friendly  • Voice-guided Mentoring Coming Soon"
      />
      <CrSteps
        heading="How it Works"
        subheading="We don’t reveal the full backend flow. But here’s what makes Reboot Navigator™ unlike anything else."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpPricing
        currency="INR"
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
        plans={crPricing.plans.monthly ?? []}
        footerText="Bulk Discounts for Colleges & NGOs. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      {/*both hidden as per req */}
      {/* <CrCards
        heading="Your Progress, Your Way"
        features={crData}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      /> */}
      {/* <WhyCvpLite
        heading="Why Choose Us?"
        subheading="YPD doesn’t sell assessments. We deliver transformation."
        avoidTitle="Others Don’t"
        experienceTitle="What We Offer"
        avoid={[
          "Global/Generic Content",
          "English-Only Platforms",
          "Desktop-Based Tools",
          "Dry MCQ Learning",
        ]}
        experience={[
          "100% Indian Workplace Scenarios",
          "Tier 2–4 Friendly Language",
          "No Need for Laptop",
          "AI with Emotion + Reflection",
        ]}
        ctaText="Try Reboot Navigator™"
        ctaLink="/coming-soon"
      /> */}
      <CvpSteps
        steps={numbersteps}
        heading="How to Start"
        subheading="Reboot Navigator™ is a premium experience made affordable."
      />
      <CvpCta
        heading="Want to Partner?"
        subheading=" Built by experts. Powered by AI. Grounded in empathy."
        features={[
          "Colleges → Skill certificate integration",
          "NGOs → Free plan codes for underserved youth",
          "Employers → Hire trained candidates directly",
        ]}
        buttons={[
          {
            label: "Simulate Your Future Career ",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/career-reboot",
          },
          {
            label: "Request a Demo",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/contact",
            external: false,
          },
        ]}
      />
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Try on Mobile or Desktop</span>
          </>
        }
        subheading="Works on all browsers | No app download needed"
        ctaText="Start Your Career Reboot"
        ctaHref="/career-reboot"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <CvpJourney
        heading="Built by Career Strategists, Industry Experts, and AI Specialists"
        description="Youth Pulse Digital™ believes that career clarity is not just a goal — it’s a guided evolution."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Reboot Navigator™"
        ctaHref="/career-reboot"
        ctaIcon={<Zap size={18} />}
        footerText="Try our Reboot Navigator™ a 7-day intensive to design your next career chapter with clarity and confidence."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career reinvention isn’t guesswork — it’s structured discovery. Reboot Navigator identifies your barriers, maps your transferable skills, and guides you into roles where you can thrive."
        items={useCases}
      />
      {/*both hidden as per req */}
      {/* <WhyCvpLite
        heading="Structured Journey. One Dashboard. Full Career Comeback."
        subheading="Revive your career with clarity — not guesswork. Reboot Navigator maps skills, aligns roles, and delivers industry-specific capsules in one dashboard. Track progress, unlock adaptive learning, and re-enter with confidence"
        avoidTitle="Feature"
        experienceTitle="What Reboot Navigator Offers"
        avoid={[
          "Structured Career Reset",
          "One Unified Dashboard",
          "Targeted Skill Mapping",
          "Adaptive Learning Flow",
          "Industry-Specific Pathways",
          "Progress & Readiness Tracking",
        ]}
        experience={[
          "A guided, step-by-step roadmap to re-enter or pivot in your career, with built-in role validation and skill alignment.",
          "All progress, role maps, skill gaps, and capsule unlocks in one intuitive interface — no scattered tools or manual tracking.",
          "Identifies exact employability gaps and matches you with role-relevant skill capsules for rapid upskilling.",
          "Dynamic capsule sequencing that adjusts to your performance and professional goals.",
          "Role-to-skill pathways tailored to your chosen sector, ensuring relevance to current market demands.",
          "Real-time dashboard metrics to monitor skill mastery, role readiness, and employability score.",
        ]}
        ctaText="Try Reboot Navigator™"
        ctaLink="/coming-soon"
      /> */}
      {/* <Vs
        heading="Reboot Navigator™ vs Others"
        subheading="Because you shouldn’t plan your career comeback based on guesswork or generic advice."
        leftTitle="Feature"
        midLeftTitle="Career Coaches"
        midRightTitle="Online Platforms"
        rightTitle="Reboot Navigator™"
        leftItems={[
          "Human Mentor + AI Integration",
          "Role & Skill Gap Mapping",
          "Adaptive Career Pathways",
          "Industry-Specific Upskilling",
          "Personalized Career Reset Plan",
          "Progress Dashboard & Analytics",
          "Final Report + Continuous Access",
        ]}
        midLeftItems={[
          { label: "Yes (no AI logic)", type: "tick" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "Rarely", type: "text" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "PDF Only", type: "text" },
        ]}
        midRightItems={[
          { label: "No", type: "cross" },
          { label: "Generic", type: "text" },
          { label: "Limited", type: "text" },
          { label: "Generic", type: "text" },
          { label: "No", type: "cross" },
          { label: "Limited", type: "text" },
          { label: "PDF Only", type: "text" },
        ]}
        rightItems={[
          "Verified Experts + AI-Driven System",
          "Role-Validated + Skill Capsule Linked",
          "Dynamic, Performance-Linked Pathways",
          "Market-Aligned Skill Roadmaps",
          "Tailored Plan with Readiness Milestones",
          "Real-Time Dashboard + Employability Score",
          "Interactive Report + Ongoing Access",
        ]}
        ctaText="Try Reboot Navigator™"
        ctaLink="/get-started"
      /> */}

      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its launch, Reboot Navigator™ has guided mid-career professionals, returning workforce members, and career shifters across industries to successfully reset their career paths with clarity, confidence, and market-aligned skills—without generic advice, guesswork, or overwhelming jargon."
        stats={[
          {
            value: "91%",
            description:
              "of users said Reboot Navigator™ helped them identify realistic, high-potential career paths aligned to their skills, industry trends, and personal aspirations.",
          },
          {
            value: "87%",
            description:
              "reported feeling more confident in navigating career transitions after receiving their personalized Career Reset Plan.",
          },
          {
            value: "89%",
            description:
              "said they would recommend Reboot Navigator™ to peers facing career stagnation, redundancy, or uncertainty about industry shifts.",
          },
        ]}
        image={{
          src: "/career-reboot/gig.jpg",
          alt: "Student and parent smiling",
        }}
      />
      <CvpSecurity />
      <Faq faqs={crFaqs} imglink="/faq1.png" />
    </>
  );
};

export default page;
