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
  Zap,
  ArrowRight,
  UserPlus,
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
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents who want to guide their children confidently",
    description:
      "CVP Lite provides a clear, parent-friendly report so you can support choices with facts, not guesswork.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Schools looking for a structured but flexible clarity tool",
    description:
      "CVP Lite is easy to run in batches, offering guided sessions and reports that fit into school schedules.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Any student unsure about “what comes next”",
    description:
      "CVP Lite narrows options to 2–3 career paths that align with who you are and what excites you.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/uses.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "The CVP Lite™ doesn’t throw options at you. It walks with you, helping you unlock who you are, how you think, how you dream, and where your natural strengths want to grow.",
  },
  {
    id: "02",
    text: "Through human-structured AI conversations, reflective journaling moments, and dynamic career mapping, we help you build not just a choice  but a vision.",
  },
  {
    id: "03",
    text: "Every step is designed to be warm, personalized, and structured ensuring that you don’t just explore careers randomly but architect your future thoughtfully, courageously, and joyfully.",
  },
];
const useCases = [
  {
    id: 1,
    title: "Stream Confusion",
    quote: `"I don’t know if I should take Science, Commerce, or Arts."`,
    description:
      "CVP Lite helps students identify their ideal stream based on interests, strengths, and thinking style not peer pressure.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Too Many Options",
    quote: `"There are too many career paths I’m lost."`,
    description:
      "CVP Lite narrows it down to 2–3 career matches that actually align with the student’s profile and mindset.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Parent Support Needed",
    quote: `"I’m the first in my family aiming for higher studies."`,
    description:
      "CVP Lite builds a parent-ready report that explains student choices clearly, making the family part of the decision.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Marks ≠ Clarity",
    quote: `"I score well but still don’t know what fits me."`,
    description:
      "CVP Lite helps high performers discover what excites them not just what they’re good at.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/cvpworks.png",
  },
];
const highlight = (content: string) => (
  <span className="bg-[#ebf3eb] px-1 rounded">{content}</span>
);
const ReviewsData = [
  {
    id: 1,
    name: "Rishabh Mehta",
    education: "Class 11 Student, Nagpur",
    text: (
      <>
        I Never Thought Career Guidance Could Feel So Personal. The{" "}
        {highlight(
          "AI Mentor Actually Made Me Think Deeper Like A Real Teacher"
        )}{" "}
        I Finally Figured Out Why I Enjoy Solving Logic Puzzles!
      </>
    ),
    image: "/cvplite/feedback.png",
  },
  {
    id: 2,
    name: "Sangeeta Raghavan",
    education: "Parent, Bengaluru",
    text: (
      <>
        {highlight("We Were Overwhelmed With Career Choices For Our Daughter")}.
        CVP Lite Helped Us Match Her Creative Side With Real Job Paths.
      </>
    ),
    image: "/cvplite/feedback1.png",
  },
  {
    id: 3,
    name: "Priyank Joshi",
    education: "B.Com Final Year, Jaipur",
    text: (
      <>
        &quot;The Emotional Intelligence part opened my eyes
        {highlight(
          "it’s not just marks, it's mindset. I now have a clear action plan"
        )}
        to build the skills my dream job actually needs. Total game-changer!
      </>
    ),
    image: "/cvplite/feedback2.png",
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
      <CvpJourney
        heading="Why This Journey is Unique"
        description="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start CVP Lite™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our CVP Advance™ a 7-day exploration into Career Pathway for deeper insights into Career Pathways."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career clarity isn’t a quiz result — it’s the first real conversation with your future."
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
            price: "₹899",
            priceText: "Start My Career Simulation",
            features: [
              "Full access",
              "Strengths, learning style & thinking profile",
              "Passion & fit analysis",
              "Cognitive & ethical intelligence insights",
              "Career direction bridge & education roadmap",
              "Personal Action Plan",
              "Downloadable Final Career Persona Report (Step 10)",
              "Lifetime access via your YPD login",
              "Built for Class 9–12 students who want trusted, structured clarity",
            ],
            highlight: true,
          },
        ]}
        footerText="Institutional Pricing Available. Please"
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its pilot rollout in early 2023, Youth Pulse Digital™ has empowered over 2,000 students from Tier 1 to Tier 4 cities across India to gain their first real sense of career clarity without pressure, without jargon, and without bias."
        stats={[
          {
            value: "93%",
            description:
              "of students said CVP Lite helped them understand their own interests better than any school-level career lecture or test.",
          },
          {
            value: "89%",
            description:
              "of parents reported feeling more confident supporting their child’s stream or college decisions after seeing the final report.",
          },
          {
            value: "92%",
            description:
              "of students said they would recommend CVP Lite to their juniors, cousins, or friends especially those who feel lost or under pressure.",
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
            label: "Unlock Full Access – ₹899",
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
        bgImage="/cvplite/cvpBg.png"
        heading={
          <>
            <span className="font-bold">CVP Lite™</span> → Your Gateway to
            Future-Ready Decision-Making
          </>
        }
        subheading="Because when you know what fits, you grow with purpose."
        ctaText="Start Your Career Journey Today"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
      />
    </>
  );
};

export default page;
