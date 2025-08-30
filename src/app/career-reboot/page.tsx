import CrCards from "@/components/career-reboot/CrCards";
import CrSteps from "@/components/career-reboot/CrSteps";
import CvpCta from "@/components/cvp/CvpCta";
import CvpFeedback from "@/components/cvp/CvpFeedback";
import CvpHero from "@/components/cvp/CvpHero";
import CvpImpact from "@/components/cvp/CvpImpact";
import CvpInside from "@/components/cvp/CvpInside";
import CvpJourney from "@/components/cvp/CvpJourney";
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
  GraduationCap,
} from "lucide-react";
import { FileText } from "lucide-react";

const insideData = [
  {
    icon: FileText,
    title: "Workplace Scenarios",
    description: "Late reporting, difficult boss, SOP issues",
  },
  {
    icon: Lightbulb,
    title: "Customer Handling",
    description: "Angry client, refund call, shop delay",
  },
  {
    icon: Compass,
    title: "Emotional Capsules",
    description: "Burnout, confidence, work-life balance",
  },
  {
    icon: File,
    title: "Digital Capsules",
    description: "Google tools, email, time tracking",
  },
  {
    icon: Venus,
    title: "Women-Specific ",
    description: "Gaps, family bias, restart fears",
  },
  {
    icon: PersonStanding,
    title: "Freelancer Focus",
    description: "Payment delays, negotiation, self-pitching",
  },
];
const steps = [
  {
    id: 1,
    title: "Scenario Capsules",
    description:
      "Real-world simulations: customer calls, team tasks, shop floor issues, delivery challenges",
    icon: "/careerverse/s1.svg",
  },
  {
    id: 2,
    title: "Skill Unlocking",
    description: "Emotional Handling, Digital Readiness, Workplace Skills",
    icon: "/careerverse/s2.svg",
  },
  {
    id: 3,
    title: "Progress Dashboard",
    description: "Track growth, unlock new capsules, build soft skills",
    icon: "/careerverse/s3.svg",
  },
];
const crData = [
  {
    icon: FileText,
    title: "20+ Role Clusters",
    description:
      "Master diverse job skills through realistic, scenario-based training capsules.",
  },
  {
    icon: Lightbulb,
    title: "Emotional Scenarios",
    description: "Practice handling workplace emotions with guided Scenarios",
  },
  {
    icon: Compass,
    title: "Track via Progress Tracker",
    description: "See real-time skill progress and completion milestones.",
  },
  {
    icon: File,
    title: "Get Completion Certificate (Lite & Pro only)",
    description:
      "Earn a shareable certificate after finishing all assigned capsules.",
  },
  {
    icon: GraduationCap,
    title: "AI Reflection + Journal (Pro only)",
    description: "Receive AI Feedback and maintain a personal growth journal.",
  },
];

const audience = [
  {
    id: 1,
    title: "Mid-Career Professionals",
    description:
      "Stuck in the same role for years? We help you reimagine your path with targeted upskilling and industry-ready strategies.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 2,
    title: "Early-Career Professionals Seeking Change",
    description:
      "In your first 3–5 years of work and feeling the fit isn’t right? We guide you to roles that align with your strengths and ambitions.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 3,
    title: "Professionals Returning After a Break",
    description:
      "Re-enter the workforce with updated skills, renewed confidence, and a clear market re-entry plan.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 4,
    title: "Freelancers & Gig Workers",
    description:
      "Expand your service offerings, pivot to high-demand areas, and build long-term stability.",
    icon: "/cvplite/r5.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 5,
    title: "Field & Support Staff",
    description:
      "Move into supervisory, client-facing, or technical roles with a structured skill growth roadmap.",
    icon: "/cvplite/r4.svg",
    image: "/cvplite/uses.png",
  },
];
const journeySteps = [
  {
    id: "01",
    text: "20+ years of combined experience in career transitions, upskilling, and industry placements.",
  },
  {
    id: "02",
    text: "AI-powered guidance mapped to live job market trends and skill demand.",
  },
  {
    id: "03",
    text: "Actionable feedback. Practical roadmaps. Measurable results.",
  },
];
const useCases = [
  {
    id: 1,
    title: " Career Direction Unclear",
    quote: `“I’m not sure where my current skills fit in today’s market.”`,
    description:
      "Career Reboot Navigator runs a skill-to-role scan to identify industries and functions where your experience translates directly — cutting through uncertainty with data-backed matches.",
    icon: "/cvplite/r1.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 2,
    title: "Skill Gaps Blocking Progress",
    quote: `“I keep getting interviews but never the offer.”`,
    description:
      "The Navigator pinpoints missing competencies and delivers targeted capsules from industry tools to workplace communication ensuring you close the exact gaps holding you back.",
    icon: "/cvplite/r2.svg",
    image: "/cvplite/cvpworks.png",
  },
  {
    id: 3,
    title: "Industry in Decline",
    quote: `“My sector is shrinking, I need a future-proof path.”`,
    description:
      "AI-powered market mapping highlights emerging sectors and growing niches, along with bridge skills to help you transition without starting over.",
    icon: "/cvplite/r3.svg",
    image: "/cvplite/uses.png",
  },
  {
    id: 4,
    title: "Confidence Rebuild Needed",
    quote: `“After a break, I don’t know if I’m still competitive.”`,
    description:
      "The Navigator pairs role simulations with mentor feedback to restore confidence and sharpen decision-making for high-stakes workplace scenarios.",
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

const crFaqs = [
  {
    question: "Is this better than generic career coaching?",
    answer:
      "Depends. If you want flexible, AI-backed, and industry-aligned guidance with actionable transition roadmaps, this is unmatched.",
  },
  {
    question: "Can I switch industries with this?",
    answer:
      "Yes. We assess transferable skills and design a realistic path for shifting to your target sector.",
  },
  {
    question: "Can I get feedback from an industry expert?",
    answer:
      "Yes. Alongside AI-driven insights, you can opt for sessions with real mentors who understand your field.",
  },
  {
    question: "Does this work on mobile?",
    answer:
      "Absolutely. Access all tools, assessments, and reports on any device, anytime.",
  },
  {
    question: "Will I get a personalized reboot plan?",
    answer:
      "Yes. You’ll receive a detailed, step-by-step transition plan tailored to your goals and timeline.",
  },
  {
    question: "Can employers view my readiness report?",
    answer: "Only if you choose to share it. The report is yours to control.",
  },
  {
    question: "Is this based on real market data?",
    answer:
      "Yes. It uses live job market insights, skill demand trends, and verified industry pathways.",
  },
  {
    question: "Is this useful if I’m already employed?",
    answer:
      "Definitely. It’s designed to help you move up, switch roles, or future-proof your career.",
  },
  {
    question: "What if I need advanced coaching after this?",
    answer:
      "We offer premium mentorship add-ons for deeper, role-specific transition guidance.",
  },
];

const page = () => {
  return (
    <>
      <CvpHero
        title="Real Skills. Real Scenarios. Real Change."
        subtitle={<>A job-readiness mentor for India’s next-gen workforce</>}
        features={[
          "Built for 10th pass to graduates",
          "Covers 18+ job clusters office, retail, field, digital",
          "For first-job seekers, career re-starters & freelancers",
        ]}
        buttonText="Start Free"
        buttonLink="/program"
        image="/career-reboot/hero.png"
        imageAlt="mission nda"
      />
      <CvpVideo
        heading="What is Career Reboot Navigator?"
        subheading="See how this AI mentor prepares you for real-world work challenges."
        videoId="ScMzIvxBSi4"
        thumbnail="/video.png"
      />
      <CvpInside
        heading="What You’ll Learn What You’ll Learn"
        subheading="In just one structured session, you’ll explore:"
        features={insideData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      {/* SECTION TO MODIFY (IMAGE FULL WIDTH) */}
      <CvpLiteWorks
        heading="Who is this for?"
        subheading="Youth Pulse Digital™ believes that career clarity is not just a goal — it’s a guided evolution."
        audience={audience}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
        ctaSubtext="Hindi + Simple English  • Mobile Friendly  • Voice-guided Mentoring Coming Soon"
      />
      {/* SECTION TO MODIFY */}
      <CrSteps
        heading="How it Works"
        subheading="We don’t reveal the full backend flow. But here’s what makes Counseling Guru™ unlike anything else."
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpPricing
        heading="Pricing & Access"
        subheading="Career Reboot Navigator is a premium experience made affordable"
        plans={[
          {
            title: "Free",
            description: "Demo Capsules Only",
            price: "₹0",
            features: [
              "3 demo Core Skill capsules (read-only)",
              "Dashboard preview",
            ],
          },
          {
            title: "Pro (Recommended)",
            description: "All Clusters, retry + reflection",
            price: "₹1,499",
            priceText: "Subscribe Now",
            features: [
              "Core Skills",
              "Industry Skills",
              "3 Retries per skill",
              "Weakness Zones",
              "AI Reflection",
              "Role Switch",
              "Summary Report",
              "Certificate",
            ],
            highlight: true,
          },
          {
            title: "Lite",
            description: "Full 1 Cluster + Limited Retry",
            price: "₹799",
            priceText: "Start Lite",
            features: [
              "Core Skills",
              "Mentor Reflection",
              "Limited Retries",
              "Progress Tracker + Badges",
              "Report",
            ],
          },
        ]}
        footerText="Bulk Discounts for Colleges & NGOs. Please "
        footerLink={{ text: "Contact Us", href: "/contact" }}
      />
      <CrCards
        heading="Your Progress, Your Way"
        features={crData}
        ctaText="Start Your Journey Today"
        ctaLink="/#"
      />
      <WhyCvpLite
        heading="Why Choose Us?"
        subheading="YPD doesn’t sell assessments. We deliver transformation."
        avoidTitle="Others Don’t"
        experienceTitle="What We Offer"
        avoid={[
          "Global/Generic Content",
          "English-Only Platforms",
          "Desktop-Based Tools",
          "Dry MCQ Learning",
        ]}
        experience={[
          "100% Indian Workplace Scenarios",
          "Tier 2–4 Friendly Language",
          "No Need for Laptop",
          "AI with Emotion + Reflection",
        ]}
        ctaText="Try the Career Reboot Navigator™"
        ctaLink="/#"
      />
      {/*  */}
      {/* SECTION TO ADD (HOW TO START) */}
      {/*  */}
      <CvpCta
        heading="Want to Partner?"
        subheading=" Built by experts. Powered by AI. Grounded in empathy."
        features={[
          "Colleges → Skill certificate integration",
          "NGOs → Free plan codes for underserved youth",
          "Employers → Hire trained candidates directly",
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
      <CvpFeedback reviews={ReviewsData} />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Try on Mobile or Desktop</span>
          </>
        }
        subheading="Works on all browsers | No app download needed"
        ctaText="Start Your Career Reboot"
        ctaHref="/start"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
      />
      <Faq faqs={crFaqs} />
      <CvpJourney
        heading="Built by Career Strategists, Industry Experts, and AI Specialists"
        description="Youth Pulse Digital™ believes that career clarity is not just a goal — it’s a guided evolution."
        steps={journeySteps}
        imageSrc="/cvplite/journey.png"
        imageAlt="CVP Journey"
        ctaText="Start Career Reboot Navigator™"
        ctaHref="/start"
        ctaIcon={<Zap size={18} />}
        footerText="Try our Career Reboot Navigator™ a 7-day intensive to design your next career chapter with clarity and confidence."
      />
      <CvpRealworld
        heading="Real World Use Cases"
        subheading="Career reinvention isn’t guesswork — it’s structured discovery. Career Reboot Navigator identifies your barriers, maps your transferable skills, and guides you into roles where you can thrive."
        items={useCases}
      />
      <WhyCvpLite
        heading="Structured Journey. One Dashboard. Full Career Comeback."
        subheading="Plan your career revival with precision — not guesswork or recycled advice. Career Reboot Navigator guides you step-by-step through targeted skill mapping, role alignment, and industry-specific capsules, all within a single, intuitive dashboard. Track progress, unlock adaptive learning, and access real-world pathways built for professionals ready to reset, re-skill, and re-enter with confidence."
        avoidTitle="Feature"
        experienceTitle="What Career Reboot Navigator Offers"
        avoid={[
          "Structured Career Reset",
          "One Unified Dashboard",
          "Targeted Skill Mapping",
          "Adaptive Learning Flow",
          "Industry-Specific Pathways",
          "Progress & Readiness Tracking",
        ]}
        experience={[
          "A guided, step-by-step roadmap to re-enter or pivot in your career, with built-in role validation and skill alignment.",
          "All progress, role maps, skill gaps, and capsule unlocks in one intuitive interface — no scattered tools or manual tracking.",
          "Identifies exact employability gaps and matches you with role-relevant skill capsules for rapid upskilling.",
          "Dynamic capsule sequencing that adjusts to your performance and professional goals.",
          "Role-to-skill pathways tailored to your chosen sector, ensuring relevance to current market demands.",
          "Real-time dashboard metrics to monitor skill mastery, role readiness, and employability score.",
        ]}
        ctaText="Try the Career Reboot Navigator™"
        ctaLink="/#"
      />
      {/*  */}
      {/* SECTION TO ADD (CR VS OTHERS) */}
      {/*  */}
      <CvpImpact
        heading="Real Impact, Real Results"
        description="Since its launch, Career Reboot Navigator™ has guided mid-career professionals, returning workforce members, and career shifters across industries to successfully reset their career paths with clarity, confidence, and market-aligned skills—without generic advice, guesswork, or overwhelming jargon."
        stats={[
          {
            value: "91%",
            description:
              "of users said Career Reboot Navigator™ helped them identify realistic, high-potential career paths aligned to their skills, industry trends, and personal aspirations.",
          },
          {
            value: "87%",
            description:
              "reported feeling more confident in navigating career transitions after receiving their personalized Career Reset Plan.",
          },
          {
            value: "89%",
            description:
              "said they would recommend Career Reboot Navigator™ to peers facing career stagnation, redundancy, or uncertainty about industry shifts.",
          },
        ]}
        image={{
          src: "/cvplite/impact.png",
          alt: "Student and parent smiling",
        }}
      />
      <CvpSecurity />
    </>
  );
};

export default page;
