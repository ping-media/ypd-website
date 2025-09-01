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
    <section className="flex justify-center bg-white p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl sm:text-3xl">
            Blending Artificial Intelligence With Human Wisdom
          </h2>
          <p className="text-brand-gray max-w-4xl text-center text-base sm:text-lg">
            Artificial Intelligence that works with proprietary frameworks,
            logic designs, knowledge base &amp; years of research. Guidance
            becomes personal, data driven, logical, culturally sensitive,
            enhancing user-first outcomes and trust.
          </p>
        </div>
        {/* Content */}
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 sm:gap-12 lg:flex-row">
          {/* Left - Steps */}
          <div className="flex w-full flex-col gap-4 sm:gap-6 lg:w-[60%]">
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
          <div className="relative h-[440px] w-full overflow-hidden rounded-xl shadow-lg lg:w-[40%]">
            <Image
              src="/ai.png"
              alt="Happy Students"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-black/30 p-10 text-center text-white">
              <h3 className="text-base font-semibold sm:text-lg">
                Why Students Love It
              </h3>
              <p className="mx-auto max-w-sm text-xs sm:text-sm">
                &quot;I liked that the AI gave me fast insights — but the mentor
                made it make sense to me. I felt seen, not just sorted.&quot;
              </p>
            </div>
          </div>
        </div>
        <Link href="/about" className="btn-primary btn-size">
          Read More
          <ArrowRight size={24} className="shrink-0" />
        </Link>
      </div>
    </section>
  );
};

export default Insights;
