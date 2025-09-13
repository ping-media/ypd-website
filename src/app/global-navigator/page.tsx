import Vs from "@/components/career-reboot/Vs";
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
import Tables from "@/components/mission-nda/Tables";
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
    image: "/global-navigator/2.png",
  },
  {
    id: 3,
    title: "Students confused between countries, exams, or university types",
    description:
      "Cuts through the noise with data-backed comparisons, adaptive guidance, and step-by-step application support.",
    icon: "/cvplite/r3.svg",
    image: "/global-navigator/3.png",
  },
  {
    id: 4,
    title: "Parents seeking full-picture clarity before making major decisions",
    description:
      "Gives parents an at-a-glance view of costs, timelines, and career prospects for informed, confident decision-making.",
    icon: "/cvplite/r5.svg",
    image: "/global-navigator/4.png",
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
    image: "/global-navigator/4.png",
  },
  {
    id: 2,
    title: "Too Many University Options",
    quote: `There are so many universities, I don’t know which ones fit me.`,
    description:
      "Global Navigator helps you shortlist countries that match your academic goals, budget, and lifestyle preferences — all without relying on generic rankings.",
    icon: "/cvplite/r2.svg",
    image: "/global-navigator/3.png",
  },
  {
    id: 3,
    title: "Parent Support Needed",
    quote: `“My parents want clarity before investing in my education abroad.”`,
    description:
      "Global Navigator creates a detailed report that aligns your aspirations with parental concerns — making decisions clear and confident.",
    icon: "/cvplite/r3.svg",
    image: "/global-navigator/r3.png",
  },
  {
    id: 4,
    title: "Budget vs. Opportunity",
    quote: `“I want the best education possible, but within a set budget.”`,
    description:
      "Global Navigator matches you with cost-effective universities and scholarship pathways that don’t compromise on quality.",
    icon: "/cvplite/r4.svg",
    image: "/global-navigator/r4.png",
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
    image: "/global-navigator/re1.png",
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
    image: "/global-navigator/re2.png",
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
    image: "/global-navigator/re3.png",
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
    image: "/global-navigator/re4.png",
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
    image: "/global-navigator/re5.png",
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
    image: "/global-navigator/re6.png",
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
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>{" "}
            blends real-time AI insights with expert human mentorship to craft a
            personalized roadmap for your global higher education dreams.
          </>
        }
        features={["UG & PG", "USA", "UK", "Canada", "Australia", "Everywhere"]}
        featuresTwoCols
        buttonText="Book Your Slot Now"
        buttonLink="/global-navigator/#video"
        secondaryButtonLink="/#"
        secondaryButtonText="See How It Works"
        image="/global-navigator/hero.png"
        imageAlt="global navigator"
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
      <WhyCvpLite
        heading="What Makes Global Navigator™ the First of Its Kind?"
        subheading="The only career + college guidance system that blends global knowledge with Indian student realities."
        avoidTitle="Old-Style Overseas Counseling"
        experienceTitle="YPD Global Navigator™"
        avoid={[
          "Consultant-led, generic advice",
          "Only about “which country to pick”",
          "Pushy agency agendas",
          "No structured session logic",
          "No revisit or reuse",
        ]}
        experience={[
          "AI-powered + mentor-driven data-backed clarity",
          "Includes admissions, test prep, visa, career ROI",
          "100% student-first, unbiased & transparent",
          "Capsule-based 10-step journey with locked insights",
          "Lifetime re-access to your personalized journey",
        ]}
        ctaText="Try Global Navigator™"
        ctaLink="/#"
      />
      <CvpInside
        heading="Your Personalized Global Journey Powered by AI + Mentor"
        subheading="In just one structured session, you’ll explore:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      <Tables
        heading="Structured Journey. One Dashboard. Global Pathways."
        subheading="Because studying abroad or choosing global careers shouldn’t rely on random Google searches or expensive agents."
        trackTitle="Feature"
        avoidTitle="What Others Do"
        experienceTitle="Global Navigator™ Offers"
        track={[
          "Real Global Path Insights",
          "Personalized Affordability Mapping",
          "Visa & Career Readiness Linkage",
          "Adaptive Guidance Tracks",
          "Parent + Student Clarity Reports",
        ]}
        avoid={[
          "Static country brochures or paid agent advice",
          "Generic cost estimates",
          "One-off consultancy calls",
          "Same advice for all students",
          "Parents left out of loop",
        ]}
        experience={[
          "Contextualized, AI-driven insights on study + work options across top destinations",
          "Tailored budget planning with tuition, living costs, and scholarship pathways",
          "End-to-end linkage: visa prep, housing, career outlook after graduation",
          "Tracks based on profile: Ivy League aspirant, affordable global degree, or skill-first migration",
          "Transparent reports for families with side-by-side options and clear action plans",
        ]}
        ctaText="Try Global Navigator™"
        ctaLink="/#"
      />

      {/* SECTION TO MODIFY (Lines) */}
      <CvpLiteSteps
        heading="How it Works"
        subheading="Global Navigator™ is a structured and adaptive journey to help you find Global Careers"
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
        expandableFeatures={true}
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
            label: "Simulate Your Future Career",
            icon: <Zap size={18} />,
            variant: "primary",
            href: "/#",
          },
          {
            label: "Request a Demo",
            icon: <UserPlus size={18} />,
            variant: "outline",
            href: "/#",
          },
        ]}
      />
      <Vs
        heading="Why YPD Global Navigator™ Beats Traditional Counseling"
        subheading="Because you shouldn't choose your career based on guesswork or generic quizzes."
        leftTitle="Feature"
        midLeftTitle="Education Agents"
        midRightTitle="Edtechs"
        rightTitle="YPD Global Navigator™"
        leftItems={[
          "Neutral, student-first guidance",
          "AI-powered decision engine",
          "Global + Indian stream understanding",
          "One-time session + lifetime access",
          "Test + Visa + Career in one journey",
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
        ctaText="Try Global Navigator™"
        ctaLink="/get-started"
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
        subheading="Finding the Best College isn’t a guess work it’s the first real conversation with your future. Global Navigator guides that conversation."
        items={useCases}
      />
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
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Go Global with Clarity?</span>
          </>
        }
        subheading="YPD Global Navigator™ isn’t just about applying abroad it’s about choosing the right path for who you are, what you value, and where you want to go."
        ctaText="SneakPeak View"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={globalNavigatorFaqs} />
    </>
  );
};

export default page;
