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
import {
  Lightbulb,
  Compass,
  File,
  GraduationCap,
  Users,
  School,
  HelpCircle,
} from "lucide-react";
import { FileText, Layers, BarChart3, Brain } from "lucide-react";
import { User, BookOpen, Award } from "lucide-react";

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
    icon: <User size={22} />,
  },
  {
    id: 2,
    title: "Decode Your Learning, Thinking & Cognitive Style",
    description:
      "Profile your learning style, cognitive strengths, and decision patterns. AI adapts role recommendations to your pace, skill depth, and future growth needs.",
    icon: <BookOpen size={22} />,
  },
  {
    id: 3,
    title: "Lock Your Career Role & Skill Gap Map",
    description:
      "AI matches you to best-fit roles — including cross-stream opportunities — and generates a gap analysis with skill-bridging pathways.",
    icon: <Brain size={22} />,
  },
  {
    id: 4,
    title: "Receive Your Multi-Year Career Roadmap",
    description:
      "Get a detailed, parent-ready plan with upskilling, certifications, and entry strategies.",
    icon: <Award size={22} />,
  },
];
const audience = [
  {
    id: 1,
    title: "Students in Class 8–12 thinking about stream/college fit",
    description:
      "Explore your strengths, skills, and passions through AI-guided profiling. Get a clear, personalized path for streams, colleges, and future careers.",
    icon: <GraduationCap size={20} />,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents who want to guide their children confidently",
    description:
      "Gain research-backed insights, reports, and roadmaps that help you make informed, future-proof decisions for your child’s career journey.",
    icon: <Users size={20} />,
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Schools looking for a structured but flexible clarity tool",
    description:
      "Offer students an adaptive, non-generic career clarity program that aligns with board curriculum while preparing them for real-world opportunities.",
    icon: <School size={20} />,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Any student unsure about “what comes next”",
    description:
      "Turn uncertainty into clarity with a guided process that transforms confusion into a confident, actionable plan for the years ahead.",
    icon: <HelpCircle size={20} />,
    image: "/cvplite/uses.png",
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
              <span className="relative z-10 font-semibold text-brand-primary">
                YPD’s CVP Advance
              </span>
              <span className="absolute inset-0 bg-brand-bg rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
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
              <span className="relative z-10 font-semibold text-brand-primary">
                Class 11 to UG Final Year
              </span>
              <span className="absolute inset-0 bg-brand-bg rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
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
      <CvpJourney />
      <CvpRealworld />
      <CvpPricing />
      <CvpImpact />
      <CvpCta />
      <CvpSecurity />
      <CvpFeedback />
      <CvpSeperate />
    </>
  );
};

export default page;
