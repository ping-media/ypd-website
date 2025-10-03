import GetStartedModalTrigger from "@/components/book-demo/GetStartedModalTrigger";
import CvpFeature from "@/components/cvp/CvpFeature";
import CvpHero from "@/components/cvp/CvpHero";
import CvpSeperate from "@/components/cvp/CvpSeperate";
import Modules from "@/components/module/Modules";
import Faq from "@/components/other/Faq";
import CvpSteps from "@/components/other/steps/CvpSteps";
import { ArrowRight, Calendar, Folder, Link, Mail } from "lucide-react";

const hiringSteps = [
  {
    id: 1,
    title: "Post & Apply",
    description:
      "Role listings with filters → Candidate account → Document upload → Status tracker.",
  },
  {
    id: 2,
    title: "Screen & Shortlist",
    description:
      "Checklist validation → Rule-based scoring (weightage via config/DB) → Two-tier approvals.",
  },
  {
    id: 3,
    title: "Schedule & Interview",
    description:
      "Bulk/individual invites → Calendar-friendly links → Responses captured.",
  },
  {
    id: 4,
    title: "Offer & Verify",
    description:
      "Guided salary calculator → Branded offer PDF → Approval gate → Consent capture → Background check checklist.",
  },
  {
    id: 5,
    title: "Onboard & Train",
    description:
      "Welcome letter → Auto-create onboarding profile → Unlock induction modules before start date.",
  },
];
const features = [
  {
    icon: Mail,
    title: "Email Integration",
    description:
      "Send invites, offers, and reminders directly via email — keeping candidates and coordinators updated without extra effort.",
  },
  {
    icon: Calendar,
    title: "Calendar Links",
    description:
      "Embed interview-friendly calendar links inside emails so candidates can confirm or reschedule with ease.",
  },
  {
    icon: Folder,
    title: "Document Vault",
    description:
      "Connect to secure storage systems for easy access to resumes, certificates, and verification documents.",
  },
  {
    icon: Link,
    title: "School OS™ Linkage",
    description:
      "Optionally connect with YPD School OS™ for seamless transition of hired staff into employee records.",
  },
];
const steps = [
  {
    title: "Candidates Dashboard",
    subtitle:
      "Give candidates a clear, transparent view of their application journey.",
    features: [
      "Simple application with clear document checklist",
      "Transparent status timeline: Applied → Screening → Interview → Offer → Onboarding",
      "Smart email notifications for interviews, offers, onboarding tasks",
      "Candidate-friendly interface for a smooth application experience",
      "Intuitive timeline view to track overall progress",
      "Helpful prompts and reminders to complete pending steps",
    ],
  },
  {
    title: "Role Based Dashboards",
    subtitle:
      "Tailored workflows for Admin Head, Coordinator, Principal, or Owner/HR roles.",
    features: [
      "Tailored UI for Admin Head / Coordinator / Principal (or Owner/HR for MSMEs)",
      "Screening console with checklists, notes, weightage, shortlist",
      "Interview center with calendar ready emails, response capture & approval workflows",
      "Offer workbench with salary calculator, PDF generation, approvals",
      "Verification tracker for consent/background check status",
      "Induction control — module assign/reassign, completion view, auto certificate on pass",
    ],
  },
  {
    title: "MSME Focused Benefits",
    subtitle:
      "Specially designed to help small businesses and multi-site groups recruit efficiently.",
    features: [
      "Standardized pipeline from posting to offer in one place",
      "Pre join training so hires arrive Day 1 ready",
      "Zero guesswork — live statuses for candidates and HR/owners",
      "Secure & controlled — role based access and auditability",
      "Mobile first execution — quick actions for coordinators on the move",
      "Scales up — works for a single store/site or many",
    ],
  },
];
const hiringFaqs = [
  {
    question: "How does this system reduce HR workload for schools or MSMEs?",
    answer:
      "By unifying job posting, screening, interviews, offers, and induction into one dashboard, coordinators and owners save time and avoid juggling multiple tools.",
  },
  {
    question: "Can it support both academic institutions and small businesses?",
    answer:
      "Yes. The workflow is the same — whether hiring teachers for a school or staff for a retail/MSME business, the system adapts with role based dashboards.",
  },
  {
    question: "How transparent is the hiring process for candidates?",
    answer:
      "Candidates see a live status timeline from application to onboarding, reducing repetitive follow up calls and boosting trust.",
  },
  {
    question: "Can we customize screening and approvals?",
    answer:
      "Yes. Screening checklists and weightages are configurable, and the approval chain (Coordinator → Admin Head → Principal/Owner) is flexible.",
  },
  {
    question: "Is induction training mandatory before joining?",
    answer:
      "Admins can unlock pre join modules so new hires arrive trained in policies, conduct and basics from Day 1.",
  },
  {
    question: "What about background verification?",
    answer:
      "Consent forms and checklist inputs are built in; coordinators can log manual or external verification results directly in the system.",
  },
  {
    question: "Does it scale across multiple campuses or branches?",
    answer:
      "Yes. Multi tenant architecture means one view for group management, with separate dashboards for each campus or site.",
  },
  {
    question: "How secure is the data?",
    answer:
      "Role based logins, email verification, and audit trails keep sensitive candidate and employee data protected.",
  },
];
const page = () => {
  return (
    <>
      <CvpHero
        title="Hiring made predictable. Onboarding made effortless."
        subtitle={
          <>
            From job posting to screening, interviews, offers, background
            checks, and pre-join induction — everything runs in one clean
            workflow.
          </>
        }
        features={[
          "K-12 Schools, Colleges & Training Institutes → Teacher/staff hiring with policy-aligned induction.",
          "MSMEs & Small Businesses → Standardize recruiting without extra headcount; push basic trainings before Day 1.",
          "Multi-Campus / Multi-Site Groups → Central oversight with site-wise execution.",
          "Same reliable flow across roles → Admin Head, Coordinator, Principal (or Owner/HR for MSMEs), Candidate.",
        ]}
        ctaComponent={<GetStartedModalTrigger label="Book a Demo" />}
        secondaryButtonText="How it works"
        secondaryButtonLink="/hiring#works"
        image="/careerverse/hero.png"
        imageAlt="HR dashboard and candidate status timeline illustration"
        external={false}
      />
      <CvpSteps
        steps={hiringSteps}
        heading="A Simple, Transparent 5-Step Journey"
        subheading=" Everything is tracked. Nothing slips through the cracks."
      />
      <CvpFeature
        heading="Key Features That Empower Your Career Decisions"
        features={features}
        ctaText="Start Your Journey Now"
        ctaLink="/coming-soon"
      />
      <Modules
        steps={steps}
        images={{
          first: "/cvplite/cvplite1.png",
          second: "/cvplite/cvplite2.png",
        }}
      />
      <CvpSeperate
        bgImage="/cvplite/cvpbg.svg"
        heading={
          <>
            <span className="font-bold">
              Ready to Standardize Hiring & Onboarding?
            </span>
          </>
        }
        subheading="Whether you're a school, institute, or a small business — bring predictability to hiring and pre-join training with one simple system. Our team will help you set it up step by step."
        ctaText="Book a Demo"
        ctaHref="/hiring#form"
        ctaIcon={<ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />}
        external={false}
      />
      <Faq faqs={hiringFaqs} />
    </>
  );
};

export default page;
