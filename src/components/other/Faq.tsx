import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqProps {
  faqs?: FAQItem[]; // optional prop
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What is Career Vision Program™?",
    answer:
      "It helps students find their strengths, choose streams, and match careers using AI + mentor logic, with clear step-by-step guidance.",
  },
  {
    question: "What is Career Reinvention Program™?",
    answer:
      "It supports college students and working professionals to restart or switch careers through skillgap mapping, role-based plans, and guided upskilling.",
  },
  {
    question: "What is CVP Advance™?",
    answer:
      "It’s a deeper career clarity program with adaptive tests, alternate role suggestions, and a detailed career report for student and parent alignment.",
  },
  {
    question: "What should I choose CVP Lite or Advance?",
    answer:
      "Lite is for early clarity on streams and roles. Advance is for detailed career options, alternates, and deeper guidance with reports.",
  },
  {
    question: "How can CareerVerse help me understand my future role?",
    answer:
      "CareerVerse simulates real-world job journeys, showing challenges, decisions, and skills needed, so you feel the reality of careers before choosing.",
  },
  {
    question: "What are Exam Mentors?",
    answer:
      "Exam Mentors guide Class 10, 12 students of various boards. You study, revise, test with AI Mentor built to personalize your journey towards preparing you for your board exams with clarity & strategy.",
  },
  {
    question: "What are Entrance Mentors?",
    answer:
      "AI Mentors coach students to prepare for competitive exams like NDA, UPSC, NEET, CUET with structured study capsules, past papers, and adaptive tracking dashboards.",
  },
  {
    question: "What frameworks are used for guidance?",
    answer:
      "YPD uses Indian and global frameworks like RIASEC, Vark, MBTI, tested psychometric frameworks, aptitude clusters, and adaptive tests to ensure future-ready career pathways.",
  },
  {
    question: "How can I explore multiple career roles?",
    answer:
      "You can simulate different roles and compare them for greater clarity on skills, pathways, and job market outlook in CareerVerse.",
  },
  {
    question: "Which Career Pathway is good for me?",
    answer:
      "It depends on your profile. YPD Frameworks and AI Models combine to suggest best-fit pathways based on your skills, interests, passion, strengths, social & emotional needs, trends and employability needs",
  },
];

const Faq = ({ faqs }: FaqProps) => {
  const items = faqs && faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="font-lato mx-auto flex max-w-[1440px] flex-col gap-4 p-4 sm:gap-10 sm:p-10 lg:gap-14 lg:p-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-10 lg:flex-row lg:gap-24">
        {/* Left side */}
        <div className="flex w-full shrink-0 flex-col gap-8 lg:w-[364px]">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-red-rose text-2xl sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <Link href="#" className="btn-primary btn-size">
              Still have questions? Contact Support
            </Link>
          </div>

          {/* Image - hidden below lg */}
          <div className="relative hidden min-h-[400px] w-full flex-1 lg:block">
            <Image
              src="/faq.png"
              alt="FAQ Illustration"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full min-w-0 flex-1 lg:max-w-[856px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-6"
          >
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="font-red-rose px-4 py-3 text-left text-xl hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-gray font-lato px-4 pb-4 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
