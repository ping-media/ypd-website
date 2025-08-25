import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Career Vision Program™?",
    answer:
      "CareerVerse™ is an interactive career discovery and planning platform designed to help students identify their strengths, explore career options, and build a personalized growth plan.",
  },
  {
    question: "What is Career Reinvention Program™?",
    answer:
      "It’s a specialized program to help individuals pivot their careers by acquiring new skills and exploring emerging opportunities.",
  },
  {
    question: "What is CVP Advance™?",
    answer:
      "CVP Advance™ offers advanced assessments and career planning tools for in-depth exploration.",
  },
  {
    question: "What should I choose CVP Lite or Advance?",
    answer:
      "Choose CVP Lite for a quick overview, and Advance if you want detailed, personalized guidance.",
  },
  {
    question: "How can CareerVerse help me understand my future role?",
    answer:
      "It provides career simulations, skill assessments, and mentor guidance to align your strengths with career goals.",
  },
  {
    question: "What are Exam Mentors?",
    answer:
      "It’s a specialized program to help individuals pivot their careers by acquiring new skills and exploring emerging opportunities.",
  },
  {
    question: "What are Entrance Mentors?",
    answer:
      "CVP Advance™ offers advanced assessments and career planning tools for in-depth exploration.",
  },
  {
    question: "What frameworks are used for guidance?",
    answer:
      "Choose CVP Lite for a quick overview, and Advance if you want detailed, personalized guidance.",
  },
  {
    question: "How can I explore multiple career roles?",
    answer:
      "It provides career simulations, skill assessments, and mentor guidance to align your strengths with career goals.",
  },
  {
    question: "Which Career Pathway is good for me?",
    answer:
      "CVP Advance™ offers advanced assessments and career planning tools for in-depth exploration.",
  },
];

const Faq = () => {
  return (
    <div className="p-4 sm:p-10 lg:p-20 max-w-[1440px] mx-auto flex flex-col gap-4 sm:gap-10 lg:gap-14 font-lato">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-4 sm:gap-10 lg:gap-24">
        {/* Left side */}
        <div className="flex flex-col gap-8 shrink-0 w-full lg:w-[364px]">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="font-red-rose text-2xl sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <Link
              href="#"
              className="text-brand-fg rounded-lg bg-brand-primary hover:bg-brand-primary/90 border border-brand-accent text-lg flex justify-center items-center px-3 py-3 sm:px-5"
            >
              Still have questions? Contact Support
            </Link>
          </div>

          {/* Image - hidden below lg */}
          <div className="relative w-full flex-1 min-h-[400px] hidden lg:block">
            <Image
              src="/faq.png"
              alt="FAQ Illustration"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1 min-w-0 w-full lg:max-w-[856px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-4 py-3 text-left text-xl font-red-rose hover:bg-gray-50">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-brand-gray font-lato text-base">
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
