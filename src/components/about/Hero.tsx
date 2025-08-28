"use client";

import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center bg-gradient-to-t from-green-50 to-white p-4 sm:p-10 lg:px-20 lg:py-10">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-14">
        {/* Heading */}
        <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4">
          <h2 className="font-red-rose text-center text-2xl leading-snug sm:text-3xl lg:text-[42px]">
            About Youth Pulse Digital™
          </h2>
          <p className="text-brand-gray text-center text-base sm:text-lg lg:text-xl">
            Born from an idea in 2023, Youth Pulse Digital™ (YPD) is India’s
            first truly integrated AI-Human career ecosystem — designed to
            empower students, parents, professionals, and institutions with
            real-time, adaptive Journeys.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] w-full max-w-7xl overflow-hidden rounded-3xl shadow-md sm:h-[360px] lg:h-[420px]">
          <Image
            src="/about/hero.png"
            alt="Youth Pulse Digital"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Supporting Text */}
        <p className="text-brand-gray text-center text-base sm:text-lg lg:text-xl">
          YPD brings together psychometrics, behavioral science, cognitive
          diagnostics, skill mapping, employability needs, professional skills,
          critical thinking, problem solving, innovative mindset and AI led
          personalized mentoring into a personalized self-serve journey that
          transforms potential into purposeful action.
        </p>

        {/* CTA Button */}
        <Link
          href={"/#"}
          className="text-brand-fg bg-brand-primary hover:bg-brand-primary/90 border-brand-accent flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm sm:w-auto sm:px-5 sm:py-3.5 sm:text-base lg:text-lg"
        >
          <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
          Try the CVP Demo
        </Link>
      </div>
    </section>
  );
}
