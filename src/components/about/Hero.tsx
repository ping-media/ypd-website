"use client";

import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="p-4 sm:p-10 lg:px-20 lg:py-10  bg-gradient-to-t from-green-50 to-white flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 w-full">
          <h2 className="font-red-rose text-2xl sm:text-3xl lg:text-[42px] leading-snug text-center">
            About Youth Pulse Digital™
          </h2>
          <p className="text-brand-gray text-base sm:text-lg lg:text-xl text-center">
            Born from an idea in 2023, Youth Pulse Digital™ (YPD) is India’s
            first truly integrated AI-Human career ecosystem — designed to
            empower students, parents, professionals, and institutions with
            real-time, adaptive Journeys.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-7xl h-[280px] sm:h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/about/hero.png"
            alt="Youth Pulse Digital"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Supporting Text */}
        <p className="text-brand-gray text-base sm:text-lg lg:text-xl text-center">
          YPD brings together psychometrics, behavioral science, cognitive
          diagnostics, skill mapping, employability needs, professional skills,
          critical thinking, problem solving, innovative mindset and AI led
          personalized mentoring into a personalized self-serve journey that
          transforms potential into purposeful action.
        </p>

        {/* CTA Button */}
        <Link
          href={"/#"}
          className="flex justify-center items-center gap-2 rounded-lg text-brand-fg bg-brand-primary border hover:bg-brand-primary/90 border-brand-accent py-3 px-4 sm:py-3.5 sm:px-5 w-full sm:w-auto"
        >
          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          Try the CVP Demo
        </Link>
      </div>
    </section>
  );
}
