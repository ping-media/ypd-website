import CvpCta from "@/components/cvp/CvpCta";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpFeedback from "@/components/cvp/CvpFeedback";
import CvpHero from "@/components/cvp/CvpHero";
import CvpImpact from "@/components/cvp/CvpImpact";
import CvpInside from "@/components/cvp/CvpInside";
import CvpJourney from "@/components/cvp/CvpJourney";
import CvpLiteSteps from "@/components/cvp/CvpLiteSteps";
import CvpLiteWorks from "@/components/cvp/CvpLiteWorks";
import CvpPricing from "@/components/cvp/CvpPricing";
import CvpRealworld from "@/components/cvp/CvpRealworld";
import CvpSecurity from "@/components/cvp/CvpSecurity";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import CvpVideo from "@/components/cvp/CvpVideo";
import Tables from "@/components/mission-nda/Tables";
import Faq from "@/components/other/Faq";
import CvpSteps from "@/components/other/steps/CvpSteps";
import {
  Lightbulb,
  Compass,
  File,
  GraduationCap,
  Zap,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import { FileText, Layers, BarChart3, Brain } from "lucide-react";
import { pricingData } from "@/components/pricing/prices";

const features = [
  {
    icon: FileText,
    title: "Officer-Level Clarity",
    description:
      "Get a complete readiness map — from written exam mastery to SSB OLQs — all structured into a disciplined, step-by-step AI mentor journey.",
  },
  {
    icon: Layers,
    title: "Adaptive Defence Training",
    description:
      "No two aspirants are alike. Mission NDA adapts to your strengths, learning pace, and improvement areas — without following a rigid coaching template.",
  },
  {
    icon: BarChart3,
    title: "Readiness Reports",
    description:
      "Track your NDA progress daily with clarity, weakness tracking. Know exactly where you stand before stepping into the SSB.",
  },
  {
    icon: Brain,
    title: "True Defence AI",
    description:
      "Not just generic tips — powered by real SSB frameworks, veteran inputs, and live AI logic that reacts to your performance in real time.",
  },
];
const insideData = [
  {
    icon: FileText,
    title: "Built for India’s future officers not casual exam-takers",
  },
  {
    icon: Lightbulb,
    title: "Adaptive learning with real-time reflections & feedback.",
  },
  {
    icon: Compass,
    title: "Role-based OLQ training aligned with SSB psychology.",
  },
  {
    icon: File,
    title: "Weakness Radar™ to fix blind spots before they cost your attempt",
  },
  {
    icon: GraduationCap,
    title: "AI Interview Coach to simulate real SSB questions, daily.",
  },
];
const steps = [
  {
    id: 1,
    title: "Assess Your Officer Potential",
    description:
      "Through realistic NDA-level questions, OLQ-based reflections, and service-specific scenarios, you begin to identify strengths, weaknesses, and leadership traits — all in a secure, private training environment.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Adapt to Your Learning & Performance Style",
    description:
      "Our AI observes how you process information under pressure, your problem-solving speed, and decision-making approach. It then adjusts your preparation plan — balancing written exam mastery with SSB readiness — without forcing a one-size-fits-all method.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Build Your Cognitive, Emotional & OLQ Strength",
    description:
      "Every stage of Mission NDA™ is tied to actual selection criteria — from cognitive skills and situational judgment to emotional intelligence and group dynamics. These are mapped directly to real SSB tasks like GTO, interviews, and psych tests.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Progress Tracking with On-Demand Syllabus & Topics",
    description:
      "Track your NDA preparation in real time — see which subjects, topics, and OLQ areas you’ve mastered, and which need more work. Instantly access targeted practice modules, revision capsules, and topic-specific drills whenever you need them.",
    icon: "/careerverse/s4.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Aspirants from Class 11-UG, Professionals preparing for SSB",
    description:
      "Aspirants aiming to clear NDA written & SSB in their first attempt with structured, mentor-led guidance.",
    icon: "/cvplite/r1.svg",
    image: "/mission-nda/a1.png",
  },
  {
    id: 2,
    title: "Repeaters aiming for better score & SSB",
    description:
      "Aspirants looking to improve written scores, crack OLQs, and perform stronger in SSB rounds.",
    icon: "/cvplite/r2.svg",
    image: "/mission-nda/a2.png",
  },
  {
    id: 3,
    title: "First-timers with no coaching support",
    description:
      "Self-study students seeking a guided, adaptive prep system with expert-backed practice.",
    icon: "/cvplite/r3.svg",
    image: "/mission-nda/a3.png",
  },
  {
    id: 4,
    title: "Tier 2–3–4 students needing low-cost, full-value training",
    description:
      "Affordable, high-quality preparation for aspirants from smaller towns with limited resources.",
    icon: "/cvplite/r5.svg",
    image: "/mission-nda/a4.png",
  },
  {
    id: 5,
    title: "Parents seeking transparent prep journey for their child",
    description:
      "Real-time progress tracking, performance insights, and guided improvement plans",
    icon: "/cvplite/r4.svg",
    image: "/mission-nda/a5.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "15+ years of SSB experience on our mentor panel",
  },
  {
    id: "02",
    text: "AI that speaks the military mindset built with ex-officers",
  },
  {
    id: "03",
    text: "Real feedback. Real assessment. Real growth.",
  },
];
const useCases = [
  {
    id: 1,
    title: "Exam Pattern Confusion",
    quote: `“I’m not sure how to start NDA prep or cover SSB tasks.”`,
    description:
      "Mission NDA™ breaks down the syllabus, OLQs, and interview prep into simple, guided steps.",
    icon: "/cvplite/r1.svg",
    image: "/mission-nda/r1.png",
  },
  {
    id: 2,
    title: "Scattered Preparation",
    quote: `“I’m studying, but my approach feels random.”`,
    description:
      "Mission NDA™ gives you a structured, day-by-day plan for both written and SSB readiness.",
    icon: "/cvplite/r2.svg",
    image: "/mission-nda/r2.png",
  },
  {
    id: 3,
    title: "No Mentor Support",
    quote: `“I don’t have access to trained NDA or SSB coaches.”`,
    description:
      "Our AI-mentor and ex-SSB experts guide you through every stage, with real feedback.",
    icon: "/cvplite/r3.svg",
    image: "/mission-nda/r3.png",
  },
  {
    id: 4,
    title: "High Effort, Low Results",
    quote: `“I work hard but my scores don’t improve much.”`,
    description:
      "Mission NDA™ pinpoints weak areas and gives targeted practice to boost your score.",
    icon: "/cvplite/r4.svg",
    image: "/mission-nda/r4.png",
  },
];

const numbersteps = [
  {
    id: 1,
    title: "Study",
    description: "Topic-wise smart capsules with active recall",
  },
  {
    id: 2,
    title: "Revise",
    description: "AI nudges and real-world SSB case links",
  },
  {
    id: 3,
    title: "Test",
    description: "Sectional + full NDA mock tests (tutor-graded)",
  },
  {
    id: 4,
    title: "Track",
    description: "Daily, Weekly & Mission-level dashboards",
  },
  {
    id: 5,
    title: "Prepare (SSB)",
    description: "Reflective capsule + OLQ linked SRT + GTO",
  },
  {
    id: 6,
    title: "Interview Mode",
    description: "YPO Mentor simulates & evaluates you",
  },
];

const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Aditya Singh",
    education: "Class 12 Student, Lucknow",
    text: (
      <>
        &quot;Mission NDA gave me a clear, step-by-step plan for both NDA
        syllabus and SSB prep.
        {highlight(" No confusion anymore.")}&quot;
      </>
    ),
    image: "/mission-nda/re1.png",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    education: "NDA Aspirant, Patna",
    text: (
      <>
        &quot;The OLQ capsules were eye-opening.
        {highlight(
          " I finally understood how leadership and teamwork are tested in SSB.",
        )}
        &quot;
      </>
    ),
    image: "/mission-nda/re5.png",
  },
  {
    id: 3,
    name: "Priyanka Joshi",
    education: "Parent, Nashik",
    text: (
      <>
        &quot;As a parent, I saw my son transform.
        {highlight(
          " Mission NDA built his discipline, confidence, and clarity.",
        )}
        &quot;
      </>
    ),
    image: "/cvplite/user3.png",
  },
  {
    id: 4,
    name: "Vikas Menon",
    education: "Class 11 Student, Kochi",
    text: (
      <>
        &quot;I had joined coaching earlier but felt lost. Mission NDA’s
        adaptive AI
        {highlight(" made me practice with focus and purpose.")}&quot;
      </>
    ),
    image: "/mission-nda/re7.png",
  },
  {
    id: 5,
    name: "Karan Thakur",
    education: "Repeater Candidate, Chandigarh",
    text: (
      <>
        &quot;The SSB simulations felt so real.
        {highlight(
          " Handling challenges here gave me confidence to face the actual board.",
        )}
        &quot;
      </>
    ),
    image: "/cvplite/user2.png",
  },
  {
    id: 6,
    name: "Ritu Yadav",
    education: "Class 12 Student, Gwalior",
    text: (
      <>
        &quot;I live in a Tier-3 town, but Mission NDA gave me access to
        structured prep
        {highlight(" just like top academies.")}&quot;
      </>
    ),
    image: "/mission-nda/re6.png",
  },
];

const missionNdaFaqs = [
  {
    question: "Is this better than physical NDA coaching?",
    answer:
      "Depends. If you want flexible, AI-driven, OLQ-linked prep with real-time feedback and progress tracking, this is unmatched.",
  },
  {
    question: "Can I prepare fully for the NDA written exam with this?",
    answer:
      "Yes. Mission NDA™ covers the complete syllabus with adaptive difficulty, mock tests, and targeted practice.",
  },
  {
    question: "Does this prepare me for SSB too?",
    answer:
      "Absolutely. Our OLQ-linked simulations, interview practice, and task-based scenarios train you for every stage of the SSB.",
  },
  {
    question: "Can I get feedback from a real mentor?",
    answer:
      "Yes. Alongside AI precision, our experienced NDA & SSB trainers review key milestones and give actionable tips.",
  },
  {
    question: "Does this work on mobile?",
    answer:
      "Yes. Mission NDA™ is fully mobile-optimized for study, practice, and SSB simulations anywhere.",
  },
  {
    question: "Will I get a readiness report after the session?",
    answer:
      "Yes. You’ll receive a Mission NDA™ Readiness Report covering your syllabus coverage, OLQ profile, and SSB probability.",
  },
  {
    question: "Can parents view the report too?",
    answer:
      "Yes. A parent-friendly report is shared, ensuring complete transparency on your progress and preparation status.",
  },
  {
    question: "Is this based on real research?",
    answer:
      "Yes. Mission NDA™ combines official NDA syllabus mapping, SSB assessment standards, and proven OLQ frameworks.",
  },
  {
    question:
      "Is Mission NDA™ useful if I’ve already joined another coaching?",
    answer:
      "Definitely. It acts as a precision supplement—pinpointing gaps and making your existing prep sharper.",
  },
  {
    question: "What if I want deeper guidance after Mission NDA™?",
    answer:
      "You can upgrade to advanced mentorship, including personal mock interviews with ex-SSB officers.",
  },
];

const page = () => {
  const missionSSBPricing = pricingData["Mission SSB™"];
  return (
    <>
      <CvpHero
        title="Mission NDA™ Crack NDA & SSB with Military Precision"
        subtitle={
          <>
            The only AI-powered
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                NDA preparation system
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>
            {""}
            built for India’s toughest defense aspirants. Full syllabus mastery,
            SSB readiness, and real-time feedbackon your terms.
          </>
        }
        features={[
          "NDA & SSB Full Mastery",
          "AI-Powered Adaptive Prep Confidence",
          "No Overwhelm",
          "Trusted YPD Success Framework",
        ]}
        buttonText="Start Program Now"
        buttonLink="/program"
        image="/cvplite/mission-nda.png"
        imageAlt="mission nda"
      />
      <CvpVideo
        heading="Step Inside the Mission NDA™ Experience"
        subheading="Take a quick look at how our AI-powered NDA journey prepares you for the Services Selection Board (SSB) with precision and discipline — from written exams to OLQ-based officer readiness. No generic tips, no outdated coaching — fully personalized, adaptive, and rooted in real SSB protocols"
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Power Your NDA & SSB Success"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <Tables
        heading="Structured Journey One Dashboard. Three Tracks."
        subheading="Because you shouldn't choose learning for competitive entrance exams on guesswork"
        trackTitle="Track"
        avoidTitle="Focus"
        experienceTitle="What You Get"
        track={["Written Prep", "SSB Mastery", "Interview & GD"]}
        avoid={[
          "Full syllabus, revision, testing ",
          "OLQ Mapping, Situational Response, GTO",
          "Officer-like personality, AI coach, feedback",
        ]}
        experience={[
          "Study Capsules, Revision Pathways, Mock Tests",
          "Real-time reflections, simulations, feedback",
          "Mock interviews, GD prep, real response tracking",
        ]}
        ctaText="Try Mission NDA™"
        ctaLink="/coming-soon"
      />
      <CvpInside
        heading="Why Mission NDA™ Is a Game Changer"
        subheading="Prepare with strategy & planning"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      />
      <CvpLiteSteps
        heading="How it Works"
        subheading="Mission NDA™ is a precision-driven AI mentor designed to prepare you for both the NDA written exam and the SSB interview with military-grade rigor. Its adaptive journey is built to transform raw ambition into disciplined, officer-level readiness. Here’s how your training unfolds:"
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpLiteWorks
        heading="Who Should Join Mission NDA™"
        subheading="Build to ensure a focused preparation in your own space"
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
        ctaSubtext="Perfect Step for serious Aspirants who wants clarity over confusion"
      />
      <Tables
        heading="Structured Journey One Dashboard. Three Tracks."
        subheading="Because you shouldn't choose your career based on guesswork or generic quizzes."
        trackTitle="Feature"
        avoidTitle="What Others Do"
        experienceTitle="Mission NDA™ Offers"
        track={[
          "Real AI Reflections",
          "OLQ-Linked Progress",
          "Mentor Guardrails ",
          "Weakness Radar™",
          "True Mock SSB Sim",
        ]}
        avoid={[
          "None or static scores",
          "No behavior linkage",
          "AI-only MCQ’s or mentor only",
          "Generic chapter tests",
          "Absent or scripted",
        ]}
        experience={[
          "Your actions are evaluated, not just scored",
          "Every task maps to officer-like behavior",
          "Human-validated tracks & feedback",
          "Pinpoints knowledge + personality gaps ",
          "Full simulation with voice & judgment paths",
        ]}
        ctaText="Try Mission NDA™"
        ctaLink="/coming-soon"
      />
      <CvpJourney
        heading="Built by Defense Officers, Psychologists, and AI Experts"
        description="Youth Pulse Digital™ believes that learning should be strategic and Implementable"
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Mission NDA™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Through the eyes of our users, who chose precision preparation"
        items={useCases}
      />
      <CvpSteps
        steps={numbersteps}
        heading="Your Mission, Broken Down"
        subheading="Innovation that feels premium, priced for you."
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
        plans={missionSSBPricing.plans.monthly ?? []}
        footerText="For Institutions: Custom packages available for 50+ students. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its launch, Mission NDA™ has guided aspirants from Tier 1 to Tier 4 cities in India to prepare strategically for both NDA Written and SSB stages — with structure, precision, and zero guesswork. Students gain confidence, discipline, and readiness without feeling overwhelmed or lost."
        stats={[
          {
            value: "91%",
            description:
              "of students said Mission NDA™ improved their exam & SSB readiness more than any previous coaching or self-study.",
          },
          {
            value: "88%",
            description:
              "of parents reported feeling assured about their child’s complete preparation plan and progress tracking.",
          },
          {
            value: "90%",
            description:
              "of students said they would recommend Mission NDA™ to peers, especially those starting late or struggling to structure their preparation.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpCta
        heading="Start Your Mission NDA™ Journey"
        subheading="You’ve reflected. You’re ready."
        description="Now it’s time to unlock your complete NDA Written & SSB preparation plan and take your first step towards serving the nation with discipline, confidence, and officer-like qualities."
        buttons={[
          {
            label: "Subscribe Full Access (₹4999 onwards)",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/coming-soon",
          },
          {
            label: "Create Account Now",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/coming-soon",
          },
        ]}
      />
      <CvpSecurity />
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">
              Mission NDA™ isn’t just preparation. It’s transformation
            </span>
          </>
        }
        subheading="If you’re ready to lead, we’re ready to train.
        With the power of data, psychology, and defense insight—welcome to the future of NDA prep."
        ctaText="Join Mission NDA Now"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={missionNdaFaqs} />
    </>
  );
};

export default page;
