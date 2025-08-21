import { CheckSquare, Zap } from "lucide-react";
import Link from "next/link";

export default function WhyCvpLite() {
  const avoid = [
    "Stressful long tests or irrelevant questions",
    "Random career suggestions",
    "Outdated dashboards with static reports",
    "One-size-fits-all career lists",
  ];

  const experience = [
    "A guided, reflection-based journey",
    "A real sense of self + direction",
    "An engaging capsule-based interface",
    "Personalized AI-driven feedback",
  ];

  return (
    <section className="p-6 sm:p-12 lg:p-20 bg-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col items-center gap-10 text-center font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">
            Why CVP Lite Works
          </h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-4xl">
            Because you shouldn’t choose your career based on guesswork or
            generic quizzes.
          </p>
        </div>
        {/* Comparison Card */}
        <div className="grid grid-cols-2 rounded-xl shadow overflow-hidden max-w-3xl">
          {/* Avoid column */}
          <div className="flex flex-col border border-gray-100 rounded-l-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gray-100 px-6 py-4">
              <h3 className="font-red-rose text-lg">You’ll Avoid...</h3>
            </div>
            {/* Rows */}
            {avoid.map((item, i) => (
              <div
                key={i}
                className={`bg-white px-6 py-4 text-left 
      ${i !== avoid.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                {item}
              </div>
            ))}
          </div>
          {/* Experience column */}
          <div className="flex flex-col border border-brand-primary rounded-r-xl overflow-hidden">
            {/* Header */}
            <div className="bg-brand-primary px-6 py-4">
              <h3 className="font-red-rose text-lg text-white">
                You’ll Experience...
              </h3>
            </div>
            {/* Rows */}
            {experience.map((item, i) => (
              <div
                key={i}
                className={`bg-brand-bg px-6 py-4 flex items-start gap-2 text-left text-gray-700 
      ${i !== experience.length - 1 ? "border-b border-brand-primary/40" : ""}`}
              >
                <CheckSquare size={18} className="text-brand-primary mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/start"
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
        >
          <Zap size={18} /> Try the CVP Lite™
        </Link>
      </div>
    </section>
  );
}
