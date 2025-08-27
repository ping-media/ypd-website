import Image from "next/image";
import InsightCard from "./InsightCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Insights = () => {
  const insightData = [
    {
      number: "01",
      title: "AI Diagnoses Patterns",
      description:
        "Our AI-driven mentors scan thinking styles, performance gaps, and readiness zones. It flags what’s working and what’s not.",
    },
    {
      number: "02",
      title: "Human Mentor Adds Context",
      description:
        "Our Mentors, Industry Experts developed frameworks & logics benchmark global standards of experiential learning adding context to AI-driven journeys.",
    },
    {
      number: "03",
      title: "Combined Plan = Real Smarter & Actionable",
      description:
        "YPD AI Mentors are conversational coaches, not chat-bots. Outputs are auto-reviewed and seamlessly connected into the user journey. Every touch point created is personal.",
    },
  ];

  return (
    <section className="p-4 sm:p-10 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4">
          <h2 className="font-red-rose text-2xl sm:text-3xl text-center">
            Blending Artificial Intelligence With Human Wisdom
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl text-center">
            Artificial Intelligence that works with proprietary frameworks,
            logic designs, knowledge base &amp; years of research. Guidance
            becomes personal, data driven, logical, culturally sensitive,
            enhancing user-first outcomes and trust.
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-12 max-w-7xl w-full">
          {/* Left - Steps */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[60%]">
            {insightData.map((insight) => (
              <InsightCard
                key={insight.number}
                number={insight.number}
                title={insight.title}
                description={insight.description}
              />
            ))}
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[40%] rounded-xl overflow-hidden shadow-lg h-[440px]">
            <Image
              src="/ai.png"
              alt="Happy Students"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end gap-2 p-10 text-white text-center">
              <h3 className="font-semibold text-base sm:text-lg">
                Why Students Love It
              </h3>
              <p className="text-xs sm:text-sm max-w-sm mx-auto">
                &quot;I liked that the AI gave me fast insights — but the mentor
                made it make sense to me. I felt seen, not just sorted.&quot;
              </p>
            </div>
          </div>
        </div>
        <Link
          href="#"
          className="flex justify-center items-center gap-2 rounded-lg text-brand-fg text-sm sm:text-base lg:text-lg bg-brand-primary border border-brand-accent py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto hover:bg-brand-primary/90"
        >
          Read More
          <ArrowRight size={24} className="shrink-0" />
        </Link>
      </div>
    </section>
  );
};

export default Insights;
