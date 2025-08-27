"use client";

import Image from "next/image";
import Link from "next/link";

const Vision = () => {
  return (
    <section className="w-full flex justify-center p-4 sm:p-10 lg:px-20 lg:py-16">
      {/* Outer Wrapper (max 1440px) */}
      <div className="w-full max-w-[1440px] flex justify-center">
        {/* Inner Wrapper (max 800px) */}
        <div className="relative w-full max-w-[800px] flex flex-col items-center">
          {/* Background Image */}
          <Image
            src="/about/vision.png"
            alt="Vision Background"
            width={800}
            height={400}
            className="w-full object-contain pointer-events-none select-none"
            priority
          />

          {/* --- Mobile content (below sm) --- */}
          <div className="flex flex-col items-center gap-4 mt-4 text-center sm:hidden">
            <p className="font-semibold text-xs text-brand-primary">
              Youth Pulse Digital™
            </p>
            <h2 className="text-lg font-red-rose leading-snug">
              Empowering Youth Through <br />
              Purposeful, Personalized Journeys
            </h2>
            <Link
              href="#"
              className="bg-brand-primary text-white px-5 py-2 rounded-md shadow-md text-sm"
            >
              Explore YPD&apos;s Vision
            </Link>
          </div>

          {/* --- Overlay content (sm and above) --- */}
          <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-center flex-col items-center gap-4 sm:gap-6 max-w-xl w-full">
            <div className="px-2">
              <p className="font-semibold text-sm text-brand-primary">
                Youth Pulse Digital™
              </p>
              <h2 className="text-2xl md:text-3xl font-red-rose leading-snug">
                Empowering Youth Through <br />
                Purposeful, Personalized Journeys
              </h2>
            </div>
            <Link
              href="#"
              className="bg-brand-primary hover:bg-brand-primary/90 border border-brand-accent text-white text-sm sm:text-base lg:text-lg py-3 px-4 sm:py-3.5 sm:px-5 rounded-md shadow-md"
            >
              Explore YPD&apos;s Vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
