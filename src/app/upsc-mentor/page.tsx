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
// import CvpSecurity from "@/components/cvp/CvpSecurity";
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
  BookOpen,
  Monitor,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import { FileText, Layers, BarChart3, Brain } from "lucide-react";
import { pricingData } from "@/components/pricing/prices";

const features = [
  {
    icon: FileText,
    title: "Targeted Clarity",
    description:
      "Master Prelims, Mains & Interview with a structured, role-aligned plan covering syllabus mastery, current affairs, and answer writing—all in one place.",
  },
  {
    icon: Layers,
    title: "Adaptive Strategy",
    description:
      "Your preparation adjusts dynamically to your pace, strengths, and evolving needs, ensuring you stay on track without rigid templates.",
  },
  {
    icon: BarChart3,
    title: "Instant Feedback",
    description:
      "Get real-time evaluation on tests, essays, and interview responses—actionable, precise, and UPSC-specific.",
  },
  {
    icon: Brain,
    title: "True AI Mentorship",
    description:
      "Not a static quiz. Our engine uses advanced logic, role-mapped insights, and verified frameworks to deliver highly personalized guidance.",
  },
];
const insideData = [
  {
    icon: FileText,
    title: "Built for India’s future civil servants, not casual aspirants",
  },
  {
    icon: Lightbulb,
    title: "Adaptive learning with real-time reflections & feedback",
  },
  {
    icon: Compass,
    title:
      "Role-based personality & situational training aligned with UPSC interview psychology",
  },
  {
    icon: File,
    title: "Weakness Radar™ to fix blind spots before they cost your attempt",
  },
  {
    icon: GraduationCap,
    title: "AI Interview Coach to simulate real UPSC panel questions, daily",
  },
];
const steps = [
  {
    id: 1,
    title: " Diagnose Your UPSC Readiness",
    description:
      "Through structured Prelims & Mains diagnostics, combined with adaptive reflections and targeted mock evaluations, you uncover your strengths, weaknesses, and priority focus areas — all tracked securely in your personal dashboard.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: " Capture Your Learning & Answering Style",
    description:
      "AI-driven insights reveal your pace, accuracy, and conceptual clarity in MCQs and descriptive answers. Your learning plan dynamically adjusts to address weak areas and reinforce high-impact topics aligned with the UPSC syllabus.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: " Integrate Cognitive, Emotional & Role-based Preparedness",
    description:
      "From Essay & Ethics paper approach to DAF-based interview simulations, every step connects your subject mastery with officer-like communication, decision-making, and situational handling — reinforced by real-time feedback and reflection logs.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: " Receive Your Personalized UPSC Readiness Report",
    description:
      "At the end of your cycle, you receive a detailed, actionable report covering Prelims, Mains, and Interview preparedness — highlighting score forecasts, topic mastery levels, OLQ alignment, and your next strategic steps before the exam.",
    icon: "/careerverse/s4.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Graduates & Final-Year Students Preparing for UPSC ",
    description:
      "Ready to commit to a structured plan covering Prelims, Mains, and Interview stages.",
    icon: "/cvplite/r1.svg",
    image: "/upsc/1.png",
  },
  {
    id: 2,
    title: "Repeat Aspirants Targeting Rank Improvement",
    description:
      "Want to fix blind spots, optimize answer writing, and sharpen interview presence.",
    icon: "/cvplite/r2.svg",
    image: "/upsc/2.png",
  },
  {
    id: 3,
    title: "First-Time Aspirants Seeking Guided Coaching",
    description:
      "Need a clear, step-by-step roadmap without wasting years on trial-and-error.",
    icon: "/cvplite/r3.svg",
    image: "/upsc/3.png",
  },
  {
    id: 4,
    title: "Tier 2–4 Aspirants Needing Low-Cost, High-Value Mentorship",
    description:
      "Access affordable, AI-driven preparation with full syllabus coverage and strategy sessions.",
    icon: "/cvplite/r5.svg",
    image: "/upsc/4.png",
  },
  {
    id: 5,
    title: "Parents Tracking UPSC Preparation Progress",
    description:
      "Get transparent, real-time updates on milestones, performance, and readiness.",
    icon: "/cvplite/r4.svg",
    image: "/upsc/5.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "Over 20 years of combined UPSC preparation and interview experience on our mentor panel.",
  },
  {
    id: "02",
    text: "AI that mirrors topper strategies — designed with real exam trends, PYQ analysis, and subject expertise.",
  },
  {
    id: "03",
    text: "Real feedback. Real assessment. Real growth — from Prelims to Mains to Interview.",
  },
];
const useCases = [
  {
    id: 1,
    title: "Syllabus Overwhelm",
    quote: `“I don’t know how to prioritise the vast UPSC syllabus.”`,
    description:
      "UPSC Mentor helps break down the syllabus into priority topics, aligning them with your preparation stage and exam timelines.",
    icon: "/cvplite/r1.svg",
    image: "/upsc/r1.png",
  },
  {
    id: 2,
    title: "Answer Writing Gaps",
    quote: `“I understand concepts but can’t frame strong Mains answers.”`,
    description:
      "UPSC Mentor provides structured answer-writing practice with evaluation rubrics mapped to UPSC standards.",
    icon: "/cvplite/r2.svg",
    image: "/upsc/r2.png",
  },
  {
    id: 3,
    title: "Optional Subject Confusion",
    quote: `“I can’t decide which optional subject will suit my strengths.”`,
    description:
      "UPSC Mentor guides you in evaluating optional subjects based on scoring trends, overlap with GS papers, and personal interest.",
    icon: "/cvplite/r3.svg",
    image: "/upsc/r3.png",
  },
  {
    id: 4,
    title: "Interview Stage Anxiety",
    quote: `“I’m confident in my knowledge but nervous about the UPSC personality test.”`,
    description:
      "UPSC Mentor offers realistic mock interview simulations with panel-style feedback to build confidence and articulation.",
    icon: "/cvplite/r4.svg",
    image: "/upsc/r4.png",
  },
];
const numbersteps = [
  {
    id: 1,
    title: "Study",
    description:
      "Topic-wise smart capsules covering Prelims & Mains with active recall techniques.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Revise",
    description:
      "Structured revision schedules with integrated PYQs and UPSC-standard case references.",
    icon: Monitor,
  },
  {
    id: 3,
    title: "Test",
    description:
      "Sectional + full-length Prelims and Mains mock tests (auto-graded & evaluated).",
    icon: FileText,
  },
  {
    id: 4,
    title: "Track",
    description:
      "Daily, weekly & stage-level performance dashboards to monitor readiness.",
    icon: TrendingUp,
  },
  {
    id: 5,
    title: "Prepare (Interview)",
    description:
      "Personality Test simulations with panel-style feedback and DAF-based questions.",
    icon: Brain,
  },
  {
    id: 6,
    title: "Answer Writing Lab",
    description:
      "Daily and weekly Mains answer writing practice with UPSC evaluation rubrics.",
    icon: MessageCircle,
  },
];

const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Ananya Verma",
    education: "UPSC Aspirant, Lucknow",
    text: (
      <>
        &quot;I never imagined UPSC preparation could feel so personal. The
        {highlight("AI Mentor™ helped me focus on my weak GS areas")} and gave
        a clear strategy to follow daily.&quot;
      </>
    ),
    image: "/upsc/re1.png",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    education: "UPSC Aspirant, Patna",
    text: (
      <>
        “Even after joining a big coaching, I was lost.
        {highlight("UPSC Mentor™ gave me a realistic plan")} based on my
        preparation stage, not a generic schedule.”
      </>
    ),
    image: "/upsc/re2.png",
  },
  {
    id: 3,
    name: "Priyanka Joshi",
    education: "Parent, Nashik",
    text: (
      <>
        “The interview simulations felt exactly like a
        {highlight("UPSC Board room. My confidence")}
        for the Personality Test went through the roof.”
      </>
    ),
    image: "/upsc/re3.png",
  },
  {
    id: 4,
    name: "Karan Mehta",
    education: "UPSC Aspirant, Jaipur",
    text: (
      <>
        {highlight("“UPSC Mentor™ taught me how to balance Prelims")}
        revision with answer writing for Mains. No other platform tracked my
        progress this closely.”
      </>
    ),
    image: "/upsc/re4.png",
  },
  {
    id: 5,
    name: "Sneha Gupta",
    education: "UPSC Aspirant, Pune",
    text: (
      <>
        “As a working professional, I had limited hours to study.
        {highlight("The mentor created a plan")}
        that made every hour count.”
      </>
    ),
    image: "/upsc/re5.png",
  },
  {
    id: 6,
    name: "Aditya Rao",
    education: "UPSC Aspirant, Hyderabad",
    text: (
      <>
        “I was overwhelmed by optional subject prep.
        {highlight("UPSC Mentor™ broke it")}
        into monthly, weekly, and daily milestones I could actually follow.”
      </>
    ),
    image: "/upsc/re6.png",
  },
];

const upscFaqs = [
  {
    question: "Is this better than physical coaching?",
    answer:
      "Depends. If you want flexible, AI-backed, and UPSC-syllabus aligned prep with structured answer writing practice, this is unmatched.",
  },
  {
    question: "Can I prepare fully for Prelims, Mains & Interview with this?",
    answer:
      "Yes. You’ll get topic-wise capsules, answer frameworks, test series, and interview simulations — all aligned with UPSC standards.",
  },
  {
    question: "Can I get feedback from a real mentor?",
    answer:
      "Yes. Our mentor feedback option is available for written answers, essay drafts, and interview practice.",
  },
  {
    question: "Does this work on mobile?",
    answer:
      "Absolutely. The UPSC Mentor is accessible on mobile, tablet, and desktop.",
  },
  {
    question: "Will I get a performance report after the session?",
    answer:
      "Yes. You’ll receive a detailed report covering Prelims readiness, Mains answer structure, and Interview skill gaps.",
  },
  {
    question: "Can parents or family view the report too?",
    answer: "Yes, you can share the report digitally.",
  },
  {
    question: "Is this based on real research?",
    answer:
      "Yes. It’s built on past UPSC trends, topper strategies, and governance frameworks.",
  },
  {
    question: "Is UPSC Mentor useful if I already have a preparation plan?",
    answer:
      "Yes. It will help identify blind spots, improve answer quality, and refine interview responses.",
  },
  {
    question: "What if I want deeper guidance after UPSC Mentor?",
    answer:
      "You can opt for extended mentorship packages with advanced test analysis and personalised strategy planning.",
  },
];

const page = () => {
  const upscPricing = pricingData["UPSC Mentor™"];
  return (
    <>
      <CvpHero
        title="UPSC Mentor™ Crack UPSC with Strategic Precision"
        subtitle={
          <>
            The only AI-powered
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                UPSC preparation system
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            that integrates syllabus mastery, dynamic current affairs,
            psychological profiling, OLQ development, and personalized study
            plans — all in one adaptive platform. Get real-time, mentor-grade
            feedback to fine-tune your preparation.
          </>
        }
        features={[
          "Adaptive, AI-driven study planning & target locking",
          "Real-time current affairs integration with syllabus mapping",
          "OLQ-linked development for interview & personality readiness",
          " Continuous performance tracking with precision feedback",
          "A powerful starting for every learner",
        ]}
        buttonText="Start Free"
        buttonLink="/program"
        secondaryButtonText="See How It Works"
        secondaryButtonLink="/upsc-mentor/#works"
        image="/upsc/hero.jpg"
        imageAlt="upsc mentor"
      />
      <CvpVideo
        heading="Step Inside the Experience of UPSC Mentor™"
        subheading="See how our AI-driven journey helps you master UPSC — from daily current affairs to Prelims, Mains & Interview — all mapped to your strengths, goals & adaptive progress. Never static, never generic."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Empower Your UPSC Journey"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <Tables
        heading="Structured Journey. One Dashboard. Three Tracks."
        subheading="Because you shouldn’t prepare for UPSC with scattered notes or generic study plans."
        trackTitle="Track"
        avoidTitle="Focus"
        experienceTitle="What You Get"
        track={[
          "Prelims Mastery",
          "Mains Excellence",
          "Interview & Personality",
        ]}
        avoid={[
          "Full GS + CSAT coverage, revision cycles, test series integration",
          "GS & Essay frameworks, answer writing drills, current affairs integration",
          "DAF analysis, mock interviews, personality mapping, situational response",
        ]}
        experience={[
          "Study Capsules, Adaptive Revision Plans, Topic-Wise Mock Tests",
          "Structured Answer Templates, Daily Writing Feedback, Role-Aligned Notes",
          "One-on-One Mock Panels, Real-Time Feedback, Improvement Tracking",
        ]}
        ctaText="Try UPSC Mentor™"
        ctaLink="/coming-soon"
      />
      <CvpInside
        heading="Why UPSC Mentor™ Is a Game Changer"
        subheading="Over a structured journey, you’ll go through"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
      />
      <CvpLiteSteps
        heading="How it Works"
        subheading="The UPSC Mentor™ is a structured, AI-powered preparation journey covering Prelims, Mains, and Interview stages. It blends syllabus mastery, real-time performance analytics, and role-based personality readiness to help aspirants approach the exam with precision, clarity, and officer-like confidence. Here’s a glimpse of your guided experience:"
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpLiteWorks
        heading="Who Should Join UPSC Mentor™"
        subheading="Youth Pulse Digital™ believes UPSC success is not just about syllabus completion — it’s a guided evolution towards becoming an impactful civil servant."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/coming-soon"
        ctaSubtext="Perfect for first attempt, repeat attempt, or parallel preparation with graduation."
      />
      <CvpJourney
        heading="Built by UPSC Toppers, Subject Experts, and AI Strategists"
        description="Youth Pulse Digital™ believes UPSC success is not just a goal — it’s a guided evolution."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start UPSC Mentor™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our UPSC Mentor™ — a structured journey with curated strategies, role-based practice, and data-backed performance tracking."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="UPSC preparation isn’t just about covering the syllabus — it’s about strategic readiness for a high-stakes, multi-stage exam. UPSC Mentor addresses the real challenges aspirants face."
        items={useCases}
      />
      <CvpSteps
        steps={numbersteps}
        heading="Your Mission, Broken Down"
        subheading="UPSC Mentor™ is a premium preparation experience designed for serious aspirants."
      />
      <CvpPricing
        currency="INR"
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
        plans={upscPricing.plans.monthly ?? []}
        footerText="For Institutions: Custom packages available for 50+ aspirants. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its early 2024 pilot, Youth Pulse Digital™ UPSC Mentor™ has supported aspirants from Tier 1 to Tier 4 cities in building exam-ready skills for Prelims, Mains, and the Interview stage—removing guesswork, over-reliance on coaching, and preparation fatigue."
        stats={[
          {
            value: "94%",
            description:
              "of aspirants said UPSC Mentor™ helped them understand how to approach the syllabus strategically rather than randomly reading books or notes.",
          },
          {
            value: "88%",
            description:
              "of parents reported feeling more confident supporting their child’s preparation journey after receiving mentor feedback and performance tracking reports.",
          },
          {
            value: "91%",
            description:
              "of aspirants said they would recommend UPSC Mentor™ to peers—especially those preparing without expensive coaching or who struggle with answer-writing structure.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpCta
        heading="Start Your UPSC Mentor™ Journey"
        subheading="You’ve reflected. You’re ready."
        description="Now it’s time to unlock your personalized UPSC preparation plan and take your first step towards success in Prelims, Mains, and Interview—with clarity, confidence, and purpose."
        buttons={[
          {
            label: "Subscribe Full Access (₹7,999 onwards)",
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
      {/* removed */}
      {/* <CvpSecurity /> */}
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">
              UPSC Mentor™ isn’t just preparation. It’s transformation
            </span>
          </>
        }
        subheading="If you’re ready to serve, we’re ready to mentor. With the power of structured learning, proven exam strategies, and governance insights — welcome to the future of UPSC preparation."
        ctaText="Join UPSC Mentor Now "
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={upscFaqs} />
    </>
  );
};

export default page;
