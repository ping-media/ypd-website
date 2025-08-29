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
  GraduationCap,
  Zap,
  ArrowRight,
  UserPlus,
} from "lucide-react";
import { FileText, Layers, BarChart3, Brain } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Holistic Profiling",
    description:
      "Goes beyond interests — integrates inclination, personality, learning style, and cognitive skills before role mapping.",
  },
  {
    icon: Layers,
    title: "Precision Role Matching",
    description:
      "AI-locked mapping to stream and cross-stream roles with skill gap analysis and safety grade checks.",
  },
  {
    icon: BarChart3,
    title: "Multi-Year Roadmap",
    description:
      "Delivers a complete upskilling, certification, and career entry plan",
  },
  {
    icon: Brain,
    title: "Parent–Student Alignment",
    description:
      "Guided sessions ensure career choices are understood, supported, and future-proofed for both student and parent.",
  },
];
const insideData = [
  { icon: FileText, title: "Self-discovery & cognitive mapping" },
  {
    icon: Lightbulb,
    title: "Learning style & decision-making insights",
  },
  {
    icon: Compass,
    title: "Emotional & social quotient nudges",
  },
  { icon: File, title: "Career-aligned simulations & feedback" },
  {
    icon: GraduationCap,
    title: "AI-generated launch roadmap for top-fit roles",
  },
];
const steps = [
  {
    id: 1,
    title: "Map Your Complete Career DNA",
    description:
      "Dive into AI-guided reflections, assessments, and career exploration. Uncover your inclination, mindset, and motivation triggers — all in a secure, judgment-free space.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Decode Your Learning, Thinking & Cognitive Style",
    description:
      "Profile your learning style, cognitive strengths, and decision patterns. AI adapts role recommendations to your pace, skill depth, and future growth needs.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Lock Your Career Role & Skill Gap Map",
    description:
      "AI matches you to best-fit roles — including cross-stream opportunities — and generates a gap analysis with skill-bridging pathways.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Receive Your Multi-Year Career Roadmap",
    description:
      "Get a detailed, parent-ready plan with upskilling, certifications, and entry strategies.",
    icon: "/careerverse/s4.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Students in Class 8–12 thinking about stream/college fit",
    description:
      "Explore your strengths, skills, and passions through AI-guided profiling. Get a clear, personalized path for streams, colleges, and future careers.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents who want to guide their children confidently",
    description:
      "Gain research-backed insights, reports, and roadmaps that help you make informed, future-proof decisions for your child’s career journey.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Schools looking for a structured but flexible clarity tool",
    description:
      "Offer students an adaptive, non-generic career clarity program that aligns with board curriculum while preparing them for real-world opportunities.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Any student unsure about “what comes next”",
    description:
      "Turn uncertainty into clarity with a guided process that transforms confusion into a confident, actionable plan for the years ahead.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/uses.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "A clear sense of who you are  and what fits you",
  },
  {
    id: "02",
    text: "Your top 2–3 career directions with skill-action plans",
  },
  {
    id: "03",
    text: "Newfound confidence in your decision-making, learning, and future",
  },
];
const useCases = [
  {
    id: 1,
    title: "Stream Confusion",
    quote: `“I’m unsure if Science, Commerce, Arts, or another path is right for me.”`,
    description:
      "CVP Advance identifies the most suitable stream using AI-driven profiling—factoring in skills, mindset, and career vision, not just peer trends.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Too Many Options",
    quote: `“I feel lost with so many possible careers.”`,
    description:
      "CVP Advance filters the noise, presenting 2–3 high-fit career pathways that align with your personality, strengths, and future goals.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Parent Support Needed",
    quote: `“My family wants clarity before making career decisions.”`,
    description:
      "CVP Advance provides a detailed, parent-ready report that explains choices, outcomes, and learning plans—making the decision a shared journey.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Marks ≠ Clarity",
    quote: `“I score well but still don’t know my direction.”`,
    description:
      "CVP Advance helps top scorers and average students alike discover careers that excite and suit them—beyond just academic grades.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/cvpworks.png",
  },
];

const highlight = (content: string) => (
  <span className="rounded bg-[#ebf3eb] px-1">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: " Neha Arora",
    education: "Parent, Jaipur",
    text: (
      <>
        &quot;The parent section in the final report was gold.
        {highlight(
          "It helped us understand our son’s decision without the endless arguments.",
        )}{" "}
        We’re now supporting him fully in pursuing Design.&quot;
      </>
    ),
    image: "/cvplite/user1.png",
  },
  {
    id: 2,
    name: "Rajat Verma",
    education: "BBA 3rd Year, Ahmedabad",
    text: (
      <>
        &quot;The employability focus was spot on. I realised my degree alone
        wouldn’t make me job-ready.
        {highlight(" CVP Advance built me a plan with industry projects,")}.
        soft skill training, and placement targets.&quot;
      </>
    ),
    image: "/cvplite/user2.png",
  },
  {
    id: 3,
    name: "Tanvi Kulkarni",
    education: "Class 11, Na",
    text: (
      <>
        &quot;What impressed me most was the adaptability. I switched my target
        role mid-way,
        {highlight("and CVP Advance recalibrated my entire plan instantly.")}.
        No wasted effort, only a sharper path.&quot;
      </>
    ),
    image: "/cvplite/user3.png",
  },
];
const cvpAdvanceFaqs = [
  {
    question: "What is the CVP Advance Program?",
    answer:
      "CVP Advance™ is a premium, multi-layered career clarity and planning platform. It maps your strengths, learning style, and cognitive abilities, matches you to high-potential career paths, and builds a semester-by-semester action plan with skill gap closure strategies, real-world projects, and future role alignment.",
  },
  {
    question: "I’m in Grade 10. Is CVP Advance right for me?",
    answer:
      "Yes—especially if you want deeper clarity, long-term planning, and guidance that covers both Indian and global career opportunities.",
  },
  {
    question: "How is CVP Advance different from basic career tests?",
    answer:
      "It goes far beyond aptitude scores. CVP Advance combines AI insights with human expert review, skill gap mapping, industry role validation, and a multi-year personalised roadmap.",
  },
  {
    question: "How much time does it take to finish?",
    answer:
      "About 150–180 minutes for the assessments and discussions. Your personalised final report arrives within 48 hours.",
  },
  {
    question: "Will I get a career report after the session?",
    answer:
      "Yes—your CVP Advance report is highly detailed, with role matches, alternate pathways, bridge certifications, internships, and action milestones.",
  },
  {
    question: "Can parents view the report too?",
    answer:
      "Absolutely. There’s a dedicated parent section explaining role alignment, employability focus, and how to support the student’s journey.",
  },
  {
    question: "Is this based on real research?",
    answer:
      "Yes—it uses validated psychometric frameworks, global employability standards, and real job market data updated regularly.",
  },
  {
    question: "Is CVP Advance useful if I already have a career in mind?",
    answer:
      "Yes—it validates your choice against your aptitude, emotional readiness, and market trends, while suggesting optimisations for success.",
  },
  {
    question: "What if I want ongoing guidance after CVP Advance?",
    answer:
      "You can opt for YPD’s Career Vision Challenger track for continuous mentorship, internship guidance, and industry networking.",
  },
];
const page = () => {
  return (
    <>
      <CvpHero
        title="CVP Advance Your Career. Your Clarity. In 7 Days."
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD’s CVP Advance
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            is a 7-day, AI-powered journey that builds your complete career
            persona blending your interests, strengths, learning style, and
            future readiness into one sharp, actionable roadmap.
          </>
        }
        description={
          <>
            For students from{" "}
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Class 9 to UG Final Year
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            who want direction without confusion and skills that matter in the
            real world.
          </>
        }
        features={[
          "Guided, adaptive career journey",
          "Move from uncertainty to clarity",
          "No overwhelm or pressure",
          "Built on YPD’s trusted frameworks",
          "A powerful starting for every learner",
        ]}
        buttonText="Start Program Now"
        buttonLink="/program"
        image="/cvplite/cvplite.png"
        imageAlt="Student learning"
      />
      <CvpVideo
        heading="Step Inside the Experience of CVP Advance™"
        subheading="Discover how our AI-driven journey maps your aspirations to high-growth careers with future skills, competitive edge, and real-world readiness—personalized, adaptive, and industry-aligned."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Power Your CVP Advance™ Journey"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/#"
      />
      <CvpInside
        heading="What You'll Experience"
        subheading="Over 7 tightly curated days, you’ll go through"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaNote="All without feeling like you’re just “taking another test.”"
      />
      <WhyCvpLite
        heading="Why It Works (When Others Don’t)"
        subheading="Because you shouldn’t choose your career based on guesswork or generic quizzes."
        avoidTitle="Others Offer"
        experienceTitle="Others Offer CVP Advance Delivers"
        avoid={[
          "Long forms, generic advice",
          "Static career lists",
          "No real learning insight",
          "No emotional dimension",
        ]}
        experience={[
          "Precision-crafted insights in just 7 days",
          "Role-fit simulations + humanized AI logic",
          "VARK-driven learning style adaptation",
          "EQ, SQ, critical thinking, and mindset mapping",
        ]}
        ctaText="Try the CVP Advance™"
        ctaLink="/#"
      />
      <CvpLiteSteps
        heading="How it Works"
        subheading="The CVP Advance™ is an in-depth career visioning journey that layers advanced profiling, skill mapping, and global role-pathway insights. It transforms clarity into an actionable, future-proof career blueprint."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpLiteWorks
        heading="Who Can Use This?"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Perfect first step before college, entrance exams, or big decisions."
      />
      <CvpJourney
        heading="What You'll Walk Away With"
        description="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start CVP Advance™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our CVP Advance™ a 7-day exploration into Career Pathway for deeper insights into Career Pathways."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career clarity isn’t a guess—it’s a guided, data-backed journey with your future. CVP Advance turns that journey into a precise, adaptive plan."
        items={useCases}
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="CareerVerse™ is a premium experience made affordable."
        plans={[
          {
            title: "Free Plan",
            description: "For students starting their journey",
            price: "₹0",
            features: [
              "Basic profile setup (Step 0)",
              "Interest Preview (Step 1 – partial access)",
              "AI summary of interest clusters",
              "No report or stream recommendation",
              "Locked after preview, upgrade anytime",
              "Best for students who want to 'try before they trust.'",
            ],
          },
          {
            title: "Premium Plan",
            description: "Complete your full Career Persona Journey",
            price: "₹2,499",
            priceText: "Start My Career Simulation",
            features: [
              "Full 7-day journey",
              "AI-driven capsules",
              "Personalized final report",
              "Lifetime access via your YPD login",
              "Personal Action Plan",
              "Optional mentor review available at additional cost",
            ],
            highlight: true,
          },
        ]}
        footerText="For Institutions: Custom packages available for 50+ students. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its launch, Youth Pulse Digital™’s CVP Advance has empowered students across India to go beyond basic career clarity—crafting precise, multi-year career roadmaps backed by adaptive AI, real-world role mapping, and targeted skill gap analysis. It’s helped learners from Tier 1 to Tier 4 cities gain confidence, direction, and a future-proof action plan—without jargon, pressure, or bias."
        stats={[
          {
            value: "94%",
            description:
              "of students said CVP Advance gave them a clearer, longer-term vision of their career path compared to any other guidance they had received.",
          },
          {
            value: "91%",
            description:
              "of parents reported feeling more confident about their child’s higher education and career direction after reviewing the final multi-year roadmap.",
          },
          {
            value: "95%",
            description:
              "of students said they would recommend CVP Advance to peers preparing for entrance exams, competitive careers, or those feeling uncertain about their next step.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpCta
        heading="Start Your Career Vision Journey"
        subheading="You’ve reflected. You’re ready."
        description="Now it’s time to unlock your personalized career vision and take your first step into a future built with clarity, confidence, and purpose."
        buttons={[
          {
            label: "Unlock Full Access – ₹2499",
            icon: <Zap size={18} />,
            variant: "primary",
          },
          {
            label: "Create Account Now",
            icon: <UserPlus size={18} />,
            variant: "outline",
          },
        ]}
      />
      <CvpSecurity />
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Get Started Now</span>
          </>
        }
        subheading="This isn’t psychometric rehash. This is future-ready, emotionally intelligent career building in just one week."
        ctaText="Start My 7-Day Journey"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={cvpAdvanceFaqs} />
    </>
  );
};

export default page;
