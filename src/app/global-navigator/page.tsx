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
    title: "Visa-Linked Clarity",
    description:
      "Map your academic goals to countries, courses, and visa pathways in one integrated journey — no scattered advice.",
  },
  {
    icon: Layers,
    title: "Adaptive Planning",
    description:
      "Your plan adjusts to your target country, tests, finances, and deadlines — no rigid templates.",
  },
  {
    icon: BarChart3,
    title: "Instant Global Report",
    description:
      "Get your Global Navigator™ Report instantly — covering test prep, visa strategy, and ROI — student- and parent-ready.",
  },
  {
    icon: Brain,
    title: "True AI + Expert Blend",
    description:
      "Not a quiz or blog scrape — built on real frameworks, country data, and ex-advisor expertise.",
  },
];
const insideData = [
  {
    icon: Brain,
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
    icon: Blocks,
    title: "Tuition & Living Cost Estimator",
    description: "Visual comparison by region",
  },
  {
    icon: Cable,
    title: "Scholarship Engine",
    description: "Merit, need-based, and external funding",
  },
  {
    icon: ShieldPlus,
    title: "Student Life Snapshot",
    description: "Safety, weather, diaspora, support",
  },
  {
    icon: Lightbulb,
    title: "Career Scope & PG Options",
    description: "Internships, job roles, ROI",
  },
];
const steps = [
  {
    id: 1,
    title: "Define Your Global Goal",
    description:
      "Through a guided intake, set your destination, course choice, and career vision — mapped with visa pathways and ROI clarity.",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Map Your Academic & Test Readiness",
    description:
      "We analyse your grades, entrance test scope, and prep needs, aligning them to country-specific requirements without guesswork.",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Build Your Personalised Global Plan",
    description:
      "Every step links admission timelines, visa rules, and scholarship windows in one adaptive tracker that works in real time.",
    icon: "/careerverse/s3.svg",
  },
  {
    id: 4,
    title: "Receive Your Global Navigator™ Report",
    description:
      "Get a ready-to-execute plan — covering tests, applications, visa prep, and budget forecasts — student- and parent-ready.",
    icon: "/careerverse/s4.svg",
  },
];
const audience = [
  {
    id: 1,
    title: "Class 11 & 12 students aiming for UG programs abroad",
    description:
      "For students planning early and needing a clear roadmap — from test prep to country selection, scholarships, and visa timelines.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "UG graduates applying for PG or Masters abroad",
    description:
      "Helps graduates align course choice, university fit, and post-study work options with realistic budgets and ROI clarity.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Students confused between countries, exams, or university types",
    description:
      "Cuts through the noise with data-backed comparisons, adaptive guidance, and step-by-step application support.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Parents seeking full-picture clarity before making major decisions",
    description:
      "Gives parents an at-a-glance view of costs, timelines, and career prospects for informed, confident decision-making.",
    icon: "/cvplite/r5.svg",
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
    title: "Country Confusion",
    quote: `“I’m not sure if I should choose the USA, UK, Canada, or Australia.”`,
    description:
      "Global Navigator helps you shortlist countries that match your academic goals, budget, and lifestyle preferences — all without relying on generic rankings.     ",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Too Many University Options",
    quote: `“I’m not sure if I should choose the USA, UK, Canada, or Australia.”`,
    description:
      "Global Navigator helps you shortlist countries that match your academic goals, budget, and lifestyle preferences — all without relying on generic rankings.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Parent Support Needed",
    quote: `“My parents want clarity before investing in my education abroad.”`,
    description:
      "Global Navigator creates a detailed report that aligns your aspirations with parental concerns — making decisions clear and confident.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Budget vs. Opportunity",
    quote: `“I want the best education possible, but within a set budget.”`,
    description:
      "Global Navigator matches you with cost-effective universities and scholarship pathways that don’t compromise on quality.",
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
    name: " Aarav Mehta",
    education: "Class 12 Student, Pune",
    text: (
      <>
        &quot;I never thought overseas education planning could feel so
        personal.
        {highlight("The AI Navigator actually made me see")} which country and
        program truly fit me. Now I’m set on pursuing Economics in
        Canada!”&quot;
      </>
    ),
    image: "/cvplite/user1.png",
  },
  {
    id: 2,
    name: "Rohini Sharma",
    education: "UG Student, Delhi",
    text: (
      <>
        “I had attended multiple university fairs but left more confused.
        {highlight("Global Navigator gave me a shortlist in minutes")} that
        matched my budget, grades, and career goals perfectly.”
      </>
    ),
    image: "/cvplite/user2.png",
  },
  {
    id: 3,
    name: "Suresh Iyer",
    education: "Parent, Bengaluru",
    text: (
      <>
        “Our family was unsure about sending our daughter abroad.
        {highlight("Global Navigator’s parent briefing and cost analysis")}
        gave us full confidence to proceed with her UK application.”
      </>
    ),
    image: "/cvplite/user3.png",
  },
  {
    id: 4,
    name: "Vikram Kapoor",
    education: "Engineering Student, Indore",
    text: (
      <>
        “I was wasting weeks researching programs online.
        {highlight("“With Global Navigator, I had a ranked")}
        list of best-fit universities and their deadlines in one dashboard.”
      </>
    ),
    image: "/cvplite/user1.png",
  },
  {
    id: 5,
    name: "Fatima Khan",
    education: "Class 11 Student, Lucknow",
    text: (
      <>
        “The scholarship recommendations alone
        {highlight("saved me months of work.")}I applied to three options I
        hadn’t even heard of before using Global Navigator.”
      </>
    ),
    image: "/cvplite/user2.png",
  },
  {
    id: 6,
    name: "Ankit Deshmukh",
    education: "Working Professional, Mumbai",
    text: (
      <>
        “As a working professional applying for a Master’s abroad, I didn’t have
        time to figure out requirements.
        {highlight("Global Navigator mapped everything for me")}
        from SOP drafting to visa prep.”
      </>
    ),
    image: "/cvplite/user3.png",
  },
];

const globalNavigatorFaqs = [
  {
    question: "Is this better than attending multiple university fairs?",
    answer:
      "Yes — instead of generic brochures and rushed conversations, you get AI-backed, profile-matched university shortlists, scholarships, and timelines in one place.",
  },
  {
    question: "Can I plan for both UG and PG admissions with this?",
    answer:
      "Absolutely. Global Navigator covers undergraduate, postgraduate, and even second-master’s pathways, with country- and course-specific recommendations.",
  },
  {
    question: "Can I get feedback from a real counselor?",
    answer:
      "Yes — you can request a 1-on-1 virtual session with a certified career counselor to review your plan and shortlist.",
  },
  {
    question: "Does this work on mobile?",
    answer:
      "Yes — the entire Global Navigator experience works seamlessly on mobile and desktop. Your progress syncs across devices.",
  },
  {
    question: "Will I get a university shortlist after the session?",
    answer:
      "Yes — you’ll receive a ranked list of best-fit universities with entry requirements, deadlines, and application tips.",
  },
  {
    question: "Can parents view the report too?",
    answer:
      "Yes — a dedicated Parent View summarises costs, scholarships, safety, and career prospects for each option.",
  },
  {
    question: "Is this based on real data?",
    answer:
      "Yes — Global Navigator uses official university databases, global rankings, verified scholarship listings, and labour market data.",
  },
  {
    question:
      "Is Global Navigator useful if I already have a target country in mind?",
    answer:
      "Definitely — it refines your options within that country to ensure the right course, city, and budget fit.",
  },
  {
    question: "What if I want deeper guidance after Global Navigator?",
    answer:
      "You can upgrade to the Global Navigator+ package for SOP/LOR guidance, visa support, and country-specific settlement tips.",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Planning to Study Abroad? Get Unmatched Career & College Clarity in Just One Session."
        subtitle={
          <>
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                YPD Global Navigator™
              </span>
              <span className="bg-brand-bg absolute inset-0 z-0 scale-y-110 rotate-[-2deg] rounded-sm"></span>
            </span>{" "}
            blends real-time AI insights with expert human mentorship to craft a
            personalized roadmap for your global higher education dreams.
          </>
        }
        features={["UG & PG", "USA", "UK", "Canada", "Australia", "Everywhere"]}
        featuresTwoCols
        buttonText="Book Your Slot Now"
        buttonLink="/#"
        secondaryButtonLink="/#"
        secondaryButtonText="View Sample Report"
        image="/career-reboot/hero.png"
        imageAlt="crp aptitude"
      />
      <CvpVideo
        heading="Step Inside the Experience of Global Navigator™"
        subheading="See how our AI + mentor-led journey blends admissions, test prep, visa, and ROI mapping into one clear, bias-free plan for Indian students aiming for global success."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Decisions"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/#"
      />
      {/*  */}
      {/* SECTION TO ADD (What Makes Global Navigator™ the First of Its Kind?) */}
      {/*  */}
      <CvpInside
        heading="Your Personalized Global Journey Powered by AI + Mentor"
        subheading="In just one structured session, you’ll explore:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      {/* SECTION TO MODIFY (Structured Journey One Dashboard. Three Tracks.) */}
      {/* SECTION TO MODIFY (Lines) */}
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
        heading="Who This Is For"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Whether you're aiming for Ivy League or a safe, affordable global degree this session will show you all your real options."
      />

      <CvpCta
        heading="What You’ll Receive"
        subheading=" Built by experts. Powered by AI. Grounded in empathy."
        features={[
          "Verified Admission Eligibility Check",
          "Scholarship Matching & Cost Planning",
          "Visual Aids (bar charts, checklists)",
          "Country, Course & University Recommendations",
          "Career ROI & Post-Study Visa Insight",
          "Session Revisit Access (Post-Login)",
          "Shortlist Table (5–10 Matched Universities)",
          "Final Report ",
          "One-on-One Human Mentor Session",
        ]}
        buttons={[
          {
            label: "Take the First Step Simulate Your Future Career",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/#",
          },
          {
            label: "Request a Demo for Schools / Partners",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/#",
          },
        ]}
      />
      {/* SECTION TO MODIFY (Why YPD Global Navigator™ Beats Traditional Counseling) */}
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
        heading="Built by Global Admissions Experts, Data Scientists, and AI Strategists"
        description="Youth Pulse Digital™ believes that studying abroad isn’t just a decision — it’s a guided journey toward the right fit."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Global Navigator™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career clarity isn’t a quiz result it’s the first real conversation with your future. CVP Lite guides that conversation."
        items={useCases}
      />
      {/*  */}
      {/* SECTION TO ADD (Sneak Peek: What’s Inside the Final Report) */}
      {/*  */}
      <CvpPricing
        heading="Pricing & Access"
        subheading="Innovation that feels premium, priced for you."
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
            title: "Premium Plan",
            description: "One-Time Counseling Session:",
            price: "₹3,499",
            priceText: "Book Now",
            features: [
              "Full AI + mentor session,",
              "Downloadable report",
              "Portal access",
              "60–90 min guided session",
              "Your journey saved in your YPD dashboard",
              "Optional mentor review available at additional cost",
            ],
            highlight: true,
          },
        ]}
        footerText="For Institutions: Custom packages available for 50+ aspirants. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its pilot launch in early 2024, Global Navigator™ has guided over 1,200 students and families from India, the Middle East, and Southeast Asia in making confident study-abroad decisions — without sales pressure, ranking bias, or incomplete information."
        stats={[
          {
            value: "94%",
            description:
              "of students said Global Navigator helped them shortlist the right countries and universities faster than any online search or agent consultation.",
          },
          {
            value: "88%",
            description:
              "of parents reported feeling reassured about their child’s safety, budget, and career prospects after reviewing the personalised report.",
          },
          {
            value: "91%",
            description:
              "of students said they would recommend Global Navigator to friends and relatives considering overseas education, especially those confused about country or course choices.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpCta
        heading="Start Your Global Navigation Journey"
        subheading="You’ve explored. You’re ready."
        description="Now it’s time to unlock your personalised study-abroad plan and take your first step toward a future built with clarity, confidence, and direction — from country and university shortlisting to application timelines and budget planning."
        buttons={[
          {
            label: "Subscribe Full Access (₹3,499 onwards)",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/#",
          },
          {
            label: "Create Account Now",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/#",
          },
        ]}
      />
      <CvpSecurity />
      <CvpFeedback reviews={ReviewsData} />

      {/*  */}
      {/*  */}
      {/*  */}

      {/*  */}
      {/* SECTION TO ADD (Why YPD Global Navigator™ Beats Traditional Counseling) */}
      {/*  */}

      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Go Global with Clarity?</span>
          </>
        }
        subheading="YPD Global Navigator™ isn’t just about applying abroad it’s about choosing the right path for who you are, what you value, and where you want to go."
        ctaText="Book My Session Now"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={globalNavigatorFaqs} />
    </>
  );
};

export default page;
