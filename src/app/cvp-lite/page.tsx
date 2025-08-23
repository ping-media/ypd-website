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
// imports for components
import {
  FileText,
  Layers,
  BarChart3,
  Brain,
  Users,
  School,
  HelpCircle,
} from "lucide-react";
import { Lightbulb, Compass, File, GraduationCap } from "lucide-react";
import { User, BookOpen, Award } from "lucide-react";

const featuresData = [
  {
    icon: FileText,
    title: "Deep Clarity",
    description:
      "Discover your true career fit through a structured 10-step experience.",
  },
  {
    icon: Layers,
    title: "Adaptive Journey",
    description: "Every student is different so is their path...",
  },
  {
    icon: BarChart3,
    title: "Instant Insights",
    description:
      "No waiting, no confusion. Get your personalized report instantly.",
  },
  {
    icon: Brain,
    title: "True AI",
    description: "Not just a quiz, but a real-time framework-driven engine.",
  },
];
const insideData = [
  { icon: FileText, title: "Discover your true interests and strengths" },
  {
    icon: Lightbulb,
    title: "Reflect on your values, preferences, and learning style",
  },
  {
    icon: Compass,
    title: "Identify career directions that align with who you are",
  },
  { icon: File, title: "Walk away with your Career Persona Report (PDF)" },
  {
    icon: GraduationCap,
    title: "Get guidance on college subjects and stream mapping",
  },
];
const steps = [
  {
    id: 1,
    title: "Discover Your Career Energy",
    description:
      "Through ultra-personalized guided reflections, scenarios, questions, and early vision exploration, you begin to surface hidden interests, skills, and thought patterns, absolutely in a private space with no Judgment.",
    icon: <User size={22} />,
  },
  {
    id: 2,
    title: "Captures Your Learning Style and Thinking Style",
    description:
      "Adaptive insights help you understand how you absorb, process, and reflect on career-related information — mapping your personal preferences aligned with your passion & interests.",
    icon: <BookOpen size={22} />,
  },
  {
    id: 3,
    title: "Connects Your Cognitive profile, Emotional & Social Quotient",
    description:
      "Each Step in CVP Lite™ is connected and works in closed-loop, unlike static Psychometric assessments — all dynamically linked to your real passion, interests & strengths, as well to the reflections & journals making it the only active assessment available.",
    icon: <Brain size={22} />,
  },
  {
    id: 4,
    title: "Celebrate Your Personalized CVP Lite™ Report",
    description:
      "Once your CVP Lite™ journey is complete, you will be emailed your Career Pathway Report within a short while.",
    icon: <Award size={22} />,
  },
];
const audience = [
  {
    id: 1,
    title: "Students in Class 8–12 thinking about stream/college fit",
    description:
      "CVP Lite helps match your strengths, interests, and learning style to the right stream and future study options—without peer or family pressure.",
    icon: <GraduationCap size={20} />,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents who want to guide their children confidently",
    description:
      "CVP Lite provides a clear, parent-friendly report so you can support choices with facts, not guesswork.",
    icon: <Users size={20} />,
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Schools looking for a structured but flexible clarity tool",
    description:
      "CVP Lite is easy to run in batches, offering guided sessions and reports that fit into school schedules.",
    icon: <School size={20} />,
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Any student unsure about “what comes next”",
    description:
      "CVP Lite narrows options to 2–3 career paths that align with who you are and what excites you.",
    icon: <HelpCircle size={20} />,
    image: "/cvplite/uses.png",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Start Your Career Clarity Journey in Just a Few Hours"
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-semibold text-brand-primary">
                YPD’s CVP Lite
              </span>
              <span className="absolute inset-0 bg-brand-bg rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
            </span>{" "}
            is your first step toward real career clarity a guided, AI-powered
            self-discovery experience built for{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10 font-semibold text-brand-primary">
                Grade 9 to 12 students
              </span>
              <span className="absolute inset-0 bg-green-100 rounded-sm rotate-[-2deg] scale-y-110 z-0"></span>
            </span>
            .
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
        heading="Step Inside the Experience of CVP Lite™"
        subheading="Take a quick look at how our AI-driven journey helps you discover your interests, passions, your choices and maps it with potential career pathways, not static, not generic — all personalized & adaptive"
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Journey"
        features={featuresData}
        ctaText="Start Your Journey Now"
        ctaLink="/#"
      />
      <CvpInside
        heading="What’s Inside (Without Giving It All Away 😉)"
        subheading="We don’t reveal every step online — but here’s what you’ll go through:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaNote="Each capsule is short, engaging, and designed to unlock insights no more than 15–20 minutes each."
      />
      <WhyCvpLite
        heading="Why CVP Lite Works"
        subheading="Because you shouldn't choose your career based on guesswork or generic quizzes."
        avoidTitle="You’ll Avoid..."
        experienceTitle="You’ll Experience..."
        avoid={[
          "Stressful tests or irrelevant questions",
          "Random career suggestions",
          "Outdated dashboards with static reports",
          "One-size-fits-all career lists",
        ]}
        experience={[
          "A guided, reflection-based journey",
          "A real sense of self + direction",
          "An engaging capsule-based interface",
          "Personalized AI-driven feedback",
        ]}
        ctaText="Try the CVP Lite™"
        ctaLink="/#"
      />

      <CvpLiteSteps
        heading="How it Works"
        subheading="The CVP Lite™ is a structured entry level Career Clarity product for a lite walk-through of your career choices, it’s adaptive journey is crafted to transform raw career curiosity into structured career clarity. Here’s a glimpse of your guided experience"
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
