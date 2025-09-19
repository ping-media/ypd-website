// import Vs from "@/components/career-reboot/Vs";
// import CvpCta from "@/components/cvp/CvpCta";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpFeedback from "@/components/cvp/CvpFeedback";
import CvpHero from "@/components/cvp/CvpHero";
// import CvpInside from "@/components/cvp/CvpInside";
import CvpJourney from "@/components/cvp/CvpJourney";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpRealworld from "@/components/cvp/CvpRealworld";
import CvpSecurity from "@/components/cvp/CvpSecurity";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";
import { pricingData } from "@/components/pricing/prices";
import { Zap, ArrowRight } from "lucide-react";
// import {
//   Lightbulb,
//   Compass,
//   File,
//   UserPlus,
//   ShieldPlus,
//   Cable,
//   Blocks,
// } from "lucide-react";
import { FileText, Layers, BarChart3, Brain } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Precise Aptitude Mapping",
    description:
      "Identify your real strengths through a structured, role-linked aptitude framework — measuring thinking style, problem-solving, communication, and adaptability in one seamless journey.",
  },
  {
    icon: Layers,
    title: "Adaptive Pathway Guidance",
    description:
      "Every professional’s path is unique. The CRP Aptitude Trainer™ adjusts to your career stage, role interests, and learning style without forcing a standard template.",
  },
  {
    icon: BarChart3,
    title: "Actionable Role Insights",
    description:
      "No fluff, no waiting. Get a mapped list of suitable roles, skill gaps, and certification recommendations the moment your session ends — practical and decision-ready.",
  },
  {
    icon: Brain,
    title: "True AI + Real Frameworks",
    description:
      "Not a chatbot quiz. Powered by proven aptitude models, role-fit logic, and industry data — so your guidance is grounded in facts, not scraped lists or generic advice.",
  },
];
// const insideData = [
//   {
//     icon: Brain,
//     title: "Decision-Making",
//     description: "based on academics, boards, test scores",
//   },
//   {
//     icon: Lightbulb,
//     title: "Process Thinking",
//     description: "AI-suggested with real rankings",
//   },
//   {
//     icon: Compass,
//     title: "Influence & Collaboration",
//     description: "Shortlisted by intake, test fit, and cost",
//   },
//   {
//     icon: File,
//     title: "Ownership & Accountability",
//     description: "SOP, LOR, deadlines, portals",
//   },
//   {
//     icon: Blocks,
//     title: "Learning Agility",
//     description: "Visual comparison by region",
//   },
//   {
//     icon: Cable,
//     title: "Adaptability & Change",
//     description: "Merit, need-based, and external funding",
//   },
//   {
//     icon: ShieldPlus,
//     title: "Conflict Handling",
//     description: "Safety, weather, diaspora, support",
//   },
//   {
//     icon: Lightbulb,
//     title: "Ethical Thinking",
//     description: "Internships",
//   },
// ];
const steps = [
  {
    id: 1,
    title: "Select your focus area",
    description:
      "Choose whether you want to strengthen problem-solving, communication, decision-making, leadership, or customer-facing aptitudes.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Get targeted tasks",
    description:
      "Receive curated challenges and micro-scenarios mapped to real workplace contexts, aligned with your chosen focus.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Build aptitudes step by step",
    description:
      "Engage in scenario-based exercises — from logic puzzles to role-simulations — designed to sharpen your specific aptitude.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Practice, reflect, and retry",
    description:
      "Review your performance, reflect on your responses, and retry with adaptive variations until you gain mastery.",
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Receive a personalized aptitude map",
    description:
      "Get a structured summary highlighting your aptitudes, growth areas",
    icon: "/careerverse/s3.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Students building foundational skills",
    description:
      "Gain clarity on your strengths in problem-solving, reasoning, and decision-making to prepare for higher studies and careers.",
    icon: "/cvplite/r1.svg",
    image: "/crp-aptitude/1.png",
  },
  {
    id: 2,
    title: "Early professionals shaping careers",
    description:
      "Discover your core aptitudes, match them with workplace roles, and develop confidence in communication and adaptability.",
    icon: "/cvplite/r2.svg",
    image: "/crp-aptitude/2.png",
  },
  {
    id: 3,
    title: "People returning to work after a breaks",
    description:
      "Rebuild confidence with structured aptitude sessions that highlight transferable skills and identify new opportunities.",
    icon: "/cvplite/r3.svg",
    image: "/crp-aptitude/3.png",
  },
  {
    id: 4,
    title: "Team leaders and aspiring managers",
    description:
      "Strengthen leadership, critical thinking, and people skills with targeted aptitude exercises tailored to professional growth.",
    icon: "/cvplite/r5.svg",
    image: "/crp-aptitude/4.png",
  },
  {
    id: 5,
    title: " Anyone seeking role clarity and growth",
    description:
      "Use Aptitude Trainer™ to go beyond certifications — uncover what truly drives you and align it with future-ready roles.",
    icon: "/cvplite/r4.svg",
    image: "/crp-aptitude/5.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "20+ years of combined psychometric testing & workplace skill research",
  },
  {
    id: "02",
    text: "AI that adapts to your aptitude profile, powered by industry-leading frameworks",
  },
  {
    id: "03",
    text: "Real-world skill mapping, targeted improvement plans, measurable growth",
  },
];
const useCases = [
  {
    id: 1,
    title: "Real-world practice, not theory",
    description:
      "Aptitude Trainer™ gave me workplace-style challenges — from problem-solving cases to communication drills. It felt real, not abstract.",
    icon: "/cvplite/r1.svg",
    image: "/crp-aptitude/r1.png",
  },
  {
    id: 2,
    title: "Contextualized for Indian professionals",
    description:
      "It connected my strengths to roles actually growing in India, not just generic profiles. I could see clear job relevance.",
    icon: "/cvplite/r2.svg",
    image: "/crp-aptitude/r2.png",
  },
  {
    id: 3,
    title: "Adaptive tasks with retry & reflection",
    description:
      "When I struggled, it didn’t fail me. It nudged me to reflect and retry, so I improved with every step.",
    icon: "/cvplite/r3.svg",
    image: "/crp-aptitude/r3.png",
  },
  {
    id: 4,
    title: "Aptitude map with growth clarity",
    description: "The final report showed my strengths, blind spots.",
    icon: "/cvplite/r4.svg",
    image: "/crp-aptitude/r4.png",
  },
];

const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Rishabh Mehta",
    education: "Final Year B.Com, Nagpur",
    text: (
      <>
        &quot;I never thought skill training could be this personal.
        {highlight(
          " The AI Mentor made me see why I solve problems the way I do.",
        )}{" "}
        Now I’m building my strengths for a Product Management role!&quot;
      </>
    ),
    image: "/crp-aptitude/re1.jpg",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    education: "Patna",
    text: (
      <>
        &quot;I’ve tried online courses before but nothing matched this
        real-time feedback.
        {highlight(
          " It’s like having a mentor who tracks my growth and keeps me on track every day.",
        )}
        &quot;
      </>
    ),
    image: "/crp-aptitude/re2.jpg",
  },
  {
    id: 3,
    name: "Priyanka Joshi",
    education: "Parent, Nashik",
    text: (
      <>
        &quot;Aptitude Trainer™ showed my daughter exactly where she needed to
        improve.
        {highlight(" Her confidence in interviews has grown in just a month.")}
        &quot;
      </>
    ),
    image: "/crp-aptitude/re3.jpg",
  },
  {
    id: 4,
    name: "Aditi Verma",
    education: "MBA Student, Pune",
    text: (
      <>
        &quot;The sessions felt like a personal coach was guiding me.
        {highlight(
          " I now know which roles suit my strengths and where I need to sharpen my skills.",
        )}
        &quot;
      </>
    ),
    image: "/crp-aptitude/re4.jpg",
  },
  {
    id: 5,
    name: "Sandeep Rao",
    education: "B.Tech Final Year, Hyderabad",
    text: (
      <>
        &quot;In just two weeks, the trainer helped me move from vague career
        ideas to a clear action plan.
        {highlight(" I’ve already started applying for targeted internships.")}
        &quot;
      </>
    ),
    image: "/crp-aptitude/re5.jpg",
  },
  {
    id: 6,
    name: "Neha Singh",
    education: "Job Seeker, Delhi",
    text: (
      <>
        &quot;The AI didn’t just test me — it explained every result and how to
        improve.
        {highlight(
          " I feel more prepared for both corporate tests and real work challenges.",
        )}
        &quot;
      </>
    ),
    image: "/crp-aptitude/re6.jpg",
  },
];

const crpaptitudefaqs = [
  {
    question: "Is this just another aptitude test?",
    answer:
      "No. Aptitude Trainer™ is not a one-time test. It’s a guided practice system with real-world scenarios, reflection, and retry options.",
  },
  {
    question: "Will I get a personalized report?",
    answer:
      "Yes. At the end, you receive an aptitude map showing your strengths, blind spots, and growth pathways.",
  },
  {
    question: "Does this help in real jobs?",
    answer:
      "Absolutely. The exercises are linked to workplace skills like decision-making, leadership, and communication — not abstract puzzles.",
  },
  {
    question: "Can working professionals use it too?",
    answer:
      "Yes. Whether you’re a student, mid-career, or returning professional, the tool adapts tasks to your context.",
  },
  {
    question: "What if I struggle in some tasks?",
    answer:
      "That’s part of the design. You can reflect, retry, and improve until you build confidence.",
  },
  {
    question: "Is this research-backed?",
    answer:
      "Yes. It’s built on YPD’s validated aptitude frameworks, aligned with employability skills and role-readiness.",
  },
  {
    question: "Can parents or mentors view my results?",
    answer:
      "If you choose, your report can be shared with parents or mentors for guidance discussions.",
  },
  {
    question: "What if I want deeper career direction after this?",
    answer:
      "Aptitude Trainer™ connects smoothly to other YPD programs like Reboot Navigator, Reinvention Guru, or Real Mentors & Industry Experts.",
  },
];

const page = () => {
  const aptitudePricing = pricingData["Aptitude Trainer™"];

  return (
    <>
      <CvpHero
        title="India’s First AI-Powered Career Trainer for Real-Life Success"
        subtitle={
          <>
            If you&apos;ve ever felt stuck, overlooked, or underprepared for
            career growth, this is built for you. YPD’s Career Reinvention
            Aptitude Trainer™
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD’s Career Reinvention Aptitude Trainer™
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            is a new-age training platform that goes beyond theory and delivers
            practical aptitude-building tailored to your career stage, your
            role, and your goals.
          </>
        }
        buttonText="Start Free"
        buttonLink="/coming-soon"
        secondaryButtonLink="/crp-aptitude/#video"
        secondaryButtonText="See How It Works"
        image="/career-reboot/hero.png"
        imageAlt="crp aptitude"
      />
      <CvpVideo
        heading="Step Inside the Experience of CRP Aptitude Trainer™"
        subheading="Take a quick look at how our AI-powered, step-locked journey measures your professional aptitudes, maps them to real-world roles, and guides you with skill gap advice and targeted learning plans — all adaptive, all personal, never generic."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Decisions"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <CvpLiteWorks
        heading="Who Can Use Aptitude Trainer?"
        subheading="Youth Pulse Digital™ believes that understanding your aptitudes is not just about tests — it’s about building real skills that shape your future."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      />
      {/* hidden as per req */}
      {/* <CvpInside
        heading="What You Train On"
        subheading="Developed with workplace realities in mind"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      /> */}
      <CvpLiteSteps
        heading="How It Works"
        subheading="Aptitude Trainer™ guides you step-by-step to sharpen skills, practice scenarios, and map your growth."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 12 L 1.7 32 Q 1.7 37 6.7 37 L 60 37 Q 65 37 65 42 L 65 65 Q 65 70 60 70 L 7 70 Q 2 70 1.7 75 L 1.7 83"
      />
      {/* hidden as per req */}
      {/* <CvpCta
        heading="What You'll Receive"
        subheading="Built for growth. Backed by AI. Designed for real workplace impact."
        features={[
          "Personalized Aptitude Profile",
          "Aptitude Mapping Scenario",
          "Skill-Building Task Suggestions",
          "Scenario-Based Practice Modules",
          "Progress Dashboard",
          "Session Revisit Access",
          "Final Aptitude Development Report",
          "One-on-One Mentor Feedback",
        ]}
        buttons={[
          {
            label: "Simulate Your Future Career",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/coming-soon",
          },
          {
            label: "Request a Demo",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/coming-soon",
          },
        ]}
      /> */}
      <WhyCvpLite
        heading="What Makes CRP Aptitude Trainer™ the First of Its Kind?"
        subheading="The only AI-powered aptitude system that blends workplace realities with adaptive, role-specific skill building."
        avoidTitle="Old-Style Aptitude Testing"
        experienceTitle="YPD CRP Aptitude Trainer™"
        avoid={[
          "One-time static test with generic report",
          "Only measures basic IQ or reasoning",
          "No real-world application mapping",
          "Fixed question sets, no adaptivity",
          "No guidance on skill improvement",
          "No progress tracking or re-testing",
        ]}
        experience={[
          "AI-powered & mentor-backed adaptive journey",
          "Covers 50+ workplace-relevant aptitudes",
          "Links results to real job roles & growth paths",
          "Adaptive, scenario-based simulations",
          "Actionable skill-building plan with resources",
          "Revisit, retest & track improvement anytime",
        ]}
        ctaText="Try Aptitude Trainer"
        ctaLink="/coming-soon"
      />
      <CvpJourney
        heading="Built by Industry Psychologists, Skill Experts, and AI Architects"
        description="Youth Pulse Digital™ believes that aptitude mastery is not just a score — it’s a growth journey."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Aptitude Trainer"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
      />
      {/* hidden as per req */}
      {/* <Vs
        heading="Aptitude Trainer™ Outperforms Generic Aptitude Tests"
        subheading="Because you shouldn’t train for skills using random questions or one-size-fits-all methods"
        leftTitle="Feature"
        midLeftTitle="Generic Test"
        midRightTitle="Edtech Platforms"
        rightTitle="CRP Aptitude Trainer™"
        leftItems={[
          "Neutral, role-specific skill focus",
          "Al-powered adaptive testing",
          "Indian + global workplace alignment",
          "One-time setup + lifetime access",
          "Test + Insights + Improvement Plan ",
        ]}
        midLeftItems={[
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
        ]}
        midRightItems={[
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
          { label: "No", type: "cross" },
        ]}
        rightItems={["", "", "", "", ""]}
        ctaText="Try Aptitude Trainer"
        ctaLink="/get-started"
      /> */}
      <CvpRealworld
        heading="Why It’s Different"
        subheading="Skill growth isn’t a test score — it’s a guided journey. Aptitude Trainer™ makes every step count."
        items={useCases}
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
        plans={aptitudePricing.plans.monthly ?? []}
        footerText="For Institutions: Custom packages available for 50+ aspirants. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Start Your Reinvention Today</span>
          </>
        }
        subheading="The world is changing fast. Don’t wait to be left behind. Take control of your learning, your career, and your future."
        ctaText="Get Started Now "
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <CvpSecurity />
      <CvpFeedback reviews={ReviewsData} />
      <Faq faqs={crpaptitudefaqs} imglink="/faq1.png" />
    </>
  );
};

export default page;
