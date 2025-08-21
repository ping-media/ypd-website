"use client";

import { Zap } from "lucide-react";
import Link from "next/link";

const Possibilities = () => {
  return (
    <section className="w-full flex justify-center bg-emerald-50 p-4 sm:p-10 lg:p-20 font-lato">
      <div className="max-w-6xl w-full flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-red-rose leading-snug">
          Unlock Endless Possibilities with YPD
        </h2>

        {/* Subheading */}
        <p className="text-brand-gray max-w-3xl text-sm sm:text-base leading-relaxed">
          Where career clarity meets personalization powered by logic, language,
          and lived experience.
        </p>

        {/* Description Block */}
        <div className="leading-relaxed max-w-4xl text-sm sm:text-base space-y-4 text-gray-700">
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
            Mentor Guides, Youth Pulse Digital™ ensures where every other EdTech
            leaves you, we begin — precisely when maximum support, motivation,
            and hand-holding are needed for launching your career.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:mt-6 w-full sm:w-auto justify-center">
          <Link
            href="/vision"
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary border border-brand-accent hover:bg-brand-primary/90 text-white px-3 sm:px-8 py-3 sm:py-4 font-medium shadow-sm transition-colors"
          >
            <Zap size={18} /> Launch Career Vision Program
          </Link>
          <Link
            href="/readiness"
            className="flex items-center justify-center gap-2 rounded-xl border border-black bg-white hover:bg-black/10 px-3 sm:px-8 py-3 sm:py-4 font-medium transition-colors"
          >
            <Zap size={18} /> Career Readiness Analyst
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
