import CvpFeature from "@/components/cvp/CvpFeature";
import CvpHero from "@/components/cvp/CvpHero";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Modules from "@/components/module/Modules";
import Faq from "@/components/other/Faq";
import CvpSteps from "@/components/other/steps/CvpSteps";
import { ArrowRight, Bell, Calendar, CreditCard, FileText } from "lucide-react";
import GetStartedModalTrigger from "@/components/book-demo/GetStartedModalTrigger";

const features = [
  {
    icon: FileText,
    title: "Schools",
    description: "Board-aligned tests (CBSE, ICSE, IB, State Boards).",
  },
  {
    icon: Calendar,
    title: "Colleges",
    description: "Entrance screening, document handling, interview scheduling.",
  },
  {
    icon: CreditCard,
    title: "Private Institutes",
    description: " Admission tests for professional/vocational programs.",
  },
  {
    icon: Bell,
    title: "Multi-Branch Groups",
    description: "Centralized dashboards with branch-wise workflows.",
  },
];

const steps = [
  {
    title: "For Students & Parents",
    features: [
      "Seamless Registration → OTP/email login, multilingual options",
      "Adaptive Online Tests → Board/stream/subject aligned, difficulty-based.",
      "Transparent Journey → Track application → test → interview → final admission.",
      "Documents in One Place → Upload certificates, mark sheets, ID proofs.",
      "Instant Updates → Test tokens, results, and interview calls via Dashboard/SMS/email.",
    ],
    buttonText: "Inquire Now",
    buttonLink: "/contact",
  },
  {
    title: "For Institutions",
    features: [
      "Custom Test Designer → Create question banks by board/stream/grade/subject.",
      "Application Lifecycle Manager → From form submission to final seat confirmation.",
      "Interview & Counseling Scheduler → Allocate slots, reschedule, send reminders.",
      "Scholarship & Quota Logic → Auto-apply score-based scholarships and quotas.",
      "Analytics Dashboard → Admission funnel, test performance, seat conversion.",
    ],
    buttonText: "Inquire Now",
    buttonLink: "/contact",
  },
];

const admissionSteps = [
  {
    id: 1,
    title: "Register & Pay",
    description: "Students/parents sign up with OTP/email.",
  },
  {
    id: 2,
    title: "Apply",
    description: "Submit application and upload required documents.",
  },
  {
    id: 3,
    title: "Test",
    description:
      "Secure token-based online test, randomized for each student, delivered through the platform.",
  },
  {
    id: 4,
    title: "Interview",
    description:
      "Institutions schedule and manage interviews digitally, ensuring every interview is organized and tracked within the platform.",
  },
  {
    id: 5,
    title: "Decide",
    description:
      "Auto-generated reports, offer letters, and admission confirmations",
  },
];

const admissionFaqs = [
  {
    question: "Which boards and exams are supported?",
    answer:
      "The YPD Admission Test System™ currently supports CBSE, ICSE, State Boards, IB, IGCSE, and American/British curricula from Pre-Nursery up to Class 12. For higher education, the same engine can be configured for college entrance, vocational, and institute-specific admission tests with board/stream/subject-aligned MCQs.",
  },
  {
    question: "Can colleges use this for entrance exams?",
    answer:
      "Yes. While built for K–12 schools, the system is designed as a multi-tenant SaaS product. Colleges and private institutes can configure custom test banks, admission workflows, and interview scheduling — whether for undergraduate entry, professional programs, or vocational courses.",
  },
  {
    question: "How secure are the tests?",
    answer:
      "Tests are delivered via token-based secure access, randomized per student, and once a test is started, the version is locked for that user. Data is stored with role-based permissions, complete audit trails, and compliance with GDPR/state education guidelines. The platform also supports offline fallback to handle poor connectivity.",
  },
  {
    question: "Can parents/students track status online?",
    answer:
      "Yes. Every applicant receives a personalized dashboard with:\n• Application status tracker\n• Test history and results\n• Document upload & verification status\n• Interview slot updates\n• Notifications for shortlist, offer letters, and re-submissions.",
  },
  {
    question: "Can institutes set custom scholarship cutoffs?",
    answer:
      "Yes. Institutes can configure quota categories and score-based scholarships directly in the admin panel. Category-wise cutoffs, auto-triggers for scholarships, and notification alerts for parents are built into the Test Config & Scholarship Management module.",
  },
  {
    question: "What reporting options are available?",
    answer:
      "The system auto-generates branded PDFs for:\n• Application summary reports\n• Test score reports\n• Interview slot confirmations\n• Offer letters with admission terms\nAdmins have access to live dashboards for applications per grade/stream, test performance breakdowns, interview slot utilization, and conversion ratios (applied → shortlisted → admitted).",
  },
  {
    question:
      "Is this suitable for Tier 2/3 institutions with low tech support?",
    answer:
      "Yes. The system is lightweight, mobile-first, and progressive-web-app enabled. It works even on low bandwidth and includes offline test capability. Affordable pricing tiers are designed to make it accessible for schools and colleges in Tier 2/3 cities.",
  },
  {
    question: "Does it support multiple campuses?",
    answer:
      "Yes. Being a multi-tenant SaaS platform, each school or campus operates with an isolated code and its own branded dashboard. Multi-branch groups can centrally monitor applications, tests, and admissions across campuses.",
  },
];
const page = () => {
  return (
    <>
      <CvpHero
        title="Admissions Made Smarter. Testing Made Simpler."
        subtitle={
          <>
            A multi-tenant digital admission system for{" "}
            <span className="relative inline-block px-1">
              <span className="text-brand-primary relative z-10 font-semibold">
                Schools, Colleges, and Institutes
              </span>
              <span className="absolute right-0 bottom-0 left-0 z-0 h-1/3 translate-y-[-10%] rounded-b-xs bg-green-200"></span>
            </span>
            . From application intake to board/stream/subject-aligned online
            tests, document verification, interviews, and final admissions — all
            in one seamless platform.
          </>
        }
        features={[
          "Schools → Board-aligned tests (CBSE, ICSE, IB, State Boards).",
          "Colleges → Entrance screening, document handling, interview scheduling.",
          "Private Institutes → Admission tests for professional/vocational programs.",
          "	Multi-Branch Groups → Centralized dashboards with branch-wise workflows.",
        ]}
        ctaComponent={<GetStartedModalTrigger label="Request Demo" />}
        secondaryButtonText="How it works"
        secondaryButtonLink="/admission#works"
        image="/careerverse/hero.png"
        imageAlt="Digital admission platform illustration"
        external={false}
      />
      <Modules
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpSteps
        steps={admissionSteps}
        heading="A Simple, Transparent 5-Step Journey"
        subheading=" Everything is tracked. Nothing slips through the cracks."
      />
      <CvpFeature
        heading="Built to Work With Your Systems"
        features={features}
      />

      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">Ready to Simplify Admissions?</span>
          </>
        }
        subheading="Choose the YPD Admission System™ module that fits your institution — from application intake to online tests, interviews, and final admissions. Our team will guide you through setup and onboarding."
        ctaText="Request Demo"
        ctaHref="/admission#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq faqs={admissionFaqs} />
    </>
  );
};

export default page;
