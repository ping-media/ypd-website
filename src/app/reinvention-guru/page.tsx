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
// import CvpSecurity from "@/components/cvp/CvpSecurity";
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
    title: "Structured Reinvention Framework",
    description:
      "Not another skilling video. Every domain follows a fixed, step-locked delivery — from context mapping to challenge scenarios — ensuring depth, not shortcuts.",
  },
  {
    icon: Layers,
    title: "Personalized to Your Persona",
    description:
      "Whether you’re on a break, switching industries, freelancing, or battling burnout — the mentor adapts guidance to your exact career context.",
  },
  {
    icon: BarChart3,
    title: "Real Industry Role Mapping",
    description:
      "Your reinvention links directly to industry clusters and emerging roles. Each session ends with decision-ready insights, not abstract advice.",
  },
  {
    icon: Brain,
    title: "Skill Gap → Action Plan",
    description:
      "Every gap identified is paired with actionable tasks, resources, and progress tracking — making your reinvention measurable, not wishful.",
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
      "Start by choosing the domain most relevant to you — Bias Awareness, Critical Thinking, Ownership, Communication, Technical, or others.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Begin a step-locked journey",
    description:
      "Each theme follows a flow: What → Why → Where → How → Challenge.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Learn through scenarios & tasks",
    description:
      "Work on real workplace situations — short cases, checklists, Q&As, MCQs, and slider reflections — all mapped to your persona and role.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Receive AI mentor feedback",
    description:
      "Get scored insights with clear strengths, gaps, and a Reinvention Index. Feedback adapts to your career stage and cultural context.",
    icon: "/careerverse/s4.svg",
  },
  {
    id: 5,
    title: "Translate gaps into action plans",
    description:
      "Every gap is paired with concrete next steps — workplace tasks, mini-projects, or leadership challenges — plus curated resources.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 6,
    title: "Track progress & earn badges",
    description:
      "Monitor your growth with completion % and streaks. Unlock domain badges (e.g., Bias Breaker, Critical Thinker), a Reinvention Index, and portfolio-ready proof.",
    icon: "/careerverse/s3.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Career Switchers",
    description:
      "For professionals moving across industries — guided by themes like Bias Awareness and Critical Thinking to reframe old assumptions.",
    icon: "/cvplite/r1.svg",
    image: "/crp-aptitude/1.png",
  },
  {
    id: 2,
    title: "Mid-Career Stagnators",
    description:
      "For those stuck in repetitive roles — using Strategic Thinking and Innovation themes to unlock growth.",
    icon: "/cvplite/r2.svg",
    image: "/crp-aptitude/2.png",
  },
  {
    id: 3,
    title: "Burnout Recovery Professionals",
    description:
      "For individuals drained by toxic work cultures — entering through themes like Productivity Bias and Decision Fatigue to rebuild clarity.",
    icon: "/cvplite/r3.svg",
    image: "/crp-aptitude/3.png",
  },
  {
    id: 4,
    title: "Workforce Returnees",
    description:
      "For those re-entering after a career break — starting with Organization & Ownership to restore confidence and role readiness.",
    icon: "/cvplite/r5.svg",
    image: "/crp-aptitude/4.png",
  },
  {
    id: 5,
    title: "Freelancers & Aspiring Leaders",
    description:
      "For independent workers and team leads — focusing on Communication, Leadership, and Industry Role alignment to scale impact.",
    icon: "/cvplite/r4.svg",
    image: "/crp-aptitude/5.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "20+ years of workplace skill research and aptitude testing, adapted to India’s diverse career realities.",
  },
  {
    id: "02",
    text: "An adaptive mentor that adjusts every step to your persona, career stage, and learning style never one-size-fits-all.",
  },
  {
    id: "03",
    text: "Direct linkage of aptitudes to industry roles, skill gaps, and growth plans — ensuring measurable employability, not abstract scores.",
  },
];
const useCases = [
  {
    id: 1,
    title: "Real-world practice, not theory",
    description:
      "Every module uses workplace-inspired cases and challenge scenarios — moving beyond abstract quizzes to problem-solving you can apply immediately.",
    icon: "/cvplite/r1.svg",
    image: "/crp-aptitude/r1.png",
  },
  {
    id: 2,
    title: "Contextualized for Indian professionals",
    description:
      "Designed around India’s cultural tiers, industry clusters, and real career pathways — not borrowed global benchmarks.",
    icon: "/cvplite/r2.svg",
    image: "/crp-aptitude/r2.png",
  },
  {
    id: 3,
    title: "Adaptive tasks with retry & reflection",
    description:
      "Retry exercises, track progress, and reflect on feedback in a secure self-serve space — no judgment, just growth.",
    icon: "/cvplite/r3.svg",
    image: "/crp-aptitude/r3.png",
  },
  {
    id: 4,
    title: "Aptitude map with growth clarity",
    description:
      "End every journey with a personalized portfolio that highlights strengths, gaps, and next steps toward employability.",
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

const reinventionGuruFaqs = [
  {
    question:
      "How is Reinvention Guru™ different from YPD Aptitude Trainer™?",
    answer:
      "YPD Aptitude Trainer™ develops 50+ global standard aptitudes essential for growth anywhere in the world. Reinvention Guru™, however, goes deeper — working through personas and domains contextualized to Indian industry clusters and workplace realities. It doesn’t just build aptitudes; it connects them to roles, sectors, and reinvention journeys tailored for the Indian career landscape.",
  },
  {
    question: "Is this only for students?",
    answer:
      "No. Reinvention Guru™ adapts to multiple personas: students building foundational skills, early professionals shaping careers, people returning after breaks, career switchers & freelancers, and team leaders or aspiring managers. Each persona gets a contextualized journey with relevant scenarios and action plans.",
  },
  {
    question: "What kind of skills will I actually build?",
    answer:
      "Beyond reasoning or IQ, you’ll work on 10 learning domains: Bias Awareness, Critical Thinking, Strategic Thinking, Organization & Ownership, Communication & Leadership, Technical Acumen, Digital Proficiency, Financial Literacy, Innovation Mindset, and Industry-Specific Skills — each ending with a portfolio-ready proof of progress.",
  },
  {
    question: "Will this really help in my job or career switch?",
    answer:
      "Yes. Each domain is mapped to real workplace roles and Indian industry clusters. You’ll practice with case studies, scenarios, and reflection tasks that focus on employability skills, not just theory.",
  },
  {
    question: "What if I’m weak in some areas?",
    answer:
      "The system is built with a reflection loop. Each theme includes challenge scenarios, mentor feedback, and targeted action plans to help you improve steadily.",
  },
  {
    question: "Is this like watching video lectures?",
    answer:
      "Not at all. Unlike most EdTech platforms that rely on pre-recorded videos, Reinvention Guru™ is interactive and adaptive — with quizzes, scenarios, reflections, and feedback loops. It’s self-paced but never passive.",
  },
  {
    question: "Will I get a certificate or proof?",
    answer:
      "Yes. Completion of domains unlocks badges, a Reinvention Score, and a portfolio-ready report that you can share on LinkedIn or with employers.",
  },
  {
    question: "Is this private? Who will see my results?",
    answer:
      "It’s a secure self-serve space. No peers or managers can view your progress unless you choose to share your reports with parents, mentors, or employers.",
  },
  {
    question: "How much time does it take?",
    answer:
      "Each domain typically takes 2–4 hours depending on your tier (Lite, Pro, Expert). You can go at your own pace — either in short bursts or focused sessions.",
  },
  {
    question: "Is this research-backed?",
    answer:
      "Yes. Reinvention Guru™ is built on 20+ years of industry expertise, with AI-driven personalization and Indian workplace contextualization — something global benchmarks and video courses don’t offer.",
  },
];

const page = () => {
  const rgPricing = pricingData["Reinvention Guru™"];

  return (
    <>
      <CvpHero
        title="India’s First AI Career Reinvention Mentor for Professionals"
        subtitle={
          <>
            Unlock practical skill training to overcome career blocks, build
            resilience, and thrive in fast- changing industries. Whether you’re
            stuck, returning after a break, or switching paths,
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD’s Reinvention Guru™
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            delivers domain-wise, persona-based training tailored to your role,
            goals, and growth stage.
          </>
        }
        buttonText="Start Free"
        buttonLink="/reinvention-guru"
        secondaryButtonLink="/reinvention-guru/#works"
        secondaryButtonText="See How It Works"
        image="/reinvention-guru/hero.jpg"
        imageAlt="reinvention guru"
      />
      <CvpVideo
        heading="Step Inside Your Reinvention Guru™ Journey"
        subheading="See how each step personalizes the experience, maps them to roles, and unlocks personalized tasks."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Empower Your Reinvention"
        features={features}
        ctaText="Start Your Reinvention Now"
        ctaLink="/reinvention-guru"
      />
      <CvpLiteWorks
        heading="Who Can Use Reinvention Guru™?"
        subheading="Youth Pulse Digital™ believes that understanding your aptitudes is not just about tests — it’s about building real skills that shape your future."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/reinvention-guru"
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
        subheading="Reinvention Guru™ guides you step-by-step to sharpen skills, practice scenarios, and map your growth."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
        path="M 1.7 12 L 1.7 32 Q 1.7 37 6.7 37 L 60 37 Q 65 37 65 42 L 65 65 Q 65 70 60 70 L 7 70 Q 2 70 1.7 75 L 1.7 88"
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
        heading="Why Reinvention Guru™ is First of Its Kind"
        subheading="The only AI-powered aptitude system that blends workplace realities with adaptive, role-specific skill building."
        avoidTitle="Typical EdTech"
        experienceTitle="Reinvention Guru™ Difference"
        avoid={[
          "Herd-based, one-size-fits-all video modules",
          "Imported benchmarks, disconnected from Indian realities",
          "Passive learning, little space for critical thinking",
          "Focused on theory, not employability outcomes",
          "Judgment-heavy — performance compared, not nurtured",
        ]}
        experience={[
          "Every learner follows their own reinvention path, not a mass template",
          "Workplace challenges, cultural tiers, and industry clusters mapped to real roles",
          "Reflective exercises, challenge scenarios, and adaptive problem-solving",
          "Moving beyond rote to entrepreneurial and creative capacity",
          "No peers watching, no bias, no judgment; growth happens at your own pace",
        ]}
        ctaText="Try Reinvention Guru™"
        ctaLink="/reinvention-guru"
      />
      <CvpJourney
        heading="Built by Experts, Grounded in Real Workplaces"
        description="Reinvention Guru™ blends psychology, industry expertise, and AI architecture into one growth system."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start with Reinvention Guru™"
        ctaHref="/reinvention-guru"
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
        subheading="Reinvention Guru™ isn’t about testing what you know — it’s about transforming how you grow."
        items={useCases}
      />
      <CvpPricing
        currency="INR"
        heading="Pricing & Access"
        subheading="Innovation that feels premium, proof for you."
        plans={rgPricing.plans.monthly ?? []}
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
        subheading="Don’t get left behind in a fast-changing workplace. Reinvention Guru™ gives you a secure, step-locked journey to build employability skills, critical thinking, and innovative mindset — all at your own pace."
        ctaText="Get Started Now "
        ctaHref="/reinvention-guru"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      {/* removed */}
      {/* <CvpSecurity /> */}
      <CvpFeedback reviews={ReviewsData} />
      <Faq faqs={reinventionGuruFaqs} imglink="/faq1.png" />
    </>
  );
};

export default page;
