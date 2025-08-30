import { Zap } from "lucide-react";
import Link from "next/link";

const Possibilities = () => {
  return (
    <section className="font-lato flex w-full justify-center bg-emerald-50 p-4 sm:p-10 lg:p-20">
      <div className="flex w-full max-w-6xl flex-col items-center gap-6 text-center sm:gap-8">
        {/* Heading */}
        <h2 className="font-red-rose text-2xl leading-snug sm:text-3xl lg:text-4xl">
          Unlock Endless Possibilities with YPD
        </h2>

        {/* Subheading */}
        <p className="text-brand-gray max-w-3xl text-sm leading-relaxed sm:text-base">
          Where career clarity meets personalization powered by logic, language,
          and lived experience.
        </p>

        {/* Description Block */}
        <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
          <p>
            With the power of the{" "}
            <span className="font-semibold">YPD Framework™</span>, our
            proprietary Logic Models, and Large Language Models like OpenAI,
            personalization becomes truly limitless. Choosing a Career Pathway
            with YPD isn&apos;t just a choice — it’s a Vision you can foresee
            and act on with clarity and direction.
          </p>
          <p>
            Through adaptive learning flows, continuous feedback loops, and AI
            Mentor Guides, Youth Pulse Digital™ ensures where every other
            EdTech leaves you, we begin — precisely when maximum support,
            motivation, and hand-holding are needed for launching your career.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col justify-center gap-4 sm:mt-6 sm:w-auto sm:flex-row">
          <Link href="/vision" className="btn-size btn-primary shadow-sm">
            <Zap /> Launch Career Vision Program
          </Link>
          <Link
            href="/readiness"
            className="btn-size border-black bg-white hover:bg-black/10"
          >
            <Zap size={18} /> Career Readiness Analyst
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
