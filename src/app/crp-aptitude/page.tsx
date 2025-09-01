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
import WhyCvpLite from "@/components/cvp/WhyCvpLite";
import Faq from "@/components/other/Faq";
import {
  Lightbulb,
  Compass,
  File,
  Zap,
  ArrowRight,
  UserPlus,
  ShieldPlus,
  Cable,
  Blocks,
} from "lucide-react";
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
      "Every professional’s path is unique. The CRP Aptitude Trainer adjusts to your career stage, role interests, and learning style without forcing a standard template.",
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
const insideData = [
  {
    icon: Brain,
    title: "Decision-Making",
    description: "based on academics, boards, test scores",
  },
  {
    icon: Lightbulb,
    title: "Process Thinking",
    description: "AI-suggested with real rankings",
  },
  {
    icon: Compass,
    title: "Influence & Collaboration",
    description: "Shortlisted by intake, test fit, and cost",
  },
  {
    icon: File,
    title: "Ownership & Accountability",
    description: "SOP, LOR, deadlines, portals",
  },
  {
    icon: Blocks,
    title: "Learning Agility",
    description: "Visual comparison by region",
  },
  {
    icon: Cable,
    title: "Adaptability & Change",
    description: "Merit, need-based, and external funding",
  },
  {
    icon: ShieldPlus,
    title: "Conflict Handling",
    description: "Safety, weather, diaspora, support",
  },
  {
    icon: Lightbulb,
    title: "Ethical Thinking",
    description: "Internships",
  },
];
const steps = [
  {
    id: 1,
    title: "Choose your career role or goal",
    description:
      "Through ultra-personalized guided reflections, scenarios, questions, and early vision exploration, you begin to surface hidden interests, skills, and thought patterns, absolutely in a private space with no Judgment.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Get personalized tasks based on real scenarios",
    description:
      "Adaptive insights help you understand how you absorb, process, and reflect on career-related information — mapping your personal preferences aligned with your passion & interests.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Learn needed aptitudes",
    description:
      "Each Step in CVP Lite™ is connected and works in closed-loop, unlike static Psychometric assessments — all dynamically linked to your real passion, interests & strengths, as well to the reflections & journals making it the only active assessment available.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Complete them in sequence, with timely guidance",
    description:
      "Once your CVP Lite™ journey is complete, you will be emailed your Career Pathway Report within a short while.",
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Reflect, retry, and improve",
    description:
      "Through ultra-personalized guided reflections, scenarios, questions, and early vision exploration, you begin to surface hidden interests, skills, and thought patterns, absolutely in a private space with no Judgment.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 6,
    title: "Receive a personalized aptitude report",
    description:
      "Adaptive insights help you understand how you absorb, process, and reflect on career-related information — mapping your personal preferences aligned with your passion & interests.",
    icon: "/careerverse/s4.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Students preparing for competitive or entrance exams",
    description:
      "Identify strengths, weaknesses, and role-fit before committing to a career pathway.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Early-career professionals seeking role clarity",
    description:
      "Pinpoint aptitudes that align with industry demand and fast-track your progression.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Mid-career professionals planning a shift",
    description:
      "Assess transferable skills, discover alternate roles, and close gaps with targeted learning.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Team leads or managers upskilling for leadership",
    description:
      "Evaluate decision-making, adaptability, and strategic thinking to move into bigger roles.",
    icon: "/cvplite/r5.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 5,
    title: "Anyone wanting measurable growth, not just training",
    description:
      "Go beyond certifications — get role-mapped insights that drive tangible career advancement.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/uses.png",
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
    title: "Real-world learning, not rote answers",
    quote: `“I know the theory but struggle in real work.”`,
    description:
      "Trainer uses real scenarios to build decision-making and problem-solving, not just theory.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Contextualized for Indian careers",
    quote: `“Global tests miss our work reality.”`,
    description:
      "Trainer maps skills to Indian workplace needs while staying globally relevant.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Adaptive tasks and real-time nudges",
    quote: `“Some parts were easy, some pushed me.”`,
    description:
      "Difficulty adapts instantly with feedback to strengthen weak areas.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Helps you understand what you need to grow",
    quote: `“I’m logical but need better communication.”`,
    description:
      "Trainer shows exactly which skills to improve for employability.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 5,
    title: "No fluff, only value",
    quote: `“Every task linked to my goals.”`,
    description:
      "Role-specific modules that boost readiness — no generic questions.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
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
    image: "/cvplite/user1.png",
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
    image: "/cvplite/user2.png",
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
    image: "/cvplite/user3.png",
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
    image: "/cvplite/user1.png",
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
    image: "/cvplite/user2.png",
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
    image: "/cvplite/user3.png",
  },
];

const crpaptitudefaqs = [
  {
    question: "Is this better than generic aptitude tests?",
    answer:
      "Depends. If you want adaptive, AI-backed, skill-gap linked prep, this is unmatched.",
  },
  {
    question: "Can I prepare fully for competitive exams with this?",
    answer:
      "Yes — it builds the aptitude base you need for any exam or job role.",
  },
  {
    question: "Can I get feedback from a real mentor?",
    answer:
      "Yes — optionally your results can be reviewed with actionable improvement tips.",
  },
  {
    question: "Does this work on mobile?",
    answer: "Absolutely — learn and track progress anytime, anywhere.",
  },
  {
    question: "Will I get a detailed skill gap report after the session?",
    answer: "Yes — it’s included with role-based upskilling suggestions.",
  },
  {
    question: "Can parents view the report too?",
    answer: "Yes — perfect for guiding students in career and skill decisions.",
  },
  {
    question: "Is this based on real research?",
    answer: "Yes — built on proven psychometric and industry skill frameworks.",
  },
  {
    question: "Is it useful if I already know my career path?",
    answer:
      "Yes — it fine-tunes strengths and closes role-specific skill gaps.",
  },
  {
    question: "What if I want deeper guidance after this test?",
    answer: "You can opt for an advanced program with step-by-step upskilling.",
  },
];

const page = () => {
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
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            is a new-age training platform that goes beyond theory and delivers
            practical aptitude-building tailored to your career stage, your
            role, and your goals.
          </>
        }
        buttonText="Start Free"
        buttonLink="/#"
        secondaryButtonLink="/#"
        secondaryButtonText="View Sample Report"
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
        ctaLink="/#"
      />
      {/* SECTION TO MODIFY (BUILT FOR INDIA POWERED BY AI) */}
      <CvpLiteWorks
        heading="Who Can Use This?"
        subheading="Youth Pulse Digital™ believes that career decisions aren’t guesses — they’re informed, guided, and actionable."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Whether you're aiming for Ivy League or a safe, affordable global degree this session will show you all your real options."
      />
      <CvpInside
        heading="What You Train On"
        subheading="Developed with workplace realities in mind"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      {/* SECTION TO MODIFY */}
      <CvpLiteSteps
        heading="How It Works"
        subheading="The CVP Lite™ is a structured entry level Career Clarity product for a lite walk-through of your career choices, it’s adaptive journey is crafted to transform raw career curiosity into structured career clarity. Here’s a glimpse of your guided experience"
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpCta
        heading="What You’ll Receive"
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
            label: "Take the First Step Simulate Your Future Career",
            icon: <Zap size={18} />,
            variant: "primary",
          },
          {
            label: "Request a Demo for Schools / Partners",
            icon: <UserPlus size={18} />,
            variant: "outline",
          },
        ]}
      />
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
        ctaText="Try the Global Navigator™"
        ctaLink="/#"
      />
      <CvpJourney
        heading="Built by Industry Psychologists, Skill Experts, and AI Architects"
        description="Youth Pulse Digital™ believes that aptitude mastery is not just a score — it’s a growth journey."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start UPSC Mentor™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our UPSC Mentor™ — a structured journey with curated strategies, role-based practice, and data-backed performance tracking."
      />
      {/*  */}
      {/* SECTION TO ADD (Why YPD Global Navigator™ Beats Traditional Counseling) */}
      {/*  */}
      <CvpRealworld
        heading="Why It’s Different"
        subheading="Skill growth isn’t a test score — it’s a guided journey. Aptitude Trainer makes every step count."
        items={useCases}
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="CRP Aptitude is a premium preparation experience made affordable."
        plans={[
          {
            title: "Free Plan",
            description: "First-time users",
            price: "₹0",
            features: ["1 Scenario", "Limited Feedback", "Basic Report"],
          },
          {
            title: "Premium Plan",
            description: "Deep Career Training",
            price: "₹2,499",
            priceText: "Book Now",
            features: [
              "Full Access to Tracks",
              "Detailed Feedback",
              "Retry Options",
              "Full Report Export",
              "Depending on the Premium plan",
            ],
            highlight: true,
          },
        ]}
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
      <Faq faqs={crpaptitudefaqs} />
      <CvpSecurity />

      {/*  */}
      {/*  */}
      {/*  */}

      {/* SECTION TO MODIFY (IMAGE FULL WIDTH) */}

      {/*  */}
      {/* SECTION TO ADD (YOUR MISSION,BROKEN DOWN) */}
      {/*  */}

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

      <CvpFeedback reviews={ReviewsData} />
    </>
  );
};

export default page;
