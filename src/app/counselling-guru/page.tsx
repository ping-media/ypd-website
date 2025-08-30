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
  Venus,
  Zap,
  ArrowRight,
  UserPlus,
  PersonStanding,
  Layers,
  BarChart3,
  Brain,
} from "lucide-react";
import { FileText } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Deep Clarity",
    description:
      "Get crystal-clear career direction with a structured path that blends your strengths, interests, stream, and mindset—aligned to India’s education and job market.",
  },
  {
    icon: Layers,
    title: "Adaptive Journey",
    description:
      "No one-size-fits-all. Counseling Guru adapts to your pace, language comfort, and academic stage, keeping the process relevant and stress-free.",
  },
  {
    icon: BarChart3,
    title: "Instant Insights",
    description:
      "Walk away with an actionable, easy-to-read report—ready for discussions with parents, teachers, or mentors the same day.",
  },
  {
    icon: Brain,
    title: "True AI + Human Touch",
    description:
      "Our AI runs on real frameworks, local data, and mentor guidance—no random  results or recycled internet lists.",
  },
];
const insideData = [
  {
    icon: FileText,
    title: "Your Admission Eligibility",
    description: "based on academics, boards, test scores",
  },
  {
    icon: Lightbulb,
    title: "Top Courses by Country & Stream",
    description: "AI-suggested with real rankings",
  },
  {
    icon: Compass,
    title: "Matched Universities",
    description: "Shortlisted by intake, test fit, and cost",
  },
  {
    icon: File,
    title: "Admissions Timeline",
    description: "SOP, LOR, deadlines, portals",
  },
  {
    icon: Venus,
    title: "Tuition & Living Cost Estimator",
    description: "Visual comparison by region",
  },
  {
    icon: PersonStanding,
    title: "Scholarship Engine",
    description: "Merit, need-based, and external funding",
  },
  {
    icon: PersonStanding,
    title: "Student Life Snapshot",
    description: "Safety, weather, diaspora, support",
  },
  {
    icon: PersonStanding,
    title: "Career Scope & PG Options",
    description: "Internships, job roles, ROI",
  },
];

const steps = [
  {
    id: 1,
    title: "Smart Session Unlock",
    description: [
      "You register and book your session (₹1499 – ₹3999 depending on stream & depth)",
      "Session is unlocked via secure Session ID & assigned mentor",
    ],

    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Guided Profile Lock",
    description: [
      "Mentor validates your academic background, preferences & goals",
      "You upload docs: Class 10/12 marksheets, JEE/CUET scores, resume, portfolio, etc",
    ],
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Role Fit & Stream Mapping",
    description: [
      "Mentor helps you confirm role goal, stream, UG/PG program preferences",
      "YPD’s AI activates the matching capsule logic behind the scenes",
    ],
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Career Discovery & College Matching",
    description: [
      "You explore top colleges, entrance likelihood, budget fit, scholarship chances",
      "Get ranking comparisons, ROI analysis, safety insights, and alternate career plans",
    ],

    icon: "/careerverse/s3.svg",
  },
  {
    id: 5,
    title: "Final Report Generation",
    description: [
      "Locked stream + career role, Top 5 college shortlist",
      "Cut-offs, funding plan, skill gaps, upskilling path, Admissions checklist",
    ],

    icon: "/careerverse/s3.svg",
  },
  {
    id: 6,
    title: "Transcript & Revisit Access",
    description: [
      "Full session transcript & PDF reports ,Parent summary (optional)",
      "Re-access product page anytime via your account",
    ],
    icon: "/careerverse/s3.svg",
  },
];

const audience = [
  {
    id: 1,
    title: "Students (Class 9–12 / UG / PG)",
    description:
      "Get personalised career guidance aligned to your strengths, academics, and India’s evolving job market—no generic results.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Parents seeking reliable, expert guidance",
    description:
      "Gain clarity to help your child choose the right stream, course, and career path with confidence and local job insights.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Professionals needing career reinvention",
    description:
      "Navigate job shifts, upskilling, or complete career changes with a roadmap built for the Indian market realities.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Anyone at a career crossroads",
    description:
      "Break confusion with a clear, actionable plan that blends AI precision with mentor advice suited to your context.",
    icon: "/cvplite/r5.svg",
    image: "/cvplite/uses.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "20+ years of combined counselling experience across school, college, and professional levels.",
  },
  {
    id: "02",
    text: "AI powered with India-specific career data and real-world industry insights.",
  },
  {
    id: "03",
    text: "Actionable feedback. Real guidance. Visible growth in decisions.",
  },
];
const useCases = [
  {
    id: 1,
    title: "Role Dilemma",
    quote: `“I’ve shortlisted two career roles but can’t decide which to pursue.”`,
    description:
      "We compare roles on scope, eligibility, future growth, and your personal fit, so you choose with confidence.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "College & Course Confusion",
    quote: `“I’m unsure which college and program combination is best for me.”`,
    description:
      "We shortlist based on cutoffs, fees, scholarships, ROI, and your role plan — not random rankings.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Parental Alignment",
    quote: `“My parents and I have different ideas about my career.”`,
    description:
      "We give parents a clear, fact-based report to bridge differences and build consensus.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Pathway Validation",
    quote: `“I’m already set on a role — I just need to be sure it’s right.”`,
    description:
      "We confirm your stream, role, and pathway with real eligibility checks and future readiness mapping.",
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
    name: "Neha Arora",
    education: "Parent, Jaipur",
    text: (
      <>
        &quot;I never thought career guidance could feel so personal. The
        {highlight(
          "AI mentor actually made me think deeper like a real teacher who knows me. I finally figured out",
        )}{" "}
        why I enjoy solving logic puzzles I’m now exploring Data
        Analytics!&quot;
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
        {highlight("“I’ve used expensive coaching before but nothing matches")}.
        this level of feedback. It’s like having an SSB officer with me 24/7.”
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
        “Mission NDA helped my son in a small town gain officer-
        {highlight("like clarity and confidence.”")}
      </>
    ),
    image: "/cvplite/user3.png",
  },
];
const cgFaqs = [
  {
    question: "Is this better than generic counselling?",
    answer:
      "Yes. If you want personalised, AI-guided, and India-specific career advice, it’s unmatched.",
  },
  {
    question: "Can this help with competitive exam planning?",
    answer:
      "Absolutely. We align your career plan with entrance exams, timelines, and preparation strategy.",
  },
  {
    question: "Will I get feedback from a real mentor?",
    answer:
      "Yes. Every session blends AI insights with human mentor validation.",
  },
  {
    question: "Does this work on mobile?",
    answer: "Yes. It’s fully accessible on smartphones and tablets.",
  },
  {
    question: "Will I get a career report after the session?",
    answer:
      "Yes. You’ll receive a clear, action-ready report in simple language.",
  },
  {
    question: "Can parents view the report too?",
    answer:
      "Yes. We encourage parent-student review for better decision-making.",
  },
  {
    question: "Is this based on real research?",
    answer:
      "Yes. Built on global frameworks adapted to the Indian education and job market.",
  },
  {
    question: "Is it useful if I already have a career in mind?",
    answer:
      "Yes. We validate your choice and show alternate, future-proof paths.",
  },
  {
    question: "What if I need deeper guidance later?",
    answer: "You can upgrade to advanced one-on-one mentoring anytime.",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Real Answers. Real Mentorship. One Session to Change Everything."
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Counseling Guru™
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            combines AI-driven insight with expert human mentorship giving you a
            career roadmap that’s deeply personal, fully verified, and radically
            real
          </>
        }
        description="Ideal for Students, Parents & Professionals:"
        features={[
          "Covers UG - PG",
          "Entrance Exams",
          "Skill requirement",
          "College Matching & Career Roles",
          "One-Time Session · Lasting Clarity",
        ]}
        buttonText="Book Your Slot Now"
        buttonLink="/program"
        secondaryButtonText="View Sample Report"
        secondaryButtonLink="/report"
        image="/career-reboot/hero.png"
        imageAlt="mission nda"
      />
      <CvpVideo
        heading="Step Inside the Experience of Counseling Guru™"
        subheading="See how our AI + mentor guidance helps Indian students and parents cut through confusion, match skills with real careers, and make confident choices—rooted in India’s education system and future job trends."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <WhyCvpLite
        heading="Why Choose Counseling Guru™?"
        subheading="YPD doesn’t sell assessments. We deliver transformation."
        avoidTitle="What Others Offer"
        experienceTitle="What Counseling Guru™ Delivers"
        avoid={[
          "Generic tests with automated PDFs",
          "Personality-based suggestions",
          "One-size-fits-all counseling",
          "AI-only or Human-only models",
          "Shallow career pathways",
        ]}
        experience={[
          "Real-time guidance from verified career mentors",
          "Role-fit, stream-lock, college list & funding plan",
          "Personalized, document-backed, mentor-verified fit",
          "AI + Human Synergy for unmatched accuracy",
          "Multi-stream pathways + ROI-driven decision logic",
        ]}
        ctaText="Try the Global Navigator™"
        ctaLink="/#"
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Journey"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/#"
      />
      <CvpInside
        heading="Your Personalized Global Journey Powered by AI + Mentor"
        subheading="In just one structured session, you’ll explore:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      {/*  */}
      {/* SECTION TO ADD (STRUCTURED JOURNEY ONE DASHBOARD) */}
      {/*  */}
      <CvpLiteSteps
        heading="How it Works"
        subheading="We don’t reveal the full backend flow. But here’s what makes Counseling Guru™ unlike anything else."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpCta
        heading="What You Receive"
        subheading="Built by experts. Powered by AI. Grounded in empathy."
        features={[
          "One-on-one mentor-led counseling",
          "Personalized stream & role confirmation",
          "College shortlisting with real cutoffs",
          "Entrance test insights + eligibility",
          "Fee + scholarship planning",
          "ROI & career safety analysis",
          "Alternate role mapping",
          "Skill gap + certification advice",
          "Final Report + Session Transcript (PDF)",
          "Parent Summary Report (Optional) ",
          "Product Re-Access via YPD Dashboard",
        ]}
        buttons={[
          {
            label: "Take the First Step Simulate Your Future Career ",
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
      <CvpLiteWorks
        heading="Who It's For"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Whether you're aiming for Ivy League or a safe, affordable global degree this session will show you all your real options."
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="Career Reboot Navigator is a premium experience made affordable"
        plans={[
          {
            title: "Basic",
            description: "Starter Demo",
            price: "₹0",
            features: [
              "Limited Preview",
              "Dashboard Peek",
              "Sample Study Capsule",
              "No report or stream recommendation",
            ],
          },
          {
            title: "Premium",
            description: "One-Time Session Price",
            price: "₹1499-3499",
            priceText: "Book My Session Now",
            features: [
              "Book Your Slot all sessions are mentor-assigned",
              "Decision-Making or Casual Mode available at checkout",
              "Includes all final reports, resume access, and re-login feature",
              "60–90 min guided session",
            ],
            highlight: true,
          },
        ]}
        footerText="Bulk Discounts for Colleges & NGOs. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      {/*  */}
      {/* SECTION TO ADD (CR VS OTHERS) */}
      {/*  */}
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its launch, Counseling Guru™ has guided students, parents, and professionals from Tier 1 to Tier 4 cities in India to make confident career and education choices—without jargon, pressure, or guesswork."
        stats={[
          {
            value: "94%",
            description:
              "of students said it gave them more clarity than school counsellors or generic tests.",
          },
          {
            value: "91%",
            description:
              "of parents felt better equipped to guide stream, course, or career decisions after a session.",
          },
          {
            value: "90%",
            description:
              "would recommend Counseling Guru™ to peers or juniors, especially those feeling confused or pressured.  ",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Want a Glimpse Before You Commit?</span>
          </>
        }
        subtext="Start Light, Upgrade Anytime"
        subheading="Choose Casual Mode at checkout to explore a preview journey. Get basic stream guidance, sample role mapping, and budget insights.Then upgrade to unlock full report, college list, and personal mentorship."
        ctaText="Preview Mode"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <CvpFeedback reviews={ReviewsData} />
      <Faq faqs={cgFaqs} />
      <CvpJourney
        heading="Built by Career Mentors, Psychologists, and Industry Experts"
        description="Youth Pulse Digital™ believes career clarity is not just advice — it’s a guided, practical journey."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Global Navigator™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our 7-day exploration into Career Pathway for deeper insights into Career Pathways."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career decisions are high-stakes — Counseling Guru™ ensures you make them with clarity, facts, and confidence."
        items={useCases}
      />
      <CvpCta
        heading="Start Your Decision-Making Journey"
        subheading="You’ve reflected. You’re ready."
        description="Now it’s time to unlock your personalized career pathway plan and make choices backed by real data, expert insights, and future-proof clarity."
        buttons={[
          {
            label: "Subscribe Full Access ₹1499-3499 ",
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
    </>
  );
};

export default page;
